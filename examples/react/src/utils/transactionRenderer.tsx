import { bytesToBase64, type Transaction } from 'algosdk'
import { formatAmount } from './formatUtils'
import { safeStringify } from './transactionUtils'

function summarize(txn: Transaction): string {
    const amount = txn.payment?.amount
    return JSON.stringify(
        {
            type: txn.type,
            sender: txn.sender.toString(),
            receiver: txn.payment?.receiver.toString() ?? 'N/A',
            amount:
                amount !== undefined
                    ? `${formatAmount(amount.toString(), 6)} ALGO`
                    : 'N/A',
            fee: `${formatAmount(txn.fee.toString(), 6)} ALGO`,
            note: txn.note.length ? new TextDecoder().decode(txn.note) : 'N/A',
            groupId: txn.group ? bytesToBase64(txn.group) : undefined,
        },
        null,
        2,
    )
}

const copy = (text: string): void => {
    void navigator.clipboard.writeText(text)
}

interface TransactionDetailsProps {
    transaction: Transaction
    index: number
    isSigned?: boolean
}

/** Pretty-printed view of a single Algorand transaction. */
export function TransactionDetails({
    transaction,
    index,
    isSigned = false,
}: TransactionDetailsProps) {
    const summary = summarize(transaction)
    const raw = safeStringify(transaction)

    return (
        <div className='transaction-item'>
            <div className='transaction-header'>
                <span className='transaction-title'>
                    {isSigned ? 'Signed' : 'Unsigned'} Transaction {index + 1}
                </span>
                <span className='transaction-type'>{transaction.type}</span>
            </div>
            <div className='code-editor'>
                <div className='code-header'>
                    <span className='file-name'>transaction.json</span>
                    <div className='code-actions'>
                        <button
                            type='button'
                            className='copy-btn'
                            onClick={() => copy(raw)}
                        >
                            Copy Raw
                        </button>
                        <button
                            type='button'
                            className='copy-btn'
                            onClick={() => copy(summary)}
                        >
                            Copy Formatted
                        </button>
                    </div>
                </div>
                <div className='code-content'>
                    <pre className='json-code'>
                        <code>{summary}</code>
                    </pre>
                </div>
            </div>
            <details className='raw-transaction'>
                <summary>View Raw Transaction</summary>
                <div className='code-editor'>
                    <div className='code-header'>
                        <span className='file-name'>raw-transaction.json</span>
                    </div>
                    <div className='code-content'>
                        <pre className='json-code'>
                            <code>{raw}</code>
                        </pre>
                    </div>
                </div>
            </details>
        </div>
    )
}
