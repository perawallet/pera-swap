# Changelog

## Unreleased

### Added

- `PrepareTransactionsResponse.swap_id_str?: string`, the exact swap id. The
  API has always sent it. It is optional only so that hand-built responses
  keep compiling.

### Fixed

- `updateSwapStatus(prepared.swap_id, ...)`, as the README showed, reported to
  the wrong URL and got a 404. Swap ids are larger than 2^53, so `swap_id`
  loses precision as a JS number. The README now passes
  `prepared.swap_id_str`. A rounded `swap_id` from a swap prepared by the same
  `PeraSwap` instance (one of its last 50) is resolved to the exact id; any
  other integer above 2^53 logs a one-time `console.warn` and is sent as
  before.
- The `WidgetController` JSDoc example and the README's "Other widgets"
  snippet asked the wallet to sign every transaction, which fails with Pera
  Connect 1.7 or later. They now sign only your account's transactions.

### Deprecated

- `prepareTransactions`' `depositAddress`. The v2 API ignores it: no transfer
  to it is added and the output stays in the swapping account. It is still
  sent, and passing it logs a one-time `console.warn`.

### Documentation

- `getAsset(0)` always resolves to `null`, because ALGO isn't an ASA. Use
  `getAlgoPrice()` for its price.
- JSDoc on fields the types describe loosely: `Asset.logo` can be `null`,
  `is_verified` and `type` are missing on quote and available-assets assets,
  `reason` is required for a `'failed'` status, `pera_fee_amount` is in
  microALGO, `exchange_fee_amount`'s unit depends on the provider, and
  `slippage` takes at most 4 decimal places.

## 1.0.0-beta.5

This release has breaking changes. Most apps need at most one of the steps
below; check each one before upgrading from `1.0.0-beta.4` or earlier.

### Breaking

**Widget loaded from another origin stops signing.** `WidgetController` now
only accepts messages from `https://swap-widget.perawallet.app` and replies to
that origin instead of `'*'` (see Security). If you load the widget from
anywhere else, the staging widget included, signing requests are ignored with
a one-time `console.warn`.

→ Pass the widget's origin in `allowedOrigins`, and its URL as `widgetUrl`.
`sendMessageToWidget` also posts to the Pera Swap widget origin; pass
`targetOrigin` for another widget.

**Widget embedded without `network` moves from testnet to mainnet.**
`generateWidgetUrl` / `createWidgetIframe` now always send `network`,
defaulting to `mainnet` as documented. The widget itself defaults to testnet,
so a widget embedded without `network` used to load on testnet.

→ Pass `network: 'testnet'` to stay on testnet.

**`algosdk` is a peer dependency** (`^3.2.0`), so decoded `Transaction`s come
from the same copy your wallet uses.

→ npm 7+ and pnpm install it for you. With Yarn, add `algosdk` to your
dependencies.

**Node.js 20 or newer is required.**

**`new PeraSwap(options, referrerUrl)` throws a `TypeError`** instead of
silently ignoring `referrerUrl`. TypeScript never allowed this call.

→ Pass `referrerUrl` inside the options object.

**TypeScript only (runtime values are unchanged):**

- `onSwapSuccess` receives `{ signedTxns: Uint8Array[] }`, which is what the
  widget has always sent, instead of the `Uint8Array[]` it was typed with.
  `SwapSuccessMessage`'s payload field is `signedTxns` instead of `data`.

    → Destructure the argument: `onSwapSuccess: ({ signedTxns }) => ...`.

- The widget → host message types (`TxnSignRequestMessage`,
  `SwapSuccessMessage`, `TxnSignRequestTimeoutMessage`) describe what the
  widget posts, `{ type, message }`, instead of `{ message: { type, ... } }`.
  Code that reads `event.data.message.type` on a `WidgetMessage` no longer
  compiles.

    → Type a reply listener with `TxnSignReplyMessage`.

### Security

