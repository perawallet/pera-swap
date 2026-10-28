/**
 * Installs the packed tarball into a throwaway consumer project and uses it
 * the way apps do: ESM import, CommonJS require and a TypeScript typecheck
 * under Node16 resolution. Catches broken `exports`, missing files and
 * types that only work inside this repo.
 *
 * Run with `pnpm test:package` (builds first).
 */
import { execFileSync } from 'node:child_process'
import {
    mkdirSync,
    mkdtempSync,
    readdirSync,
    readFileSync,
    realpathSync,
    rmSync,
    symlinkSync,
    writeFileSync,
} from 'node:fs'
import { tmpdir } from 'node:os'
import { join, resolve } from 'node:path'
import { afterAll, beforeAll, describe, expect, it } from 'vitest'

const ROOT = resolve(import.meta.dirname, '../..')
const TSC = join(ROOT, 'node_modules/typescript/bin/tsc')

let consumer: string
let packedFiles: string[]

function run(file: string, args: string[] = []): string {
    return execFileSync(process.execPath, [file, ...args], {
        cwd: consumer,
        encoding: 'utf8',
    })
}

beforeAll(() => {
    consumer = mkdtempSync(join(tmpdir(), 'pera-swap-consumer-'))

    execFileSync('pnpm', ['pack', '--pack-destination', consumer], {
        cwd: ROOT,
        stdio: 'pipe',
    })
    const tarball = readdirSync(consumer).find(f => f.endsWith('.tgz'))!
    packedFiles = execFileSync('tar', ['-tzf', join(consumer, tarball)], {
        encoding: 'utf8',
    })
        .split('\n')
        .filter(Boolean)
        .map(f => f.replace(/^package\//, ''))
        .sort()

    const pkgDir = join(consumer, 'node_modules/@perawallet/swap')
    mkdirSync(pkgDir, { recursive: true })
    execFileSync('tar', [
        '-xzf',
        join(consumer, tarball),
        '-C',
        pkgDir,
        '--strip-components=1',
    ])
    // Peer dependency, provided by the "app".
    symlinkSync(
        realpathSync(join(ROOT, 'node_modules/algosdk')),
        join(consumer, 'node_modules/algosdk'),
        'dir',
    )

    writeFileSync(
        join(consumer, 'package.json'),
        JSON.stringify({ name: 'consumer', private: true }),
    )
}, 60_000)

afterAll(() => {
    if (consumer) {
        rmSync(consumer, { recursive: true, force: true })
    }
})

const SMOKE = `
const peraSwap = new sdk.PeraSwap({ network: 'testnet' })
const controller = new sdk.WidgetController()
console.log(JSON.stringify({
    exports: Object.keys(sdk).sort(),
    network: peraSwap.getNetwork(),
    url: sdk.WidgetController.generateWidgetUrl({ theme: 'dark', assetIn: 0 }),
    error: new sdk.PeraSwapApiError({ status: 400, url: 'u', body: { a: 1 } }) instanceof Error,
    controller: typeof controller.addWidgetEventListeners,
}))
`

const EXPECTED = {
    exports: [
        'PERA_SWAP_WIDGET_ORIGIN',
        'PERA_SWAP_WIDGET_URL',
        'PeraSwap',
        'PeraSwapApiError',
        'SwapWidgetSearchParamKey',
        'WidgetController',
        'WidgetMessageType',
        'createWidgetIframe',
        'generateWidgetUrl',
    ],
    network: 'testnet',
    url: 'https://swap-widget.perawallet.app/?network=mainnet&theme=dark&assetIn=0',
    error: true,
    controller: 'function',
}

describe('published package', () => {
    it('ships only the build output and metadata', () => {
        expect(packedFiles).toEqual([
            'LICENSE',
            'README.md',
            'dist/index.cjs',
            'dist/index.cjs.map',
            'dist/index.d.cts',
            'dist/index.d.ts',
            'dist/index.js',
            'dist/index.js.map',
            'package.json',
        ])
    })

    it('works from an ES module', () => {
        writeFileSync(
            join(consumer, 'esm.mjs'),
            `import * as sdk from '@perawallet/swap'\n${SMOKE}`,
        )
        expect(JSON.parse(run('esm.mjs'))).toEqual(EXPECTED)
    })

    it('works from CommonJS', () => {
        writeFileSync(
            join(consumer, 'cjs.cjs'),
            `const sdk = require('@perawallet/swap')\n${SMOKE}`,
        )
        expect(JSON.parse(run('cjs.cjs'))).toEqual(EXPECTED)
    })

    it('imports the peer algosdk instead of bundling it', () => {
        const dist = join(consumer, 'node_modules/@perawallet/swap/dist')
        expect(readFileSync(join(dist, 'index.js'), 'utf8')).toMatch(
            /from "algosdk"/,
        )
        expect(readFileSync(join(dist, 'index.cjs'), 'utf8')).toMatch(
            /require\("algosdk"\)/,
        )
    })

    it.each(['commonjs', 'module'])(
        'typechecks for a TypeScript consumer (%s, Node16 resolution)',
        type => {
            const dir = join(consumer, `ts-${type}`)
            mkdirSync(dir, { recursive: true })
            writeFileSync(join(dir, 'package.json'), JSON.stringify({ type }))
            writeFileSync(
                join(dir, 'tsconfig.json'),
                JSON.stringify({
                    compilerOptions: {
                        module: 'Node16',
                        moduleResolution: 'Node16',
                        target: 'ES2022',
                        lib: ['ES2022', 'DOM'],
                        types: [],
                        strict: true,
                        noEmit: true,
                        skipLibCheck: false,
                    },
                    include: ['consumer.ts'],
                }),
            )
            writeFileSync(
                join(dir, 'consumer.ts'),
                `import {
    PeraSwap,
    PeraSwapApiError,
    WidgetController,
    type CreateQuoteBody,
    type SwapQuote,
    type WidgetConfig,
} from '@perawallet/swap'
import type { Transaction } from 'algosdk'

const config: WidgetConfig = { network: 'mainnet', useParentSigner: true }
const url: string = WidgetController.generateWidgetUrl(config)

const peraSwap = new PeraSwap('testnet', 'https://ref.example')
const body: CreateQuoteBody = {
    providers: ['tinyman'],
    swapper_address: 'A',
    swap_type: 'fixed-input',
    asset_in_id: 0,
    asset_out_id: 31566704,
    amount: '1',
    slippage: '0.005',
}
export async function quote(): Promise<SwapQuote | undefined> {
    try {
        return (await peraSwap.createQuote(body)).results[0]
    } catch (error) {
        if (error instanceof PeraSwapApiError) {
            const status: number = error.status
            void status
        }
        return undefined
    }
}

new WidgetController({
    onTxnSignRequest: async ({ txGroups }: { txGroups: Transaction[][] }) =>
        txGroups.flat().map(txn => txn.toByte()),
})
void url
`,
            )

            expect(() =>
                execFileSync(process.execPath, [TSC, '-p', dir], {
                    encoding: 'utf8',
                    stdio: 'pipe',
                }),
            ).not.toThrow()
        },
    )
})
