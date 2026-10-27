import { PeraSwapApiError } from './errors'

export type FetchLike = (input: string, init?: RequestInit) => Promise<Response>

export type QueryParams = Record<string, string | number | undefined>

export interface RequestOptions {
    method?: 'GET' | 'POST' | 'PATCH'
    query?: QueryParams
    body?: unknown
    signal?: AbortSignal
    fetch?: FetchLike
}

export function buildUrl(
    baseUrl: string,
    path: string,
    query: QueryParams = {},
): string {
    const url = new URL(path, baseUrl)
    for (const [key, value] of Object.entries(query)) {
        if (value !== undefined && value !== '') {
            url.searchParams.set(key, String(value))
        }
    }
    return url.toString()
}

/**
 * Minimal JSON-over-fetch client. Resolves with the parsed body, or
 * `undefined` for an empty response; rejects with {@link PeraSwapApiError}
 * for non-2xx responses and for 2xx responses that aren't JSON.
 */
export async function request<T>(
    baseUrl: string,
    path: string,
    {
        method = 'GET',
        query,
        body,
        signal,
        fetch: fetchFn,
    }: RequestOptions = {},
): Promise<T> {
    const url = buildUrl(baseUrl, path, query)
    const headers: Record<string, string> = { Accept: 'application/json' }
    const init: RequestInit = { method, headers }

    if (body !== undefined) {
        headers['Content-Type'] = 'application/json'
        init.body = JSON.stringify(body)
    }
    if (signal) {
        init.signal = signal
    }

    const doFetch: FetchLike = fetchFn ?? globalThis.fetch
    const response = await doFetch(url, init)

    if (!response.ok) {
        throw new PeraSwapApiError({
            status: response.status,
            url,
            body: await readErrorBody(response),
        })
    }

    return (await readBody(response, url)) as T
}

async function readBody(response: Response, url: string): Promise<unknown> {
    const text = await response.text()
    if (!text) {
        return undefined
    }
    try {
        return JSON.parse(text) as unknown
    } catch {
        // e.g. an HTML page from a proxy or CDN in front of the API.
        throw new PeraSwapApiError({ status: response.status, url, body: text })
    }
}

async function readErrorBody(response: Response): Promise<unknown> {
    let text: string
    try {
        text = await response.text()
    } catch {
        return 'Unable to read error details'
    }
    try {
        return JSON.parse(text) as unknown
    } catch {
        return text
    }
}
