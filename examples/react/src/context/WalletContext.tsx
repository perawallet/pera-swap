import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react'
import peraWalletManager from './PeraWalletManager'

interface WalletContextType {
  isConnected: boolean
  isConnecting: boolean
  accountAddress: string | null
  connect: () => Promise<void>
  disconnect: () => void
}

const WalletContext = createContext<WalletContextType | undefined>(undefined)

export const useWallet = () => {
  const context = useContext(WalletContext)
  if (context === undefined) {
    throw new Error('useWallet must be used within a WalletProvider')
  }
  return context
}

interface WalletProviderProps {
  children: ReactNode
}

export const WalletProvider: React.FC<WalletProviderProps> = ({ children }) => {
  const [isConnected, setIsConnected] = useState(false)
  const [isConnecting, setIsConnecting] = useState(false)
  const [accountAddress, setAccountAddress] = useState<string | null>(null)

  useEffect(() => {
    // Auto-reconnect on page refresh/visit
    const handleReconnect = async () => {
      setIsConnecting(true)
      try {
        const accounts = await peraWalletManager.reconnectSessionAndSetupEventHandlers({
          onDisconnect: async () => {
            setIsConnected(false)
            setAccountAddress(null)
          }
        })

        if (accounts.length) {
          setIsConnected(true)
          setAccountAddress(accounts[0])
        }
      } catch (error) {
        console.error('No existing session to reconnect:', error)
      } finally {
        setIsConnecting(false)
      }
    }

    // Attempt to reconnect on mount
    handleReconnect()

    return () => {
      // Clean up listeners if possible
      try {
        peraWalletManager.connector?.off('connect')
        peraWalletManager.connector?.off('disconnect')
      } catch (error) {
        console.warn('Could not remove listeners:', error)
      }
    }
  }, [])

  const connect = async () => {
    try {
      const accounts = await peraWalletManager.connectAndSetupEventHandlers({
        onDisconnect: async () => {
          setIsConnected(false)
          setAccountAddress(null)
        }
      })
      setIsConnected(true)
      setAccountAddress(accounts[0])
    } catch (error) {
      console.error('Failed to connect to Pera Wallet:', error)
    }
  }

  const disconnect = () => {
    peraWalletManager.disconnect()
    setIsConnected(false)
    setAccountAddress(null)
  }

  const value: WalletContextType = {
    isConnected,
    isConnecting,
    accountAddress,
    connect,
    disconnect,
  }

  return (
    <WalletContext.Provider value={value}>
      {children}
    </WalletContext.Provider>
  )
}
