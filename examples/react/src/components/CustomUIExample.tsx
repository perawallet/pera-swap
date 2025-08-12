import React, { useState } from 'react'
import { PeraSwap } from '@perawallet/swap'

const CustomUIExample: React.FC = () => {
  const [assetInId, setAssetInId] = useState<string>('0') // ALGO
  const [assetOutId, setAssetOutId] = useState<string>('31566704') // USDC
  const [amount, setAmount] = useState<string>('1000000') // 1 ALGO
  const [slippage, setSlippage] = useState<string>('0.5')
  const [swapperAddress, setSwapperAddress] = useState<string>('')
  const [quotes, setQuotes] = useState<any[]>([])
  const [loading, setLoading] = useState<boolean>(false)
  const [error, setError] = useState<string>('')

  const peraSwap = new PeraSwap('mainnet')

  const getQuotes = async () => {
    if (!swapperAddress) {
      setError('Please enter a swapper address')
      return
    }

    setLoading(true)
    setError('')

    try {
      const result = await peraSwap.createSwapQuote({
        assetInId: Number(assetInId),
        assetOutId: Number(assetOutId),
        amount,
        slippage,
        swapperAddress
      })
      setQuotes(result.results)
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to get quotes')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="example-card">
      <h2>Example 3: Custom UI with Swap API</h2>
      <p>Build your own UI and use swap API methods directly</p>
      
      <div className="config-section">
        <h3>Swap Parameters</h3>
        <div className="config-grid">
          <div>
            <label>Asset In ID:</label>
            <input 
              type="text" 
              value={assetInId} 
              onChange={(e) => setAssetInId(e.target.value)}
              pattern="[0-9]*"
              placeholder="0 for ALGO"
            />
          </div>
          <div>
            <label>Asset Out ID:</label>
            <input 
              type="text" 
              value={assetOutId} 
              onChange={(e) => setAssetOutId(e.target.value)}
              pattern="[0-9]*"
              placeholder="31566704 for USDC"
            />
          </div>
          <div>
            <label>Amount (microAlgos):</label>
            <input 
              type="text" 
              value={amount} 
              onChange={(e) => setAmount(e.target.value)}
              placeholder="1000000"
            />
          </div>
          <div>
            <label>Slippage (%):</label>
            <input 
              type="text" 
              value={slippage} 
              onChange={(e) => setSlippage(e.target.value)}
              placeholder="0.5"
            />
          </div>
          <div>
            <label>Swapper Address:</label>
            <input 
              type="text" 
              value={swapperAddress} 
              onChange={(e) => setSwapperAddress(e.target.value)}
              placeholder="ABCDEF..."
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
                <p><strong>Amount In:</strong> {quote.amount_in}</p>
                <p><strong>Amount Out:</strong> {quote.amount_out}</p>
                <p><strong>Price:</strong> {quote.price}</p>
                <p><strong>Price Impact:</strong> {quote.price_impact}%</p>
                <p><strong>Slippage:</strong> {quote.slippage}%</p>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}

export default CustomUIExample
