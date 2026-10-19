import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

export default defineConfig({
    // Served from GitHub Pages at https://perawallet.github.io/pera-swap/
    base: '/pera-swap/',
    plugins: [react()],
    server: {
        port: 3000,
        open: true,
    },
    define: {
        // @perawallet/connect (WalletConnect v1) expects a Node-style `global`.
        global: 'globalThis',
    },
})
