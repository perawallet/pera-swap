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

    constructor(options?: PeraSwapOptions)
    constructor(network?: Network, referrerUrl?: string)
    constructor(
        networkOrOptions: Network | PeraSwapOptions = 'mainnet',
        referrerUrl?: string,
    ) {
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
     */
    updateSwapStatus(
        swapId: string | number,
        body: UpdateSwapStatusBody,
        signal?: AbortSignal,
    ): Promise<unknown> {
        return this.request(
            `/v2/dex-swap/swaps/${encodeURIComponent(swapId)}/`,
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

    /** Build the transaction groups for a quote. */
    prepareTransactions(
        quoteId: string,
        depositAddress?: string,
        signal?: AbortSignal,
    ): Promise<PrepareTransactionsResponse> {
        return this.request<PrepareTransactionsResponse>(
            '/v2/dex-swap/prepare-transactions/',
            {
                method: 'POST',
                body: { quote: quoteId, deposit_address: depositAddress },
                signal,
            },
        )
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

    /** Single asset by ID. Resolves to `null` if it can't be found or the request fails; rejects only when aborted. */
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
        } catch {
            signal?.throwIfAborted()
            return null
        }
    }

    /** Search assets by name. Resolves to `[]` if the request fails; rejects only when aborted. */
    async searchAssets(query: string, signal?: AbortSignal): Promise<Asset[]> {
        try {
            const response = await this.getAssets({ q: query }, signal)
            return response.results
        } catch {
            signal?.throwIfAborted()
            return []
        }
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
