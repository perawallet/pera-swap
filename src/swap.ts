import { SwapProvider, SwapType, CreateQuoteBody, SwapQuote, PrepareTransactionsResponse, Asset, GetAssetsResponse } from './types'
import { makeRequest, getPeraBaseUrl } from './utils'

/**
 * PeraSwap class for managing swap operations and widget generation
 */
export class PeraSwap {
  private network: 'mainnet' | 'testnet'
  private baseURL: string

  constructor(network: 'mainnet' | 'testnet' = 'mainnet') {
    this.network = network
    this.baseURL = getPeraBaseUrl(network)
  }

  /**
   * Update the network for all subsequent operations
   */
  updateNetwork(network: 'mainnet' | 'testnet'): void {
    this.network = network
    this.baseURL = getPeraBaseUrl(network)
  }

  /**
   * Get the current network
   */
  getNetwork(): 'mainnet' | 'testnet' {
    return this.network
  }

  /**
   * Create a swap quote
   */
  async createQuote(body: CreateQuoteBody, signal?: AbortSignal): Promise<{results: SwapQuote[]}> {
    return makeRequest<{results: SwapQuote[]}>(this.baseURL, "/v1/dex-swap/quotes/", {
      method: 'POST',
      body: JSON.stringify(body),
      signal
    })
  }

  /**
   * Update a quote with exception text
   */
  async updateQuote(quoteId: string, exceptionText: string): Promise<any> {
    return makeRequest(this.baseURL, `/v1/dex-swap/quotes/${quoteId}/`, {
      method: 'PATCH',
      body: JSON.stringify({
        exception_text: exceptionText
      })
    })
  }

  /**
   * Prepare transactions for a swap
   */
  async prepareTransactions(quoteId: string, depositAddress?: string): Promise<PrepareTransactionsResponse> {
    return makeRequest<PrepareTransactionsResponse>(
      this.baseURL,
      `/v1/dex-swap/prepare-transactions/`,
      {
        method: 'POST',
        body: JSON.stringify({
          quote: quoteId,
          deposit_address: depositAddress
        })
      }
    )
  }

  /**
   * Get available assets for swapping
   */
  async getAvailableAssets(params: {asset_in_id: number; q?: string}): Promise<{results: Asset[]}> {
    const searchParams = new URLSearchParams()
    searchParams.append('asset_in_id', params.asset_in_id.toString())
    if (params.q) searchParams.append('q', params.q)
    
    return makeRequest<{results: Asset[]}>(this.baseURL, `/v1/dex-swap/available-assets/?${searchParams}`)
  }

  /**
   * Get assets by IDs or search query
   */
  async getAssets(params: {asset_ids?: string[]; q?: string}): Promise<GetAssetsResponse> {
    const searchParams = new URLSearchParams()
    if (params.asset_ids) searchParams.append('asset_ids', params.asset_ids.join(','))
    if (params.q) searchParams.append('q', params.q)
    
    return makeRequest<GetAssetsResponse>(this.baseURL, `/v1/assets/?${searchParams}`)
  }

  /**
   * Get ALGO price in USD
   */
  async getAlgoPrice(): Promise<{exchange_price: string}> {
    return makeRequest<{exchange_price: string}>(this.baseURL, "/v1/currencies/USD/")
  }



  /**
   * Get asset information by ID
   */
  async getAsset(assetId: number): Promise<Asset | null> {
    try {
      const response = await this.getAssets({ asset_ids: [assetId.toString()] })
      return response.results[0] || null
    } catch (error) {
      console.error('Error fetching asset:', error)
      return null
    }
  }

  /**
   * Search for assets by name
   */
  async searchAssets(query: string): Promise<Asset[]> {
    try {
      const response = await this.getAssets({ q: query })
      return response.results
    } catch (error) {
      console.error('Error searching assets:', error)
      return []
    }
  }
} 