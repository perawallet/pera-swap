// @vitest-environment jsdom
import {
    encodeUnsignedTransaction,
    makePaymentTxnWithSuggestedParamsFromObject,
    type Transaction,
} from 'algosdk'
import { afterEach, describe, expect, it, vi } from 'vitest'
import { PERA_SWAP_WIDGET_ORIGIN } from '../constants'
import { WidgetController } from '../controller'

const ADDRESS = 'AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAY5HFKQ'

function makeTxnBytes(amount: number): Uint8Array {
    const txn = makePaymentTxnWithSuggestedParamsFromObject({
        sender: ADDRESS,
        receiver: ADDRESS,
        amount,
        suggestedParams: {
            fee: 1000,
            flatFee: true,
            firstValid: 1,
            lastValid: 1000,
            genesisHash: new Uint8Array(32),
            genesisID: 'testnet-v1.0',
            minFee: 1000,
        },
    })
    return encodeUnsignedTransaction(txn)
}

function createSource(): { postMessage: ReturnType<typeof vi.fn> } {
    return { postMessage: vi.fn() }
}

function dispatch(
    data: unknown,
    {
        origin = PERA_SWAP_WIDGET_ORIGIN,
        source = createSource(),
    }: { origin?: string; source?: unknown } = {},
): void {
    const event = new MessageEvent('message', { data, origin })
    // jsdom only accepts real windows/ports for `source` in the constructor.
    Object.defineProperty(event, 'source', { value: source })
    window.dispatchEvent(event)
}

const flush = (): Promise<void> => new Promise(r => setTimeout(r, 0))

// What the widget posts after a swap (pera-swap-widget-web parentSignerService).
const SUCCESS = { signedTxns: [new Uint8Array([1])] }

const controllers: WidgetController[] = []
function listen(
    config: ConstructorParameters<typeof WidgetController>[0],
): WidgetController {
    const controller = new WidgetController(config)
    controller.addWidgetEventListeners()
    controllers.push(controller)
    return controller
}

afterEach(() => {
    controllers.splice(0).forEach(c => c.removeWidgetEventListeners())
})

