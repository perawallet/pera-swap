import React, { useState } from 'react'
import { WidgetController } from '@perawallet/swap'
import { WidgetConfig } from '@perawallet/swap'

const WidgetUrlExample: React.FC = () => {
  const [config, setConfig] = useState<WidgetConfig>({
    network: 'mainnet',
    theme: 'light',
    assetIn: '0', // ALGO
    assetOut: '31566704', // USDC
  })
  const [widgetUrl, setWidgetUrl] = useState<string>('')

  const generateUrl = () => {
    const url = WidgetController.generateWidgetUrl(config)
    setWidgetUrl(url)
  }

  const copyUrl = () => {
    navigator.clipboard.writeText(widgetUrl)
  }

  return (
    <div className="example-card">
      <h2>Example 1: Generate Widget URL</h2>
      <p>Generate a URL for the Pera Swap Widget iframe</p>
      
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
        </div>
        <button onClick={generateUrl}>Generate URL</button>
      </div>

      {widgetUrl && (
        <div className="result-section">
          <h3>Generated URL</h3>
          <div className="url-display">
            <input type="text" value={widgetUrl} readOnly />
            <button onClick={copyUrl}>Copy</button>
          </div>
          <div className="iframe-preview">
            <h4>Preview:</h4>
            <iframe 
              src={widgetUrl} 
              width="100%" 
              height="400px" 
              style={{border: 'none', borderRadius: '12px'}}
              title="Pera Swap Widget"
            />
          </div>
        </div>
      )}
    </div>
  )
}

export default WidgetUrlExample
