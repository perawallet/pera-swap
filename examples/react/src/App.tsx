import ConnectButton from './components/ConnectButton'
import CustomUIExample from './components/CustomUIExample'
import DirectIframeExample from './components/DirectIframeExample'
import ParentSignerExample from './components/ParentSignerExample'
import WidgetUrlExample from './components/WidgetUrlExample'
import { WalletProvider } from './context/WalletContext'
import './App.css'

// Signing requests from the widget are handled by the WidgetController in
// ParentSignerExample. A second page-level `message` listener here would make
// the wallet prompt twice for the same request.
export default function App() {
    return (
        <WalletProvider>
            <div className='app'>
                <ConnectButton />
                <header>
                    <h1>Pera Swap Examples</h1>
                    <p>
                        Demonstrating four different ways to integrate the Pera
                        Swap Widget
                    </p>
                </header>

                <main>
                    <WidgetUrlExample />
                    <DirectIframeExample />
                    <CustomUIExample />
                    <ParentSignerExample />
                </main>

                <footer>
                    <p>
                        <a
                            href='https://github.com/perawallet/pera-swap'
                            target='_blank'
                            rel='noopener noreferrer'
                        >
                            View on GitHub
                        </a>
                    </p>
                </footer>
            </div>
        </WalletProvider>
    )
}
