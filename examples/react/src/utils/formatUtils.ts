/**
 * Utility functions for formatting values in the CustomUIExample component
 */

/**
 * Format amount from micro units to human-readable format
 * @param amount - Amount in micro units (string)
 * @param decimals - Number of decimal places (default: 6)
 * @returns Formatted amount string
 */
export const formatAmount = (amount: string, decimals: number = 6): string => {
  const num = parseFloat(amount) / Math.pow(10, decimals)
  return num.toLocaleString('en-US', {
    minimumFractionDigits: 2,
    maximumFractionDigits: 6
  })
}

/**
 * Format USD values with dollar sign and proper decimal places
 * @param usdValue - USD value (string or null)
 * @returns Formatted USD string
 */
export const formatUSD = (usdValue: string | null): string => {
  if (!usdValue) return 'N/A'
  const num = parseFloat(usdValue)
  return `$${num.toLocaleString('en-US', {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
  })}`
}

/**
 * Format percentage values with 2 decimal places
 * @param percentage - Percentage value (string)
 * @returns Formatted percentage string
 */
export const formatPercentage = (percentage: string): string => {
  const num = parseFloat(percentage)
  return `${num.toFixed(2)}%`
}

/**
 * Format price values with 6 decimal places for precision
 * @param price - Price value (string)
 * @returns Formatted price string
 */
export const formatPrice = (price: string): string => {
  const num = parseFloat(price)
  return num.toLocaleString('en-US', {
    minimumFractionDigits: 6,
    maximumFractionDigits: 6
  })
}
