import { SwapProvider, SwapType, CreateQuoteBody, SwapQuote, PrepareTransactionsResponse, Asset, GetAssetsResponse, WidgetConfig, WidgetNetwork, WidgetAppTheme } from './types'
import { makeRequest, getPeraBaseUrl, DEFAULT_WIDGET_URL } from './utils'

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
   * Generate a URL for the Pera Swap Widget iframe
   */
  generateWidgetUrl(config: WidgetConfig = {}): string {
    const url = new URL(DEFAULT_WIDGET_URL)
    
    // Add search parameters based on config
    if (config.network) {
      url.searchParams.set('network', config.network)
    }
    
    if (config.theme) {
      url.searchParams.set('theme', config.theme)
    }
    
    if (config.assetIn !== undefined) {
      url.searchParams.set('assetIn', String(config.assetIn))
    }
    
    if (config.assetOut !== undefined) {
      url.searchParams.set('assetOut', String(config.assetOut))
    }
    
    if (config.iframeBg) {
      url.searchParams.set('iframeBg', config.iframeBg)
    }
    
    if (config.useParentSigner) {
      url.searchParams.set('useParentSigner', 'true')
      
      if (config.accountAddress) {
        url.searchParams.set('accountAddress', config.accountAddress)
      }
    }
    
    return url.toString()
  }

  /**
   * Create an iframe element with the swap widget
   */
  createWidgetIframe(
    config: WidgetConfig = {},
    options: {
      width?: string;
      height?: string;
      className?: string;
      id?: string;
    } = {}
  ): HTMLIFrameElement {
    const iframe = document.createElement('iframe')
    
    iframe.src = this.generateWidgetUrl(config)
    iframe.width = options.width || '100%'
    iframe.height = options.height || '488px'
    
    if (options.className) {
      iframe.className = options.className
    }
    
    if (options.id) {
      iframe.id = options.id
    }
    
    // Set default styling
    iframe.style.border = 'none'
    iframe.style.borderRadius = '12px'
    
    return iframe
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
  async prepareTransactions(quoteId: string): Promise<PrepareTransactionsResponse> {
    return makeRequest<PrepareTransactionsResponse>(
      this.baseURL,
      `/v1/dex-swap/prepare-transactions/`,
      {
        method: 'POST',
        body: JSON.stringify({
          quote: quoteId
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
   * Create a swap quote with simplified parameters
   */
  async createSwapQuote(params: {
    assetInId: number
    assetOutId: number
    amount: string
    slippage: string
    swapperAddress: string
    providers?: SwapProvider[]
    swapType?: SwapType
  }): Promise<{results: SwapQuote[]}> {
    const body: CreateQuoteBody = {
      providers: params.providers || ['tinyman', 'vestige-v4'],
      swapper_address: params.swapperAddress,
      swap_type: params.swapType || 'fixed-input',
      asset_in_id: params.assetInId,
      asset_out_id: params.assetOutId,
      amount: params.amount,
      slippage: params.slippage
    }
    
    return this.createQuote(body)
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