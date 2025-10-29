/** Search param keys that can be passed to the widget for configuration */
export enum SwapWidgetSearchParamKey {
  /** When set to `true`, the widget will always try to
   * communicate with the parent app to get the txns signed */
  USE_PARENT_SIGNER = "useParentSigner",

  /** Should be passed if `useParentSigner` is `true`, (otherwise it will be ignored)
   * the widget will use this address as the signer of the txns */
  ACCOUNT_ADDRESS = "accountAddress",

  /** The preferred Algorand network that will be used by the widget */
  NETWORK = "network",

  /** The preferred theme of the widget */
  THEME = "theme",

  /** ID of the asset to be used as the input asset for the swap, default = ALGO */
  ASSET_IN = "assetIn",

  /** ID of the asset to be used as the output asset for the swap, default = USDC */
  ASSET_OUT = "assetOut",

  /** Background color of the widget, default = #FFFFFF */
  IFRAME_BACKGROUND = "iframeBg"
}

export type WidgetAppTheme = "light" | "dark"

export type WidgetNetwork = "mainnet" | "testnet"

export interface WidgetConfig {
  /** The preferred Algorand network that will be used by the widget */
  network?: WidgetNetwork;
  
  /** The preferred theme of the widget */
  theme?: WidgetAppTheme;
  
  /** ID of the asset to be used as the input asset for the swap, default = ALGO */
  assetIn?: string | number;
  
  /** ID of the asset to be used as the output asset for the swap, default = USDC */
  assetOut?: string | number;
  
  /** Background color of the widget, default = #FFFFFF */
  iframeBg?: string;
  
  /** When set to `true`, the widget will always try to
   * communicate with the parent app to get the txns signed */
  useParentSigner?: boolean;
  
  /** Should be passed if `useParentSigner` is `true`, (otherwise it will be ignored)
   * the widget will use this address as the signer of the txns */
  accountAddress?: string;
}

export interface WidgetThemeColorVariables {
  theme: WidgetAppTheme | null;
  iframeBg: string | null;
}

export type WidgetThemeVariables = WidgetThemeColorVariables;

// Swap API Types
export type SwapProvider = "tinyman" | "tinyman-swap-router" | "vestige-v4"

export type SwapType = "fixed-input" | "fixed-output"

export type VerificationTier = "verified" | "unverified" | "suspicious"

export interface Asset {
  asset_id: number
  name: string
  logo: string
  unit_name: string
  fraction_decimals: number
  usd_value: string | null
  is_verified: boolean
  verification_tier: VerificationTier
  type: "standard_asset" | "collectible" | "dapp_asset"
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
  amount_in_usd_value: null | string
  amount_out: string
  amount_out_with_slippage: string
  amount_out_usd_value: null | string
  slippage: string
  price: string
  price_impact: string
  pera_fee_amount: string
  exchange_fee_amount: string
}

export interface CreateQuoteBody {
  providers: SwapProvider[]
  swapper_address: string
  swap_type: SwapType
  asset_in_id: number
  asset_out_id: number
  amount: string
  slippage: string
}

export interface SwapTransactionGroup {
  purpose: "opt-in" | "swap" | "fee"
  transaction_group_id: string
  transactions: string[]
  signed_transactions: string[]
}

export interface PrepareTransactionsResponse {
  swap_id: number;
  swap_version: string;
  transaction_groups: SwapTransactionGroup[]
}

export interface UpdateSwapStatusBody {
  status: "failed" | "in_progress";
  submitted_transaction_ids?: string[];
  reason?: "other" | "user_cancelled" | "invalid_submission" | "blockchain_error";
  platform?: string;
  swap_version?: "v1" | "v2";
}

export interface GetAssetsResponse {
  next: string | null
  previous: string | null
  results: Asset[]
}

// Message types for iframe communication
export interface TxnSignRequestMessage {
  message: {
    type: 'TXN_SIGN_REQUEST'
    txGroups: Uint8Array[][]
  }
}

export interface TxnSignResponseMessage {
  message: {
    type: 'TXN_SIGN_RESPONSE'
    signedTxns: Uint8Array[]
  }
}

export interface FailedTxnSignMessage {
  message: {
    type: 'FAILED_TXN_SIGN'
    error: Error
  }
}

export interface TxnSignRequestTimeoutMessage {
  message: {
    type: 'TXN_SIGN_REQUEST_TIMEOUT'
  }
}

export interface SwapSuccessMessage {
  message: {
    type: 'SWAP_SUCCESS'
    data: Uint8Array[]
  }
}

export type WidgetMessage = 
  | TxnSignRequestMessage
  | TxnSignResponseMessage
  | FailedTxnSignMessage
  | TxnSignRequestTimeoutMessage
  | SwapSuccessMessage 