# Tooling Presets for Web Development

This package provides predefined, opinionated configurations for
[Oxfmt](https://oxc.rs/docs/guide/usage/formatter.html),
[Oxlint](https://oxc.rs/docs/guide/usage/linter.html), and
[TypeScript](https://www.typescriptlang.org), carefully crafted to strike a balance between correctness, maintainability, and tooling performance.

## Code style
- **Indent with tabs** to improve developers' accessibility through customisable indentation widths, to reduce the number of required keystrokes, and to reduce the file sizes. Inspiration: [Fixing Tabs versus Spaces](https://blog.jetbrains.com/dotnet/2022/08/11/virtual-formatter-in-resharper-2022-2/#what-was-it-about-again) by Matthias Koch at JetBrains.
  - Exceptions: Indent with spaces in Markdown files (`*.md`), TOML files (`*.toml`), and YAML files (`*.{yaml,yml}`).
- **Omit semicolons** and rely fully on [automatic semicolon insertion](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Lexical_grammar#automatic_semicolon_insertion) to reduce cognitive complexity and visual noise in the code. Using semicolons does not disable the behaviour of automatic semicolon insertion anyway. Inspiration: [Hacking Semicolons](https://slides.com/evanyou/semicolons) by Evan You.
- **Locate source code in the `src` directory** to improve discoverability and scalability by simplifying glob patterns and giving all projects a consistent structure.
- **Use PascalCase for filenames** to reduce cognitive complexity by sticking to a simple naming convention that is consistent with type names and component names.
  - Exceptions: Use kebab-case for configuration files (`*.config.ts`), Node.js script files (`*.script.ts`), and program entrypoints (`src/main-*.ts`).
- **Use path aliases prefixed by `#`** to normalise all import statements, thus reducing diff churn, and to preserve compatibility with Node.js subpath imports.
- **Use the generic `Array<T>` type** instead of the shorthand `T[]` syntax to make arrays of union types cleaner and to remain consistent with other built-in types such as `Set<T>`, `Map<K, V>`, and `Promise<T>`.
- **Use the `type` alias syntax** instead of the `interface` syntax to improve flexibility with union types, intersection types, and generic wrapper types such as `Readonly<T>` and `Partial<T>`.
- **Access JSX component props directly on the `props` object** (including React components) instead of destructuring it to avoid duplicating the prop names in type declarations.
- **Use a top-down declaration order** to improve readability and reduce cognitive complexity by sticking to a predictable declaration order. Inspiration: [Stepdown Rule](https://dzone.com/articles/the-stepdown-rule), originally described in Clean Code by Robert C. Martin (a.k.a. Uncle Bob).
- **Use `function` declarations** instead of `const` with arrow functions to improve type safety and to enable top-down declaration orders, as function declarations are hoisted.
- **Disallow importing `devDependencies` and test files in production code** to prevent accidental bundling of development dependencies and test data in production artefacts.

## Installation
Install [`@rainstormy/presets-web`](https://www.npmjs.com/package/@rainstormy/presets-web), along with its peer dependencies, with the package manager of your choice:

```shell
npm install --save-dev @rainstormy/presets-web oxfmt oxlint typescript
```
```shell
pnpm add --save-dev @rainstormy/presets-web oxfmt oxlint typescript
```
```shell
yarn add --dev @rainstormy/presets-web oxfmt oxlint typescript
```

## Usage
Lint, type-check, and check formatting:

```shell
oxlint --type-aware --type-check --deny-warnings && oxfmt --check
```

Apply linting suggestions and reformat files in one command:

```shell
oxlint --fix-dangerously && oxfmt
```

## Configuration
Create `oxfmt.config.ts`, `oxlint.config.ts`, and `tsconfig.json` next to `package.json` in the project root directory.

### Oxfmt (`oxfmt.config.ts`)
Use `defineOxfmtConfig()` instead of the regular [`defineConfig()`](https://oxc.rs/docs/guide/usage/formatter/config.html#create-a-config-file) function and override options as needed.
For example:

```ts
import { defineOxfmtConfig } from "@rainstormy/presets-web/oxfmt"

export default defineOxfmtConfig({
  ignorePatterns: ["**/*.md"],
})
```

Minimal configuration:

```ts
import { defineOxfmtConfig } from "@rainstormy/presets-web/oxfmt"

export default defineOxfmtConfig()
```

### Oxlint (`oxlint.config.ts`)
Use `defineOxlintConfig()` instead of the regular [`defineConfig()`](https://oxc.rs/docs/guide/usage/linter/config.html#typescript-config-file-oxlint-config-ts) function and override options as needed.
For example:

```ts
import { defineOxlintConfig } from "@rainstormy/presets-web/oxlint"

export default defineOxlintConfig({
  rules: {
    "eslint/complexity": "off",
    "eslint/no-magic-numbers": "warn",
  },
  overrides: [
    {
      files: ["src/cli/**/*.ts"],
      rules: {
        "eslint/max-params": "off",
        "unicorn/filename-case": ["warn", { case: "kebabCase" }],
      },
    },
  ],
})
```

Minimal configuration:

```ts
import { defineOxlintConfig } from "@rainstormy/presets-web/oxlint"

export default defineOxlintConfig()
```

Specifically for the `eslint/no-restricted-imports` rule, you can also use the `oxlintRestrictedImportPatterns()` helper function:

```ts
import { defineOxlintConfig, oxlintRestrictedImportPatterns } from "@rainstormy/presets-web/oxlint"

export default defineOxlintConfig({
  rules: {
    "eslint/no-restricted-imports": [
      "warn",
      {
        patterns: oxlintRestrictedImportPatterns({
          allowRelativePaths: true,
          allowNodejs: true,
          allowDecorators: true,
          allowFixtures: true,
          allowMocks: true,
          allowStories: true,
          allowTests: true,
        }),
      },
    ],
  },
})
```

### TypeScript (`tsconfig.json`)
Extend from `@rainstormy/presets-web/typescript` and override options as needed.
For example:

```json
{
  "$schema": "https://json.schemastore.org/tsconfig",
  "extends": "@rainstormy/presets-web/typescript",
  "compilerOptions": {
    "incremental": true,
    "lib": ["DOM", "ES2025"],
    "module": "ESNext",
    "target": "ESNext",
    "tsBuildInfoFile": "node_modules/.cache/typescript/.tsbuildinfo",
    "types": ["node"]
  },
  "include": ["**/*.ts"],
  "exclude": ["dist/", "node_modules/"]
}
```

## Add-ons
### [Next.js](https://nextjs.org)
Add `oxlintReactPreset()` and `oxlintNextjsPreset()` to the `extends` array in `oxlint.config.ts` to support the app router and React components in Next.js apps:

```ts
import { defineOxlintConfig, oxlintNextjsPreset, oxlintReactPreset } from "@rainstormy/presets-web/oxlint"

export default defineOxlintConfig({
  extends: [oxlintReactPreset(), oxlintNextjsPreset()],
})
```

The `app` directory and the `instrumentation.ts` and `middleware.ts`/`proxy.ts` files must reside in the `src` directory.
React components and other files in general must _not_ reside in the `app` directory, decoupling them from the Next.js app router to improve the overall maintainability and scalability of the project.

### [React Router](https://reactrouter.com)
Add `oxlintReactPreset()` and `oxlintReactRouterPreset()` to the `extends` array in `oxlint.config.ts` to support file routes and React components in React Router apps:

```ts
import { defineOxlintConfig, oxlintReactPreset, oxlintReactRouterPreset } from "@rainstormy/presets-web/oxlint"

export default defineOxlintConfig({
  extends: [oxlintReactPreset(), oxlintReactRouterPreset()],
})
```

The `routes` directory and the `root.tsx` and `routes.ts` files must reside in the `src` directory.

### [Storybook](https://storybook.js.org)
Add `oxlintStorybookPreset()` to the `extends` array in `oxlint.config.ts` to support the following kinds of files in Storybook (naming convention in parentheses):

- Stories in the [Component Story Format](https://storybook.js.org/docs/api/csf) (CSF) (`*.stories.{ts,tsx}`)
- [Decorators](https://storybook.js.org/docs/writing-stories/decorators) (`*.decorators.{ts,tsx}`)
- Storybook [configuration files](https://storybook.js.org/docs/configure) (`.storybook/*.{ts,tsx}`)

```ts
import { defineOxlintConfig, oxlintStorybookPreset } from "@rainstormy/presets-web/oxlint"

export default defineOxlintConfig({
  extends: [oxlintStorybookPreset()],
})
```

Stories must remain simple in terms of cognitive complexity, limiting the use of conditional logic.

### [Vitest](https://vitest.dev)
The base preset automatically supports the following kinds of files in Vitest (naming convention in parentheses):

- Unit test suites (`*.tests.{ts,tsx}`)
- Test fixtures such as test data, stubs, and utilities (`*.fixtures.{ts,tsx}`)
- [Module mocks](https://vitest.dev/guide/mocking#modules) (`*.mocks.{ts,tsx}`)

To reduce the likelihood of buggy tests, test files must remain simple in terms of cognitive complexity, limiting the use of conditional logic.
