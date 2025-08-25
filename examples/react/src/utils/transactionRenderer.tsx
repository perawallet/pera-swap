import { Transaction } from 'algosdk'
import { formatAmount } from './formatUtils'
import { safeStringify } from './transactionUtils'

/**
 * Utility functions for rendering transaction details
 */

/**
 * Render transaction details in a code editor format
 * @param transaction - Algorand transaction object
 * @param index - Transaction index
 * @param isSigned - Whether the transaction is signed
 * @returns JSX element for transaction details
 */
export const renderTransactionDetails = (transaction: Transaction, index: number, isSigned: boolean = false) => {
  if (!transaction) return null

  const txn = transaction
  const type = txn.type || 'Unknown'
  
  // For Algorand transactions, the structure is different
  // The transaction object has properties directly, not nested under 'from', 'to', etc.
  const sender = txn.sender ? txn.sender.toString() : 'N/A'
  const receiver = txn.payment?.receiver ? txn.payment.receiver.toString() : 'N/A'
  const amount = txn.payment?.amount ? formatAmount(txn.payment.amount.toString(), 6) : 'N/A'
  const fee = txn.fee ? formatAmount(txn.fee.toString(), 6) : 'N/A'
  const note = txn.note ? new TextDecoder().decode(txn.note) : 'N/A'

  return (
    <div key={index} className="transaction-item">
      <div className="transaction-header">
        <span className="transaction-title">
          {isSigned ? 'Signed' : 'Unsigned'} Transaction {index + 1}
        </span>
        <span className="transaction-type">{type}</span>
      </div>
      <div className="code-editor">
        <div className="code-header">
          <span className="file-name">transaction.json</span>
          <div className="code-actions">
            <span className="copy-btn" onClick={() => navigator.clipboard.writeText(safeStringify(txn))}>
              Copy Raw
            </span>
            <span className="copy-btn" onClick={() => navigator.clipboard.writeText(JSON.stringify({
              type,
              sender,
              receiver,
              amount: `${amount} ALGO`,
              fee: `${fee} ALGO`,
              note,
              groupId: txn.group ? Buffer.from(txn.group).toString('base64') : undefined
            }, null, 2))}>
              Copy Formatted
            </span>
          </div>
        </div>
        <div className="code-content">
          <pre className="json-code">
            <code>{JSON.stringify({
              type,
              sender,
              receiver,
              amount: `${amount} ALGO`,
              fee: `${fee} ALGO`,
              note,
              groupId: txn.group ? Buffer.from(txn.group).toString('base64') : undefined
            }, null, 2)}</code>
          </pre>
        </div>
      </div>
      <details style={{marginTop: '8px'}}>
        <summary style={{fontSize: '12px', color: '#666', cursor: 'pointer'}}>View Raw Transaction</summary>
        <div className="code-editor" style={{marginTop: '8px'}}>
          <div className="code-header">
            <span className="file-name">raw-transaction.json</span>
          </div>
          <div className="code-content">
            <pre className="json-code">
              <code>{safeStringify(txn)}</code>
            </pre>
          </div>
        </div>
      </details>
    </div>
  )
}
