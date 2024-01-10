import { type Config } from "prettier"
import organizeImportsPlugin from "prettier-plugin-organize-imports"
import packageJsonPlugin from "prettier-plugin-packagejson"

export function prettierBase(): Config {
	return {
		plugins: [
			/**
			 * @see https://github.com/simonhaenisch/prettier-plugin-organize-imports
			 */
			organizeImportsPlugin,

			/**
			 * @see https://github.com/matzkoh/prettier-plugin-packagejson
			 */
			packageJsonPlugin,
		],

		/**
		 * We prefer to take advantage of Automatic Semicolon Insertion (ASI), which is always present in JavaScript.
		 */
		semi: false,

		/**
		 * Indent by tabs to:
		 * - Gain accessibility by making the indentation width customisable per developer.
		 * - Reduce the number of required keystrokes.
		 * - Reduce the file sizes.
		 */
		useTabs: true,
	}
}

export function prettierMergeConfigs(configs: ReadonlyArray<Config>): Config {
	if (!Array.isArray(configs)) {
		throw new TypeError(
			"'mergeConfigs' expects an array of Prettier configuration objects",
		)
	}

	return configs.reduce(
		(accumulatedConfig, config) => ({
			...accumulatedConfig,
			...config,
			plugins: [...accumulatedConfig.plugins, ...config.plugins],
		}),
		{ plugins: [] },
	)
}
