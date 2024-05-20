# Presets for TypeScript

This package provides predefined,
opinionated [TypeScript](https://www.typescriptlang.org) configurations to be
applied to the [`extends`](https://www.typescriptlang.org/tsconfig#extends)
property in `tsconfig.json`.

## Installation
Install the [`typescript`](https://www.npmjs.com/package/typescript)
and [`@rainstormy/presets-typescript`](https://www.npmjs.com/package/@rainstormy/presets-typescript)
packages:

```shell
npm install --save-dev typescript @rainstormy/presets-typescript
```
```shell
pnpm install --save-dev typescript @rainstormy/presets-typescript
```
```shell
yarn add --dev typescript @rainstormy/presets-typescript
```

## Usage
Create a [`tsconfig.json`](https://www.typescriptlang.org/tsconfig) file and
make it extend the following configuration to enable type-checking in general:

- `@rainstormy/presets-typescript/base`

In addition to this, extend one of the following configurations to target a
specific environment:

- `@rainstormy/presets-typescript/target-web-es2023` (for web browser and
  full-stack projects)
- `@rainstormy/presets-typescript/target-node-es2023` (for server-side Node.js
  projects)

For example:

```json
{
  "$schema": "https://json.schemastore.org/tsconfig",
  "extends": [
    "@rainstormy/presets-typescript/base",
    "@rainstormy/presets-typescript/target-web-es2023"
  ]
}
```

### Generate `js` and `.d.ts` files
Extend one of the following configurations to enable generation of `js`
and `d.ts` files:

- `@rainstormy/presets-typescript/emit-all` (to generate `js` and `d.ts` files)
- `@rainstormy/presets-typescript/emit-types-only` (to generate `d.ts` files
  only)

For example:

```json
{
  "$schema": "https://json.schemastore.org/tsconfig",
  "extends": [
    "@rainstormy/presets-typescript/base",
    "@rainstormy/presets-typescript/emit-all",
    "@rainstormy/presets-typescript/target-web-es2023"
  ]
}
```

### Override settings
Specify the desired options like `compilerOptions` and `include` as usual.

For example:

```json
{
  "$schema": "https://json.schemastore.org/tsconfig",
  "extends": [
    "@rainstormy/presets-typescript/base",
    "@rainstormy/presets-typescript/emit-all",
    "@rainstormy/presets-typescript/target-node-es2023"
  ],
  "compilerOptions": {
    "baseUrl": "./",
    "incremental": true,
    "noEmitOnError": false,
    "outDir": "dist",
    "sourceMap": true
  },
  "include": ["./src/**/*.ts", "./*.config.js", "./*.config.ts"]
}
```

### Eject from the preset
Copy the relevant parts of
the [JSON files in this package](https://github.com/rainstormy/presets-web/tree/main/packages/presets-typescript)
and insert them directly into the `tsconfig.json` file. Make adjustments as
needed.
