import React, { useState } from 'react'
import { PeraSwap, SwapQuote, PrepareTransactionsResponse } from '@perawallet/swap'
import './CustomUIExample.css'

// Import utilities
import { FormState } from '../utils/types'
import { formatAmount, formatUSD, formatPercentage, formatPrice } from '../utils/formatUtils'
import { decodeTransaction, decodeSignedTransaction } from '../utils/transactionUtils'
import { renderTransactionDetails } from '../utils/transactionRenderer'

const CustomUIExample: React.FC = () => {
  const [formState, setFormState] = useState<FormState>({
    assetInId: '0', // ALGO
    assetOutId: '31566704', // USDC
    amount: '1000000', // 1 ALGO
    slippage: '0.5',
    swapperAddress: '',
    depositAddress: ''
  })
  const [quotes, setQuotes] = useState<SwapQuote[]>([])
  const [selectedQuote, setSelectedQuote] = useState<SwapQuote | null>(null)
  const [preparedTransactions, setPreparedTransactions] = useState<PrepareTransactionsResponse | null>(null)
  const [loading, setLoading] = useState<boolean>(false)
  const [preparingTransactions, setPreparingTransactions] = useState<boolean>(false)
  const [error, setError] = useState<string>('')

  const peraSwap = new PeraSwap('mainnet')

  const handleInputChange = (field: keyof FormState, value: string) => {
    setFormState(prev => ({
      ...prev,
      [field]: value
    }))
  }

  const getQuotes = async () => {
    if (!formState.swapperAddress) {
      setError('Please enter a swapper address')
      return
    }

    setLoading(true)
    setError('')
    setSelectedQuote(null)
    setPreparedTransactions(null)

    try {
      const result = await peraSwap.createQuote({
        providers: ['tinyman', 'vestige-v4'],
        swapper_address: formState.swapperAddress,
        swap_type: 'fixed-input',
        asset_in_id: Number(formState.assetInId),
        asset_out_id: Number(formState.assetOutId),
        amount: formState.amount,
        slippage: formState.slippage
      })
      setQuotes(result.results)
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to get quotes')
    } finally {
      setLoading(false)
    }
  }

  const prepareTransactions = async (quote: SwapQuote) => {
    setPreparingTransactions(true)
    setError('')

    try {
      const result = await peraSwap.prepareTransactions(
        quote.quote_id_str,
        formState.depositAddress || undefined
      )
      setPreparedTransactions(result)
      setSelectedQuote(quote)
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to prepare transactions')
    } finally {
      setPreparingTransactions(false)
    }
  }

  return (
    <div className="example-card">
      <style>{`
       
      `}</style>
      
      <h2>Example 3: Swap API</h2>
      <p>Build your own UI and use swap API methods directly</p>
      
      <div className="config-section">
        <h3>Swap Parameters</h3>
        <div className="config-grid">
          <div>
            <label>Asset In ID:</label>
            <input 
              type="text" 
              value={formState.assetInId} 
              onChange={(e) => handleInputChange('assetInId', e.target.value)}
              pattern="[0-9]*"
              placeholder="0 for ALGO"
            />
          </div>
          <div>
            <label>Asset Out ID:</label>
            <input 
              type="text" 
              value={formState.assetOutId} 
              onChange={(e) => handleInputChange('assetOutId', e.target.value)}
              pattern="[0-9]*"
              placeholder="31566704 for USDC"
            />
          </div>
          <div>
            <label>Amount (microAlgos):</label>
            <input 
              type="text" 
              value={formState.amount} 
              onChange={(e) => handleInputChange('amount', e.target.value)}
              placeholder="1000000"
            />
          </div>
          <div>
            <label>Slippage (%):</label>
            <input 
              type="text" 
              value={formState.slippage} 
              onChange={(e) => handleInputChange('slippage', e.target.value)}
              placeholder="0.5"
            />
          </div>
          <div>
            <label>Swapper Address:</label>
            <input 
              type="text" 
              value={formState.swapperAddress} 
              onChange={(e) => handleInputChange('swapperAddress', e.target.value)}
              placeholder="ABCDEF..."
              style={{gridColumn: 'span 2'}}
            />
          </div>
          <div>
            <label>Deposit Address (Optional):</label>
            <input 
              type="text" 
              value={formState.depositAddress} 
              onChange={(e) => handleInputChange('depositAddress', e.target.value)}
              placeholder="Optional deposit address..."
              style={{gridColumn: 'span 2'}}
            />
          </div>
        </div>
        <button onClick={getQuotes} disabled={loading}>
          {loading ? 'Getting Quotes...' : 'Get Quotes'}
        </button>
      </div>

      {error && (
        <div className="error-message">
          Error: {error}
        </div>
      )}

      {quotes.length > 0 && (
        <div className="quotes-section">
          <h3>Available Quotes</h3>
          <div className="quotes-grid">
            {quotes.map((quote, index) => (
              <div key={index} className="quote-card">
                <h4>{quote.provider}</h4>
                <div className="quote-details">
                  <div className="amount-section">
                    <p><strong>Amount In:</strong> {formatAmount(quote.amount_in, quote.asset_in.fraction_decimals)} {quote.asset_in.unit_name}</p>
                    <p><strong>Amount Out:</strong> {formatAmount(quote.amount_out, quote.asset_out.fraction_decimals)} {quote.asset_out.unit_name}</p>
                    <p><strong>Amount Out (with slippage):</strong> {formatAmount(quote.amount_out_with_slippage, quote.asset_out.fraction_decimals)} {quote.asset_out.unit_name}</p>
                  </div>
                  
                  <div className="value-section">
                    <p><strong>Amount In USD:</strong> {formatUSD(quote.amount_in_usd_value)}</p>
                    <p><strong>Amount Out USD:</strong> {formatUSD(quote.amount_out_usd_value)}</p>
                  </div>
                  
                  <div className="price-section">
                    <p><strong>Price:</strong> {formatPrice(quote.price)} {quote.asset_out.unit_name} per {quote.asset_in.unit_name}</p>
                    <p><strong>Price Impact:</strong> {formatPercentage(quote.price_impact)}</p>
                    <p><strong>Slippage:</strong> {formatPercentage(quote.slippage)}</p>
                  </div>
                  
                  <div className="fees-section">
                    <p><strong>Exchange Fee:</strong> {formatAmount(quote.exchange_fee_amount, quote.asset_out.fraction_decimals)} {quote.asset_out.unit_name}</p>
                    <p><strong>Pera Fee:</strong> {formatAmount(quote.pera_fee_amount, quote.asset_out.fraction_decimals)} {quote.asset_out.unit_name}</p>
                  </div>
                </div>
                <button 
                  onClick={() => prepareTransactions(quote)}
                  disabled={preparingTransactions}
                  className="prepare-btn"
                >
                  {preparingTransactions ? 'Preparing...' : 'Prepare Transactions'}
                </button>
              </div>
            ))}
          </div>
        </div>
      )}

      {preparedTransactions && selectedQuote && (
        <div className="transactions-section">
          <h3>Prepared Transactions</h3>
          <div className="selected-quote">
            <h4>Selected Quote: {selectedQuote.provider}</h4>
            <p><strong>Quote ID:</strong> {selectedQuote.quote_id_str}</p>
            <p><strong>Amount In:</strong> {formatAmount(selectedQuote.amount_in, selectedQuote.asset_in.fraction_decimals)} {selectedQuote.asset_in.unit_name}</p>
            <p><strong>Amount Out:</strong> {formatAmount(selectedQuote.amount_out, selectedQuote.asset_out.fraction_decimals)} {selectedQuote.asset_out.unit_name}</p>
          </div>
          
          <div className="transaction-groups">
            <h4>Transaction Groups ({preparedTransactions.transaction_groups.length})</h4>
            {preparedTransactions.transaction_groups.map((group, index) => (
              <div key={index} className="transaction-group">
                <h5>Group {index + 1}: {group.purpose}</h5>
                <p><strong>Group ID:</strong> {group.transaction_group_id}</p>
                <p><strong>Transactions:</strong> {group.transactions.length}</p>
                <p><strong>Signed Transactions:</strong> {group.signed_transactions.filter(txn => txn !== null).length}</p>
                
                <details>
                  <summary>View Transaction Details</summary>
                  <div className="transaction-details">
                    <h6>Unsigned Transactions:</h6>
                    {group.transactions.map((txn, txnIndex) => {
                      const decodedTxn = decodeTransaction(txn)
                      if (decodedTxn) {
                        return renderTransactionDetails(decodedTxn, txnIndex, false)
                      }
                      return null
                    })}
                    
                    {group.signed_transactions.some(txn => txn !== null) && (
                      <>
                        <h6>Signed Transactions:</h6>
                        {group.signed_transactions.map((signedTxn, txnIndex) => {
                          if (signedTxn === null) return null
                          const decodedSignedTxn = decodeSignedTransaction(signedTxn)
                          if (decodedSignedTxn) {
                            return renderTransactionDetails(decodedSignedTxn.txn, txnIndex, true)
                          }
                          return null
                        })}
                      </>
                    )}
                  </div>
                </details>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}

export default CustomUIExample
