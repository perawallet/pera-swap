import { PeraSwap } from './swap'
import algosdk, { Transaction } from 'algosdk'

// TODO: Add proper types for the swap success response
export interface SwapSuccessResponse {
  [key: string]: unknown
}

export interface WidgetControllerConfig {
  onTxnSignRequest?: (data: { txGroups: Transaction[][] }) => Promise<Uint8Array[]>
  onTxnSignRequestTimeout?: () => void
  onSwapSuccess?: (response: SwapSuccessResponse) => void
}

export interface WidgetControllerOptions {
  network?: 'mainnet' | 'testnet'
  parentUrlOrigin?: string
  themeVariables?: {
    theme?: 'light' | 'dark'
    iframeBg?: string
  }
  assetIds?: number[]
  useParentSigner?: boolean
  accountAddress?: string
}

export class WidgetController {
  private config: WidgetControllerConfig
  private peraSwap: PeraSwap

  constructor(config: WidgetControllerConfig = {}) {
    this.config = config
    this.peraSwap = new PeraSwap()
  }

  /**
   * Generate widget iframe URL with parent signer support
   */
  static generateWidgetIframeUrl(options: WidgetControllerOptions): string {
    const peraSwap = new PeraSwap(options.network || 'mainnet')
    
    const widgetConfig = {
      network: options.network || 'mainnet',
      theme: options.themeVariables?.theme || 'light',
      iframeBg: options.themeVariables?.iframeBg,
      useParentSigner: options.useParentSigner || false,
      accountAddress: options.accountAddress,
      assetIn: options.assetIds?.[0] || 0,
      assetOut: options.assetIds?.[1] || 31566704 // USDC
    }

    return peraSwap.generateWidgetUrl(widgetConfig)
  }

  /**
   * Send message to widget iframe
   */
  static sendMessageToWidget({
    data,
    targetWindow
  }: {
    data: { message: { type: string; [key: string]: unknown } }
    targetWindow?: Window | null
  }): void {
    if (targetWindow) {
      targetWindow.postMessage(data, '*')
    }
  }

  /**
   * Add event listeners for widget communication
   */
  addWidgetEventListeners(): void {
    window.addEventListener('message', this.handleMessage.bind(this))
  }

  /**
   * Remove event listeners
   */
  removeWidgetEventListeners(): void {
    window.removeEventListener('message', this.handleMessage.bind(this))
  }

  /**
   * Handle messages from the widget
   */
  private handleMessage(event: MessageEvent): void {
    // Accept messages from the widget iframe; only require a structured payload
    if (!event.data || !event.data.type || !event.data.message) {
      return
    }

    switch (event.data.type) {
      case 'TXN_SIGN_REQUEST': {
        const { txGroups } = event.data.message as { txGroups: Uint8Array[][] }

        // Decode bytes to Transaction objects before handing to consumer
        const decodedTxGroups: Transaction[][] = txGroups.map((group) =>
          group.map((bytes) => algosdk.decodeUnsignedTransaction(bytes))
        )

        if (this.config.onTxnSignRequest) {
          this.config.onTxnSignRequest({ txGroups: decodedTxGroups })
            .then((signedTxns) => {
              WidgetController.sendMessageToWidget({
                data: {
                  message: {
                    type: 'TXN_SIGN_RESPONSE',
                    signedTxns
                  }
                },
                targetWindow: event.source as Window
              })
            })
            .catch((error) => {
              WidgetController.sendMessageToWidget({
                data: {
                  message: {
                    type: 'FAILED_TXN_SIGN',
                    error
                  }
                },
                targetWindow: event.source as Window
              })
            })
        }
        break
      }

      case 'TXN_SIGN_REQUEST_TIMEOUT': {
        if (this.config.onTxnSignRequestTimeout) {
          this.config.onTxnSignRequestTimeout()
        }
        break
      }

      case 'SWAP_SUCCESS': {
        if (this.config.onSwapSuccess) {
          this.config.onSwapSuccess(event.data.message)
        }
        break
      }

      default:
        break
    }
  }
}
