import { defineConfig, devices } from '@playwright/test'

const CI = Boolean(process.env.CI)

// Three origins: the dApp (host), the trusted widget, and an untrusted frame.
export const HOST_URL = 'http://localhost:4301'
export const WIDGET_ORIGIN = 'http://127.0.0.1:4302'
export const UNTRUSTED_ORIGIN = 'http://localhost:4302'

export default defineConfig({
    testDir: 'tests/browser',
    testMatch: '**/*.spec.ts',
    forbidOnly: CI,
    retries: CI ? 1 : 0,
    reporter: CI ? [['github'], ['html', { open: 'never' }]] : 'list',
    use: {
        baseURL: HOST_URL,
        trace: 'retain-on-failure',
        launchOptions: {
            // Lets sandboxes with a preinstalled Chromium skip `playwright install`.
            executablePath:
                process.env.PLAYWRIGHT_CHROMIUM_EXECUTABLE || undefined,
        },
    },
    projects: [{ name: 'chromium', use: { ...devices['Desktop Chrome'] } }],
    webServer: [
        {
            command: 'pnpm exec vite --config tests/browser/vite.config.ts',
            url: 'http://127.0.0.1:4301/',
            reuseExistingServer: !CI,
        },
        {
            command: 'node tests/browser/static-server.mjs',
            url: `${WIDGET_ORIGIN}/widget.html`,
            reuseExistingServer: !CI,
        },
    ],
})
