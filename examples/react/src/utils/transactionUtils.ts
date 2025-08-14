import algosdk from 'algosdk'

/**
 * Utility functions for handling Algorand transactions
 */

/**
 * Convert base64 string to Uint8Array
 * @param base64 - Base64 encoded string
 * @returns Uint8Array
 */
export const base64ToUint8Array = (base64: string): Uint8Array => {
  const binaryString = atob(base64)
  const bytes = new Uint8Array(binaryString.length)
  for (let i = 0; i < binaryString.length; i++) {
    bytes[i] = binaryString.charCodeAt(i)
  }
  return bytes
}

/**
 * Decode unsigned transaction from base64
 * @param base64Transaction - Base64 encoded transaction
 * @returns Decoded transaction or null if failed
 */
export const decodeTransaction = (base64Transaction: string) => {
  try {
    const decodedData = base64ToUint8Array(base64Transaction)
    const transaction = algosdk.decodeUnsignedTransaction(decodedData)
    return transaction
  } catch (error) {
    console.error('Failed to decode transaction:', error)
    return null
  }
}

/**
 * Decode signed transaction from base64
 * @param base64Transaction - Base64 encoded signed transaction
 * @returns Decoded signed transaction or null if failed
 */
export const decodeSignedTransaction = (base64Transaction: string) => {
  try {
    const decodedData = base64ToUint8Array(base64Transaction)
    const transaction = algosdk.decodeSignedTransaction(decodedData)
    return transaction
  } catch (error) {
    console.error('Failed to decode signed transaction:', error)
    return null
  }
}

/**
 * Safely serialize objects with BigInt values to JSON
 * @param obj - Object to serialize
 * @returns JSON string with BigInt values converted to strings
 */
export const safeStringify = (obj: any): string => {
  return JSON.stringify(obj, (_key, value) => {
    if (typeof value === 'bigint') {
      return value.toString()
    }
    return value
  }, 2)
}
