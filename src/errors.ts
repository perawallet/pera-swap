/**
 * Thrown when the Pera API responds with a non-2xx status, or with a 2xx
 * whose body isn't JSON (e.g. an HTML page from a proxy).
 *
 * `message` is the JSON-serialised response body, matching the errors thrown
 * by earlier versions of the SDK, so existing `JSON.parse(error.message)`
 * handling keeps working.
 */
export class PeraSwapApiError extends Error {
    override readonly name = 'PeraSwapApiError'
    readonly status: number
    readonly url: string
    readonly body: unknown

    constructor({
        status,
        url,
        body,
    }: {
        status: number
        url: string
        body: unknown
    }) {
        super(JSON.stringify(body))
        this.status = status
        this.url = url
        this.body = body
    }
}

export function toError(value: unknown): Error {
    if (value instanceof Error) {
        return value
    }
    if (typeof value === 'string') {
        return new Error(value)
    }
    // Some wallets reject with plain objects such as
    // `{ code: 4001, message: 'User rejected the request' }`.
    if (typeof value === 'object' && value !== null) {
        const { name, message } = value as { name?: unknown; message?: unknown }
        if (typeof message === 'string') {
            const error = new Error(message)
            if (typeof name === 'string') {
                error.name = name
            }
            return error
        }
        return new Error(stringify(value))
    }
    return new Error(String(value))
}

function stringify(value: object): string {
    try {
        return JSON.stringify(value) ?? String(value)
    } catch {
        // Circular or BigInt values.
        return String(value)
    }
}
