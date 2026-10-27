# Changelog

## 1.0.0-beta.5

### Breaking

- `algosdk` is now a peer dependency (`^3.2.0`) so decoded `Transaction`s come
  from the same copy your wallet uses. Install it alongside this package if
  your package manager doesn't install peers automatically.
- `WidgetController` ignores messages from any origin other than the Pera Swap
  widget, and `sendMessageToWidget` no longer posts to `'*'`. Pass
  `allowedOrigins` / `targetOrigin` if you load the widget from another origin.
- Requires Node.js 20 or newer.
- `onSwapSuccess` is typed with what the widget actually sends,
  `{ signedTxns: Uint8Array[] }`, instead of `Uint8Array[]`. The value passed
  at runtime is unchanged. `SwapSuccessMessage`'s payload field is renamed
  from `data` to `signedTxns` to match.

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

### Changed

- `updateSwapStatus` resolves to `unknown` instead of `any`.
- `SwapTransactionGroup.signed_transactions` is typed `(string | null)[]` to
  match the API.
- `getAsset` / `searchAssets` no longer log to the console on failure.
- Package is ESM-first (`"type": "module"`) with CJS fallback, `sideEffects: false`.
