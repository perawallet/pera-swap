import { PERA_API_BASE_URLS, SDK_PLATFORM, SWAP_API_VERSION } from './constants'
import { type FetchLike, request, type RequestOptions } from './http'
import type {
    AlgoPriceResponse,
    Asset,
    AssetListResponse,
    CreateQuoteBody,
    CreateQuoteResponse,
    GetAssetsParams,
    GetAssetsResponse,
    GetAvailableAssetsParams,
    Network,
    PrepareTransactionsResponse,
    UpdateSwapStatusBody,
} from './types'

const EXACT_SWAP_ID_LIMIT = 50

const isUnsafeInteger = (value: unknown): value is number =>
    Number.isInteger(value) && !Number.isSafeInteger(value)

export interface PeraSwapOptions {
    /** Defaults to `mainnet`. */
    network?: Network
    /** Forwarded as `referrer_url` with quote requests for attribution. */
    referrerUrl?: string
    /** Custom `fetch` implementation (e.g. for SSR or tests). Defaults to the global `fetch`. */
    fetch?: FetchLike
}

/**
 * Client for the Pera Swap API.
 *
 * @example
 * const peraSwap = new PeraSwap({ network: 'mainnet', referrerUrl: 'https://myapp.example' })
 * const { results } = await peraSwap.createQuote({ ... })
 */
export class PeraSwap {
    private network: Network
    private readonly referrerUrl: string | undefined
    private readonly fetchFn: FetchLike | undefined
    // `swap_id` is a 63-bit id that `JSON.parse` rounds, so reporting with it
    // targets a swap that doesn't exist. Bounded so a long-lived client
    // doesn't grow with every swap.
    private readonly exactSwapIds = new Map<number, string>()
    private hasWarnedAboutUnsafeSwapId = false
    private hasWarnedAboutDepositAddress = false

    constructor(options?: PeraSwapOptions)
    constructor(network?: Network, referrerUrl?: string)
    constructor(
        networkOrOptions: Network | PeraSwapOptions = 'mainnet',
        referrerUrl?: string,
    ) {
        if (typeof networkOrOptions === 'object' && referrerUrl !== undefined) {
            throw new TypeError(
                'Pass referrerUrl inside the options object: new PeraSwap({ network, referrerUrl })',
            )
        }
        const options: PeraSwapOptions =
            typeof networkOrOptions === 'string'
                ? { network: networkOrOptions, referrerUrl }
                : networkOrOptions

        this.network = options.network ?? 'mainnet'
        this.referrerUrl = options.referrerUrl
        this.fetchFn = options.fetch
    }

    /** Switch the network used by all subsequent requests. */
    updateNetwork(network: Network): void {
        this.network = network
    }

    getNetwork(): Network {
        return this.network
    }

    /**
     * Request swap quotes. Only quotes from `body.providers` are returned.
     */
    async createQuote(
        body: CreateQuoteBody,
        signal?: AbortSignal,
    ): Promise<CreateQuoteResponse> {
        const response = await this.request<CreateQuoteResponse>(
            '/v2/dex-swap/quotes/',
            {
                method: 'POST',
                body: { ...body, referrer_url: this.referrerUrl },
                signal,
            },
        )

        // The API may return quotes from providers the caller didn't ask for.
        if (body.providers?.length) {
            const allowed = new Set(body.providers)
            response.results = response.results.filter(quote =>
                allowed.has(quote.provider),
            )
        }

        return response
    }

    /**
     * Report the outcome of a swap after submitting (or failing to submit)
     * its transactions.
     *
     * @param swapId Pass `prepared.swap_id_str`. A `swap_id` number above
     * 2^53 has lost precision; it is only resolved to the exact id when this
     * instance prepared that swap.
     */
    updateSwapStatus(
        swapId: string | number,
        body: UpdateSwapStatusBody,
        signal?: AbortSignal,
    ): Promise<unknown> {
        return this.request(
            `/v2/dex-swap/swaps/${encodeURIComponent(this.resolveSwapId(swapId))}/`,
            {
                method: 'PATCH',
                body: {
                    ...body,
                    platform: SDK_PLATFORM,
                    swap_version: SWAP_API_VERSION,
                },
                signal,
            },
        )
    }

