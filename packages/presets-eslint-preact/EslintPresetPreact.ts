import {
	assertOptions,
	assertOptionsTargetFilePatterns,
	eslintPresetIdentifier,
	type EslintPreset,
	type EslintPresetOptionsTargetFilePatterns,
} from "@rainstormy/presets-eslint/dist/EslintPresetUtilities.js"
import { eslintPresetJsx } from "@rainstormy/presets-eslint-jsx"
import { eslintPresetReact } from "@rainstormy/presets-eslint-react"

/**
 * A predefined, opinionated ESLint configuration for Preact components.
 *
 * ```javascript
 * eslintPresetPreact()
 * ```
 *
 * is equivalent to
 *
 * ```javascript
 * eslintPresetPreact({
 *     targetFilePatterns: ["**\/*.@(jsx|tsx)"],
 * })
 * ```
 *
 * @see https://github.com/jsx-eslint/eslint-plugin-jsx-a11y#supported-rules jsx-a11y/*
 * @see https://github.com/jsx-eslint/eslint-plugin-react#list-of-supported-rules react/*
 * @see https://github.com/facebook/react/tree/main/packages/eslint-plugin-react-hooks#custom-configuration react-hooks/*
 */
export function eslintPresetPreact(
	options?: EslintPresetOptionsTargetFilePatterns,
): EslintPreset
export function eslintPresetPreact(options: unknown): EslintPreset {
	const eslintPresetName = "eslintPresetPreact"
	const checkedOptions = options ?? {}

	assertOptions(checkedOptions, eslintPresetName)
	assertOptionsTargetFilePatterns(checkedOptions, eslintPresetName)

	const jsxPreset = eslintPresetJsx(checkedOptions)
	const reactPreset = eslintPresetReact(checkedOptions)

	return {
		...reactPreset,
		[eslintPresetIdentifier]: eslintPresetName,
		rules: {
			...reactPreset.rules,

			/**
			 * Preact uses the original HTML/SVG attribute names.
			 * @see https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/no-unknown-property.md
			 */
			"react/no-unknown-property": jsxPreset.rules["react/no-unknown-property"],
		},
		settings: {
			...reactPreset.settings,
			react: {
				version: "18", // Preact 10 provides an API similar to React 18.
			},
		},
	}
}
