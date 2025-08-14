import React, {useEffect} from 'react'
import algosdk from 'algosdk'
import {WalletProvider} from './context/WalletContext'
import ConnectButton from './components/ConnectButton'
import WidgetUrlExample from './components/WidgetUrlExample'
import DirectIframeExample from './components/DirectIframeExample'
import CustomUIExample from './components/CustomUIExample'
import ParentSignerExample from './components/ParentSignerExample'
import {
  TxnSignRequestMessage,
  WidgetController
} from '@perawallet/swap'
import peraWalletManager from './context/PeraWalletManager'
import './App.css'

const App: React.FC = () => {
  useEffect(() => {
    // Add message listener for iframe communication
    const handleMessage = (event: MessageEvent) => {
      // Handle messages from iframe widgets
      if (event.data && event.data.type) {
        if (event.data.type === 'TXN_SIGN_REQUEST') {
          const message = event.data as TxnSignRequestMessage;
          // txGroups arrive as bytes over postMessage; decode to Transaction before signing
          const txGroupsBytes = message.message.txGroups
          const txGroups = txGroupsBytes.map((group) => group.map((bytes) => algosdk.decodeUnsignedTransaction(bytes)))
          peraWalletManager.signTransaction(txGroups.map((transactions) => transactions.map((txn) => ({txn}))))
            .then((signedTxns) => {
              // Send response back to widget
              WidgetController.sendMessageToWidget({
                data: {
                  message: {
                    type: 'TXN_SIGN_RESPONSE',
                    signedTxns
                  }
                },
                targetWindow: event.source as Window
              });
            })
            .catch((error) => {
              WidgetController.sendMessageToWidget({
                data: {
                  message: {
                    type: 'FAILED_TXN_SIGN',
                    error: error instanceof Error ? error : new Error(String(error))
                  }
                },
                targetWindow: event.source as Window
              });
            });
        }
      }
    };

    window.addEventListener('message', handleMessage);

    return () => {
      window.removeEventListener('message', handleMessage);
    };
  }, []);

  return (
    <WalletProvider>
      <div className="app">
        <ConnectButton />
        <header>
          <h1>Pera Swap Examples</h1>
          <p>Demonstrating four different ways to integrate the Pera Swap Widget</p>
        </header>

        <main>
          <WidgetUrlExample />
          <DirectIframeExample />
          <CustomUIExample />
          <ParentSignerExample />
        </main>

        <footer>
          <p>
            <a href="https://github.com/perawallet/pera-swap" target="_blank" rel="noopener noreferrer">
              View on GitHub
            </a>
          </p>
        </footer>
      </div>
    </WalletProvider>
  )
}

export default App
