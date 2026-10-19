# Pera Swap — React examples

Four ways to integrate Pera Swap, deployed at
https://perawallet.github.io/pera-swap/.

| Example                        | Source                                                              | Use it when                                                          |
| ------------------------------ | ------------------------------------------------------------------- | -------------------------------------------------------------------- |
| 1. Generate widget URL         | [`WidgetUrlExample.tsx`](src/components/WidgetUrlExample.tsx)       | You render your own `<iframe>`                                       |
| 2. Direct iframe creation      | [`DirectIframeExample.tsx`](src/components/DirectIframeExample.tsx) | You want the SDK to build the iframe element                         |
| 3. Custom UI with the Swap API | [`CustomUIExample.tsx`](src/components/CustomUIExample.tsx)         | You build the whole swap UI yourself                                 |
| 4. Parent signer               | [`ParentSignerExample.tsx`](src/components/ParentSignerExample.tsx) | The widget should sign with the wallet already connected in your app |

Example 4 uses [`@perawallet/connect`](https://github.com/perawallet/connect)
for signing; connect your wallet with the button in the top-right corner first.

## Running

From the repo root:

```bash
pnpm install
pnpm example:dev       # http://localhost:3000/pera-swap/
```

## Deploying

```bash
pnpm example:build
pnpm --filter pera-swap-react-example deploy   # publishes dist/ to gh-pages
```
