# Pera Swap Widget

A customizable widget for Algorand asset swapping that can be embedded in any web application.

## Features

- Seamless integration with parent applications
- Algorand asset swapping functionality
- Customizable themes and appearance
- Support for both TestNet and MainNet
- Integration with Pera Wallet

## Usage

The Pera Swap Widget can be embedded in your application using an iframe:

```html
<iframe 
  src="https://swap-widget.perawallet.app/?network=mainnet&theme=dark&assetIn=0&assetOut=31566704" 
  height="488px" // Fixed
></iframe>
```

## Configuration

The widget can be configured using URL search parameters:

| Parameter | Description | Values |
|-----------|-------------|--------|
| `network` | The preferred Algorand network | `mainnet`, `testnet` |
| `theme` | The preferred theme of the widget | `light`, `dark` |
| `assetIn` | ID of the asset to be used as the input asset (default: ALGO) | Asset ID |
| `assetOut` | ID of the asset to be used as the output asset (default: USDC) | Asset ID |
| `iframeBg` | Background color of the widget (default: #FFFFFF) | Hex color code |
