# Changelog

## 1.0.0-beta.5

### Security

- `WidgetController` now only accepts messages from the Pera Swap widget origin
  and replies to that origin instead of `'*'`. Previously any page or frame
  could send a `TXN_SIGN_REQUEST`, trigger a wallet signing prompt and receive
  the signed transactions. Use the
  new `allowedOrigins` option if you host the widget yourself.
- `WidgetController.sendMessageToWidget` posts to the widget origin by default
  (new optional `targetOrigin`).

### Fixed

- `removeWidgetEventListeners()` never removed the listener, so callbacks kept
  firing (and signing prompts could be duplicated) after cleanup.
  `addWidgetEventListeners()` is now idempotent.
- Malformed signing requests and decode errors now reply `FAILED_TXN_SIGN`
  instead of throwing an unhandled error and leaving the widget waiting.
- Errors sent to the widget are always structured-cloneable.
- Custom request headers no longer drop `Content-Type`; GET requests no longer
  send `Content-Type` (avoids a CORS preflight).
- Plain-text API error bodies are reported instead of
  "Unable to read error details".

### Added

- `PeraSwap` accepts an options object: `new PeraSwap({ network, referrerUrl, fetch })`.
  The positional form still works.
- Optional `AbortSignal` on every `PeraSwap` request method.
- `PeraSwapApiError` with `status`, `url` and `body`. `message` keeps the old
  JSON-encoded format.
- `updateSwapStatus` accepts a numeric `swapId`.
- Standalone `generateWidgetUrl` / `createWidgetIframe` exports,
  `WidgetMessageType`, `PERA_SWAP_WIDGET_ORIGIN`, `PERA_SWAP_WIDGET_URL`, and
  named response types (`CreateQuoteResponse`, `AlgoPriceResponse`, ...).
- `createWidgetIframe` sets an accessible `title` (configurable).

### Changed

- `algosdk` is now a peer dependency (`^3.2.0`) so decoded `Transaction`s come
  from the same copy your wallet uses.
- `updateSwapStatus` resolves to `unknown` instead of `any`.
- `SwapTransactionGroup.signed_transactions` is typed `(string | null)[]` to
  match the API.
- `getAsset` / `searchAssets` no longer log to the console on failure.
- Package is ESM-first (`"type": "module"`) with CJS fallback, `sideEffects: false`.
