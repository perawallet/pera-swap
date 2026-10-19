// ---------------------------------------------------------------------------
// Shared
// ---------------------------------------------------------------------------

/** Algorand network supported by the Pera Swap API and widget. */
export type Network = 'mainnet' | 'testnet'

// ---------------------------------------------------------------------------
// Widget
// ---------------------------------------------------------------------------

/** Search param keys that can be passed to the widget for configuration */
export enum SwapWidgetSearchParamKey {
    /** When set to `true`, the widget will always try to
     * communicate with the parent app to get the txns signed */
    USE_PARENT_SIGNER = 'useParentSigner',

    /** Should be passed if `useParentSigner` is `true`, (otherwise it will be ignored)
     * the widget will use this address as the signer of the txns */
    ACCOUNT_ADDRESS = 'accountAddress',

    /** The preferred Algorand network that will be used by the widget */
    NETWORK = 'network',

    /** The preferred theme of the widget */
    THEME = 'theme',

    /** ID of the asset to be used as the input asset for the swap, default = ALGO */
    ASSET_IN = 'assetIn',

    /** ID of the asset to be used as the output asset for the swap, default = USDC */
    ASSET_OUT = 'assetOut',

    /** Background color of the widget, default = #FFFFFF */
    IFRAME_BACKGROUND = 'iframeBg',
}

export type WidgetAppTheme = 'light' | 'dark'

export type WidgetNetwork = Network

export interface WidgetConfig {
    /** The preferred Algorand network that will be used by the widget */
    network?: WidgetNetwork

    /** The preferred theme of the widget */
    theme?: WidgetAppTheme

    /** ID of the asset to be used as the input asset for the swap, default = ALGO */
    assetIn?: string | number

    /** ID of the asset to be used as the output asset for the swap, default = USDC */
    assetOut?: string | number

    /** Background color of the widget, default = #FFFFFF */
    iframeBg?: string

    /** When set to `true`, the widget will always try to
     * communicate with the parent app to get the txns signed */
    useParentSigner?: boolean

    /** Should be passed if `useParentSigner` is `true`, (otherwise it will be ignored)
     * the widget will use this address as the signer of the txns */
    accountAddress?: string
}

export interface WidgetIframeOptions {
    /** Defaults to `100%` */
    width?: string
    /** Defaults to `488px` */
    height?: string
    className?: string
    id?: string
    /** Accessible title for the iframe. Defaults to `Pera Swap` */
    title?: string
}

/** @deprecated Not used by the widget. Will be removed in the next major. */
export interface WidgetThemeColorVariables {
    theme: WidgetAppTheme | null
    iframeBg: string | null
}

/** @deprecated Not used by the widget. Will be removed in the next major. */
export type WidgetThemeVariables = WidgetThemeColorVariables

// ---------------------------------------------------------------------------
// Swap API
// ---------------------------------------------------------------------------

export type SwapProvider = 'tinyman' | 'tinyman-swap-router' | 'vestige-v4'

export type SwapType = 'fixed-input' | 'fixed-output'

export type VerificationTier = 'verified' | 'unverified' | 'suspicious'

export type AssetType = 'standard_asset' | 'collectible' | 'dapp_asset'

export interface Asset {
    asset_id: number
    name: string
    logo: string
    unit_name: string
    fraction_decimals: number
    usd_value: string | null
    is_verified: boolean
    verification_tier: VerificationTier
    type: AssetType
}

export interface SwapQuote {
    id: number
    quote_id_str: string
    provider: SwapProvider
    swap_type: SwapType
    swapper_address: string
    asset_in: Asset
    asset_out: Asset
    amount_in: string
    amount_in_with_slippage: string
    amount_in_usd_value: string | null
    amount_out: string
    amount_out_with_slippage: string
    amount_out_usd_value: string | null
    slippage: string
    price: string
    price_impact: string
    pera_fee_amount: string
    exchange_fee_amount: string
}

export interface CreateQuoteBody {
    /** Quotes are only returned for these providers. */
    providers: SwapProvider[]
    swapper_address: string
    swap_type: SwapType
    asset_in_id: number
    asset_out_id: number
    /** Amount in base units of the fixed asset (e.g. microAlgos). */
    amount: string
    /** Decimal fraction, e.g. `'0.005'` for 0.5%. */
    slippage: string
}

export interface CreateQuoteResponse {
    results: SwapQuote[]
}

export type SwapTransactionGroupPurpose = 'opt-in' | 'swap' | 'fee'

export interface SwapTransactionGroup {
    purpose: SwapTransactionGroupPurpose
    transaction_group_id: string
    /** Base64-encoded unsigned transactions. */
    transactions: string[]
    /**
     * Base64-encoded transactions that are already signed by Pera (e.g. logic
     * sig transactions). Slots that must be signed by the user are `null`.
     */
    signed_transactions: (string | null)[]
}

export interface PrepareTransactionsResponse {
    swap_id: number
    swap_version: string
    transaction_groups: SwapTransactionGroup[]
}

export type SwapStatus = 'failed' | 'in_progress'

export type SwapFailureReason =
    | 'other'
    | 'user_cancelled'
    | 'invalid_submission'
    | 'blockchain_error'

export interface UpdateSwapStatusBody {
    status: SwapStatus
    submitted_transaction_ids?: string[]
    reason?: SwapFailureReason
    /** @deprecated Always overridden by the SDK. */
    platform?: string
    /** @deprecated Always overridden by the SDK. */
    swap_version?: 'v1' | 'v2'
}

export interface GetAvailableAssetsParams {
    asset_in_id: number
    q?: string
}

export interface GetAssetsParams {
    asset_ids?: string[]
    q?: string
}

export interface AssetListResponse {
    results: Asset[]
}

export interface GetAssetsResponse extends AssetListResponse {
    next: string | null
    previous: string | null
}

export interface AlgoPriceResponse {
    exchange_price: string
}
