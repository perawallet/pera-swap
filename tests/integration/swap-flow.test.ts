import {
    base64ToBytes,
    bytesToBase64,
    decodeSignedTransaction,
    decodeUnsignedTransaction,
} from 'algosdk'
import { delay, http, HttpResponse } from 'msw'
import { describe, expect, it } from 'vitest'
import { PeraSwap, PeraSwapApiError, type CreateQuoteBody } from '../../src'
import { ALGO, makeQuote, USDC } from './fixtures/api'
import { buildSwapScenario, USDC_ID } from './fixtures/chain'
import { MAINNET_API, server, TESTNET_API } from './server'

const REFERRER = 'https://dapp.example'

function quoteBody(swapper: string): CreateQuoteBody {
    return {
        providers: ['tinyman', 'vestige-v4'],
        swapper_address: swapper,
        swap_type: 'fixed-input',
        asset_in_id: 0,
        asset_out_id: USDC_ID,
        amount: '1000000',
        slippage: '0.005',
    }
}

describe('swap flow against the Pera API', () => {
    it('quotes, prepares, signs and reports a swap end to end', async () => {
        const scenario = buildSwapScenario()
        const swapper = scenario.user.addr.toString()
        const requests: { method: string; path: string; body: unknown }[] = []

        server.use(
            http.post(
                `${MAINNET_API}/v2/dex-swap/quotes/`,
                async ({ request }) => {
                    const body = await request.json()
                    requests.push({ method: 'POST', path: 'quotes', body })
                    return HttpResponse.json({
                        results: [
                            makeQuote('tinyman', { swapper_address: swapper }),
                            // Not requested; the SDK must drop it.
                            makeQuote('tinyman-swap-router'),
                            makeQuote('vestige-v4', {
                                amount_out: '172001',
                                swapper_address: swapper,
                            }),
                        ],
                    })
                },
            ),
            http.post(
                `${MAINNET_API}/v2/dex-swap/prepare-transactions/`,
                async ({ request }) => {
                    const body = await request.json()
                    requests.push({ method: 'POST', path: 'prepare', body })
                    return HttpResponse.json(scenario.response)
                },
            ),
            http.patch(
                `${MAINNET_API}/v2/dex-swap/swaps/:swapId/`,
                async ({ request, params }) => {
                    const body = await request.json()
                    requests.push({
                        method: 'PATCH',
                        path: `swaps/${String(params.swapId)}`,
                        body,
                    })
                    return HttpResponse.json({
                        id: Number(params.swapId),
                        status: 'in_progress',
                    })
                },
            ),
        )

        const peraSwap = new PeraSwap({
            network: 'mainnet',
            referrerUrl: REFERRER,
        })

        // 1. Quote — only requested providers; the caller picks the best.
        const { results } = await peraSwap.createQuote(quoteBody(swapper))
        expect(results.map(q => q.provider)).toEqual(['tinyman', 'vestige-v4'])
        const best = [...results].sort(
            (a, b) => Number(b.amount_out) - Number(a.amount_out),
        )[0]!
        expect(best.provider).toBe('tinyman')

        // 2. Prepare transactions for the chosen quote.
        const prepared = await peraSwap.prepareTransactions(best.quote_id_str)
        expect(prepared.transaction_groups.map(g => g.purpose)).toEqual([
            'opt-in',
            'swap',
        ])

        // 3. Decode, check the groups are consistent, sign the user's slots and
        //    keep Pera's pre-signed escrow transaction.
        const submitted: Uint8Array[] = []
        const txIds: string[] = []
        for (const group of prepared.transaction_groups) {
            const txns = group.transactions.map(t =>
                decodeUnsignedTransaction(base64ToBytes(t)),
            )
            if (txns.length > 1) {
                const groupIds = txns.map(t => bytesToBase64(t.group!))
                expect(new Set(groupIds)).toEqual(
                    new Set([group.transaction_group_id]),
                )
            }

            txns.forEach((txn, i) => {
                const preSigned = group.signed_transactions[i]
                if (preSigned) {
                    const stxn = decodeSignedTransaction(
                        base64ToBytes(preSigned),
                    )
                    expect(stxn.txn.txID()).toBe(txn.txID())
                    expect(stxn.lsig).toBeDefined()
                    submitted.push(base64ToBytes(preSigned))
                } else {
                    expect(txn.sender.toString()).toBe(swapper)
                    submitted.push(txn.signTxn(scenario.user.sk))
                }
                txIds.push(txn.txID())
            })
        }
        expect(submitted).toHaveLength(4)

        // 4. Report submission.
        await peraSwap.updateSwapStatus(prepared.swap_id, {
            status: 'in_progress',
            submitted_transaction_ids: txIds,
        })

        expect(requests).toEqual([
            {
                method: 'POST',
                path: 'quotes',
                body: { ...quoteBody(swapper), referrer_url: REFERRER },
            },
            {
                method: 'POST',
                path: 'prepare',
                body: { quote: 'quote-tinyman' },
            },
            {
                method: 'PATCH',
                path: 'swaps/4242',
                body: {
                    status: 'in_progress',
                    submitted_transaction_ids: txIds,
                    platform: 'js-sdk',
                    swap_version: 'v2',
                },
            },
        ])
    })

    it('reports a cancelled swap', async () => {
        let received: unknown
        server.use(
            http.patch(
                `${MAINNET_API}/v2/dex-swap/swaps/7/`,
                async ({ request }) => {
                    received = await request.json()
                    return new HttpResponse(null, { status: 204 })
                },
            ),
        )

        await expect(
            new PeraSwap().updateSwapStatus('7', {
                status: 'failed',
                reason: 'user_cancelled',
            }),
        ).resolves.toBeUndefined()
        expect(received).toEqual({
            status: 'failed',
            reason: 'user_cancelled',
            platform: 'js-sdk',
            swap_version: 'v2',
        })
    })

    it('sends the deposit address when preparing transactions', async () => {
        let received: unknown
        server.use(
            http.post(
                `${MAINNET_API}/v2/dex-swap/prepare-transactions/`,
                async ({ request }) => {
                    received = await request.json()
                    return HttpResponse.json(buildSwapScenario().response)
                },
            ),
        )

        await new PeraSwap().prepareTransactions('q', 'DEPOSIT_ADDRESS')
        expect(received).toEqual({
            quote: 'q',
            deposit_address: 'DEPOSIT_ADDRESS',
        })
    })
})

