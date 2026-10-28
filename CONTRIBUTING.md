# Contributing

## Getting started

Prerequisites: Node 22 (see `.tool-versions`) and pnpm via Corepack.

```sh
corepack enable
pnpm install
pnpm run setup    # installs the commit-msg and pre-push Git hooks
```

## Day-to-day commands

| Command                 | What it does                                                         |
| ----------------------- | -------------------------------------------------------------------- |
| `pnpm test`             | Unit tests (Vitest)                                                  |
| `pnpm test:coverage`    | Unit tests with coverage; fails under 95%                            |
| `pnpm test:integration` | API integration tests against a mocked network (MSW)                 |
| `pnpm test:package`     | Builds, packs and uses the package from ESM, CJS and TS              |
| `pnpm test:browser`     | Builds, then runs Playwright cross-origin widget tests               |
| `pnpm test:live`        | Read-only contract tests against the real Pera API                   |
| `pnpm test:all`         | Everything except live tests                                         |
| `pnpm lint`             | oxlint                                                               |
| `pnpm lint:types`       | Type-aware oxlint rules (floating/misused promises)                  |
| `pnpm format`           | Format with oxfmt                                                    |
| `pnpm typecheck`        | `tsc --noEmit` for `src/` and `tests/`                               |
| `pnpm build`            | Build ESM + CJS + types with tsdown (runs publint & attw)            |
| `pnpm check`            | Pre-push checks: format, lint, typecheck, unit, integration, package |
| `pnpm example:dev`      | Run the React example against the local library                      |

## Tests

| Layer       | Where                         | What it covers                                                                                            |
| ----------- | ----------------------------- | --------------------------------------------------------------------------------------------------------- |
| Unit        | `src/__tests__/*.test.ts`     | Every module in isolation. Node by default; DOM tests opt in with `// @vitest-environment jsdom`.         |
| Integration | `tests/integration/`          | Full quote → prepare → sign → report flow with MSW at the network boundary and real algosdk transactions. |
| Package     | `tests/package/`              | The packed tarball installed into a throwaway app: ESM import, CJS require, Node16 TypeScript typecheck.  |
| Browser     | `tests/browser/` (Playwright) | `WidgetController` and a fake widget in a real cross-origin iframe: signing, errors, origin checks.       |
| Live        | `tests/live/`                 | Opt-in, read-only checks that the real API still matches our types. Weekly in CI.                         |

Unhandled network requests fail integration tests, so nothing reaches the real API by accident.

First-time browser test setup: `pnpm exec playwright install chromium`. If a
Chromium is already installed elsewhere, point `PLAYWRIGHT_CHROMIUM_EXECUTABLE`
at it instead.

## Branching

`<your-name>/<feature-or-fix>`, e.g. `yasin/fix-origin-check`.

## Commits

[Conventional Commits](https://www.conventionalcommits.org/), enforced by the
`commit-msg` hook:

```
feat(swap): add signal support to getAssets
fix(controller): remove message listener on cleanup
docs: update README examples
```

## Pull requests

Target `main`, fill out the PR template and squash-merge. CI must be green.

## Releasing

Every push to `main` runs `.github/workflows/release.yml`. It publishes to npm
(trusted publishing with provenance) and creates a GitHub release **only if**
the `version` in `package.json` isn't published yet. To release, bump the
version in your PR and add an entry to `CHANGELOG.md`.

## Project layout

```
src/
  index.ts          Public API — everything exported from the package
  swap.ts           PeraSwap: Swap API client
  controller.ts     WidgetController: iframe ↔ host messaging
  widget/url.ts     Widget URL + iframe helpers
  widget/messages.ts  postMessage protocol types and guards
  http.ts           fetch wrapper
  errors.ts         PeraSwapApiError
  constants.ts      URLs and defaults
  types.ts          API and widget types
  __tests__/        Unit tests
examples/react/     Example app (pnpm workspace package)
```

Keep the public surface in `src/index.ts` explicit — anything not exported
there is internal and can change freely.