- `WidgetController` now only accepts messages from the Pera Swap widget origin
  and replies to that origin instead of `'*'`. Previously any page or frame
  could send a `TXN_SIGN_REQUEST`, trigger a wallet signing prompt and receive
  the signed transactions. Use the
  new `allowedOrigins` option if you host the widget yourself (the staging
  widget, `https://swap-widget-staging.perawallet.app`, included). It accepts
  `https:` origins (`http:` for localhost) with no path, normalises a trailing
  slash or upper-case host, and throws on anything else or an empty list.
- The first signing request ignored because of its origin logs a
  `console.warn`, so a missing `allowedOrigins` entry doesn't fail silently.
- `WidgetController.sendMessageToWidget` posts to the widget origin by default
  (new optional `targetOrigin`).

### Fixed

- `removeWidgetEventListeners()` never removed the listener, so callbacks kept
  firing (and signing prompts could be duplicated) after cleanup.
  `addWidgetEventListeners()` is now idempotent.
- Malformed signing requests and decode errors now reply `FAILED_TXN_SIGN`
  instead of throwing an unhandled error and leaving the widget waiting.
- Errors sent to the widget are always structured-cloneable. Wallet
  rejections that are plain objects (e.g. `{ code: 4001, message }`) keep their
  `message` and `name`.
- GET requests no longer send `Content-Type` (avoids a CORS preflight).
- A successful response with an empty body (e.g. `204` from
  `updateSwapStatus`) resolves to `undefined` instead of throwing.
- Plain-text API error bodies are reported instead of
  "Unable to read error details".
- A successful response whose body isn't JSON (e.g. an HTML page from a proxy)
  rejects with `PeraSwapApiError` instead of a bare `SyntaxError`.
- `getAsset` / `searchAssets` no longer use `AbortSignal.throwIfAborted()`, so
  they work in browsers older than Chrome 100 / Safari 15.4.
- A `SWAP_SUCCESS` message without valid `signedTxns` is ignored with a
  `console.warn` instead of reaching `onSwapSuccess`.

### Added

- `PeraSwap` accepts an options object: `new PeraSwap({ network, referrerUrl, fetch })`.
  The positional form still works.
- Optional `AbortSignal` on every `PeraSwap` request method. `getAsset` /
  `searchAssets` still never reject on failure, except when aborted.
- `PeraSwapApiError` with `status`, `url` and `body`. `message` keeps the old
  JSON-encoded format; `name` is `'PeraSwapApiError'`.
- `updateSwapStatus` accepts a numeric `swapId`.
- Standalone `generateWidgetUrl` / `createWidgetIframe` exports,
  `WidgetMessageType`, `PERA_SWAP_WIDGET_ORIGIN`, `PERA_SWAP_WIDGET_URL`, and
  named response types (`CreateQuoteResponse`, `AlgoPriceResponse`, ...).
- `createWidgetIframe` sets an accessible `title` (configurable).
- `widgetUrl` widget option, to load another widget such as the staging one.
- `UPDATE_THEME` message type and the `UpdateThemeMessage`,
  `WidgetToHostMessage`, `HostToWidgetMessage` and `TxnSignReplyMessage`
  types. `sendMessageToWidget` accepts `UPDATE_THEME`.

### Deprecated

- `onTxnSignRequestTimeout`, `TXN_SIGN_REQUEST_TIMEOUT` and
  `TxnSignRequestTimeoutMessage`: the widget never sends a timeout, so the
  callback is never called. They will be removed in the next major.
- `WidgetMessage`, in favour of the direction-specific types above.

### Changed

- `updateSwapStatus` resolves to `unknown` instead of `any`.
- `SwapTransactionGroup.signed_transactions` is typed `(string | null)[]` to
  match the API.
- `getAsset` / `searchAssets` no longer log to the console on failure.
- Package is ESM-first (`"type": "module"`) with CJS fallback, `sideEffects: false`.
