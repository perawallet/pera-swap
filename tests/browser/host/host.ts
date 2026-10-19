import {
    createWidgetIframe,
    WidgetController,
    type WidgetControllerConfig,
} from '@perawallet/swap'

// A dApp page embedding the widget with useParentSigner. Playwright reads and
// drives it through `window.host`.

type SignBehaviour = 'sign' | 'reject' | 'reject-uncloneable'

interface HostEvent {
    type: string
    detail?: unknown
}

// Fixed origins (keep in sync with playwright.config.ts). Hard-coded rather
// than read from the URL so the page never loads an attacker-chosen frame.
const widgetOrigin = 'http://127.0.0.1:4302'
const untrustedOrigin = 'http://localhost:4302'

const events: HostEvent[] = []
let behaviour: SignBehaviour = 'sign'

const config: WidgetControllerConfig = {
    allowedOrigins: [widgetOrigin],
    onTxnSignRequest: async ({ txGroups }) => {
        events.push({
            type: 'sign-request',
            detail: txGroups.map(group =>
                group.map(txn => ({
                    type: txn.type,
                    sender: txn.sender.toString(),
                    amount: String(
                        txn.payment?.amount ?? txn.assetTransfer?.amount ?? '',
                    ),
                })),
            ),
        })

        if (behaviour === 'reject') {
            throw new Error('User rejected the request')
        }
        if (behaviour === 'reject-uncloneable') {
            // Wallet SDK errors often carry functions, which can't be cloned.
            throw Object.assign(new Error('Ledger disconnected'), {
                name: 'LedgerError',
                retry: () => undefined,
            })
        }
        // Stand-in for a wallet: echo the re-encoded transactions.
        return txGroups.flat().map(txn => txn.toByte())
    },
    onTxnSignRequestTimeout: () => events.push({ type: 'timeout' }),
    onSwapSuccess: detail => events.push({ type: 'success', detail }),
}

const controller = new WidgetController(config)
controller.addWidgetEventListeners()

const app = document.getElementById('app')!
const widgetFrame = createWidgetIframe(
    { useParentSigner: true },
    { id: 'widget' },
)
// Point the iframe at the fake widget instead of production.
widgetFrame.src = `${widgetOrigin}/widget.html`
const untrustedFrame = document.createElement('iframe')
untrustedFrame.id = 'untrusted'
untrustedFrame.src = `${untrustedOrigin}/widget.html`
app.append(widgetFrame, untrustedFrame)

Object.assign(window, {
    host: {
        events,
        setBehaviour: (next: SignBehaviour) => {
            behaviour = next
        },
        detach: () => controller.removeWidgetEventListeners(),
        attach: () => controller.addWidgetEventListeners(),
    },
})
