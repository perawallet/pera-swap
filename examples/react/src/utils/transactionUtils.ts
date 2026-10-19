import {
    base64ToBytes,
    decodeSignedTransaction as decodeSigned,
    decodeUnsignedTransaction,
    type SignedTransaction,
    type Transaction,
} from 'algosdk'

/** Decode a base64 unsigned transaction, or `null` if it is malformed. */
export function decodeTransaction(
    base64Transaction: string,
): Transaction | null {
    try {
        return decodeUnsignedTransaction(base64ToBytes(base64Transaction))
    } catch (error) {
        console.error('Failed to decode transaction:', error)
        return null
    }
}

/** Decode a base64 signed transaction, or `null` if it is malformed. */
export function decodeSignedTransaction(
    base64Transaction: string,
): SignedTransaction | null {
    try {
        return decodeSigned(base64ToBytes(base64Transaction))
    } catch (error) {
        console.error('Failed to decode signed transaction:', error)
        return null
    }
}

/** JSON.stringify that renders bigint values as strings. */
export function safeStringify(value: unknown): string {
    return JSON.stringify(
        value,
        (_key, v: unknown) => (typeof v === 'bigint' ? v.toString() : v),
        2,
    )
}
