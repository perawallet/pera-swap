/**
 * Helper function to make HTTP requests
 */
export async function makeRequest<T>(
  baseURL: string,
  endpoint: string, 
  options: RequestInit = {}
): Promise<T> {
  const url = `${baseURL}${endpoint}`
  const response = await fetch(url, {
    headers: {
      'Content-Type': 'application/json',
      ...options.headers
    },
    ...options
  })
  
  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`)
  }
  
  return response.json()
}

/**
 * Get the base URL for the Pera API based on network
 */
export function getPeraBaseUrl(network: 'mainnet' | 'testnet'): string {
  return network === 'mainnet' 
    ? "https://mainnet.api.perawallet.app"
    : "https://testnet.api.perawallet.app"
}

/**
 * Default widget URL
 */
export const DEFAULT_WIDGET_URL = 'https://swap-widget-staging.perawallet.app' 