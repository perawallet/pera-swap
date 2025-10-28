# Pera Swap Widget Examples

This directory contains comprehensive examples demonstrating how to integrate the Pera Swap Widget into your applications.

## Available Examples

### React TypeScript Example
**Location:** `./react/`

A modern React application built with TypeScript that demonstrates four different integration approaches:

1. **Widget URL Generation** - Generate URLs for iframe embedding
2. **Direct Iframe Creation** - Programmatically create and add iframes
3. **Custom UI with API** - Build your own interface using the swap API
4. **Parent Signer Integration** - Handle transaction signing in the parent application

**Features:**
- Modern React with TypeScript
- Responsive design with CSS Grid
- Dark mode support
- Error handling and loading states
- Live previews of widgets

**To run:**
```bash
# From the pera-swap root directory
npm run examples:react:install
npm run examples:react:dev

# Or directly from the react directory
cd react
npm install
npm run dev
```

### Vanilla TypeScript Example
**Location:** `./vanilla-ts/`

A framework-free TypeScript application that shows the same three integration approaches without any dependencies.

**Features:**
- Pure TypeScript and DOM manipulation
- No framework overhead
- Global function approach for event handling
- Inline styles for simplicity
- Direct DOM manipulation

**To run:**
```bash
cd vanilla-ts
npm install
npm run dev
```

## Integration Approaches

### 1. Widget URL Generation
Generate a URL that can be used in an iframe or shared with users.

```typescript
import { PeraSwap } from '@perawallet/swap'

const peraSwap = new PeraSwap('mainnet', 'https://example.org')
const url = peraSwap.generateWidgetUrl({
  network: 'mainnet',
  theme: 'light',
  assetIn: 0, // ALGO
  assetOut: 31566704 // USDC
})
```

**Use Cases:**
- Sharing swap widgets via links
- Embedding in third-party applications
- Creating bookmarkable swap URLs

### 2. Direct Iframe Creation
Programmatically create iframe elements and add them to your page.

```typescript
const iframe = peraSwap.createWidgetIframe({
  network: 'mainnet',
  theme: 'dark'
}, {
  width: '100%',
  height: '400px',
  className: 'swap-iframe'
})

document.body.appendChild(iframe)
```

**Use Cases:**
- Dynamic widget insertion
- Custom styling and positioning
- Conditional widget display

### 3. Custom UI with Swap API
Build your own interface using the swap API methods directly.

```typescript
const quotes = await peraSwap.createQuote({
  providers: ['tinyman', 'vestige-v4'],
  swapper_address: 'ABCDEF...',
  swap_type: 'fixed-input',
  asset_in_id: 0,
  asset_out_id: 31566704,
  amount: '1000000',
  slippage: '0.005',
})

const prepareResponse = await peraSwap.prepareTransactions(quotes.results[0].quote_id_str)

// After signing and submitting the transactions, report status
await peraSwap.updateSwapStatus(String(prepareResponse.swap_id), {
  status: 'in_progress',
  submitted_transaction_ids: ['<txid-1>', '<txid-2>']
})

// If something goes wrong
await peraSwap.updateSwapStatus(String(prepareResponse.swap_id), {
  status: 'failed',
  reason: 'other'
})
```

### 4. Parent Signer Integration
Handle transaction signing in the parent application instead of the widget managing wallet connections.

```typescript
import { WidgetController } from '@perawallet/swap'

// Generate widget URL with parent signer enabled
const widgetUrl = WidgetController.generateWidgetIframeUrl({
  network: 'mainnet',
  useParentSigner: true,
  accountAddress: 'ABCDEF...',
  themeVariables: { theme: 'dark' },
  assetIds: [0, 31566704]
})

// Set up controller for handling messages
const controller = new WidgetController({
  onTxnSignRequest: async ({ txGroups }) => {
    // Sign transactions using your wallet
    const signedTxns = await yourWallet.signTransactions(txGroups)
    return signedTxns
  },
  onSwapSuccess: (response) => {
    console.log('Swap completed:', response)
  }
})

controller.addWidgetEventListeners()
```

**Use Cases:**
- Integrated wallet experiences
- Custom transaction signing flows
- Parent application wallet management
  swapperAddress: 'ABCDEF...'
})
```

**Use Cases:**
- Custom swap interfaces
- Integration with existing UI components
- Advanced swap workflows

## Common Asset IDs

| Asset | ID | Description |
|-------|----|-------------|
| ALGO | 0 | Native Algorand token |
| USDC | 31566704 | USD Coin |
| USDT | 312769 | Tether USD |

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

## Deployment

Both examples can be easily deployed to various platforms:

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
The projects are ready to be imported into CodeSandbox for live demos.

## CodeSandbox Links

Once deployed, you can create CodeSandbox links for:

- **React Example**: Demonstrates modern React patterns with TypeScript
- **Vanilla TS Example**: Shows framework-free integration approach

## Parent Signer Example

A special example demonstrating the `useParentSigner` functionality:

- **Parent Signer Example**: Shows how to handle transaction signing in the parent website instead of the widget

### Parent Signer Features

The `useParentSigner` functionality allows the parent website to handle transaction signing instead of the widget managing wallet connections internally.

**Key Benefits:**
- **Seamless Integration**: Users don't need to connect to the widget separately
- **Unified Experience**: Transaction signing happens in the parent application
- **Better UX**: No additional wallet connection steps required
- **Flexible**: Can use any wallet implementation in the parent

**How it Works:**
1. Widget is configured with `useParentSigner: true`
2. When user initiates a swap, widget sends `TXN_SIGN_REQUEST` to parent
3. Parent signs transactions using its wallet implementation
4. Parent sends signed transactions back to widget
5. Widget submits transactions to blockchain

**Usage:**
```typescript
import { WidgetController } from '@perawallet/swap'

const widgetUrl = WidgetController.generateWidgetIframeUrl({
  network: 'mainnet',
  useParentSigner: true,
  accountAddress: 'ABCDEF...',
  themeVariables: { theme: 'dark' }
})

const controller = new WidgetController({
  onTxnSignRequest: async ({ txGroups }) => {
    // Sign transactions using your wallet
    return await yourWallet.signTransactions(txGroups)
  }
})
```

## Contributing

Feel free to submit issues and enhancement requests for the examples!

## License

These examples are licensed under the MIT License.
