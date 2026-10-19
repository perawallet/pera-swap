import {
    bytesToBase64,
    encodeUnsignedTransaction,
    generateAccount,
    makeAssetTransferTxnWithSuggestedParamsFromObject,
    makePaymentTxnWithSuggestedParamsFromObject,
    type SuggestedParams,
} from 'algosdk'
import { expect, test, type Frame, type Page } from '@playwright/test'
import { UNTRUSTED_ORIGIN, WIDGET_ORIGIN } from '../../playwright.config'

interface SignReply {
    origin: string
    type: string
    signedTxns?: string[]
    signedAreBytes?: boolean
    error?: { isError: boolean; name: string; message: string }
}

interface FakeWidget {
    received: unknown[]
    requestSigning(
        groups: string[][],
        timeoutMs?: number,
    ): Promise<SignReply | null>
    sendMalformed(timeoutMs?: number): Promise<string | null>
    timeout(): void
    success(txIds: string[]): void
}

interface Host {
    events: { type: string; detail?: unknown }[]
    setBehaviour(b: 'sign' | 'reject' | 'reject-uncloneable'): void
    detach(): void
    attach(): void
}

declare global {
    interface Window {
        widget: FakeWidget
        host: Host
    }
}

const params: SuggestedParams = {
    fee: 1000,
    flatFee: true,
    minFee: 1000,
    firstValid: 1,
    lastValid: 1000,
    genesisHash: new Uint8Array(32),
    genesisID: 'testnet-v1.0',
}
const user = generateAccount().addr

const optIn = makeAssetTransferTxnWithSuggestedParamsFromObject({
    sender: user,
    receiver: user,
    amount: 0,
    assetIndex: 31_566_704,
    suggestedParams: params,
})
const payment = makePaymentTxnWithSuggestedParamsFromObject({
    sender: user,
    receiver: user,
    amount: 1_000_000,
    suggestedParams: params,
})
const GROUPS = [[optIn], [payment]].map(group =>
    group.map(txn => bytesToBase64(encodeUnsignedTransaction(txn))),
)

async function openHost(
    page: Page,
): Promise<{ widget: Frame; untrusted: Frame }> {
    await page.goto('/')
    await page.waitForFunction(() => Boolean(window.host))

    const frame = async (id: string): Promise<Frame> => {
        const handle = await page.waitForSelector(`#${id}`)
        const f = (await handle.contentFrame())!
        await f.waitForFunction(() => Boolean(window.widget))
        return f
    }
    return {
        widget: await frame('widget'),
        untrusted: await frame('untrusted'),
    }
}

const hostEvents = (page: Page) => page.evaluate(() => window.host.events)

test.describe('WidgetController ↔ widget iframe (cross-origin)', () => {
    test('signs a request from the widget and replies only to the widget origin', async ({
        page,
    }) => {
        const { widget, untrusted } = await openHost(page)

        const reply = await widget.evaluate(
            g => window.widget.requestSigning(g),
            GROUPS,
        )

        expect(reply).toEqual({
            origin: 'http://localhost:4301',
            type: 'TXN_SIGN_RESPONSE',
            signedTxns: GROUPS.flat(),
            signedAreBytes: true,
            error: undefined,
        })
        expect(await hostEvents(page)).toEqual([
            {
                type: 'sign-request',
                detail: [
                    [{ type: 'axfer', sender: user.toString(), amount: '0' }],
                    [
                        {
                            type: 'pay',
                            sender: user.toString(),
                            amount: '1000000',
                        },
                    ],
                ],
            },
        ])
        expect(await untrusted.evaluate(() => window.widget.received)).toEqual(
            [],
        )
    })

    test('tells the widget when the wallet rejects', async ({ page }) => {
        const { widget } = await openHost(page)
        await page.evaluate(() => window.host.setBehaviour('reject'))

        const reply = await widget.evaluate(
            g => window.widget.requestSigning(g),
            GROUPS,
        )

        expect(reply).toMatchObject({
            type: 'FAILED_TXN_SIGN',
            error: {
                isError: true,
                name: 'Error',
                message: 'User rejected the request',
            },
        })
    })

    test('delivers wallet errors that are not structured-cloneable', async ({
        page,
    }) => {
        const { widget } = await openHost(page)
        await page.evaluate(() =>
            window.host.setBehaviour('reject-uncloneable'),
        )

        const reply = await widget.evaluate(
            g => window.widget.requestSigning(g),
            GROUPS,
        )

        // Structured cloning keeps the message but only built-in error names,
        // so a custom `LedgerError` arrives as a plain `Error`.
        expect(reply).toMatchObject({
            type: 'FAILED_TXN_SIGN',
            error: {
                isError: true,
                name: 'Error',
                message: 'Ledger disconnected',
            },
        })
    })

    test('answers malformed requests with FAILED_TXN_SIGN', async ({
        page,
    }) => {
        const { widget } = await openHost(page)

        expect(await widget.evaluate(() => window.widget.sendMalformed())).toBe(
            'FAILED_TXN_SIGN',
        )
        expect(await hostEvents(page)).toEqual([])
    })

    test('ignores signing requests from an untrusted origin', async ({
        page,
    }) => {
        const { untrusted } = await openHost(page)

        const reply = await untrusted.evaluate(
            g => window.widget.requestSigning(g, 750),
            GROUPS,
        )

        expect(reply).toBeNull()
        expect(await hostEvents(page)).toEqual([])
    })

    test('forwards timeout and success events from the widget only', async ({
        page,
    }) => {
        const { widget, untrusted } = await openHost(page)

        await untrusted.evaluate(() => {
            window.widget.timeout()
            window.widget.success(['EVIL'])
        })
        await widget.evaluate(() => {
            window.widget.timeout()
            window.widget.success(['TX1', 'TX2'])
        })

        await expect
            .poll(() => hostEvents(page))
            .toEqual([
                { type: 'timeout' },
                { type: 'success', detail: ['TX1', 'TX2'] },
            ])
    })

    test('stops handling messages after removeWidgetEventListeners', async ({
        page,
    }) => {
        const { widget } = await openHost(page)
        await page.evaluate(() => window.host.detach())

        expect(
            await widget.evaluate(
                g => window.widget.requestSigning(g, 750),
                GROUPS,
            ),
        ).toBeNull()

        await page.evaluate(() => window.host.attach())
        expect(
            await widget.evaluate(g => window.widget.requestSigning(g), GROUPS),
        ).toMatchObject({ type: 'TXN_SIGN_RESPONSE' })
        expect(await hostEvents(page)).toHaveLength(1)
    })

    test('embeds frames from the origins configured for the test servers', async ({
        page,
    }) => {
        await openHost(page)
        await expect(page.locator('#widget')).toHaveAttribute(
            'src',
            `${WIDGET_ORIGIN}/widget.html`,
        )
        await expect(page.locator('#untrusted')).toHaveAttribute(
            'src',
            `${UNTRUSTED_ORIGIN}/widget.html`,
        )
    })

    test('renders the widget iframe with an accessible title', async ({
        page,
    }) => {
        await openHost(page)
        await expect(page.locator('#widget')).toHaveAttribute(
            'title',
            'Pera Swap',
        )
        await expect(page.getByTitle('Pera Swap')).toHaveCount(1)
    })
})