describe('assets and prices', () => {
    it('looks up, searches and lists swappable assets', async () => {
        server.use(
            http.get(`${MAINNET_API}/v1/assets/`, ({ request }) => {
                const url = new URL(request.url)
                const ids = url.searchParams.get('asset_ids')
                const q = url.searchParams.get('q')
                const results = ids
                    ? [ALGO, USDC].filter(a =>
                          ids.split(',').includes(String(a.asset_id)),
                      )
                    : [ALGO, USDC].filter(a =>
                          a.name
                              .toLowerCase()
                              .includes((q ?? '').toLowerCase()),
                      )
                return HttpResponse.json({
                    next: null,
                    previous: null,
                    results,
                })
            }),
            http.get(
                `${MAINNET_API}/v1/dex-swap/available-assets/`,
                ({ request }) => {
                    const url = new URL(request.url)
                    expect(url.searchParams.get('asset_in_id')).toBe('0')
                    return HttpResponse.json({ results: [USDC] })
                },
            ),
            http.get(`${MAINNET_API}/v1/currencies/USD/`, () =>
                HttpResponse.json({ exchange_price: '0.172345' }),
            ),
        )
        const peraSwap = new PeraSwap()

        await expect(peraSwap.getAsset(USDC_ID)).resolves.toEqual(USDC)
        await expect(peraSwap.getAsset(999)).resolves.toBeNull()
        await expect(peraSwap.searchAssets('usd')).resolves.toEqual([USDC])
        await expect(
            peraSwap.getAssets({ asset_ids: ['0', String(USDC_ID)] }),
        ).resolves.toMatchObject({ results: [ALGO, USDC] })
        await expect(
            peraSwap.getAvailableAssets({ asset_in_id: 0 }),
        ).resolves.toEqual({ results: [USDC] })
        await expect(peraSwap.getAlgoPrice()).resolves.toEqual({
            exchange_price: '0.172345',
        })
    })

    it('targets the testnet API after switching networks', async () => {
        server.use(
            http.get(`${TESTNET_API}/v1/currencies/USD/`, () =>
                HttpResponse.json({ exchange_price: '1' }),
            ),
        )
        const peraSwap = new PeraSwap('mainnet')
        peraSwap.updateNetwork('testnet')

        await expect(peraSwap.getAlgoPrice()).resolves.toEqual({
            exchange_price: '1',
        })
    })
})

describe('failure modes', () => {
    it('surfaces validation errors as PeraSwapApiError', async () => {
        const body = { amount: ['Amount is below the minimum.'] }
        server.use(
            http.post(`${MAINNET_API}/v2/dex-swap/quotes/`, () =>
                HttpResponse.json(body, { status: 400 }),
            ),
        )

        const error = await new PeraSwap()
            .createQuote(quoteBody('ADDR'))
            .catch((e: unknown) => e)

        expect(error).toBeInstanceOf(PeraSwapApiError)
        expect(error).toMatchObject({
            status: 400,
            body,
            url: `${MAINNET_API}/v2/dex-swap/quotes/`,
        })
        // Older integrations parse the message.
        expect(JSON.parse((error as Error).message)).toEqual(body)
    })

    it('keeps non-JSON error pages readable', async () => {
        server.use(
            http.post(`${MAINNET_API}/v2/dex-swap/prepare-transactions/`, () =>
                HttpResponse.text('<h1>502 Bad Gateway</h1>', { status: 502 }),
            ),
        )

        await expect(
            new PeraSwap().prepareTransactions('q'),
        ).rejects.toMatchObject({
            status: 502,
            body: '<h1>502 Bad Gateway</h1>',
        })
    })

    it('rejects on network errors, but asset helpers fall back', async () => {
        server.use(
            http.get(`${MAINNET_API}/v1/currencies/USD/`, () =>
                HttpResponse.error(),
            ),
            http.get(`${MAINNET_API}/v1/assets/`, () => HttpResponse.error()),
        )
        const peraSwap = new PeraSwap()

        await expect(peraSwap.getAlgoPrice()).rejects.toThrow(TypeError)
        await expect(peraSwap.getAsset(USDC_ID)).resolves.toBeNull()
        await expect(peraSwap.searchAssets('usdc')).resolves.toEqual([])
    })

    it('aborts an in-flight quote request', async () => {
        server.use(
            http.post(`${MAINNET_API}/v2/dex-swap/quotes/`, async () => {
                await delay('infinite')
                return HttpResponse.json({ results: [] })
            }),
        )
        const controller = new AbortController()

        const pending = new PeraSwap().createQuote(
            quoteBody('ADDR'),
            controller.signal,
        )
        controller.abort()

        await expect(pending).rejects.toMatchObject({ name: 'AbortError' })
    })
})
