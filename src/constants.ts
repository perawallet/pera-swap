import type { Network } from './types'

export const PERA_API_BASE_URLS: Readonly<Record<Network, string>> = {
    mainnet: 'https://mainnet.api.perawallet.app',
    testnet: 'https://testnet.api.perawallet.app',
}

export const PERA_SWAP_WIDGET_URL = 'https://swap-widget.perawallet.app'

/** Origin the widget iframe is served from. Messages from any other origin are ignored. */
export const PERA_SWAP_WIDGET_ORIGIN: string = new URL(PERA_SWAP_WIDGET_URL)
    .origin

export const DEFAULT_IFRAME_WIDTH = '100%'
export const DEFAULT_IFRAME_HEIGHT = '488px'
export const DEFAULT_IFRAME_TITLE = 'Pera Swap'

/** Reported to the Pera API so swaps made through the SDK can be told apart. */
export const SDK_PLATFORM = 'js-sdk'
export const SWAP_API_VERSION = 'v2'
