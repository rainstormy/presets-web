import { type Linter } from "eslint"
import testingLibraryPlugin from "eslint-plugin-testing-library"

/* eslint-disable max-lines,max-lines-per-function -- It would be impractical to split the configuration across multiple files and functions. */
export function testingLibrary(options: {
	readonly files: ReadonlyArray<string>
}): Linter.FlatConfig {
	return {
		files: [...options.files],
		plugins: {
			"testing-library": testingLibraryPlugin,
		},
		/**
		 * @see https://github.com/testing-library/eslint-plugin-testing-library#supported-rules testing-library
		 */
		rules: {
			/**
			 * @see https://github.com/testing-library/eslint-plugin-testing-library/blob/main/docs/rules/await-async-events.md
			 */
			"testing-library/await-async-events": "error",

			/**
			 * @see https://github.com/testing-library/eslint-plugin-testing-library/blob/main/docs/rules/await-async-queries.md
			 */
			"testing-library/await-async-queries": "error",

			/**
			 * @see https://github.com/testing-library/eslint-plugin-testing-library/blob/main/docs/rules/await-async-utils.md
			 */
			"testing-library/await-async-utils": "error",

			/**
			 * This rule has not been configured.
			 * @see https://github.com/testing-library/eslint-plugin-testing-library/blob/main/docs/rules/consistent-data-testid.md
			 */
			"testing-library/consistent-data-testid": "off",

			/**
			 * @see https://github.com/testing-library/eslint-plugin-testing-library/blob/main/docs/rules/no-await-sync-events.md
			 */
			"testing-library/no-await-sync-events": "error",

			/**
			 * @see https://github.com/testing-library/eslint-plugin-testing-library/blob/main/docs/rules/no-await-sync-queries.md
			 */
			"testing-library/no-await-sync-queries": "error",

			/**
			 * @see https://github.com/testing-library/eslint-plugin-testing-library/blob/main/docs/rules/no-container.md
			 */
			"testing-library/no-container": "error",

			/**
			 * @see https://github.com/testing-library/eslint-plugin-testing-library/blob/main/docs/rules/no-debugging-utils.md
			 */
			"testing-library/no-debugging-utils": "error",

			/**
			 * @see https://github.com/testing-library/eslint-plugin-testing-library/blob/main/docs/rules/no-dom-import.md
			 */
			"testing-library/no-dom-import": "error",

			/**
			 * @see https://github.com/testing-library/eslint-plugin-testing-library/blob/main/docs/rules/no-global-regexp-flag-in-query.md
			 */
			"testing-library/no-global-regexp-flag-in-query": "error",

			/**
			 * @see https://github.com/testing-library/eslint-plugin-testing-library/blob/main/docs/rules/no-manual-cleanup.md
			 */
			"testing-library/no-manual-cleanup": "error",

			/**
			 * @see https://github.com/testing-library/eslint-plugin-testing-library/blob/main/docs/rules/no-node-access.md
			 */
			"testing-library/no-node-access": "error",

			/**
			 * @see https://github.com/testing-library/eslint-plugin-testing-library/blob/main/docs/rules/no-promise-in-fire-event.md
			 */
			"testing-library/no-promise-in-fire-event": "error",

			/**
			 * @see https://github.com/testing-library/eslint-plugin-testing-library/blob/main/docs/rules/no-render-in-lifecycle.md
			 */
			"testing-library/no-render-in-lifecycle": "error",

			/**
			 * @see https://github.com/testing-library/eslint-plugin-testing-library/blob/main/docs/rules/no-unnecessary-act.md
			 */
			"testing-library/no-unnecessary-act": "error",

			/**
			 * @see https://github.com/testing-library/eslint-plugin-testing-library/blob/main/docs/rules/no-wait-for-multiple-assertions.md
			 */
			"testing-library/no-wait-for-multiple-assertions": "error",

			/**
			 * @see https://github.com/testing-library/eslint-plugin-testing-library/blob/main/docs/rules/no-wait-for-side-effects.md
			 */
			"testing-library/no-wait-for-side-effects": "error",

			/**
			 * @see https://github.com/testing-library/eslint-plugin-testing-library/blob/main/docs/rules/no-wait-for-snapshot.md
			 */
			"testing-library/no-wait-for-snapshot": "error",

			/**
			 * @see https://github.com/testing-library/eslint-plugin-testing-library/blob/main/docs/rules/prefer-explicit-assert.md
			 */
			"testing-library/prefer-explicit-assert": "error",

			/**
			 * @see https://github.com/testing-library/eslint-plugin-testing-library/blob/main/docs/rules/prefer-find-by.md
			 */
			"testing-library/prefer-find-by": "error",

			/**
			 * @see https://github.com/testing-library/eslint-plugin-testing-library/blob/main/docs/rules/prefer-implicit-assert.md
			 */
			"testing-library/prefer-implicit-assert": "error",

			/**
			 * @see https://github.com/testing-library/eslint-plugin-testing-library/blob/main/docs/rules/prefer-presence-queries.md
			 */
			"testing-library/prefer-presence-queries": "error",

			/**
			 * @see https://github.com/testing-library/eslint-plugin-testing-library/blob/main/docs/rules/prefer-query-by-disappearance.md
			 */
			"testing-library/prefer-query-by-disappearance": "error",

			/**
			 * @see https://github.com/testing-library/eslint-plugin-testing-library/blob/main/docs/rules/prefer-query-matchers.md
			 */
			"testing-library/prefer-query-matchers": "error",

			/**
			 * @see https://github.com/testing-library/eslint-plugin-testing-library/blob/main/docs/rules/prefer-screen-queries.md
			 */
			"testing-library/prefer-screen-queries": "error",

			/**
			 * @see https://github.com/testing-library/eslint-plugin-testing-library/blob/main/docs/rules/prefer-user-event.md
			 */
			"testing-library/prefer-user-event": "error",

			/**
			 * @see https://github.com/testing-library/eslint-plugin-testing-library/blob/main/docs/rules/render-result-naming-convention.md
			 */
			"testing-library/render-result-naming-convention": "error",
		},
	}
}

/* eslint-enable max-lines,max-lines-per-function */
