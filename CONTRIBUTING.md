# Contributing

## Getting started

Prerequisites: Node 22 (see `.tool-versions`) and pnpm via Corepack.

```sh
corepack enable
pnpm install
pnpm run setup    # installs the commit-msg and pre-push Git hooks
```

## Day-to-day commands

| Command              | What it does                                              |
| -------------------- | --------------------------------------------------------- |
| `pnpm test`          | Run unit tests (Vitest)                                   |
| `pnpm test:coverage` | Tests with coverage; fails under 80%                      |
| `pnpm lint`          | oxlint                                                    |
| `pnpm lint:types`    | Type-aware oxlint rules (floating/misused promises)       |
| `pnpm format`        | Format with oxfmt                                         |
| `pnpm typecheck`     | `tsc --noEmit`                                            |
| `pnpm build`         | Build ESM + CJS + types with tsdown (runs publint & attw) |
| `pnpm check`         | Everything CI runs; also the pre-push hook                |
| `pnpm example:dev`   | Run the React example against the local library           |

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
