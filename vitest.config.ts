import { defineConfig } from 'vitest/config'

const COVERAGE_THRESHOLD = 80

export default defineConfig({
    test: {
        environment: 'jsdom',
        include: ['src/**/*.test.ts'],
        restoreMocks: true,
        unstubGlobals: true,
        coverage: {
            provider: 'v8',
            include: ['src/**/*.ts'],
            exclude: [
                'src/**/*.test.ts',
                'src/**/__tests__/**',
                'src/index.ts',
            ],
            reporter: ['text', 'html', 'lcov'],
            thresholds: {
                branches: COVERAGE_THRESHOLD,
                functions: COVERAGE_THRESHOLD,
                lines: COVERAGE_THRESHOLD,
                statements: COVERAGE_THRESHOLD,
            },
        },
    },
})
