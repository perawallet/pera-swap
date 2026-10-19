import { defineConfig } from 'vitest/config'

const COVERAGE_THRESHOLD = 95

export default defineConfig({
    test: {
        restoreMocks: true,
        unstubGlobals: true,
        projects: [
            {
                extends: true,
                test: {
                    name: 'unit',
                    // Files that need a DOM opt in with `// @vitest-environment jsdom`.
                    environment: 'node',
                    include: ['src/**/*.test.ts'],
                },
            },
            {
                extends: true,
                test: {
                    name: 'integration',
                    environment: 'node',
                    include: ['tests/integration/**/*.test.ts'],
                    setupFiles: ['tests/integration/setup.ts'],
                },
            },
            {
                extends: true,
                test: {
                    name: 'package',
                    environment: 'node',
                    include: ['tests/package/**/*.test.ts'],
                    testTimeout: 60_000,
                },
            },
            {
                extends: true,
                test: {
                    name: 'live',
                    environment: 'node',
                    include: ['tests/live/**/*.test.ts'],
                    testTimeout: 30_000,
                    retry: 2,
                },
            },
        ],
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
