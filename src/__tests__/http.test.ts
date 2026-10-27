import { describe, expect, it, vi } from 'vitest'
import { PeraSwapApiError } from '../errors'
import { buildUrl, request } from '../http'

const BASE = 'https://api.example'

function jsonResponse(body: unknown, init: ResponseInit = {}): Response {
    return new Response(JSON.stringify(body), {
        status: 200,
        headers: { 'Content-Type': 'application/json' },
        ...init,
    })
}

describe('buildUrl', () => {
    it('joins the path and skips empty query values', () => {
        expect(
            buildUrl(BASE, '/v1/assets/', { q: 'usdc', a: undefined, b: '' }),
        ).toBe('https://api.example/v1/assets/?q=usdc')
    })

    it('stringifies numbers, keeps 0 and encodes values', () => {
        expect(buildUrl(BASE, '/x/', { id: 0, q: 'a b&c' })).toBe(
            'https://api.example/x/?id=0&q=a+b%26c',
        )
    })
})

describe('request', () => {
    it('sends JSON bodies with a content type', async () => {
        const fetch = vi.fn().mockResolvedValue(jsonResponse({ ok: true }))

        await expect(
            request(BASE, '/x/', { method: 'POST', body: { a: 1 }, fetch }),
        ).resolves.toEqual({ ok: true })

        expect(fetch).toHaveBeenCalledWith('https://api.example/x/', {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: '{"a":1}',
        })
    })

    it('omits the content type for GET requests and forwards the signal', async () => {
        const fetch = vi.fn().mockResolvedValue(jsonResponse([]))
        const { signal } = new AbortController()

        await request(BASE, '/x/', { fetch, signal })

        expect(fetch).toHaveBeenCalledWith('https://api.example/x/', {
            method: 'GET',
            headers: { Accept: 'application/json' },
            signal,
        })
    })

    it('resolves to undefined for an empty body', async () => {
        const fetch = vi
            .fn()
            .mockResolvedValue(new Response(null, { status: 204 }))
        await expect(request(BASE, '/x/', { fetch })).resolves.toBeUndefined()
    })

    it('falls back to the global fetch', async () => {
        const fetch = vi.fn().mockResolvedValue(jsonResponse({ a: 1 }))
        vi.stubGlobal('fetch', fetch)

        await expect(request(BASE, '/x/')).resolves.toEqual({ a: 1 })
        expect(fetch).toHaveBeenCalledOnce()
    })

    it('throws PeraSwapApiError with the parsed JSON error body', async () => {
        const body = { detail: 'Not found' }
        const fetch = vi
            .fn()
            .mockResolvedValue(jsonResponse(body, { status: 404 }))

        const error = await request(BASE, '/x/', { fetch }).catch(
            (e: unknown) => e,
        )

        expect(error).toBeInstanceOf(PeraSwapApiError)
        expect(error).toMatchObject({
            name: 'PeraSwapApiError',
            status: 404,
            url: 'https://api.example/x/',
            body,
            // Kept for backwards compatibility with JSON.parse(error.message)
            message: JSON.stringify(body),
        })
    })

    it('keeps a plain-text error body as-is', async () => {
        const fetch = vi
            .fn()
            .mockResolvedValue(new Response('Bad gateway', { status: 502 }))

        await expect(request(BASE, '/x/', { fetch })).rejects.toMatchObject({
            status: 502,
            body: 'Bad gateway',
        })
    })

    it('rejects with PeraSwapApiError when a successful response is not JSON', async () => {
        const fetch = vi
            .fn()
            .mockResolvedValue(new Response('<html>', { status: 200 }))
        const error = await request(BASE, '/x/', { fetch }).catch(
            (e: unknown) => e,
        )
        expect(error).toBeInstanceOf(PeraSwapApiError)
        expect(error).toMatchObject({
            status: 200,
            url: `${BASE}/x/`,
            body: '<html>',
        })
    })

    it('propagates network errors from fetch', async () => {
        const fetch = vi
            .fn()
            .mockRejectedValue(new TypeError('Failed to fetch'))
        await expect(request(BASE, '/x/', { fetch })).rejects.toThrow(
            'Failed to fetch',
        )
    })

    it('reports when the error body cannot be read', async () => {
        const response = new Response('x', { status: 500 })
        vi.spyOn(response, 'text').mockRejectedValue(new Error('boom'))
        const fetch = vi.fn().mockResolvedValue(response)

        await expect(request(BASE, '/x/', { fetch })).rejects.toMatchObject({
            body: 'Unable to read error details',
        })
    })
})
