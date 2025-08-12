import React from 'react'
import WidgetUrlExample from './components/WidgetUrlExample'
import DirectIframeExample from './components/DirectIframeExample'
import CustomUIExample from './components/CustomUIExample'
import ParentSignerExample from './components/ParentSignerExample'
import './App.css'

const App: React.FC = () => {
  return (
    <div className="app">
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
          <a href="https://github.com/perawallet/swap-widget" target="_blank" rel="noopener noreferrer">
            View on GitHub
          </a>
        </p>
      </footer>
    </div>
  )
}

export default App
