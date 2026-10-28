import type { WidgetAppTheme } from '../types'

/**
 * postMessage protocol between the host page and the widget iframe.
 *
 * Widget → host messages are posted as `{ type, message }`.
 * Host → widget replies to a signing request are sent as
 * `{ message: { type, ... } }`; `UPDATE_THEME` is sent as `{ type, message }`.
 */

export const WidgetMessageType = {
    TXN_SIGN_REQUEST: 'TXN_SIGN_REQUEST',
    TXN_SIGN_RESPONSE: 'TXN_SIGN_RESPONSE',
    FAILED_TXN_SIGN: 'FAILED_TXN_SIGN',
    /** @deprecated The widget never sends this message. Will be removed in the next major. */
    TXN_SIGN_REQUEST_TIMEOUT: 'TXN_SIGN_REQUEST_TIMEOUT',
    SWAP_SUCCESS: 'SWAP_SUCCESS',
    UPDATE_THEME: 'UPDATE_THEME',
} as const

export type WidgetMessageType =
    (typeof WidgetMessageType)[keyof typeof WidgetMessageType]

// Widget → host

export interface TxnSignRequestMessage {
    type: 'TXN_SIGN_REQUEST'
    message: { txGroups: Uint8Array[][] }
}

export interface SwapSuccessMessage {
    type: 'SWAP_SUCCESS'
    message: { signedTxns: Uint8Array[] }
}

/** @deprecated The widget never sends this message. Will be removed in the next major. */
export interface TxnSignRequestTimeoutMessage {
    type: 'TXN_SIGN_REQUEST_TIMEOUT'
    message: unknown
}

// Host → widget

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

/** Switches the widget's theme without reloading it. */
export interface UpdateThemeMessage {
    type: 'UPDATE_THEME'
    message: WidgetAppTheme
}

/** Messages the widget posts to the host page. */
export type WidgetToHostMessage =
    | TxnSignRequestMessage
    | SwapSuccessMessage
    | TxnSignRequestTimeoutMessage

/** Replies the host page sends to a widget signing request. */
export type TxnSignReplyMessage = TxnSignResponseMessage | FailedTxnSignMessage

/** Messages the host page posts to the widget. */
export type HostToWidgetMessage = TxnSignReplyMessage | UpdateThemeMessage

/**
 * @deprecated Use `WidgetToHostMessage`, `HostToWidgetMessage` or
 * `TxnSignReplyMessage`, which tell the two directions apart.
 */
export type WidgetMessage = WidgetToHostMessage | HostToWidgetMessage

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

export function isUint8ArrayList(value: unknown): value is Uint8Array[] {
    return (
        Array.isArray(value) && value.every(item => item instanceof Uint8Array)
    )
}

export function isTxGroups(value: unknown): value is Uint8Array[][] {
    return Array.isArray(value) && value.every(isUint8ArrayList)
}
