import organizeImportsPlugin from "prettier-plugin-organize-imports"
import packageJsonPlugin from "prettier-plugin-packagejson"
import { type PrettierConfig, type PrettierPreset } from "./PrettierConfig.js"

/**
 * Constructs a predefined, opinionated Prettier configuration from the given Prettier presets.
 *
 * ```javascript
 * prettierPresets()
 * ```
 *
 * is equivalent to
 *
 * ```javascript
 * prettierPresets({
 *     additionalPresets: [],
 * })
 * ```
 */
export function prettierPresets(
	options: {
		readonly additionalPresets?: ReadonlyArray<PrettierPreset>
	} = {},
): PrettierConfig {
	const { additionalPresets = [] } = options

	const additionalConfigs = additionalPresets
		.toSorted(
			({ presetOrdinal: first = 0 }, { presetOrdinal: second = 0 }) =>
				first - second,
		)
		.map((preset) => {
			const { presetOrdinal: ignoredOrdinal, ...config } = preset
			return config
		})

	return [standardPrettierConfig(), ...additionalConfigs].reduce(
		(accumulatedConfig, configToMerge) => ({
			...accumulatedConfig,
			...configToMerge,
			plugins: [...accumulatedConfig.plugins, ...configToMerge.plugins],
		}),
		{ plugins: [] },
	)
}

function standardPrettierConfig(): PrettierConfig {
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
