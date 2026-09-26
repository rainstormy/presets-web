# Agent contribution guidelines

This project exports a set of predefined, opinionated configurations for Oxfmt, Oxlint, and TypeScript.
These presets are crafted to strike a balance between correctness, maintainability, and tooling performance.

In addition to the main Oxlint configuration which already includes support for Vitest, the Oxlint presets also define framework-specific add-ons for Next.js, React, React Router, and Storybook.

## Technologies

- **Language:** TypeScript on ECMAScript 2025
- **Toolchain:** Vite+ (including Oxfmt, Oxlint, tsdown, Vite, and Vitest)
- **Runtime:** Node.js 24 (LTS)
- **CI/CD pipeline:** GitHub Actions

## Tasks

Always use `vpr` from Vite+ to install dependencies and run tasks. Never use npm, npx, pnpm, yarn, bun, etc.

- `vpr fmt`: Reformats the code. Mandatory after implementing code changes.
- `vpr check`: Verifies that the code is clean, type-safe, and well-formatted. Mandatory before finishing.
- `vpr test [...filenames]`: Runs the given unit test files or the entire test suite if no arguments are provided. Equivalent to `vitest run`. Mandatory before finishing.
- `vpr comet`: Lints the commit messages on the current branch with Comet itself. Mandatory before finishing if you have created new commits.
- `vpr install`: Installs dependencies. Rarely needed for code changes.
- `vpr build`: Generates build artefacts for the npm package. Only needed when releasing. Never needed for code changes.

## Entrypoints

- `src/oxfmt/index.ts`: Barrel export of the Oxfmt preset.
- `src/oxlint/index.ts`: Barrel export of all Oxlint presets.
- `src/typescript/index.jsonc`: Standard TypeScript preset.
- `README.md`: Usage instructions for the end users plus information about the opinionated code style enforced by the presets.
