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
    })
})
