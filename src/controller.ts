import { decodeUnsignedTransaction, type Transaction } from 'algosdk'
import { PERA_SWAP_WIDGET_ORIGIN } from './constants'
import { toError } from './errors'
import type { WidgetConfig, WidgetIframeOptions } from './types'
import {
    isTxGroups,
    isWidgetEvent,
    WidgetMessageType,
    type FailedTxnSignMessage,
    type TxnSignResponseMessage,
} from './widget/messages'
import { createWidgetIframe, generateWidgetUrl } from './widget/url'

export interface WidgetControllerConfig {
    /**
     * Called when the widget (loaded with `useParentSigner: true`) needs
     * transactions signed. Resolve with the signed transactions in order, or
     * reject to tell the widget signing failed.
     */
    onTxnSignRequest?: (data: {
        txGroups: Transaction[][]
    }) => Promise<Uint8Array[]>
    onTxnSignRequestTimeout?: () => void
    onSwapSuccess?: (response: Uint8Array[]) => void
    /**
     * Origins the controller accepts messages from and replies to.
     * Defaults to the Pera Swap widget origin. Only change this if you host
     * the widget yourself.
     */
    allowedOrigins?: string[]
}

type OutgoingMessage =
    | TxnSignResponseMessage['message']
    | FailedTxnSignMessage['message']

interface SendMessageParams {
    data: { message: { type: string; [key: string]: unknown } }
    targetWindow?: Window | null
    /** Defaults to the Pera Swap widget origin. */
    targetOrigin?: string
}

/**
 * Bridges the Pera Swap widget iframe and the host page: forwards signing
 * requests to your wallet and widget events to your callbacks.
 *
 * @example
 * const controller = new WidgetController({ onTxnSignRequest: ({ txGroups }) => wallet.sign(txGroups) })
 * controller.addWidgetEventListeners()
 * // later
 * controller.removeWidgetEventListeners()
 */
export class WidgetController {
    private readonly config: WidgetControllerConfig
    private readonly allowedOrigins: ReadonlySet<string>
    private isListening = false

    constructor(config: WidgetControllerConfig = {}) {
        this.config = config
        this.allowedOrigins = new Set(
            config.allowedOrigins ?? [PERA_SWAP_WIDGET_ORIGIN],
        )
    }

    /** Generate a URL for the Pera Swap widget iframe. */
    static generateWidgetUrl(config: WidgetConfig = {}): string {
        return generateWidgetUrl(config)
    }

    /** Create (but don't attach) an iframe element that loads the widget. */
    static createWidgetIframe(
        config: WidgetConfig = {},
        options: WidgetIframeOptions = {},
    ): HTMLIFrameElement {
        return createWidgetIframe(config, options)
    }

    /** Post a message to the widget iframe's window. */
    static sendMessageToWidget({
        data,
        targetWindow,
        targetOrigin = PERA_SWAP_WIDGET_ORIGIN,
    }: SendMessageParams): void {
        targetWindow?.postMessage(data, targetOrigin)
    }

    /** Start listening for widget messages. Safe to call more than once. */
    addWidgetEventListeners(): void {
        if (this.isListening) {
            return
        }
        window.addEventListener('message', this.handleMessage)
        this.isListening = true
    }

    /** Stop listening for widget messages. */
    removeWidgetEventListeners(): void {
        window.removeEventListener('message', this.handleMessage)
        this.isListening = false
    }

    // Arrow function so the same reference is used to add and remove the listener.
    private readonly handleMessage = (event: MessageEvent): void => {
        if (!this.allowedOrigins.has(event.origin)) {
            return
        }

        const { data } = event
        if (!isWidgetEvent(data)) {
            return
        }

        switch (data.type) {
            case WidgetMessageType.TXN_SIGN_REQUEST: {
                void this.handleTxnSignRequest(data.message, event)
                break
            }
            case WidgetMessageType.TXN_SIGN_REQUEST_TIMEOUT: {
                this.config.onTxnSignRequestTimeout?.()
                break
            }
            case WidgetMessageType.SWAP_SUCCESS: {
                this.config.onSwapSuccess?.(data.message as Uint8Array[])
                break
            }
        }
    }

    private async handleTxnSignRequest(
        message: unknown,
        event: MessageEvent,
    ): Promise<void> {
        const { onTxnSignRequest } = this.config
        // Without a signer, leave the request for any other listener on the page.
        if (!onTxnSignRequest) {
            return
        }

        const reply = (outgoing: OutgoingMessage): void => {
            WidgetController.sendMessageToWidget({
                data: { message: outgoing },
                targetWindow: event.source as Window | null,
                targetOrigin: event.origin,
            })
        }

        try {
            const { txGroups } = message as { txGroups?: unknown }
            if (!isTxGroups(txGroups)) {
                throw new Error('Invalid TXN_SIGN_REQUEST: malformed txGroups')
            }

            const decodedTxGroups = txGroups.map(group =>
                group.map(bytes => decodeUnsignedTransaction(bytes)),
            )
            const signedTxns = await onTxnSignRequest({
                txGroups: decodedTxGroups,
            })

            reply({ type: WidgetMessageType.TXN_SIGN_RESPONSE, signedTxns })
        } catch (error) {
            // Wallet errors may carry uncloneable fields (functions etc.), which
            // would make postMessage throw. A plain Error always clones; browsers
            // keep its message, but only built-in names (custom ones become 'Error').
            const { name, message: errorMessage } = toError(error)
            const cloneable = new Error(errorMessage)
            cloneable.name = name
            reply({ type: WidgetMessageType.FAILED_TXN_SIGN, error: cloneable })
        }
    }
}
