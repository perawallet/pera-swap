// @vitest-environment jsdom
import { describe, expect, it } from 'vitest'
import { createWidgetIframe, generateWidgetUrl } from '../widget/url'
import { WidgetController } from '../controller'

describe('generateWidgetUrl', () => {
    it('defaults to mainnet, since the widget itself defaults to testnet', () => {
        expect(generateWidgetUrl()).toBe(
            'https://swap-widget.perawallet.app/?network=mainnet',
        )
    })

    it('loads another widget from widgetUrl', () => {
        expect(
            generateWidgetUrl({
                widgetUrl: 'https://swap-widget-staging.perawallet.app',
                network: 'testnet',
            }),
        ).toBe('https://swap-widget-staging.perawallet.app/?network=testnet')
    })

    it('encodes every option', () => {
        const url = new URL(
            generateWidgetUrl({
                network: 'testnet',
                theme: 'dark',
                assetIn: 0,
                assetOut: '31566704',
                iframeBg: '#000000',
                useParentSigner: true,
                accountAddress: 'ADDR',
            }),
        )

        expect(Object.fromEntries(url.searchParams)).toEqual({
            network: 'testnet',
            theme: 'dark',
            assetIn: '0',
            assetOut: '31566704',
            iframeBg: '#000000',
            useParentSigner: 'true',
            accountAddress: 'ADDR',
        })
    })

    it('ignores accountAddress unless useParentSigner is set', () => {
        const url = new URL(generateWidgetUrl({ accountAddress: 'ADDR' }))
        expect(url.searchParams.has('accountAddress')).toBe(false)
    })

    it('sets useParentSigner without an address when none is given', () => {
        const url = new URL(generateWidgetUrl({ useParentSigner: true }))
        expect(url.searchParams.get('useParentSigner')).toBe('true')
        expect(url.searchParams.has('accountAddress')).toBe(false)
    })

    it('omits falsy optional values but keeps asset id 0', () => {
        const url = new URL(
            generateWidgetUrl({
                assetIn: 0,
                iframeBg: '',
                useParentSigner: false,
            }),
        )
        expect(Object.fromEntries(url.searchParams)).toEqual({
            network: 'mainnet',
            assetIn: '0',
        })
    })

    it('is exposed as a WidgetController static for compatibility', () => {
        expect(WidgetController.generateWidgetUrl({ theme: 'light' })).toBe(
            generateWidgetUrl({ theme: 'light' }),
        )
    })
})

describe('createWidgetIframe', () => {
    it('applies defaults', () => {
        const iframe = WidgetController.createWidgetIframe()

        expect(iframe.src).toBe(
            'https://swap-widget.perawallet.app/?network=mainnet',
        )
        expect(iframe.width).toBe('100%')
        expect(iframe.height).toBe('488px')
        expect(iframe.title).toBe('Pera Swap')
        expect(iframe.id).toBe('')
        expect(iframe.className).toBe('')
    })

    it('applies options', () => {
        const iframe = createWidgetIframe(
            { theme: 'dark' },
            {
                width: '320px',
                height: '600px',
                className: 'swap',
                id: 'swap-widget',
                title: 'Swap',
            },
        )

        expect(iframe.src).toContain('theme=dark')
        expect(iframe).toMatchObject({
            width: '320px',
            height: '600px',
            className: 'swap',
            id: 'swap-widget',
            title: 'Swap',
        })
    })
})
