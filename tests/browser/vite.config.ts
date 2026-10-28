import { fileURLToPath } from 'node:url'
import { defineConfig } from 'vite'

// Serves the host page. It imports the *built* package, so run `pnpm build` first.
export default defineConfig({
    root: fileURLToPath(new URL('./host', import.meta.url)),
    logLevel: 'warn',
    resolve: {
        alias: {
            '@perawallet/swap': fileURLToPath(
                new URL('../../dist/index.js', import.meta.url),
            ),
        },
    },
    server: {
        host: '127.0.0.1',
        port: 4301,
        strictPort: true,
    },
})
