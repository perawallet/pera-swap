# @perawallet/swap

Algorand swap utilities and widget integration.

## Installation

```bash
npm install @perawallet/swap
```

## Usage

### Unified API

```javascript
import { PeraSwap, WidgetController } from '@perawallet/swap'

// Create a PeraSwap instance for API operations
const peraSwap = new PeraSwap('mainnet')

// Widget functionality (now in WidgetController)
const widgetUrl = WidgetController.generateWidgetUrl({
  theme: 'dark',
  assetIn: 0, // ALGO
  assetOut: 31566704 // USDC
})

const iframe = WidgetController.createWidgetIframe({
  theme: 'dark'
})
document.body.appendChild(iframe)

// Swap API functionality
const quote = await peraSwap.createQuote({
  providers: ['tinyman', 'vestige-v4'],
  swapper_address: 'ABCDEF...',
  swap_type: 'fixed-input',
  asset_in_id: 0, // ALGO
  asset_out_id: 31566704, // USDC
  amount: '1000000', // 1 ALGO (in microAlgos)
  slippage: '0.005' // 0.5%
})

// Prepare transactions for signing
const transactions = await peraSwap.prepareTransactions(quote.results[0].quote_id_str)

// Asset management
const asset = await peraSwap.getAsset(31566704)
const assets = await peraSwap.searchAssets('USDC')
const availableAssets = await peraSwap.getAvailableAssets({ asset_in_id: 0 })

// Switch networks
peraSwap.updateNetwork('testnet')
const testnetAsset = await peraSwap.getAsset(31566704)
```

> **Note**: The package uses native `fetch` API and has no external dependencies for HTTP requests. The `PeraSwap` class provides a unified interface for both widget generation and swap API operations.

## Configuration

### Widget Configuration

#### PeraSwap.generateWidgetUrl() Options

| Parameter | Description | Values | Default |
|-----------|-------------|--------|---------|
| `network` | Algorand network | `'mainnet'` \| `'testnet'` | `'mainnet'` |
| `theme` | Widget theme | `'light'` \| `'dark'` | `'light'` |
| `assetIn` | Input asset ID | `number` \| `string` | `0` (ALGO) |
| `assetOut` | Output asset ID | `number` \| `string` | `31566704` (USDC) |
| `iframeBg` | Background color | Hex color string | `undefined` |
| `useParentSigner` | Use parent signer | `boolean` | `false` |
| `accountAddress` | Account address (required if useParentSigner=true) | `string` | `undefined` |



### API Methods

#### PeraSwap Class Methods (Swap API Operations)

| Method | Description | Returns |
|--------|-------------|---------|
| `createQuote(body, signal?)` | Create swap quote | `Promise<{results: SwapQuote[]}>` |
| `prepareTransactions(quoteId, depositAddress?)` | Get transaction groups | `Promise<PrepareTransactionsResponse>` |
| `updateQuote(quoteId, exceptionText)` | Update quote with error | `Promise<any>` |
| `getAssets(params)` | Get assets by IDs or search | `Promise<GetAssetsResponse>` |
| `getAsset(assetId)` | Get single asset by ID | `Promise<Asset \| null>` |
| `searchAssets(query)` | Search assets by name | `Promise<Asset[]>` |
| `getAvailableAssets(params)` | Get available swap assets | `Promise<{results: Asset[]}>` |
| `getAlgoPrice()` | Get ALGO price in USD | `Promise<{exchange_price: string}>` |
| `updateNetwork(network)` | Switch network | `void` |
| `getNetwork()` | Get current network | `'mainnet' \| 'testnet'` |

#### WidgetController Class Methods (Widget & Communication)

| Method | Description | Returns |
|--------|-------------|---------|
| `generateWidgetUrl(config)` | Static method to generate widget URL | `string` |
| `createWidgetIframe(config, options)` | Static method to create iframe element | `HTMLIFrameElement` |
| `sendMessageToWidget(data)` | Static method to send messages to widget | `void` |
| `addWidgetEventListeners()` | Add message event listeners | `void` |
| `removeWidgetEventListeners()` | Remove message event listeners | `void` |

### Type Definitions

The package uses string literal types for better developer experience:

```typescript
type WidgetAppTheme = 'light' | 'dark'
type WidgetNetwork = 'mainnet' | 'testnet'
type SwapProvider = 'tinyman' | 'tinyman-swap-router' | 'vestige-v4'
type SwapType = 'fixed-input'
```

### Parent Signer Support

The package supports parent signer functionality, allowing the parent website to handle transaction signing:

```typescript
import { WidgetController } from '@perawallet/swap'

// Generate widget URL with parent signer
const widgetUrl = WidgetController.generateWidgetUrl({
  network: 'mainnet',
  theme: 'dark',
  assetIn: 0, // ALGO
  assetOut: 31566704, // USDC
  iframeBg: '#242424',
  useParentSigner: true,
  accountAddress: 'ABCDEF...'
})

// Set up controller for handling messages
const controller = new WidgetController({
  onTxnSignRequest: async ({ txGroups }) => {
    // txGroups are already decoded Transaction[][] objects
    // Sign transactions using your wallet
    const signedTxns = await peraWallet.signTransaction(
      txGroups.map(group => group.map(txn => ({ txn })))
    )
    return signedTxns // Return Uint8Array[]
  },
  onTxnSignRequestTimeout: () => {
    console.log('Transaction signing timed out')
  },
  onSwapSuccess: (signedTxns) => {
    console.log('Swap completed with signed transactions:', signedTxns)
  }
})

// Add event listeners to handle widget messages
controller.addWidgetEventListeners()

// Don't forget to remove listeners when done
controller.removeWidgetEventListeners()
```

## Examples

This package includes comprehensive examples demonstrating different integration approaches:

### React Examples

The React examples showcase four different ways to integrate the Pera Swap Widget:

1. **Widget URL Generator** - Generate widget URLs for iframe embedding
2. **Direct Iframe Creation** - Programmatically create and manage iframes
3. **Custom UI with Swap API** - Build custom interfaces using the swap API
4. **Parent Signer Integration** - Handle transaction signing in the parent application

#### Running the React Examples

```bash
# Navigate to examples directory
cd examples/react

# Install dependencies
npm install

# Start development server
npm run dev
```

The examples are located in the `examples/react/` directory and demonstrate:
- Widget configuration and customization
- API integration patterns
- Error handling and loading states
- Parent signer functionality
- TypeScript best practices

## Development

```bash
npm install
npm run build
npm run dev
```
