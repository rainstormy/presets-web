import {
	assertOptions,
	assertOptionsTargetFilePatterns,
	eslintPresetIdentifier,
	type EslintPreset,
	type EslintPresetOptionsTargetFilePatterns,
} from "@rainstormy/presets-eslint/dist/EslintPresetUtilities.js"
import vitestPlugin from "eslint-plugin-vitest"

/**
 * A predefined, opinionated ESLint configuration for files with Vitest test suites.
 *
 * ```javascript
 * eslintPresetVitest()
 * ```
 *
 * is equivalent to
 *
 * ```javascript
 * eslintPresetVitest({
 *     targetFilePatterns: ["**\/*.@(spec|specs|test|tests).@(js|jsx|ts|tsx)"],
 * })
 * ```
 *
 * @see https://github.com/veritem/eslint-plugin-vitest#rules vitest/*
 */
export function eslintPresetVitest(
	options?: EslintPresetOptionsTargetFilePatterns,
): EslintPreset
export function eslintPresetVitest(options: unknown): EslintPreset {
	const eslintPresetName = "eslintPresetVitest"
	const checkedOptions = options ?? {}

	assertOptions(checkedOptions, eslintPresetName)
	assertOptionsTargetFilePatterns(checkedOptions, eslintPresetName)

	const {
		targetFilePatterns = ["**/*.@(spec|specs|test|tests).@(js|jsx|ts|tsx)"],
	} = checkedOptions

	return {
		[eslintPresetIdentifier]: eslintPresetName,
		files: targetFilePatterns,
		languageOptions: {
			globals: {
				afterAll: true,
				afterEach: true,
				assert: true,
				assertType: true,
				beforeAll: true,
				beforeEach: true,
				describe: true,
				expect: true,
				expectTypeOf: true,
				it: true,
				suite: true,
				test: true,
				vi: true,
				vitest: true,
			},
		},
		plugins: {
			vitest: vitestPlugin,
		},
		rules: {
			/**
			 * The `each()` function in Vitest uses consecutive whitespace characters in template strings to align test input.
			 * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/string-content.md
			 */
			"unicorn/string-content": "off",

			/**
			 * This rule is futile, as the `files` option in the ESLint configuration should not include inconsistently named test files in the first place.
			 * @see https://github.com/veritem/eslint-plugin-vitest/blob/main/docs/rules/consistent-test-filename.md
			 */
			"vitest/consistent-test-filename": "off",

			/**
			 * @see https://github.com/veritem/eslint-plugin-vitest/blob/main/docs/rules/consistent-test-it.md
			 * @see https://github.com/jest-community/eslint-plugin-jest/blob/main/docs/rules/consistent-test-it.md
			 */
			"vitest/consistent-test-it": "error",

			/**
			 * @see https://github.com/veritem/eslint-plugin-vitest/blob/main/docs/rules/expect-expect.md
			 * @see https://github.com/jest-community/eslint-plugin-jest/blob/main/docs/rules/expect-expect.md
			 */
			"vitest/expect-expect": "error",

			/**
			 * @see https://github.com/veritem/eslint-plugin-vitest/blob/main/docs/rules/max-expects.md
			 * @see https://github.com/jest-community/eslint-plugin-jest/blob/main/docs/rules/max-expects.md
			 */
			"vitest/max-expects": "error",

			/**
			 * @see https://github.com/veritem/eslint-plugin-vitest/blob/main/docs/rules/max-nested-describe.md
			 * @see https://github.com/jest-community/eslint-plugin-jest/blob/main/docs/rules/max-nested-describe.md
			 */
			"vitest/max-nested-describe": "error",

			/**
			 * @see https://github.com/veritem/eslint-plugin-vitest/blob/main/docs/rules/no-alias-methods.md
			 * @see https://github.com/jest-community/eslint-plugin-jest/blob/main/docs/rules/no-alias-methods.md
			 */
			"vitest/no-alias-methods": "error",

			/**
			 * @see https://github.com/veritem/eslint-plugin-vitest/blob/main/docs/rules/no-commented-out-tests.md
			 * @see https://github.com/jest-community/eslint-plugin-jest/blob/main/docs/rules/no-commented-out-tests.md
			 */
			"vitest/no-commented-out-tests": "error",

			/**
			 * @see https://github.com/veritem/eslint-plugin-vitest/blob/main/docs/rules/no-conditional-expect.md
			 * @see https://github.com/jest-community/eslint-plugin-jest/blob/main/docs/rules/no-conditional-expect.md
			 */
			"vitest/no-conditional-expect": "error",

			/**
			 * @see https://github.com/veritem/eslint-plugin-vitest/blob/main/docs/rules/no-conditional-in-test.md
			 * @see https://github.com/jest-community/eslint-plugin-jest/blob/main/docs/rules/no-conditional-in-test.md
			 */
			"vitest/no-conditional-in-test": "error",

			/**
			 * @see https://github.com/veritem/eslint-plugin-vitest/blob/main/docs/rules/no-conditional-tests.md
			 */
			"vitest/no-conditional-tests": "error",

			/**
			 * @see https://github.com/veritem/eslint-plugin-vitest/blob/main/docs/rules/no-disabled-tests.md
			 * @see https://github.com/jest-community/eslint-plugin-jest/blob/main/docs/rules/no-disabled-tests.md
			 */
			"vitest/no-disabled-tests": "error",

			/**
			 * @see https://github.com/veritem/eslint-plugin-vitest/blob/main/docs/rules/no-done-callback.md
			 * @see https://github.com/jest-community/eslint-plugin-jest/blob/main/docs/rules/no-done-callback.md
			 */
			"vitest/no-done-callback": "error",

			/**
			 * `vitest/no-hooks` supersedes this rule.
			 * @see https://github.com/veritem/eslint-plugin-vitest/blob/main/docs/rules/no-duplicate-hooks.md
			 * @see https://github.com/jest-community/eslint-plugin-jest/blob/main/docs/rules/no-duplicate-hooks.md
			 */
			"vitest/no-duplicate-hooks": "off",

			/**
			 * @see https://github.com/veritem/eslint-plugin-vitest/blob/main/docs/rules/no-focused-tests.md
			 * @see https://github.com/jest-community/eslint-plugin-jest/blob/main/docs/rules/no-focused-tests.md
			 */
			"vitest/no-focused-tests": "error",

			/**
			 * @see https://github.com/veritem/eslint-plugin-vitest/blob/main/docs/rules/no-hooks.md
			 * @see https://github.com/jest-community/eslint-plugin-jest/blob/main/docs/rules/no-hooks.md
			 */
			"vitest/no-hooks": "error",

			/**
			 * @see https://github.com/veritem/eslint-plugin-vitest/blob/main/docs/rules/no-identical-title.md
			 * @see https://github.com/jest-community/eslint-plugin-jest/blob/main/docs/rules/no-identical-title.md
			 */
			"vitest/no-identical-title": "error",

			/**
			 * @see https://github.com/veritem/eslint-plugin-vitest/blob/main/docs/rules/no-import-node-test.md
			 */
			"vitest/no-import-node-test": "error",

			/**
			 * @see https://github.com/veritem/eslint-plugin-vitest/blob/main/docs/rules/no-interpolation-in-snapshots.md
			 * @see https://github.com/jest-community/eslint-plugin-jest/blob/main/docs/rules/no-interpolation-in-snapshots.md
			 */
			"vitest/no-interpolation-in-snapshots": "error",

			/**
			 * @see https://github.com/veritem/eslint-plugin-vitest/blob/main/docs/rules/no-large-snapshots.md
			 * @see https://github.com/jest-community/eslint-plugin-jest/blob/main/docs/rules/no-large-snapshots.md
			 */
			"vitest/no-large-snapshots": "error",

			/**
			 * @see https://github.com/veritem/eslint-plugin-vitest/blob/main/docs/rules/no-mocks-import.md
			 * @see https://github.com/jest-community/eslint-plugin-jest/blob/main/docs/rules/no-mocks-import.md
			 */
			"vitest/no-mocks-import": "error",

			/**
			 * This rule has not been configured.
			 * @see https://github.com/veritem/eslint-plugin-vitest/blob/main/docs/rules/no-restricted-matchers.md
			 * @see https://github.com/jest-community/eslint-plugin-jest/blob/main/docs/rules/no-restricted-matchers.md
			 */
			"vitest/no-restricted-matchers": "off",

			/**
			 * This rule has not been configured.
			 * @see https://github.com/veritem/eslint-plugin-vitest/blob/main/docs/rules/no-restricted-vi-methods.md
			 */
			"vitest/no-restricted-vi-methods": "off",

			/**
			 * @see https://github.com/veritem/eslint-plugin-vitest/blob/main/docs/rules/no-standalone-expect.md
			 * @see https://github.com/jest-community/eslint-plugin-jest/blob/main/docs/rules/no-standalone-expect.md
			 */
			"vitest/no-standalone-expect": "error",

			/**
			 * @see https://github.com/veritem/eslint-plugin-vitest/blob/main/docs/rules/no-test-prefixes.md
			 * @see https://github.com/jest-community/eslint-plugin-jest/blob/main/docs/rules/no-test-prefixes.md
			 */
			"vitest/no-test-prefixes": "error",

			/**
			 * @see https://github.com/veritem/eslint-plugin-vitest/blob/main/docs/rules/no-test-return-statement.md
			 * @see https://github.com/jest-community/eslint-plugin-jest/blob/main/docs/rules/no-test-return-statement.md
			 */
			"vitest/no-test-return-statement": "error",

			/**
			 * @see https://github.com/veritem/eslint-plugin-vitest/blob/main/docs/rules/prefer-called-with.md
			 * @see https://github.com/jest-community/eslint-plugin-jest/blob/main/docs/rules/prefer-called-with.md
			 */
			"vitest/prefer-called-with": "error",

			/**
			 * @see https://github.com/veritem/eslint-plugin-vitest/blob/main/docs/rules/prefer-comparison-matcher.md
			 * @see https://github.com/jest-community/eslint-plugin-jest/blob/main/docs/rules/prefer-comparison-matcher.md
			 */
			"vitest/prefer-comparison-matcher": "error",

			/**
			 * @see https://github.com/veritem/eslint-plugin-vitest/blob/main/docs/rules/prefer-each.md
			 * @see https://github.com/jest-community/eslint-plugin-jest/blob/main/docs/rules/prefer-each.md
			 */
			"vitest/prefer-each": "error",

			/**
			 * @see https://github.com/veritem/eslint-plugin-vitest/blob/main/docs/rules/prefer-equality-matcher.md
			 * @see https://github.com/jest-community/eslint-plugin-jest/blob/main/docs/rules/prefer-equality-matcher.md
			 */
			"vitest/prefer-equality-matcher": "error",

			/**
			 * `vitest/expect-expect` supersedes this rule in synchronous tests.
			 * @see https://github.com/veritem/eslint-plugin-vitest/blob/main/docs/rules/prefer-expect-assertions.md
			 */
			"vitest/prefer-expect-assertions": [
				"error",
				{
					onlyFunctionsWithAsyncKeyword: true,
				},
			],

			/**
			 * @see https://github.com/veritem/eslint-plugin-vitest/blob/main/docs/rules/prefer-expect-resolves.md
			 * @see https://github.com/jest-community/eslint-plugin-jest/blob/main/docs/rules/prefer-expect-resolves.md
			 */
			"vitest/prefer-expect-resolves": "error",

			/**
			 * `vitest/no-hooks` supersedes this rule.
			 * @see https://github.com/veritem/eslint-plugin-vitest/blob/main/docs/rules/prefer-hooks-in-order.md
			 * @see https://github.com/jest-community/eslint-plugin-jest/blob/main/docs/rules/prefer-hooks-in-order.md
			 */
			"vitest/prefer-hooks-in-order": "off",

			/**
			 * `vitest/no-hooks` supersedes this rule.
			 * @see https://github.com/veritem/eslint-plugin-vitest/blob/main/docs/rules/prefer-hooks-on-top.md
			 * @see https://github.com/jest-community/eslint-plugin-jest/blob/main/docs/rules/prefer-hooks-on-top.md
			 */
			"vitest/prefer-hooks-on-top": "off",

			/**
			 * @see https://github.com/veritem/eslint-plugin-vitest/blob/main/docs/rules/prefer-lowercase-title.md
			 * @see https://github.com/jest-community/eslint-plugin-jest/blob/main/docs/rules/prefer-lowercase-title.md
			 */
			"vitest/prefer-lowercase-title": "error",

			/**
			 * @see https://github.com/veritem/eslint-plugin-vitest/blob/main/docs/rules/prefer-mock-promise-shorthand.md
			 * @see https://github.com/jest-community/eslint-plugin-jest/blob/main/docs/rules/prefer-mock-promise-shorthand.md
			 */
			"vitest/prefer-mock-promise-shorthand": "error",

			/**
			 * @see https://github.com/veritem/eslint-plugin-vitest/blob/main/docs/rules/prefer-snapshot-hint.md
			 * @see https://github.com/jest-community/eslint-plugin-jest/blob/main/docs/rules/prefer-snapshot-hint.md
			 */
			"vitest/prefer-snapshot-hint": "error",

			/**
			 * @see https://github.com/veritem/eslint-plugin-vitest/blob/main/docs/rules/prefer-spy-on.md
			 * @see https://github.com/jest-community/eslint-plugin-jest/blob/main/docs/rules/prefer-spy-on.md
			 */
			"vitest/prefer-spy-on": "error",

			/**
			 * @see https://github.com/veritem/eslint-plugin-vitest/blob/main/docs/rules/prefer-strict-equal.md
			 * @see https://github.com/jest-community/eslint-plugin-jest/blob/main/docs/rules/prefer-strict-equal.md
			 */
			"vitest/prefer-strict-equal": "error",

			/**
			 * @see https://github.com/veritem/eslint-plugin-vitest/blob/main/docs/rules/prefer-to-be.md
			 * @see https://github.com/jest-community/eslint-plugin-jest/blob/main/docs/rules/prefer-to-be.md
			 */
			"vitest/prefer-to-be": "error",

			/**
			 * @see https://github.com/veritem/eslint-plugin-vitest/blob/main/docs/rules/prefer-to-be-falsy.md
			 */
			"vitest/prefer-to-be-falsy": "error",

			/**
			 * @see https://github.com/veritem/eslint-plugin-vitest/blob/main/docs/rules/prefer-to-be-object.md
			 */
			"vitest/prefer-to-be-object": "error",

			/**
			 * @see https://github.com/veritem/eslint-plugin-vitest/blob/main/docs/rules/prefer-to-be-truthy.md
			 */
			"vitest/prefer-to-be-truthy": "error",

			/**
			 * @see https://github.com/veritem/eslint-plugin-vitest/blob/main/docs/rules/prefer-to-contain.md
			 * @see https://github.com/jest-community/eslint-plugin-jest/blob/main/docs/rules/prefer-to-contain.md
			 */
			"vitest/prefer-to-contain": "error",

			/**
			 * @see https://github.com/veritem/eslint-plugin-vitest/blob/main/docs/rules/prefer-to-have-length.md
			 * @see https://github.com/jest-community/eslint-plugin-jest/blob/main/docs/rules/prefer-to-have-length.md
			 */
			"vitest/prefer-to-have-length": "error",

			/**
			 * @see https://github.com/veritem/eslint-plugin-vitest/blob/main/docs/rules/prefer-todo.md
			 * @see https://github.com/jest-community/eslint-plugin-jest/blob/main/docs/rules/prefer-todo.md
			 */
			"vitest/prefer-todo": "error",

			/**
			 * `vitest/no-hooks` supersedes this rule.
			 * @see https://github.com/veritem/eslint-plugin-vitest/blob/main/docs/rules/require-hook.md
			 * @see https://github.com/jest-community/eslint-plugin-jest/blob/main/docs/rules/require-hook.md
			 */
			"vitest/require-hook": "off",

			/**
			 * @see https://github.com/veritem/eslint-plugin-vitest/blob/main/docs/rules/require-local-test-context-for-concurrent-snapshots.md
			 */
			"vitest/require-local-test-context-for-concurrent-snapshots": "error",

			/**
			 * @see https://github.com/veritem/eslint-plugin-vitest/blob/main/docs/rules/require-to-throw-message.md
			 * @see https://github.com/jest-community/eslint-plugin-jest/blob/main/docs/rules/require-to-throw-message.md
			 */
			"vitest/require-to-throw-message": "error",

			/**
			 * @see https://github.com/veritem/eslint-plugin-vitest/blob/main/docs/rules/require-top-level-describe.md
			 * @see https://github.com/jest-community/eslint-plugin-jest/blob/main/docs/rules/require-top-level-describe.md
			 */
			"vitest/require-top-level-describe": "error",

			/**
			 * `functional/no-this-expressions` supersedes this rule.
			 * @see https://github.com/veritem/eslint-plugin-vitest/blob/main/docs/rules/unbound-method.md
			 * @see https://github.com/jest-community/eslint-plugin-jest/blob/main/docs/rules/unbound-method.md
			 */
			"vitest/unbound-method": "off",

			/**
			 * Vitest supports async callbacks in `describe()` blocks.
			 * @see https://github.com/veritem/eslint-plugin-vitest/blob/main/docs/rules/valid-describe-callback.md
			 * @see https://github.com/jest-community/eslint-plugin-jest/blob/main/docs/rules/valid-describe-callback.md
			 */
			"vitest/valid-describe-callback": "off",

			/**
			 * @see https://github.com/veritem/eslint-plugin-vitest/blob/main/docs/rules/valid-expect.md
			 * @see https://github.com/jest-community/eslint-plugin-jest/blob/main/docs/rules/valid-expect.md
			 */
			"vitest/valid-expect": "error",

			/**
			 * @see https://github.com/veritem/eslint-plugin-vitest/blob/main/docs/rules/valid-title.md
			 * @see https://github.com/jest-community/eslint-plugin-jest/blob/main/docs/rules/valid-title.md
			 */
			"vitest/valid-title": "error",
		},
	}
}
