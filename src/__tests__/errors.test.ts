import { describe, expect, it } from 'vitest'
import { toError } from '../errors'

describe('toError', () => {
    it('returns Error instances unchanged', () => {
        const error = new TypeError('x')
        expect(toError(error)).toBe(error)
    })

    it('wraps strings and other values', () => {
        expect(toError('nope').message).toBe('nope')
        expect(toError(42).message).toBe('42')
        expect(toError(undefined).message).toBe('undefined')
    })

    it('keeps the message and name of error-like objects', () => {
        const error = toError({
            code: 4001,
            name: 'UserRejectedRequestError',
            message: 'User rejected the request',
            retry: () => undefined,
        })
        expect(error).toBeInstanceOf(Error)
        expect(error).toMatchObject({
            name: 'UserRejectedRequestError',
            message: 'User rejected the request',
        })
    })

    it('keeps the default name when an error-like object has none', () => {
        expect(toError({ message: 'nope' }).name).toBe('Error')
    })

    it('serialises other objects as JSON', () => {
        expect(toError({ code: 4001 }).message).toBe('{"code":4001}')
    })

    it('falls back to String() for objects JSON cannot serialise', () => {
        const circular: Record<string, unknown> = {}
        circular.self = circular
        expect(toError(circular).message).toBe('[object Object]')
        expect(toError({ toJSON: () => undefined }).message).toBe(
            '[object Object]',
        )
    })
})
