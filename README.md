# @perawallet/swap

[![npm](https://img.shields.io/npm/v/@perawallet/swap)](https://www.npmjs.com/package/@perawallet/swap)
[![CI](https://github.com/perawallet/pera-swap/actions/workflows/ci.yml/badge.svg)](https://github.com/perawallet/pera-swap/actions/workflows/ci.yml)

Algorand swap utilities and Pera Swap widget integration. Use it to:

- embed the **Pera Swap widget** in an iframe, optionally signing transactions with your own wallet, or
- build your own swap UI on top of the **Pera Swap API** (quotes, transactions, assets).

Ships ESM + CommonJS with TypeScript types. Uses the native `fetch` API.

## Installation

```bash
npm install @perawallet/swap algosdk
```

`algosdk` (v3) is a peer dependency, so the `Transaction` objects you receive
come from the same `algosdk` your wallet uses.

## Embedding the widget

```ts
import { WidgetController } from '@perawallet/swap'

const iframe = WidgetController.createWidgetIframe(
    { network: 'mainnet', theme: 'dark', assetIn: 0, assetOut: 31566704 },
    { height: '488px' },
)
document.body.appendChild(iframe)

// Or just the URL, for your own <iframe src="...">
const url = WidgetController.generateWidgetUrl({ theme: 'light' })
```

### Widget options

| Option            | Description                                            | Values                     | Default           |
| ----------------- | ------------------------------------------------------ | -------------------------- | ----------------- |
| `network`         | Algorand network                                       | `'mainnet'` \| `'testnet'` | `'mainnet'`       |
| `theme`           | Widget theme                                           | `'light'` \| `'dark'`      | `'light'`         |
| `assetIn`         | Input asset ID                                         | `number` \| `string`       | `0` (ALGO)        |
| `assetOut`        | Output asset ID                                        | `number` \| `string`       | `31566704` (USDC) |
| `iframeBg`        | Background color                                       | Hex color string           | `#FFFFFF`         |
| `useParentSigner` | Sign transactions in the host page (see below)         | `boolean`                  | `false`           |
| `accountAddress`  | Signer address, only used with `useParentSigner: true` | `string`                   | –                 |

`createWidgetIframe(config, options)` also takes `width`, `height`, `className`,
`id` and `title` for the iframe element.

### Signing in the host page (parent signer)

With `useParentSigner: true` the widget doesn't connect a wallet itself; it asks
the host page to sign. `WidgetController` handles that messaging for you:

```ts
import { WidgetController } from '@perawallet/swap'

const url = WidgetController.generateWidgetUrl({
    useParentSigner: true,
    accountAddress: 'ABCDEF...',
})

const controller = new WidgetController({
    // txGroups are decoded algosdk Transaction[][]; resolve with the signed bytes
    onTxnSignRequest: ({ txGroups }) =>
        peraWallet.signTransaction(
            txGroups.map(group => group.map(txn => ({ txn }))),
        ),
    onTxnSignRequestTimeout: () => console.warn('Signing timed out'),
    onSwapSuccess: () => console.log('Swap completed'),
})

controller.addWidgetEventListeners()
// When the widget is removed from the page:
controller.removeWidgetEventListeners()
```

If `onTxnSignRequest` rejects, the widget is told signing failed.

For security, the controller only accepts messages from (and replies to) the
Pera Swap widget origin, `https://swap-widget.perawallet.app`. If you host the
widget elsewhere, pass `allowedOrigins`.

## Using the Swap API

```ts
import { PeraSwap, PeraSwapApiError } from '@perawallet/swap'

const peraSwap = new PeraSwap({
    network: 'mainnet',
    referrerUrl: 'https://myapp.example', // optional, for attribution
})

const { results: quotes } = await peraSwap.createQuote({
    providers: ['tinyman', 'vestige-v4'],
    swapper_address: 'ABCDEF...',
    swap_type: 'fixed-input',
    asset_in_id: 0, // ALGO
    asset_out_id: 31566704, // USDC
    amount: '1000000', // 1 ALGO in microAlgos
    slippage: '0.005', // 0.5%
})

const prepared = await peraSwap.prepareTransactions(quotes[0].quote_id_str)

// ...sign and submit prepared.transaction_groups with your wallet...

await peraSwap.updateSwapStatus(prepared.swap_id, {
    status: 'in_progress',
    submitted_transaction_ids: txIds,
})
```

Report failures too, so Pera can track them:

```ts
await peraSwap.updateSwapStatus(prepared.swap_id, {
    status: 'failed',
    reason: 'user_cancelled', // 'blockchain_error' | 'invalid_submission' | 'other'
})
```

### Methods

Every request method accepts an optional `AbortSignal` as its last argument.

| Method                                          | Returns                                |
| ----------------------------------------------- | -------------------------------------- |
| `createQuote(body)`                             | `Promise<{ results: SwapQuote[] }>`    |
| `prepareTransactions(quoteId, depositAddress?)` | `Promise<PrepareTransactionsResponse>` |
| `updateSwapStatus(swapId, body)`                | `Promise<unknown>`                     |
| `getAssets({ asset_ids?, q? })`                 | `Promise<GetAssetsResponse>`           |
| `getAsset(assetId)`                             | `Promise<Asset \| null>` ¹             |
| `searchAssets(query)`                           | `Promise<Asset[]>` ¹                   |
| `getAvailableAssets({ asset_in_id, q? })`       | `Promise<{ results: Asset[] }>`        |
| `getAlgoPrice()`                                | `Promise<{ exchange_price: string }>`  |
| `updateNetwork(network)` / `getNetwork()`       | `void` / `Network`                     |

¹ Resolves to `null` / `[]` instead of throwing when the request fails.

### Constructor

```ts
new PeraSwap({ network?, referrerUrl?, fetch? })
new PeraSwap(network?, referrerUrl?) // positional form, still supported
```

Pass `fetch` to use a custom implementation (SSR, tests, retries).

### Errors

Non-2xx responses throw a `PeraSwapApiError` with `status`, `url` and the parsed
response `body`. Its `message` is the JSON-encoded body, as in earlier versions.

```ts
try {
    await peraSwap.createQuote(body)
} catch (error) {
    if (error instanceof PeraSwapApiError && error.status === 400) {
        console.error(error.body)
    }
}
```

## Examples

[`examples/react`](examples/react) shows four integrations: widget URL, direct
iframe, custom UI on the Swap API and parent signer. Live at
https://perawallet.github.io/pera-swap/.

```bash
pnpm install
pnpm example:dev
```

## Development

See [CONTRIBUTING.md](CONTRIBUTING.md). In short:

```bash
corepack enable
pnpm install
pnpm run setup   # git hooks
pnpm check       # format, lint, typecheck, test, build
```

## License

MIT
