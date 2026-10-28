// Prints the CHANGELOG.md section for a version, used as the GitHub release
// notes. Fails when the section is missing or empty.
//
// Usage: node tools/release-notes.mjs <version>
import { readFileSync } from 'node:fs'

function fail(message) {
    process.stderr.write(`${message}\n`)
    process.exit(1)
}

const version = process.argv[2]
if (!version) {
    fail('Usage: node tools/release-notes.mjs <version>')
}

const lines = readFileSync(
    new URL('../CHANGELOG.md', import.meta.url),
    'utf8',
).split('\n')
const start = lines.indexOf(`## ${version}`)
if (start === -1) {
    fail(`CHANGELOG.md has no "## ${version}" section.`)
}
const end = lines.findIndex((line, i) => i > start && line.startsWith('## '))
const notes = lines
    .slice(start + 1, end === -1 ? undefined : end)
    .join('\n')
    .trim()
if (!notes) {
    fail(`CHANGELOG.md's "## ${version}" section is empty.`)
}
process.stdout.write(`${notes}\n`)
