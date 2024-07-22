# Presets for Biome

This package provides predefined, opinionated [Biome](https://biomejs.dev)
configurations to be applied to
the [`extends`](https://biomejs.dev/guides/how-biome-works/#the-extends-option)
property in `biome.json`.

## Installation
Install the [`@biomejs/biome`](https://www.npmjs.com/package/@biomejs/biome)
and [`@rainstormy/presets-biome`](https://www.npmjs.com/package/@rainstormy/presets-biome)
packages:

```shell
npm install --save-dev @biomejs/biome @rainstormy/presets-biome
```
```shell
pnpm install --save-dev @biomejs/biome @rainstormy/presets-biome
```
```shell
yarn add --dev @biomejs/biome @rainstormy/presets-biome
```

## Usage
Create a [`biome.json`](https://biomejs.dev/reference/configuration) file and
make it extend the following configuration to enable formatting and linting in
general:

- `@rainstormy/presets-biome/base`

For example:

```json
{
  "$schema": "https://biomejs.dev/schemas/1.8.2/schema.json",
  "extends": [
    "@rainstormy/presets-biome/base"
  ]
}
```

### With Next.js
Extend the following configuration to adjust the linting rules
to support [Next.js](https://nextjs.org) apps using the app router:

- `@rainstormy/presets-biome/nextjs`

For example:

```json
{
  "$schema": "https://biomejs.dev/schemas/1.8.2/schema.json",
  "extends": [
    "@rainstormy/presets-biome/base",
    "@rainstormy/presets-biome/nextjs"
  ]
}
```

### With Storybook
Extend the following configuration to adjust the linting rules
to support [Storybook](https://storybook.js.org) stories:

- `@rainstormy/presets-biome/storybook`

For example:

```json
{
  "$schema": "https://biomejs.dev/schemas/1.8.2/schema.json",
  "extends": [
    "@rainstormy/presets-biome/base",
    "@rainstormy/presets-biome/storybook"
  ]
}
```

### With Jest/Vitest
Extend the following configuration to adjust the linting rules
to support [Jest](https://jestjs.io) and [Vitest](https://vitest.dev) test
suites.

- `@rainstormy/presets-biome/test`

For example:

```json
{
  "$schema": "https://biomejs.dev/schemas/1.8.2/schema.json",
  "extends": [
    "@rainstormy/presets-biome/base",
    "@rainstormy/presets-biome/test"
  ]
}
```

### Override settings
Specify the desired options like `files` and `overrides` as usual.

For example:

```json
{
  "$schema": "https://biomejs.dev/schemas/1.8.2/schema.json",
  "extends": [
    "@rainstormy/presets-biome/base",
    "@rainstormy/presets-biome/nextjs",
    "@rainstormy/presets-biome/storybook",
    "@rainstormy/presets-biome/test"
  ],
  "files": {
    "ignore": ["public/", "terraform/"]
  },
  "javascript": {
    "formatter": {
      "semicolons": "always"
    }
  },
  "overrides": [
    {
      "include": ["app/_browser/components/**/*.tsx"],
      "linter": {
        "rules": {
          "correctness": {
            "useExhaustiveDependencies": {
              "level": "error",
              "options": {
                "hooks": [
                  { "name": "useWindowEvent", "stableResult": true }
                ]
              }
            }
          }
        }
      }
    }
  ]
}
```

### Eject from the preset
Copy the relevant parts of
the [JSON files in this package](https://github.com/rainstormy/presets-web/tree/main/packages/presets-biome)
and insert them directly into the `biome.json` file. Make adjustments as needed.
