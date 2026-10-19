import { describe, expect, it } from 'vitest'
import * as sdk from '../index'

// Guards the public surface: removing or renaming an export is a breaking change.
describe('public API', () => {
    it('exposes the expected runtime exports', () => {
        expect(Object.keys(sdk).sort()).toEqual([
            'PERA_SWAP_WIDGET_ORIGIN',
            'PERA_SWAP_WIDGET_URL',
            'PeraSwap',
            'PeraSwapApiError',
            'SwapWidgetSearchParamKey',
            'WidgetController',
            'WidgetMessageType',
            'createWidgetIframe',
            'generateWidgetUrl',
        ])
    })

    it('keeps the widget search param keys stable', () => {
        expect({ ...sdk.SwapWidgetSearchParamKey }).toEqual({
            USE_PARENT_SIGNER: 'useParentSigner',
            ACCOUNT_ADDRESS: 'accountAddress',
            NETWORK: 'network',
            THEME: 'theme',
            ASSET_IN: 'assetIn',
            ASSET_OUT: 'assetOut',
            IFRAME_BACKGROUND: 'iframeBg',
        })
    })

    it('points at the production widget', () => {
        expect(sdk.PERA_SWAP_WIDGET_URL).toBe(
            'https://swap-widget.perawallet.app',
        )
        expect(sdk.PERA_SWAP_WIDGET_ORIGIN).toBe(
            'https://swap-widget.perawallet.app',
        )
    })
})
