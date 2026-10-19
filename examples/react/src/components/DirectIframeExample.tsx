import { useRef, useState } from 'react'
import {
    WidgetController,
    type WidgetAppTheme,
    type WidgetConfig,
    type WidgetNetwork,
} from '@perawallet/swap'

export default function DirectIframeExample() {
    const [config, setConfig] = useState<WidgetConfig>({
        network: 'mainnet',
        theme: 'dark',
        assetIn: '0', // ALGO
        assetOut: '31566704', // USDC
    })
    const [iframeElement, setIframeElement] =
        useState<HTMLIFrameElement | null>(null)
    const containerRef = useRef<HTMLDivElement>(null)

    const createIframe = () => {
        const iframe = WidgetController.createWidgetIframe(config, {
            width: '100%',
            height: '400px',
            className: 'swap-iframe',
        })
        setIframeElement(iframe)
    }

    const addIframeToPage = () => {
        if (iframeElement && containerRef.current) {
            containerRef.current.replaceChildren(iframeElement)
        }
    }

    return (
        <div className='example-card'>
            <h2>Example 2: Direct Iframe Creation</h2>
            <p>
                Create an iframe element programmatically and add it to the page
            </p>

            <div className='config-section'>
                <h3>Configuration</h3>
                <div className='config-grid'>
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
                </div>
                <button onClick={createIframe}>Create Iframe</button>
                {iframeElement && (
                    <button onClick={addIframeToPage}>Add to Page</button>
                )}
            </div>

            <div
                ref={containerRef}
                className='iframe-container'
            />
        </div>
    )
}
