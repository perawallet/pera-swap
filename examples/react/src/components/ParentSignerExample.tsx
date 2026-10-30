import { useEffect, useRef, useState } from 'react'
import {
    PERA_SWAP_WIDGET_URL,
    WidgetController,
    type WidgetNetwork,
    type WidgetAppTheme,
} from '@perawallet/swap'
import { useWallet } from '../context/WalletContext'
import peraWalletManager from '../context/PeraWalletManager'

type StatusType = 'info' | 'success' | 'error'

const WIDGET_URLS = {
    production: PERA_SWAP_WIDGET_URL,
    staging: 'https://swap-widget-staging.perawallet.app',
}

type WidgetEnvironment = keyof typeof WIDGET_URLS

export default function ParentSignerExample() {
    const { isConnected, accountAddress: walletAddress } = useWallet()
    const [config, setConfig] = useState({
        widget: 'production' as WidgetEnvironment,
        network: 'mainnet' as WidgetNetwork,
        theme: 'light' as WidgetAppTheme,
        assetIn: '0', // ALGO
        assetOut: '31566704', // USDC
        useParentSigner: true,
        accountAddress: '',
    })
    const [widgetUrl, setWidgetUrl] = useState<string>('')
    const iframeRef = useRef<HTMLIFrameElement>(null)
    // Theme the loaded widget shows; the URL sets it when the widget loads.
    const widgetThemeRef = useRef(config.theme)
    const [status, setStatus] = useState<{
        text: string
        type: StatusType
    } | null>(null)

    const report = (text: string, type: StatusType) => setStatus({ text, type })

    // The signer callback outlives renders, so read the latest connection state from refs.
    const isConnectedRef = useRef(isConnected)
    const walletAddressRef = useRef(walletAddress)
    useEffect(() => {
        isConnectedRef.current = isConnected
        walletAddressRef.current = walletAddress
    }, [isConnected, walletAddress])

    // Update account address when wallet connects
    useEffect(() => {
        if (isConnected && walletAddress) {
            setConfig(prev => ({ ...prev, accountAddress: walletAddress }))
        }
    }, [isConnected, walletAddress])

    // Listen for widget messages only while the widget is on the page.
    useEffect(() => {
        if (!widgetUrl) {
            return
        }

        const controller = new WidgetController({
            // The controller only trusts the widget it was told about.
            allowedOrigins: [new URL(widgetUrl).origin],
            onTxnSignRequest: async ({ txGroups }) => {
                report(
                    'Received transaction signing request from widget',
                    'info',
                )

                if (!isConnectedRef.current) {
                    const message =
                        'Wallet not connected. Please connect your wallet first.'
                    report(message, 'error')
                    throw new Error(message)
                }

                try {
                    // The Pera API already signed the transactions that aren't
                    // from this account; Pera Connect must skip them
                    // (`signers: []`) or it rejects the wallet's signatures.
                    const signedTxns = await peraWalletManager.signTransaction(
                        txGroups.map(transactions =>
                            transactions.map(txn =>
                                txn.sender.toString() ===
                                walletAddressRef.current
                                    ? { txn }
                                    : { txn, signers: [] },
                            ),
                        ),
                    )
                    report('Transactions signed successfully', 'success')
                    return signedTxns
                } catch (error) {
                    report(
                        `Failed to sign transactions: ${String(error)}`,
                        'error',
                    )
                    throw error
                }
            },
            onSwapSuccess: ({ signedTxns }) => {
                report(
                    `Swap completed successfully (${signedTxns.length} transactions)`,
                    'success',
                )
            },
        })

        controller.addWidgetEventListeners()
        return () => controller.removeWidgetEventListeners()
    }, [widgetUrl])

    // Switch the loaded widget's theme without reloading it.
    useEffect(() => {
        const targetWindow = iframeRef.current?.contentWindow
        if (
            !widgetUrl ||
            !targetWindow ||
            config.theme === widgetThemeRef.current
        ) {
            return
        }
        WidgetController.sendMessageToWidget({
            data: { type: 'UPDATE_THEME', message: config.theme },
            targetWindow,
            targetOrigin: new URL(widgetUrl).origin,
        })
        widgetThemeRef.current = config.theme
    }, [config.theme, widgetUrl])

    const generateWidgetUrl = () => {
        if (config.useParentSigner && !config.accountAddress) {
            report(
                'Please enter an account address when using parent signer',
                'error',
            )
            return
        }

        widgetThemeRef.current = config.theme
        setWidgetUrl(
            WidgetController.generateWidgetUrl({
                widgetUrl: WIDGET_URLS[config.widget],
                network: config.network,
                theme: config.theme,
                assetIn: Number(config.assetIn),
                assetOut: Number(config.assetOut),
                iframeBg: config.theme === 'dark' ? '#242424' : '#FFFFFF',
                useParentSigner: config.useParentSigner,
                accountAddress: config.accountAddress,
            }),
        )
        report('Widget loaded with parent signer enabled', 'success')
    }

    return (
        <div className='example-card'>
            <h2>Example 4: Parent Signer Integration</h2>
            <p>
                Demonstrate parent signer functionality - handle transaction
                signing in the parent application
            </p>

            <div className='wallet-status'>
                <h3>Wallet Connection Status</h3>
                <div
                    className={`status-indicator ${isConnected ? 'connected' : 'disconnected'}`}
                >
                    {isConnected ? (
                        <span>
                            ✅ Connected: {walletAddress?.slice(0, 6)}...
                            {walletAddress?.slice(-4)}
                        </span>
                    ) : (
                        <span>
                            ❌ Not Connected - Please connect your wallet using
                            the button in the top right
                        </span>
                    )}
                </div>
            </div>

            <div className='config-section'>
                <h3>Configuration</h3>
                <div className='config-grid'>
                    <div>
                        <label>Widget:</label>
                        <select
                            value={config.widget}
                            onChange={e =>
                                setConfig({
                                    ...config,
                                    widget: e.target.value as WidgetEnvironment,
                                })
                            }
                        >
                            <option value='production'>Production</option>
                            <option value='staging'>Staging</option>
                        </select>
                    </div>
                    <div>
                        <label>Network:</label>
                        <select
                            value={config.network}
                            onChange={e =>
                                setConfig({
                                    ...config,
                                    network: e.target.value as WidgetNetwork,
                                })
                            }
                        >
                            <option value='mainnet'>Mainnet</option>
                            <option value='testnet'>Testnet</option>
                        </select>
                    </div>
                    <div>
                        <label>Theme:</label>
                        <select
                            value={config.theme}
                            onChange={e =>
                                setConfig({
                                    ...config,
                                    theme: e.target.value as WidgetAppTheme,
                                })
                            }
                        >
                            <option value='light'>Light</option>
                            <option value='dark'>Dark</option>
                        </select>
                    </div>
                    <div>
                        <label>Asset In (ID):</label>
                        <input
                            type='text'
                            value={config.assetIn}
                            onChange={e =>
                                setConfig({
                                    ...config,
                                    assetIn: e.target.value,
                                })
                            }
                            pattern='[0-9]*'
                            placeholder='0 for ALGO'
                        />
                    </div>
                    <div>
                        <label>Asset Out (ID):</label>
                        <input
                            type='text'
                            value={config.assetOut}
                            onChange={e =>
                                setConfig({
                                    ...config,
                                    assetOut: e.target.value,
                                })
                            }
                            pattern='[0-9]*'
                            placeholder='31566704 for USDC'
                        />
                    </div>
                    <div>
                        <label>Use Parent Signer:</label>
                        <select
                            value={config.useParentSigner.toString()}
                            onChange={e =>
                                setConfig({
                                    ...config,
                                    useParentSigner: e.target.value === 'true',
                                })
                            }
                        >
                            <option value='true'>Yes</option>
                            <option value='false'>No</option>
                        </select>
                    </div>
                    <div>
                        <label>Account Address:</label>
                        <input
                            type='text'
                            value={config.accountAddress}
                            onChange={e =>
                                setConfig({
                                    ...config,
                                    accountAddress: e.target.value,
                                })
                            }
                            placeholder={
                                isConnected
                                    ? 'Auto-filled from wallet'
                                    : 'ABCDEF...'
                            }
                            disabled={!config.useParentSigner || isConnected}
                        />
                    </div>
                </div>
                <div className='button-container'>
                    <button onClick={generateWidgetUrl}>Load Widget</button>
                </div>
            </div>

            {status && (
                <div className={`status-message status-${status.type}`}>
                    {status.text}
                </div>
            )}

            {widgetUrl && (
                <div className='result-section'>
                    <h3>Generated URL</h3>
                    <div className='url-display'>
                        <input
                            type='text'
                            value={widgetUrl}
                            readOnly
                        />
                        <button
                            onClick={() =>
                                void navigator.clipboard.writeText(widgetUrl)
                            }
                        >
                            Copy
                        </button>
                    </div>
                    <div className='iframe-preview'>
                        <h4>Widget Preview:</h4>
                        <iframe
                            ref={iframeRef}
                            src={widgetUrl}
                            width='100%'
                            height='488px'
                            style={{ border: 'none', borderRadius: '12px' }}
                            title='Pera Swap Widget with Parent Signer'
                        />
                    </div>
                </div>
            )}
        </div>
    )
}
