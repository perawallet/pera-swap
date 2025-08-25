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
    // Try to get error details from response body
    let errorDetails = ''
    try {
      errorDetails = await response.json()
    } catch {
      try {
        errorDetails = await response.text()
      } catch {
        errorDetails = 'Unable to read error details'
      }
    }

    throw new Error(JSON.stringify(errorDetails))
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
export const DEFAULT_WIDGET_URL = 'https://swap-widget.perawallet.app' 