describe('WidgetController', () => {
    describe('TXN_SIGN_REQUEST', () => {
        it('decodes the groups, signs them and replies to the widget', async () => {
            const signed = [new Uint8Array([1]), new Uint8Array([2])]
            const onTxnSignRequest = vi.fn().mockResolvedValue(signed)
            listen({ onTxnSignRequest })
            const source = createSource()

            dispatch(
                {
                    type: 'TXN_SIGN_REQUEST',
                    message: {
                        txGroups: [[makeTxnBytes(1)], [makeTxnBytes(2)]],
                    },
                },
                { source },
            )
            await flush()

            const { txGroups } = onTxnSignRequest.mock.calls[0]![0] as {
                txGroups: Transaction[][]
            }
            expect(txGroups.map(g => g.map(t => t.payment?.amount))).toEqual([
                [1n],
                [2n],
            ])
            expect(source.postMessage).toHaveBeenCalledWith(
                { message: { type: 'TXN_SIGN_RESPONSE', signedTxns: signed } },
                PERA_SWAP_WIDGET_ORIGIN,
            )
        })

        it('replies with FAILED_TXN_SIGN when signing rejects', async () => {
            class WalletError extends Error {
                override name = 'WalletError'
            }
            listen({
                onTxnSignRequest: () =>
                    Promise.reject(new WalletError('User rejected')),
            })
            const source = createSource()

            dispatch(
                {
                    type: 'TXN_SIGN_REQUEST',
                    message: { txGroups: [[makeTxnBytes(1)]] },
                },
                { source },
            )
            await flush()

            const [payload, origin] = source.postMessage.mock.calls[0]!
            expect(origin).toBe(PERA_SWAP_WIDGET_ORIGIN)
            expect(payload.message.type).toBe('FAILED_TXN_SIGN')
            expect(payload.message.error).toBeInstanceOf(Error)
            expect(payload.message.error).toMatchObject({
                name: 'WalletError',
                message: 'User rejected',
            })
            // A plain Error, so it survives structured cloning.
            expect(payload.message.error).not.toBeInstanceOf(WalletError)
        })

        it('replies with FAILED_TXN_SIGN for malformed groups', async () => {
            const onTxnSignRequest = vi.fn()
            listen({ onTxnSignRequest })
            const source = createSource()

            dispatch(
                { type: 'TXN_SIGN_REQUEST', message: { txGroups: ['nope'] } },
                { source },
            )
            await flush()

            expect(onTxnSignRequest).not.toHaveBeenCalled()
            expect(source.postMessage.mock.calls[0]![0].message).toMatchObject({
                type: 'FAILED_TXN_SIGN',
            })
        })

        it('leaves the request alone when no signer is configured', async () => {
            listen({})
            const source = createSource()

            dispatch(
                {
                    type: 'TXN_SIGN_REQUEST',
                    message: { txGroups: [[makeTxnBytes(1)]] },
                },
                { source },
            )
            await flush()

            expect(source.postMessage).not.toHaveBeenCalled()
        })
        it('replies with FAILED_TXN_SIGN for undecodable bytes', async () => {
            const onTxnSignRequest = vi.fn()
            listen({ onTxnSignRequest })
            const source = createSource()

            dispatch(
                {
                    type: 'TXN_SIGN_REQUEST',
                    message: { txGroups: [[new Uint8Array([0xff, 0x00])]] },
                },
                { source },
            )
            await flush()

            expect(onTxnSignRequest).not.toHaveBeenCalled()
            expect(source.postMessage.mock.calls[0]![0].message.type).toBe(
                'FAILED_TXN_SIGN',
            )
        })

        it('replies with FAILED_TXN_SIGN when txGroups is missing', async () => {
            listen({ onTxnSignRequest: vi.fn() })
            const source = createSource()

            dispatch(
                { type: 'TXN_SIGN_REQUEST', message: { foo: 1 } },
                { source },
            )
            await flush()

            expect(
                source.postMessage.mock.calls[0]![0].message.error.message,
            ).toBe('Invalid TXN_SIGN_REQUEST: malformed txGroups')
        })

        it('handles a signer that throws synchronously', async () => {
            listen({
                onTxnSignRequest: () => {
                    throw new Error('sync boom')
                },
            })
            const source = createSource()

            dispatch(
                {
                    type: 'TXN_SIGN_REQUEST',
                    message: { txGroups: [[makeTxnBytes(1)]] },
                },
                { source },
            )
            await flush()

            expect(source.postMessage.mock.calls[0]![0].message).toMatchObject({
                type: 'FAILED_TXN_SIGN',
                error: { message: 'sync boom' },
            })
        })

        it('wraps non-Error rejections', async () => {
            listen({
                onTxnSignRequest: () => Promise.reject('CONNECT_MODAL_CLOSED'),
            })
            const source = createSource()

            dispatch(
                {
                    type: 'TXN_SIGN_REQUEST',
                    message: { txGroups: [[makeTxnBytes(1)]] },
                },
                { source },
            )
            await flush()

            const { error } = source.postMessage.mock.calls[0]![0].message
            expect(error).toBeInstanceOf(Error)
            expect(error).toMatchObject({
                name: 'Error',
                message: 'CONNECT_MODAL_CLOSED',
            })
        })

        it('does not throw when the request has no source window', async () => {
            const onTxnSignRequest = vi.fn().mockResolvedValue([])
            listen({ onTxnSignRequest })

            dispatch(
                {
                    type: 'TXN_SIGN_REQUEST',
                    message: { txGroups: [[makeTxnBytes(1)]] },
                },
                { source: null },
            )
            await flush()

            expect(onTxnSignRequest).toHaveBeenCalledOnce()
        })

        it('replies to the custom origin the request came from', async () => {
            const origin = 'http://localhost:5173'
            listen({
                allowedOrigins: [origin],
                onTxnSignRequest: vi.fn().mockResolvedValue([]),
            })
            const source = createSource()

            dispatch(
                {
                    type: 'TXN_SIGN_REQUEST',
                    message: { txGroups: [[makeTxnBytes(1)]] },
                },
                { origin, source },
            )
            await flush()

            expect(source.postMessage.mock.calls[0]![1]).toBe(origin)
        })

        it('passes every transaction of every group in order', async () => {
            const onTxnSignRequest = vi.fn().mockResolvedValue([])
            listen({ onTxnSignRequest })

            dispatch({
                type: 'TXN_SIGN_REQUEST',
                message: {
                    txGroups: [
                        [makeTxnBytes(1), makeTxnBytes(2)],
                        [makeTxnBytes(3)],
                    ],
                },
            })
            await flush()

            const { txGroups } = onTxnSignRequest.mock.calls[0]![0] as {
                txGroups: Transaction[][]
            }
            expect(txGroups.map(g => g.map(t => t.payment?.amount))).toEqual([
                [1n, 2n],
                [3n],
            ])
        })
    })

    it('can be re-attached after being removed', () => {
        const onSwapSuccess = vi.fn()
        const controller = listen({ onSwapSuccess })

        controller.removeWidgetEventListeners()
        controller.addWidgetEventListeners()
        dispatch({ type: 'SWAP_SUCCESS', message: SUCCESS })

        expect(onSwapSuccess).toHaveBeenCalledOnce()
    })

    it('keeps instances independent', () => {
        const a = vi.fn()
        const b = vi.fn()
        listen({ onSwapSuccess: a })
        const second = listen({ onSwapSuccess: b })

        second.removeWidgetEventListeners()
        dispatch({ type: 'SWAP_SUCCESS', message: SUCCESS })

        expect(a).toHaveBeenCalledOnce()
        expect(b).not.toHaveBeenCalled()
    })

    it('forwards TXN_SIGN_REQUEST_TIMEOUT and SWAP_SUCCESS', () => {
        const onTxnSignRequestTimeout = vi.fn()
        const onSwapSuccess = vi.fn()
        listen({ onTxnSignRequestTimeout, onSwapSuccess })

        dispatch({ type: 'TXN_SIGN_REQUEST_TIMEOUT', message: {} })
        dispatch({ type: 'SWAP_SUCCESS', message: SUCCESS })

        expect(onTxnSignRequestTimeout).toHaveBeenCalledOnce()
        expect(onSwapSuccess).toHaveBeenCalledWith(SUCCESS)
    })

    it('ignores messages from other origins', () => {
        const onSwapSuccess = vi.fn()
        listen({ onSwapSuccess })

        dispatch(
            { type: 'SWAP_SUCCESS', message: SUCCESS },
            { origin: 'https://evil.example' },
        )

        expect(onSwapSuccess).not.toHaveBeenCalled()
    })

    it('ignores signing requests from other origins', async () => {
        const onTxnSignRequest = vi.fn().mockResolvedValue([])
        listen({ onTxnSignRequest })
        const source = createSource()

        dispatch(
            {
                type: 'TXN_SIGN_REQUEST',
                message: { txGroups: [[makeTxnBytes(1)]] },
            },
            { origin: 'https://evil.example', source },
        )
        await flush()

        expect(onTxnSignRequest).not.toHaveBeenCalled()
        expect(source.postMessage).not.toHaveBeenCalled()
    })

    it.each([
        ['null', 'expected an absolute https origin'],
        ['*', 'expected an absolute https origin'],
        ['swap-widget.perawallet.app', 'expected an absolute https origin'],
        [
            'http://swap-widget.perawallet.app',
            'expected an https origin (http only for localhost)',
        ],
        ...[
            'https://swap-widget.perawallet.app/widget',
            'https://swap-widget.perawallet.app/?a=1',
            'https://swap-widget.perawallet.app/#a',
            'https://user@swap-widget.perawallet.app',
        ].map(origin => [
            origin,
            'expected an origin with no path, query or fragment',
        ]),
    ])('rejects the untrusted allowed origin %j', (origin, reason) => {
        const create = () => new WidgetController({ allowedOrigins: [origin] })
        expect(create).toThrow(TypeError)
        expect(create).toThrow(
            `Invalid allowedOrigins entry "${origin}": ${reason}`,
        )
    })

    it('rejects an empty allowedOrigins list', () => {
        expect(() => new WidgetController({ allowedOrigins: [] })).toThrow(
            /allowedOrigins is empty/,
        )
    })

    it.each([
        'https://swap-widget.perawallet.app/',
        'HTTPS://Swap-Widget.PeraWallet.app',
    ])('normalises the allowed origin %j', origin => {
        const onSwapSuccess = vi.fn()
        listen({ onSwapSuccess, allowedOrigins: [origin] })

        dispatch({ type: 'SWAP_SUCCESS', message: SUCCESS })

        expect(onSwapSuccess).toHaveBeenCalledOnce()
    })

    describe('signing requests from origins that are not allowed', () => {
        afterEach(() => {
            vi.restoreAllMocks()
        })

        it('warns once so a misconfigured origin is visible', () => {
            const warn = vi.spyOn(console, 'warn').mockImplementation(() => {})
            listen({ onTxnSignRequest: vi.fn() })
            const request = {
                type: 'TXN_SIGN_REQUEST',
                message: { txGroups: [[makeTxnBytes(1)]] },
            }

            dispatch(request, {
                origin: 'https://swap-widget-staging.perawallet.app',
            })
            dispatch(request, { origin: 'https://evil.example' })

            expect(warn).toHaveBeenCalledOnce()
            expect(warn.mock.calls[0]![0]).toContain(
                'https://swap-widget-staging.perawallet.app, which is not in allowedOrigins (https://swap-widget.perawallet.app)',
            )
        })

        it('stays silent for other messages from other origins', () => {
            const warn = vi.spyOn(console, 'warn').mockImplementation(() => {})
            listen({ onTxnSignRequest: vi.fn() })

            dispatch(
                { type: 'SWAP_SUCCESS', message: SUCCESS },
                { origin: 'https://evil.example' },
            )
            dispatch('hello', { origin: 'https://evil.example' })

            expect(warn).not.toHaveBeenCalled()
        })
    })

    it('accepts custom allowed origins', () => {
        const onSwapSuccess = vi.fn()
        listen({ onSwapSuccess, allowedOrigins: ['http://localhost:5173'] })

        dispatch(
            { type: 'SWAP_SUCCESS', message: SUCCESS },
            { origin: 'http://localhost:5173' },
        )
        dispatch({ type: 'SWAP_SUCCESS', message: SUCCESS })

        expect(onSwapSuccess).toHaveBeenCalledOnce()
    })

    it('ignores malformed and unknown messages', () => {
        const onSwapSuccess = vi.fn()
        const onTxnSignRequestTimeout = vi.fn()
        listen({ onSwapSuccess, onTxnSignRequestTimeout })

        dispatch(null)
        dispatch('SWAP_SUCCESS')
        dispatch({ type: 'SWAP_SUCCESS' })
        dispatch({ type: 'SOMETHING_ELSE', message: {} })

        expect(onSwapSuccess).not.toHaveBeenCalled()
        expect(onTxnSignRequestTimeout).not.toHaveBeenCalled()
    })

    it('stops listening after removeWidgetEventListeners', () => {
        const onSwapSuccess = vi.fn()
        const controller = listen({ onSwapSuccess })

        controller.removeWidgetEventListeners()
        dispatch({ type: 'SWAP_SUCCESS', message: SUCCESS })

        expect(onSwapSuccess).not.toHaveBeenCalled()
    })

    it('registers the listener only once', () => {
        const onSwapSuccess = vi.fn()
        const controller = listen({ onSwapSuccess })
        controller.addWidgetEventListeners()

        dispatch({ type: 'SWAP_SUCCESS', message: SUCCESS })

        expect(onSwapSuccess).toHaveBeenCalledOnce()
    })

    describe('sendMessageToWidget', () => {
        it('posts to the widget origin by default', () => {
            const targetWindow = createSource()
            const data = { message: { type: 'PING' } }

            WidgetController.sendMessageToWidget({
                data,
                targetWindow: targetWindow as unknown as Window,
            })

            expect(targetWindow.postMessage).toHaveBeenCalledWith(
                data,
                PERA_SWAP_WIDGET_ORIGIN,
            )
        })

        it('does nothing without a target window', () => {
            expect(() =>
                WidgetController.sendMessageToWidget({
                    data: { message: { type: 'PING' } },
                    targetWindow: null,
                }),
            ).not.toThrow()
        })
    })
})
