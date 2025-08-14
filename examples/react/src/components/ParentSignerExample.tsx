import React, { useState, useRef, useEffect } from 'react'
import { WidgetController } from '@perawallet/swap'
import { useWallet } from '../context/WalletContext'
import peraWalletManager from '../context/PeraWalletManager'

const ParentSignerExample: React.FC = () => {
  const { isConnected, accountAddress: walletAddress } = useWallet()
  const [config, setConfig] = useState({
    network: 'mainnet' as 'mainnet' | 'testnet',
    theme: 'light' as 'light' | 'dark',
    assetIn: '0', // ALGO
    assetOut: '31566704', // USDC
    useParentSigner: true,
    accountAddress: '',
  })
  const [widgetUrl, setWidgetUrl] = useState<string>('')
  const [status, setStatus] = useState<string>('')
  const [statusType, setStatusType] = useState<'info' | 'success' | 'error'>('info')
  const iframeRef = useRef<HTMLIFrameElement>(null)
  const controllerRef = useRef<WidgetController | null>(null)

  // Update account address when wallet connects
  useEffect(() => {
    if (isConnected && walletAddress) {
      setConfig(prev => ({ ...prev, accountAddress: walletAddress }))
    }
  }, [isConnected, walletAddress])

  const generateWidgetUrl = () => {
    if (config.useParentSigner && !config.accountAddress) {
      setStatus('Please enter an account address when using parent signer')
      setStatusType('error')
      return
    }

    const widgetUrl = WidgetController.generateWidgetIframeUrl({
      network: config.network,
      useParentSigner: config.useParentSigner,
      accountAddress: config.accountAddress,
      themeVariables: {
        theme: config.theme,
        iframeBg: config.theme === 'dark' ? '#242424' : '#FFFFFF'
      },
      assetIds: [Number(config.assetIn), Number(config.assetOut)]
    })

    setWidgetUrl(widgetUrl)
    setStatus('Widget URL generated successfully')
    setStatusType('success')
  }

  const setupController = () => {
    if (controllerRef.current) {
      controllerRef.current.removeWidgetEventListeners()
    }
    
    controllerRef.current = new WidgetController({
      onTxnSignRequest: async ({ txGroups }) => {
        setStatus('Received transaction signing request from widget')
        setStatusType('info')
        
        if (!isConnected) {
          const error = 'Wallet not connected. Please connect your wallet first.'
          setStatus(error)
          setStatusType('error')
          throw new Error(error)
        }
        
        try {
          const signerTransactionGroups = txGroups.map((transactions) => 
            transactions.map((txn) => ({ txn }))
          )
          const signedTxns = await peraWalletManager.signTransaction(signerTransactionGroups)
          setStatus('Transactions signed successfully')
          setStatusType('success')
          return signedTxns
        } catch (error) {
          setStatus(`Failed to sign transactions: ${error}`)
          setStatusType('error')
          throw error
        }
      },
      onTxnSignRequestTimeout: () => {
        setStatus('Transaction signing request timed out')
        setStatusType('error')
      },
      onSwapSuccess: () => {
        setStatus('Swap completed successfully!')
        setStatusType('success')
      }
    })

    controllerRef.current.addWidgetEventListeners()
  }

  const loadWidget = () => {
    if (!widgetUrl) {
      setStatus('Please generate a widget URL first')
      setStatusType('error')
      return
    }

    setupController()
    setStatus('Widget loaded with parent signer enabled')
    setStatusType('info')
  }

  useEffect(() => {
    return () => {
      if (controllerRef.current) {
        controllerRef.current.removeWidgetEventListeners()
      }
    }
  }, [])

  return (
    <div className="example-card">
      <h2>Example 4: Parent Signer Integration</h2>
      <p>Demonstrate parent signer functionality - handle transaction signing in the parent application</p>
      
      <div className="wallet-status">
        <h3>Wallet Connection Status</h3>
        <div className={`status-indicator ${isConnected ? 'connected' : 'disconnected'}`}>
          {isConnected ? (
            <span>✅ Connected: {walletAddress?.slice(0, 6)}...{walletAddress?.slice(-4)}</span>
          ) : (
            <span>❌ Not Connected - Please connect your wallet using the button in the top right</span>
          )}
        </div>
      </div>
      
      <div className="config-section">
        <h3>Configuration</h3>
        <div className="config-grid">
          <div>
            <label>Network:</label>
            <select 
              value={config.network} 
              onChange={(e) => setConfig({...config, network: e.target.value as 'mainnet' | 'testnet'})}
            >
              <option value="mainnet">Mainnet</option>
              <option value="testnet">Testnet</option>
            </select>
          </div>
          <div>
            <label>Theme:</label>
            <select 
              value={config.theme} 
              onChange={(e) => setConfig({...config, theme: e.target.value as 'light' | 'dark'})}
            >
              <option value="light">Light</option>
              <option value="dark">Dark</option>
            </select>
          </div>
          <div>
            <label>Asset In (ID):</label>
            <input 
              type="text" 
              value={config.assetIn} 
              onChange={(e) => setConfig({...config, assetIn: e.target.value})}
              pattern="[0-9]*"
              placeholder="0 for ALGO"
            />
          </div>
          <div>
            <label>Asset Out (ID):</label>
            <input 
              type="text" 
              value={config.assetOut} 
              onChange={(e) => setConfig({...config, assetOut: e.target.value})}
              pattern="[0-9]*"
              placeholder="31566704 for USDC"
            />
          </div>
          <div>
            <label>Use Parent Signer:</label>
            <select 
              value={config.useParentSigner.toString()} 
              onChange={(e) => setConfig({...config, useParentSigner: e.target.value === 'true'})}
            >
              <option value="true">Yes</option>
              <option value="false">No</option>
            </select>
          </div>
          <div>
            <label>Account Address:</label>
            <input 
              type="text" 
              value={config.accountAddress} 
              onChange={(e) => setConfig({...config, accountAddress: e.target.value})}
              placeholder={isConnected ? "Auto-filled from wallet" : "ABCDEF..."}
              disabled={!config.useParentSigner || isConnected}
            />
          </div>
        </div>
        <div className="button-container">
          <button onClick={generateWidgetUrl}>Generate Widget URL</button>
          <button onClick={loadWidget} disabled={!widgetUrl}>Load Widget</button>
        </div>
      </div>

      {status && (
        <div className={`status-message status-${statusType}`}>
          {status}
        </div>
      )}

      {widgetUrl && (
        <div className="result-section">
          <h3>Generated URL</h3>
          <div className="url-display">
            <input type="text" value={widgetUrl} readOnly />
            <button onClick={() => navigator.clipboard.writeText(widgetUrl)}>Copy</button>
          </div>
          <div className="iframe-preview">
            <h4>Widget Preview:</h4>
            <iframe 
              ref={iframeRef}
              src={widgetUrl} 
              width="100%" 
              height="488px" 
              style={{border: 'none', borderRadius: '12px'}}
              title="Pera Swap Widget with Parent Signer"
            />
          </div>
        </div>
      )}
    </div>
  )
}

export default ParentSignerExample
