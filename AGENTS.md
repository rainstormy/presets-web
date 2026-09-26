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

Always use `vpr` to install dependencies and run tasks. Never use npm, npx, pnpm, yarn etc.

- `vpr fmt`: Reformats the code. Mandatory after implementing code changes.
- `vpr check`: Verifies that the code is clean, type-safe, and well-formatted. Mandatory before finishing.
- `vpr test [...filenames]`: Runs the given unit test files or the entire test suite if no arguments are provided. Mandatory before finishing.
- `vpr install`: Installs dependencies. Rarely needed for code changes.

## Entrypoints

- `src/oxfmt/index.ts`: Barrel export of the Oxfmt presets, including the main `oxfmtPreset` configuration and the `defineOxfmtConfig` helper function.
- `src/oxlint/index.ts`: Barrel export of the Oxlint presets, including the main `oxlintPreset` configuration and the `defineOxlintConfig` helper function.
- `src/typescript/index.jsonc`: Main configuration for TypeScript.
- `README.md`: Usage instructions for end users plus information about the opinionated code style enforced by the presets.
