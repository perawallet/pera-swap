/**
 * Thrown when the Pera API responds with a non-2xx status.
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
    return new Error(typeof value === 'string' ? value : String(value))
}
