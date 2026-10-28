/**
 * Contract tests against the real Pera API. They check that responses still
 * match the types this SDK publishes, so API drift shows up here before it
 * reaches integrators.
 *
 * Read-only and opt-in: `PERA_LIVE_API=1 pnpm test:live`. Runs weekly in CI
 * (.github/workflows/live-api.yml). Quote checks also need
 * PERA_LIVE_SWAPPER_ADDRESS (any funded mainnet account).
 */
import { describe, expect, it } from 'vitest'
import { PeraSwap, type Asset, type SwapQuote } from '../../src'

const LIVE = process.env.PERA_LIVE_API === '1'
const SWAPPER = process.env.PERA_LIVE_SWAPPER_ADDRESS
const USDC_ID = 31_566_704

const decimalString = expect.stringMatching(/^-?\d+(\.\d+)?$/)
const nullableDecimal = (value: unknown): boolean =>
    value === null ||
    (typeof value === 'string' && /^-?\d+(\.\d+)?$/.test(value))

function expectAsset(asset: Asset): void {
    expect(asset).toEqual(
        expect.objectContaining({
            asset_id: expect.any(Number),
            name: expect.any(String),
            unit_name: expect.any(String),
            fraction_decimals: expect.any(Number),
            is_verified: expect.any(Boolean),
        }),
    )
    expect(['verified', 'unverified', 'suspicious']).toContain(
        asset.verification_tier,
    )
    expect(nullableDecimal(asset.usd_value)).toBe(true)
}

function expectQuote(quote: SwapQuote): void {
    expect(quote).toEqual(
        expect.objectContaining({
            quote_id_str: expect.any(String),
            amount_in: decimalString,
            amount_out: decimalString,
            amount_out_with_slippage: decimalString,
            price_impact: decimalString,
            pera_fee_amount: decimalString,
        }),
    )
    expectAsset(quote.asset_in)
    expectAsset(quote.asset_out)
}

describe.skipIf(!LIVE)('Pera API contract (live)', () => {
    describe.each(['mainnet', 'testnet'] as const)('%s', network => {
        const peraSwap = new PeraSwap({ network })

        it('getAlgoPrice returns a decimal price', async () => {
            const { exchange_price } = await peraSwap.getAlgoPrice()
            expect(exchange_price).toEqual(decimalString)
        })

        it('getAssets returns paginated assets', async () => {
            const response = await peraSwap.getAssets({ asset_ids: ['0'] })
            expect(response).toHaveProperty('next')
            expect(response).toHaveProperty('previous')
            expect(Array.isArray(response.results)).toBe(true)
            response.results.forEach(expectAsset)
        })
    })

    describe('mainnet swap data', () => {
        const peraSwap = new PeraSwap({ network: 'mainnet' })

        it('finds USDC by id and by search', async () => {
            const usdc = await peraSwap.getAsset(USDC_ID)
            expect(usdc).not.toBeNull()
            expectAsset(usdc!)
            expect(usdc).toMatchObject({
                unit_name: 'USDC',
                fraction_decimals: 6,
            })

            const results = await peraSwap.searchAssets('USDC')
            expect(results.some(a => a.asset_id === USDC_ID)).toBe(true)
        })

        it('lists assets swappable from ALGO, including USDC', async () => {
            const { results } = await peraSwap.getAvailableAssets({
                asset_in_id: 0,
                q: 'USDC',
            })
            results.forEach(expectAsset)
            expect(results.some(a => a.asset_id === USDC_ID)).toBe(true)
        })

        it.skipIf(!SWAPPER)('quotes ALGO -> USDC', async () => {
            const { results } = await peraSwap.createQuote({
                providers: ['tinyman', 'vestige-v4'],
                swapper_address: SWAPPER!,
                swap_type: 'fixed-input',
                asset_in_id: 0,
                asset_out_id: USDC_ID,
                amount: '1000000',
                slippage: '0.005',
            })
            expect(results.length).toBeGreaterThan(0)
            results.forEach(expectQuote)
            results.forEach(q =>
                expect(['tinyman', 'vestige-v4']).toContain(q.provider),
            )
        })
    })
})
