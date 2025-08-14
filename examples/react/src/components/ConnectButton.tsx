import React from 'react'
import { useWallet } from '../context/WalletContext'
import './ConnectButton.css'

const ConnectButton: React.FC = () => {
  const { isConnected, isConnecting, accountAddress, connect, disconnect } = useWallet()

  const handleClick = () => {
    if (isConnected) {
      disconnect()
    } else {
      connect()
    }
  }

  const formatAddress = (address: string) => {
    return `${address.slice(0, 6)}...${address.slice(-4)}`
  }

  return (
    <div className="connect-button-container">
      <button 
        className={`connect-button ${isConnected ? 'connected' : 'disconnected'}`}
        onClick={handleClick}
        disabled={isConnecting}
      >
        {isConnecting ? (
          <>
            <span className="status-indicator connecting"></span>
            Connecting...
          </>
        ) : isConnected ? (
          <>
            <span className="status-indicator connected"></span>
            {formatAddress(accountAddress!)}
          </>
        ) : (
          <>
            <span className="status-indicator disconnected"></span>
            Connect Wallet
          </>
        )}
      </button>
    </div>
  )
}

export default ConnectButton
