import { beforeEach, describe, expect, it, vi, type Mock } from 'vitest'
import { PeraSwap } from '../swap'
import type { Asset, CreateQuoteBody, SwapQuote } from '../types'

const MAINNET = 'https://mainnet.api.perawallet.app'
const TESTNET = 'https://testnet.api.perawallet.app'

const asset = { asset_id: 31_566_704, name: 'USDC' } as Asset

const quoteBody: CreateQuoteBody = {
    providers: ['tinyman'],
    swapper_address: 'ADDR',
    swap_type: 'fixed-input',
    asset_in_id: 0,
    asset_out_id: 31_566_704,
    amount: '1000000',
    slippage: '0.005',
}

function jsonResponse(body: unknown, status = 200): Response {
    return new Response(JSON.stringify(body), { status })
}

function lastCall(fetch: Mock): { url: string; init: RequestInit } {
    const [url, init] = fetch.mock.lastCall as [string, RequestInit]
    return { url, init }
}

describe('PeraSwap', () => {
    let fetch: Mock

    beforeEach(() => {
        fetch = vi.fn().mockResolvedValue(jsonResponse({ results: [] }))
    })

    describe('constructor', () => {
        it('defaults to mainnet', () => {
            expect(new PeraSwap().getNetwork()).toBe('mainnet')
            expect(new PeraSwap({}).getNetwork()).toBe('mainnet')
        })

        it('accepts the legacy positional signature', async () => {
            vi.stubGlobal('fetch', fetch)
            const peraSwap = new PeraSwap('testnet', 'https://ref.example')

            await peraSwap.createQuote(quoteBody)

            const { url, init } = lastCall(fetch)
            expect(url).toBe(`${TESTNET}/v2/dex-swap/quotes/`)
            expect(JSON.parse(init.body as string)).toMatchObject({
                referrer_url: 'https://ref.example',
            })
        })
    })

    it('switches networks with updateNetwork', async () => {
        const peraSwap = new PeraSwap({ fetch })
        peraSwap.updateNetwork('testnet')

        await peraSwap.getAlgoPrice()

        expect(peraSwap.getNetwork()).toBe('testnet')
        expect(lastCall(fetch).url).toBe(`${TESTNET}/v1/currencies/USD/`)
    })

    describe('createQuote', () => {
        it('posts the quote body and filters out unrequested providers', async () => {
            const quotes = [
                { provider: 'tinyman' },
                { provider: 'vestige-v4' },
            ] as SwapQuote[]
            fetch.mockResolvedValue(jsonResponse({ results: quotes }))
            const { signal } = new AbortController()

            const result = await new PeraSwap({
                fetch,
                referrerUrl: 'https://ref.example',
            }).createQuote(quoteBody, signal)

            expect(result.results).toEqual([{ provider: 'tinyman' }])
            const { url, init } = lastCall(fetch)
            expect(url).toBe(`${MAINNET}/v2/dex-swap/quotes/`)
            expect(init.method).toBe('POST')
            expect(init.signal).toBe(signal)
            expect(JSON.parse(init.body as string)).toEqual({
                ...quoteBody,
                referrer_url: 'https://ref.example',
            })
        })

        it('returns every quote when no providers are given', async () => {
            const quotes = [{ provider: 'tinyman' }] as SwapQuote[]
            fetch.mockResolvedValue(jsonResponse({ results: quotes }))

            const result = await new PeraSwap({ fetch }).createQuote({
                ...quoteBody,
                providers: [],
            })

            expect(result.results).toEqual(quotes)
        })
    })

    it('updateSwapStatus patches the swap with SDK metadata', async () => {
        fetch.mockResolvedValue(jsonResponse({ id: 1 }))

        const result = await new PeraSwap({ fetch }).updateSwapStatus(42, {
            status: 'in_progress',
            submitted_transaction_ids: ['TX1'],
            platform: 'ignored',
        })

        expect(result).toEqual({ id: 1 })
        const { url, init } = lastCall(fetch)
        expect(url).toBe(`${MAINNET}/v2/dex-swap/swaps/42/`)
        expect(init.method).toBe('PATCH')
        expect(JSON.parse(init.body as string)).toEqual({
            status: 'in_progress',
            submitted_transaction_ids: ['TX1'],
            platform: 'js-sdk',
            swap_version: 'v2',
        })
    })

    it('prepareTransactions posts the quote and deposit address', async () => {
        await new PeraSwap({ fetch }).prepareTransactions('Q1', 'DEPOSIT')

        const { url, init } = lastCall(fetch)
        expect(url).toBe(`${MAINNET}/v2/dex-swap/prepare-transactions/`)
        expect(JSON.parse(init.body as string)).toEqual({
            quote: 'Q1',
            deposit_address: 'DEPOSIT',
        })
    })

    it('getAvailableAssets builds the query string', async () => {
        await new PeraSwap({ fetch }).getAvailableAssets({
            asset_in_id: 0,
            q: 'usd',
        })

        expect(lastCall(fetch).url).toBe(
            `${MAINNET}/v1/dex-swap/available-assets/?asset_in_id=0&q=usd`,
        )
    })

    it('getAssets joins asset ids', async () => {
        await new PeraSwap({ fetch }).getAssets({ asset_ids: ['1', '2'] })

        expect(lastCall(fetch).url).toBe(
            `${MAINNET}/v1/assets/?asset_ids=1%2C2`,
        )
    })

    describe('getAsset', () => {
        it('returns the first result', async () => {
            fetch.mockResolvedValue(jsonResponse({ results: [asset] }))
            await expect(
                new PeraSwap({ fetch }).getAsset(31_566_704),
            ).resolves.toEqual(asset)
        })

        it('returns null when nothing is found', async () => {
            await expect(
                new PeraSwap({ fetch }).getAsset(1),
            ).resolves.toBeNull()
        })

        it('returns null when the request fails', async () => {
            fetch.mockResolvedValue(jsonResponse({}, 500))
            await expect(
                new PeraSwap({ fetch }).getAsset(1),
            ).resolves.toBeNull()
        })
    })

    describe('searchAssets', () => {
        it('returns the results', async () => {
            fetch.mockResolvedValue(jsonResponse({ results: [asset] }))
            await expect(
                new PeraSwap({ fetch }).searchAssets('usdc'),
            ).resolves.toEqual([asset])
            expect(lastCall(fetch).url).toBe(`${MAINNET}/v1/assets/?q=usdc`)
        })

        it('returns an empty list when the request fails', async () => {
            fetch.mockRejectedValue(new Error('offline'))
            await expect(
                new PeraSwap({ fetch }).searchAssets('usdc'),
            ).resolves.toEqual([])
        })
    })
})
