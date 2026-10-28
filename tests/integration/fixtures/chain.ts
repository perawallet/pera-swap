import {
    assignGroupID,
    bytesToBase64,
    encodeUnsignedTransaction,
    generateAccount,
    LogicSigAccount,
    makeApplicationNoOpTxnFromObject,
    makeAssetTransferTxnWithSuggestedParamsFromObject,
    makePaymentTxnWithSuggestedParamsFromObject,
    signLogicSigTransactionObject,
    type Account,
    type SuggestedParams,
    type Transaction,
} from 'algosdk'
import type { PrepareTransactionsResponse } from '../../../src'

export const USDC_ID = 31_566_704
export const ROUTER_APP_ID = 1_002_541_853

const suggestedParams: SuggestedParams = {
    fee: 1000,
    flatFee: true,
    minFee: 1000,
    firstValid: 50_000_000,
    lastValid: 50_001_000,
    genesisHash: new Uint8Array(32).fill(7),
    genesisID: 'mainnet-v1.0',
}

// `#pragma version 2; int 1` — an always-approve logic sig standing in for
// the escrow Pera signs on the user's behalf.
const ESCROW_PROGRAM = new Uint8Array([0x02, 0x20, 0x01, 0x01, 0x22])

export interface SwapScenario {
    user: Account
    escrow: LogicSigAccount
    response: PrepareTransactionsResponse
    /** Unsigned transactions per group, in API order. */
    groups: Transaction[][]
}

/**
 * Builds a realistic `prepare-transactions` response: an opt-in group the
 * user signs, and a swap group where the escrow leg is already signed by Pera.
 */
export function buildSwapScenario(swapId = 4242): SwapScenario {
    const user = generateAccount()
    const escrow = new LogicSigAccount(ESCROW_PROGRAM)
    const escrowAddress = escrow.address()

    const optIn = makeAssetTransferTxnWithSuggestedParamsFromObject({
        sender: user.addr,
        receiver: user.addr,
        amount: 0,
        assetIndex: USDC_ID,
        suggestedParams,
    })

    const payIn = makePaymentTxnWithSuggestedParamsFromObject({
        sender: user.addr,
        receiver: escrowAddress,
        amount: 1_000_000,
        suggestedParams,
    })
    const appCall = makeApplicationNoOpTxnFromObject({
        sender: user.addr,
        appIndex: ROUTER_APP_ID,
        appArgs: [new TextEncoder().encode('swap')],
        foreignAssets: [USDC_ID],
        suggestedParams,
    })
    const payOut = makeAssetTransferTxnWithSuggestedParamsFromObject({
        sender: escrowAddress,
        receiver: user.addr,
        amount: 172_345,
        assetIndex: USDC_ID,
        suggestedParams,
    })
    assignGroupID([payIn, appCall, payOut])

    const groups = [[optIn], [payIn, appCall, payOut]]
    const escrowSigned = signLogicSigTransactionObject(payOut, escrow).blob

    return {
        user,
        escrow,
        groups,
        response: {
            swap_id: swapId,
            swap_version: 'v2',
            transaction_groups: [
                {
                    purpose: 'opt-in',
                    transaction_group_id: bytesToBase64(optIn.rawTxID()),
                    transactions: [
                        bytesToBase64(encodeUnsignedTransaction(optIn)),
                    ],
                    signed_transactions: [null],
                },
                {
                    purpose: 'swap',
                    transaction_group_id: bytesToBase64(payIn.group!),
                    transactions: [payIn, appCall, payOut].map(t =>
                        bytesToBase64(encodeUnsignedTransaction(t)),
                    ),
                    signed_transactions: [
                        null,
                        null,
                        bytesToBase64(escrowSigned),
                    ],
                },
            ],
        },
    }
}
