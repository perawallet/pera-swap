import algosdk, { Transaction } from 'algosdk'
import { WidgetConfig } from './types'
import { DEFAULT_WIDGET_URL } from './utils'

export interface WidgetControllerConfig {
  onTxnSignRequest?: (data: { txGroups: Transaction[][] }) => Promise<Uint8Array[]>
  onTxnSignRequestTimeout?: () => void
  onSwapSuccess?: (response: Uint8Array[]) => void
}



export class WidgetController {
  private config: WidgetControllerConfig

  constructor(config: WidgetControllerConfig = {}) {
    this.config = config
  }

  /**
   * Generate a URL for the Pera Swap Widget iframe
   */
  static generateWidgetUrl(config: WidgetConfig = {}): string {
    const url = new URL(DEFAULT_WIDGET_URL)
    
    // Add search parameters based on config
    if (config.network) {
      url.searchParams.set('network', config.network)
    }
    
    if (config.theme) {
      url.searchParams.set('theme', config.theme)
    }
    
    if (config.assetIn !== undefined) {
      url.searchParams.set('assetIn', String(config.assetIn))
    }
    
    if (config.assetOut !== undefined) {
      url.searchParams.set('assetOut', String(config.assetOut))
    }
    
    if (config.iframeBg) {
      url.searchParams.set('iframeBg', config.iframeBg)
    }
    
    if (config.useParentSigner) {
      url.searchParams.set('useParentSigner', 'true')
      
      if (config.accountAddress) {
        url.searchParams.set('accountAddress', config.accountAddress)
      }
    }
    
    return url.toString()
  }



  /**
   * Create an iframe element with the swap widget
   */
  static createWidgetIframe(
    config: WidgetConfig = {},
    options: {
      width?: string;
      height?: string;
      className?: string;
      id?: string;
    } = {}
  ): HTMLIFrameElement {
    const iframe = document.createElement('iframe')
    
    iframe.src = WidgetController.generateWidgetUrl(config)
    iframe.width = options.width || '100%'
    iframe.height = options.height || '488px'
    
    if (options.className) {
      iframe.className = options.className
    }
    
    if (options.id) {
      iframe.id = options.id
    }
    
    return iframe
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
