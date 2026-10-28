import { describe, expect, it } from 'vitest'
import {
    isTxGroups,
    isUint8ArrayList,
    isWidgetEvent,
    WidgetMessageType,
} from '../widget/messages'

describe('isWidgetEvent', () => {
    it.each([
        [{ type: 'SWAP_SUCCESS', message: [] }, true],
        [{ type: 'TXN_SIGN_REQUEST', message: { txGroups: [] } }, true],
        [null, false],
        [undefined, false],
        ['SWAP_SUCCESS', false],
        [42, false],
        [{ message: {} }, false],
        [{ type: 1, message: {} }, false],
        [{ type: 'SWAP_SUCCESS' }, false],
        [{ type: 'SWAP_SUCCESS', message: null }, false],
        [{ type: 'SWAP_SUCCESS', message: '' }, false],
    ])('%j -> %s', (data, expected) => {
        expect(isWidgetEvent(data)).toBe(expected)
    })
})

describe('isUint8ArrayList', () => {
    const bytes = new Uint8Array([1])

    it.each([
        [[], true],
        [[bytes, bytes], true],
        [undefined, false],
        [{}, false],
        [[bytes, [1]], false],
        [[bytes.buffer], false],
    ])('%#: %s', (value, expected) => {
        expect(isUint8ArrayList(value)).toBe(expected)
    })
})

describe('isTxGroups', () => {
    const bytes = new Uint8Array([1, 2, 3])

    it.each([
        [[], true],
        [[[]], true],
        [[[bytes]], true],
        [[[bytes, bytes], [bytes]], true],
        [undefined, false],
        [null, false],
        ['groups', false],
        [[bytes], false],
        [[[bytes, 'x']], false],
        [[[[1, 2, 3]]], false],
        [[[bytes.buffer]], false],
    ])('%#: %s', (value, expected) => {
        expect(isTxGroups(value)).toBe(expected)
    })
})

describe('WidgetMessageType', () => {
    it('lists every message type', () => {
        expect(WidgetMessageType).toEqual({
            TXN_SIGN_REQUEST: 'TXN_SIGN_REQUEST',
            TXN_SIGN_RESPONSE: 'TXN_SIGN_RESPONSE',
            FAILED_TXN_SIGN: 'FAILED_TXN_SIGN',
            TXN_SIGN_REQUEST_TIMEOUT: 'TXN_SIGN_REQUEST_TIMEOUT',
            SWAP_SUCCESS: 'SWAP_SUCCESS',
            UPDATE_THEME: 'UPDATE_THEME',
        })
    })
})
