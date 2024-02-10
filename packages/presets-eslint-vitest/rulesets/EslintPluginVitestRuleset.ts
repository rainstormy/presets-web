import { type EslintPluginRuleset } from "@rainstormy/presets-eslint/dist/EslintConfig.js"

export type EslintPluginVitestRuleset = EslintPluginRuleset<
	"vitest",
	| "vitest/consistent-test-filename"
	| "vitest/consistent-test-it"
	| "vitest/expect-expect"
	| "vitest/max-expects"
	| "vitest/max-nested-describe"
	| "vitest/no-alias-methods"
	| "vitest/no-commented-out-tests"
	| "vitest/no-conditional-expect"
	| "vitest/no-conditional-in-test"
	| "vitest/no-conditional-tests"
	| "vitest/no-disabled-tests"
	| "vitest/no-done-callback"
	| "vitest/no-duplicate-hooks"
	| "vitest/no-focused-tests"
	| "vitest/no-hooks"
	| "vitest/no-identical-title"
	| "vitest/no-import-node-test"
	| "vitest/no-interpolation-in-snapshots"
	| "vitest/no-large-snapshots"
	| "vitest/no-mocks-import"
	| "vitest/no-restricted-matchers"
	| "vitest/no-restricted-vi-methods"
	| "vitest/no-standalone-expect"
	| "vitest/no-test-prefixes"
	| "vitest/no-test-return-statement"
	| "vitest/prefer-called-with"
	| "vitest/prefer-comparison-matcher"
	| "vitest/prefer-each"
	| "vitest/prefer-equality-matcher"
	| "vitest/prefer-expect-assertions"
	| "vitest/prefer-expect-resolves"
	| "vitest/prefer-hooks-in-order"
	| "vitest/prefer-hooks-on-top"
	| "vitest/prefer-lowercase-title"
	| "vitest/prefer-mock-promise-shorthand"
	| "vitest/prefer-snapshot-hint"
	| "vitest/prefer-spy-on"
	| "vitest/prefer-strict-equal"
	| "vitest/prefer-to-be-falsy"
	| "vitest/prefer-to-be-object"
	| "vitest/prefer-to-be-truthy"
	| "vitest/prefer-to-be"
	| "vitest/prefer-to-contain"
	| "vitest/prefer-to-have-length"
	| "vitest/prefer-todo"
	| "vitest/require-hook"
	| "vitest/require-local-test-context-for-concurrent-snapshots"
	| "vitest/require-to-throw-message"
	| "vitest/require-top-level-describe"
	| "vitest/unbound-method"
	| "vitest/valid-describe-callback"
	| "vitest/valid-expect"
	| "vitest/valid-title"
>