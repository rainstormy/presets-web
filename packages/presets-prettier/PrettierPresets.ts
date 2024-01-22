import organizeImportsPlugin from "prettier-plugin-organize-imports"
import packageJsonPlugin from "prettier-plugin-packagejson"
import {
	assertOptions,
	assertOptionsAdditionalPresets,
	prettierPresetIdentifier,
	prettierPresetOrdinal,
	type PrettierConfig,
	type PrettierPresetOptionsAdditionalPresets,
} from "./PrettierPresetUtilities.js"

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
	options?: PrettierPresetOptionsAdditionalPresets,
): PrettierConfig
export function prettierPresets(options: unknown): PrettierConfig {
	const prettierPresetName = "prettierPresets"
	const checkedOptions = options ?? {}

	assertOptions(checkedOptions, prettierPresetName)
	assertOptionsAdditionalPresets(checkedOptions, prettierPresetName)

	const { additionalPresets = [] } = checkedOptions

	const additionalConfigs = additionalPresets
		.toSorted(
			(
				{ [prettierPresetOrdinal]: first = 0 },
				{ [prettierPresetOrdinal]: second = 0 },
			) => first - second,
		)
		.map((preset) => {
			const {
				[prettierPresetIdentifier]: ignoredIdentifier,
				[prettierPresetOrdinal]: ignoredOrdinal,
				...config
			} = preset
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
