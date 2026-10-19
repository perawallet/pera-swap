import type { Asset, SwapProvider, SwapQuote } from '../../../src'
import { USDC_ID } from './chain'

export const ALGO: Asset = {
    asset_id: 0,
    name: 'Algorand',
    logo: 'https://assets.perawallet.app/algo.png',
    unit_name: 'ALGO',
    fraction_decimals: 6,
    usd_value: '0.172345',
    is_verified: true,
    verification_tier: 'verified',
    type: 'standard_asset',
}

export const USDC: Asset = {
    asset_id: USDC_ID,
    name: 'USDC',
    logo: 'https://assets.perawallet.app/usdc.png',
    unit_name: 'USDC',
    fraction_decimals: 6,
    usd_value: '1.000000',
    is_verified: true,
    verification_tier: 'verified',
    type: 'standard_asset',
}

export function makeQuote(
    provider: SwapProvider,
    overrides: Partial<SwapQuote> = {},
): SwapQuote {
    return {
        id: 1,
        quote_id_str: `quote-${provider}`,
        provider,
        swap_type: 'fixed-input',
        swapper_address: 'SWAPPER',
        asset_in: ALGO,
        asset_out: USDC,
        amount_in: '1000000',
        amount_in_with_slippage: '1000000',
        amount_in_usd_value: '0.172345',
        amount_out: '172345',
        amount_out_with_slippage: '171483',
        amount_out_usd_value: '0.172345',
        slippage: '0.005',
        price: '0.172345',
        price_impact: '0.0001',
        pera_fee_amount: '1000',
        exchange_fee_amount: '517',
        ...overrides,
    }
}
