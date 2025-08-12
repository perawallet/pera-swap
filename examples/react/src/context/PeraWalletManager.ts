import { PeraWalletConnect } from '@perawallet/connect'

interface PeraConnectEventHandlers {
  onDisconnect: () => Promise<void>
}

class PeraConnect extends PeraWalletConnect {
  connectAndSetupEventHandlers(handlers: PeraConnectEventHandlers): Promise<string[]> {
    return new Promise((resolve, reject) => {
      super
        .connect()
        .then((data) => {
          this.setupEventHandlers(handlers)
          resolve(data)
        })
        .catch((error) => {
          // https://github.com/perawallet/connect/blob/main/src/util/PeraWalletConnectError.ts
          // Ignoring the modal closed errors
          if (error.data?.type === "CONNECT_MODAL_CLOSED") {
            return
          }
          reject(error)
        })
    })
  }

  reconnectSessionAndSetupEventHandlers(
    handlers: PeraConnectEventHandlers
  ): Promise<string[]> {
    const promise = super.reconnectSession()

    promise
      .then(() => {
        this.setupEventHandlers(handlers)

        // If the connector somehow disconnects (could be network issue), we reset the account data
        if (!this.isConnected) {
          handlers.onDisconnect()
        }
      })
      .catch((error) => {
        console.log('Reconnect session error:', error.data)
      })

    return promise
  }



  private setupEventHandlers({ onDisconnect }: PeraConnectEventHandlers) {
    this.connector?.on("disconnect", () => {
      // For some reason, when we pass the `disconnectAccount` directly as the callback, it doesn't work
      onDisconnect()
    })
  }
}

const peraWalletManager = new PeraConnect({
  shouldShowSignTxnToast: true,
  compactMode: true,
})

export default peraWalletManager
