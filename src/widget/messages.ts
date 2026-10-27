/**
 * postMessage protocol between the host page and the widget iframe.
 *
 * Widget → host events arrive as `{ type, message }`.
 * Host → widget replies are sent as `{ message: { type, ... } }`.
 */

export const WidgetMessageType = {
    TXN_SIGN_REQUEST: 'TXN_SIGN_REQUEST',
    TXN_SIGN_RESPONSE: 'TXN_SIGN_RESPONSE',
    FAILED_TXN_SIGN: 'FAILED_TXN_SIGN',
    TXN_SIGN_REQUEST_TIMEOUT: 'TXN_SIGN_REQUEST_TIMEOUT',
    SWAP_SUCCESS: 'SWAP_SUCCESS',
} as const

export type WidgetMessageType =
    (typeof WidgetMessageType)[keyof typeof WidgetMessageType]

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
        signedTxns: Uint8Array[]
    }
}

export type WidgetMessage =
    | TxnSignRequestMessage
    | TxnSignResponseMessage
    | FailedTxnSignMessage
    | TxnSignRequestTimeoutMessage
    | SwapSuccessMessage

/** Payload of a message posted by the widget to the host page. */
export interface WidgetEvent {
    type: string
    message: unknown
}

export function isWidgetEvent(data: unknown): data is WidgetEvent {
    return (
        typeof data === 'object' &&
        data !== null &&
        typeof (data as { type?: unknown }).type === 'string' &&
        Boolean((data as { message?: unknown }).message)
    )
}

export function isTxGroups(value: unknown): value is Uint8Array[][] {
    return (
        Array.isArray(value) &&
        value.every(
            group =>
                Array.isArray(group) &&
                group.every(txn => txn instanceof Uint8Array),
        )
    )
}
