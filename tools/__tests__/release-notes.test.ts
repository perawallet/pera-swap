import { spawnSync } from 'node:child_process'
import { readFileSync } from 'node:fs'
import { describe, expect, it } from 'vitest'

const script = new URL('../release-notes.mjs', import.meta.url).pathname
const { version } = JSON.parse(
    readFileSync(new URL('../../package.json', import.meta.url), 'utf8'),
) as { version: string }

const run = (...args: string[]) =>
    spawnSync(process.execPath, [script, ...args], { encoding: 'utf8' })

describe('release-notes', () => {
    // Also keeps a version bump from landing without its CHANGELOG entry.
    it('prints the CHANGELOG section of the current version', () => {
        const { status, stdout } = run(version)

        expect(status).toBe(0)
        expect(stdout).toContain('### ')
        expect(stdout).not.toMatch(/^## /m)
    })

    it('fails for a version without a section', () => {
        const { status, stderr } = run('0.0.0-missing')

        expect(status).toBe(1)
        expect(stderr).toContain('no "## 0.0.0-missing" section')
    })

    it('fails without a version', () => {
        expect(run().status).toBe(1)
    })
})
