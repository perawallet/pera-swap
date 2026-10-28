import { afterAll, afterEach, beforeAll } from 'vitest'
import { server } from './server'

// Any request without a handler fails the test, so nothing leaks to the real API.
beforeAll(() => server.listen({ onUnhandledRequest: 'error' }))
afterEach(() => server.resetHandlers())
afterAll(() => server.close())
