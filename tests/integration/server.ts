import { setupServer } from 'msw/node'

export const MAINNET_API = 'https://mainnet.api.perawallet.app'
export const TESTNET_API = 'https://testnet.api.perawallet.app'

/** Handlers are registered per test with `server.use(...)`. */
export const server = setupServer()
