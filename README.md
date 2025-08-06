# @perawallet/swap

Algorand swap utilities and widget integration.

## Installation

```bash
npm install @perawallet/swap
```

## Usage

### Unified API

```javascript
import { PeraSwap } from '@perawallet/swap'

// Create a PeraSwap instance
const peraSwap = new PeraSwap('mainnet')

// Widget functionality
const widgetUrl = peraSwap.generateWidgetUrl({
  theme: 'dark',
  assetIn: 0, // ALGO
  assetOut: 31566704 // USDC
})

const iframe = peraSwap.createWidgetIframe({
  theme: 'dark'
})
document.body.appendChild(iframe)

// Swap API functionality
const quote = await peraSwap.createSwapQuote({
  assetInId: 0, // ALGO
  assetOutId: 31566704, // USDC
  amount: '1000000', // 1 ALGO (in microAlgos)
  slippage: '0.5', // 0.5%
  swapperAddress: 'ABCDEF...'
})

// Asset management
const asset = await peraSwap.getAsset(31566704)
const assets = await peraSwap.searchAssets('USDC')

// Switch networks
peraSwap.updateNetwork('testnet')
const testnetAsset = await peraSwap.getAsset(31566704)
```

> **Note**: The package uses native `fetch` API and has no external dependencies for HTTP requests. The `PeraSwap` class provides a unified interface for both widget generation and swap API operations.

## Configuration

### Widget Configuration

| Parameter | Description | Values |
|-----------|-------------|--------|
| `network` | Algorand network | `mainnet`, `testnet` |
| `theme` | Widget theme | `light`, `dark` |
| `assetIn` | Input asset ID | Asset ID |
| `assetOut` | Output asset ID | Asset ID |
| `iframeBg` | Background color | Hex color |
| `useParentSigner` | Use parent signer | boolean |
| `accountAddress` | Account address | string |

## Development

```bash
npm install
npm run build
npm run dev
```
