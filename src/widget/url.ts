import {
    DEFAULT_IFRAME_HEIGHT,
    DEFAULT_IFRAME_TITLE,
    DEFAULT_IFRAME_WIDTH,
    PERA_SWAP_WIDGET_URL,
} from '../constants'
import {
    SwapWidgetSearchParamKey,
    type WidgetConfig,
    type WidgetIframeOptions,
} from '../types'

/** Build the URL to load the Pera Swap widget with the given configuration. */
export function generateWidgetUrl(config: WidgetConfig = {}): string {
    const url = new URL(PERA_SWAP_WIDGET_URL)
    const params = url.searchParams

    if (config.network) {
        params.set(SwapWidgetSearchParamKey.NETWORK, config.network)
    }
    if (config.theme) {
        params.set(SwapWidgetSearchParamKey.THEME, config.theme)
    }
    if (config.assetIn !== undefined) {
        params.set(SwapWidgetSearchParamKey.ASSET_IN, String(config.assetIn))
    }
    if (config.assetOut !== undefined) {
        params.set(SwapWidgetSearchParamKey.ASSET_OUT, String(config.assetOut))
    }
    if (config.iframeBg) {
        params.set(SwapWidgetSearchParamKey.IFRAME_BACKGROUND, config.iframeBg)
    }
    if (config.useParentSigner) {
        params.set(SwapWidgetSearchParamKey.USE_PARENT_SIGNER, 'true')

        // The widget ignores the address unless it signs through the parent.
        if (config.accountAddress) {
            params.set(
                SwapWidgetSearchParamKey.ACCOUNT_ADDRESS,
                config.accountAddress,
            )
        }
    }

    return url.toString()
}

/** Create (but don't attach) an iframe element that loads the widget. */
export function createWidgetIframe(
    config: WidgetConfig = {},
    options: WidgetIframeOptions = {},
): HTMLIFrameElement {
    const iframe = document.createElement('iframe')

    iframe.src = generateWidgetUrl(config)
    iframe.width = options.width ?? DEFAULT_IFRAME_WIDTH
    iframe.height = options.height ?? DEFAULT_IFRAME_HEIGHT
    iframe.title = options.title ?? DEFAULT_IFRAME_TITLE

    if (options.className) {
        iframe.className = options.className
    }
    if (options.id) {
        iframe.id = options.id
    }

    return iframe
}