    /**
     * Build the transaction groups for a quote.
     *
     * @param depositAddress Deprecated: ignored by the v2 API. No transfer
     * to this address is added, and the output stays in the swapping account.
     */
    async prepareTransactions(
        quoteId: string,
        depositAddress?: string,
        signal?: AbortSignal,
    ): Promise<PrepareTransactionsResponse> {
        if (depositAddress) {
            this.warnAboutDepositAddress()
        }
        const response = await this.request<PrepareTransactionsResponse>(
            '/v2/dex-swap/prepare-transactions/',
            {
                method: 'POST',
                body: { quote: quoteId, deposit_address: depositAddress },
                signal,
            },
        )
        this.rememberExactSwapId(response)
        return response
    }

    /** Assets that can be swapped from `asset_in_id`. */
    getAvailableAssets(
        params: GetAvailableAssetsParams,
        signal?: AbortSignal,
    ): Promise<AssetListResponse> {
        return this.request<AssetListResponse>(
            '/v1/dex-swap/available-assets/',
            {
                query: { asset_in_id: params.asset_in_id, q: params.q },
                signal,
            },
        )
    }

    /** Look up assets by ID and/or search query. */
    getAssets(
        params: GetAssetsParams,
        signal?: AbortSignal,
    ): Promise<GetAssetsResponse> {
        return this.request<GetAssetsResponse>('/v1/assets/', {
            query: { asset_ids: params.asset_ids?.join(','), q: params.q },
            signal,
        })
    }

    /** Current ALGO price in USD. */
    getAlgoPrice(signal?: AbortSignal): Promise<AlgoPriceResponse> {
        return this.request<AlgoPriceResponse>('/v1/currencies/USD/', {
            signal,
        })
    }

    /**
     * Single asset by ID. Resolves to `null` if it can't be found or the
     * request fails; rejects only when aborted.
     *
     * ALGO (id `0`) is not an ASA, so `getAsset(0)` always resolves to
     * `null`; use {@link PeraSwap.getAlgoPrice} for its USD price.
     */
    async getAsset(
        assetId: number,
        signal?: AbortSignal,
    ): Promise<Asset | null> {
        try {
            const response = await this.getAssets(
                { asset_ids: [String(assetId)] },
                signal,
            )
            return response.results[0] ?? null
        } catch (error) {
            // Not `signal.throwIfAborted()`: it needs Chrome 100 / Safari 15.4.
            if (signal?.aborted) throw error
            return null
        }
    }

    /** Search assets by name. Resolves to `[]` if the request fails; rejects only when aborted. */
    async searchAssets(query: string, signal?: AbortSignal): Promise<Asset[]> {
        try {
            const response = await this.getAssets({ q: query }, signal)
            return response.results
        } catch (error) {
            if (signal?.aborted) throw error
            return []
        }
    }

    private rememberExactSwapId(response: PrepareTransactionsResponse): void {
        // An empty 2xx body resolves to `undefined`.
        const swapId: unknown = response?.swap_id
        const exactId: unknown = response?.swap_id_str
        if (!isUnsafeInteger(swapId) || typeof exactId !== 'string') {
            return
        }
        this.exactSwapIds.delete(swapId)
        this.exactSwapIds.set(swapId, exactId)
        if (this.exactSwapIds.size > EXACT_SWAP_ID_LIMIT) {
            this.exactSwapIds.delete(this.exactSwapIds.keys().next().value!)
        }
    }

    private resolveSwapId(swapId: string | number): string | number {
        if (!isUnsafeInteger(swapId)) {
            return swapId
        }
        const exactId = this.exactSwapIds.get(swapId)
        if (exactId !== undefined) {
            return exactId
        }
        if (!this.hasWarnedAboutUnsafeSwapId) {
            this.hasWarnedAboutUnsafeSwapId = true
            // oxlint-disable-next-line no-console -- the request below is likely to 404
            console.warn(
                `@perawallet/swap: swapId ${swapId} exceeds 2^53 and has lost precision. Pass prepared.swap_id_str to updateSwapStatus.`,
            )
        }
        return swapId
    }

    // The v2 endpoint drops `deposit_address` without an error.
    private warnAboutDepositAddress(): void {
        if (this.hasWarnedAboutDepositAddress) {
            return
        }
        this.hasWarnedAboutDepositAddress = true
        // oxlint-disable-next-line no-console -- the only signal an integrator gets
        console.warn(
            '@perawallet/swap: prepareTransactions ignores depositAddress: the v2 API adds no transfer to it, and the output stays in the swapping account.',
        )
    }

    private request<T>(
        path: string,
        options: Omit<RequestOptions, 'fetch'> = {},
    ): Promise<T> {
        return request<T>(PERA_API_BASE_URLS[this.network], path, {
            ...options,
            fetch: this.fetchFn,
        })
    }
}
