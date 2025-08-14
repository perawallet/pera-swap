# Pera Swap Widget - React Examples

This React application demonstrates three different ways to integrate the Pera Swap Widget into your application.

## Getting Started

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm run dev
```

3. Open your browser and navigate to `http://localhost:3000`

## Examples

### Example 1: Generate Widget URL
This example shows how to generate a URL for the Pera Swap Widget iframe that can be used in any web application.

**Features:**
- Configure network (mainnet/testnet)
- Set theme (light/dark)
- Specify input and output assets
- Generate and copy the widget URL
- Live preview of the widget

**Use Case:** When you want to provide users with a URL they can use in their own applications or share with others.

### Example 2: Direct Iframe Creation
This example demonstrates how to programmatically create an iframe element and add it to your webpage.

**Features:**
- Create iframe elements dynamically
- Configure widget parameters
- Add iframe to the DOM programmatically
- Full control over iframe styling and positioning

**Use Case:** When you want to embed the widget directly in your application with custom styling and positioning.

### Example 3: Custom UI with Swap API
This example shows how to build your own custom UI and use the swap API methods directly.

**Features:**
- Custom form for swap parameters
- Direct API calls to get swap quotes
- Display multiple quotes from different providers
- Error handling and loading states
- Full control over the user experience

**Use Case:** When you want complete control over the swap interface and user experience.

### Example 4: Parent Signer Integration
This example demonstrates the parent signer functionality, allowing the parent website to handle transaction signing.

**Features:**
- Toggle between parent signer and local wallet
- Real-time status updates
- Mock wallet implementation for demonstration
- WidgetController integration
- Message handling between parent and widget

**Use Case:** When you want to handle transaction signing in your parent application instead of the widget managing wallet connections.

## API Reference

### PeraSwap Class

```typescript
import { PeraSwap } from '@perawallet/swap'

const peraSwap = new PeraSwap('mainnet') // or 'testnet'
```

#### Widget Methods

```typescript
// Generate widget URL
const url = peraSwap.generateWidgetUrl({
  network: 'mainnet',
  theme: 'light',
  assetIn: 0, // ALGO
  assetOut: 31566704 // USDC
})

// Create iframe element
const iframe = peraSwap.createWidgetIframe({
  network: 'mainnet',
  theme: 'dark'
}, {
  width: '100%',
  height: '400px',
  className: 'swap-iframe'
})
```

#### Swap API Methods

```typescript
// Get swap quotes
const quotes = await peraSwap.createQuote({
  providers: ['tinyman', 'vestige-v4'],
  swapper_address: 'ABCDEF...',
  swap_type: 'fixed-input',
  asset_in_id: 0, // ALGO
  asset_out_id: 31566704, // USDC
  amount: '1000000', // 1 ALGO (in microAlgos)
  slippage: '0.5' // 0.5%
})

// Get available assets
const assets = await peraSwap.getAvailableAssets({
  asset_in_id: 0,
  q: 'USDC'
})

// Search assets
const searchResults = await peraSwap.searchAssets('USDC')

// Get asset by ID
const asset = await peraSwap.getAsset(31566704)
```

### WidgetController Class

```typescript
import { WidgetController } from '@perawallet/swap'

// Generate widget URL with parent signer
const widgetUrl = WidgetController.generateWidgetIframeUrl({
  network: 'mainnet',
  useParentSigner: true,
  accountAddress: 'ABCDEF...',
  themeVariables: {
    theme: 'dark',
    iframeBg: '#242424'
  },
  assetIds: [0, 31566704] // ALGO, USDC
})

// Set up controller for handling messages
const controller = new WidgetController({
  onTxnSignRequest: async ({ txGroups }) => {
    // Sign transactions using your wallet
    const signedTxns = await yourWallet.signTransactions(txGroups)
    return signedTxns
  },
  onTxnSignRequestTimeout: () => {
    console.log('Transaction signing timed out')
  },
  onSwapSuccess: (response) => {
    console.log('Swap completed:', response)
  }
})

controller.addWidgetEventListeners()
```

## Configuration Options

### WidgetConfig Interface

```typescript
interface WidgetConfig {
  network?: 'mainnet' | 'testnet'
  theme?: 'light' | 'dark'
  assetIn?: string | number
  assetOut?: string | number
  iframeBg?: string
  useParentSigner?: boolean
  accountAddress?: string
}
```

## Common Asset IDs

| Asset | ID | Description |
|-------|----|-------------|
| ALGO | 0 | Native Algorand token |
| USDC | 31566704 | USD Coin |
| USDT | 312769 | Tether USD |

## Deployment

This example can be easily deployed to various platforms:

### Vercel
```bash
npm run build
# Deploy the dist folder
```

### Netlify
```bash
npm run build
# Deploy the dist folder
```

### CodeSandbox
The project is ready to be imported into CodeSandbox for live demos.

## Contributing

Feel free to submit issues and enhancement requests!

## License

This project is licensed under the MIT License.
# Test workflow trigger
