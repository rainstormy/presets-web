import { eslintPresetJsx } from "@rainstormy/presets-eslint-jsx"
import {
	assertOptions,
	assertOptionsTargetFilePatterns,
	eslintPresetIdentifier,
	type EslintPreset,
	type EslintPresetOptionsTargetFilePatterns,
} from "@rainstormy/presets-eslint/dist/EslintPresetUtilities.js"
import solidPlugin from "eslint-plugin-solid"

/**
 * A predefined, opinionated ESLint configuration for Solid components.
 *
 * ```javascript
 * eslintPresetSolid()
 * ```
 *
 * is equivalent to
 *
 * ```javascript
 * eslintPresetSolid({
 *     targetFilePatterns: ["**\/*.@(jsx|tsx)"],
 * })
 * ```
 *
 * @see https://github.com/jsx-eslint/eslint-plugin-jsx-a11y#supported-rules jsx-a11y/*
 * @see https://github.com/jsx-eslint/eslint-plugin-react#list-of-supported-rules react/*
 * @see https://github.com/solidjs-community/eslint-plugin-solid#rules solid/*
 */
export function eslintPresetSolid(
	options?: EslintPresetOptionsTargetFilePatterns,
): EslintPreset
export function eslintPresetSolid(options: unknown): EslintPreset {
	const eslintPresetName = "eslintPresetSolid"
	const checkedOptions = options ?? {}

	assertOptions(checkedOptions, eslintPresetName)
	assertOptionsTargetFilePatterns(checkedOptions, eslintPresetName)

	const jsxPreset = eslintPresetJsx(checkedOptions)

	return {
		...jsxPreset,
		[eslintPresetIdentifier]: eslintPresetName,
		plugins: {
			...jsxPreset.plugins,
			solid: solidPlugin,
		},
		rules: {
			...jsxPreset.rules,

			/**
			 * `solid/event-handlers` supersedes this rule.
			 * @see https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-handler-names.md
			 */
			"react/jsx-handler-names": "off",

			/**
			 * Not applicable in Solid.
			 * @see https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-key.md
			 */
			"react/jsx-key": "off",

			/**
			 * `solid/jsx-no-duplicate-props` supersedes this rule.
			 * @see https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-no-duplicate-props.md
			 */
			"react/jsx-no-duplicate-props": "off",

			/**
			 * `solid/jsx-no-script-url` supersedes this rule.
			 * @see https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-no-script-url.md
			 */
			"react/jsx-no-script-url": "off",

			/**
			 * `solid/jsx-no-undef` supersedes this rule.
			 * @see https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-no-undef.md
			 */
			"react/jsx-no-undef": "off",

			/**
			 * `solid/jsx-uses-vars` supersedes this rule.
			 * @see https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-uses-vars.md
			 */
			"react/jsx-uses-vars": "off",

			/**
			 * @see https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/no-multi-comp.md
			 */
			"react/no-multi-comp": "error",

			/**
			 * `solid/self-closing-comp` supersedes this rule.
			 * @see https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/self-closing-comp.md
			 */
			"react/self-closing-comp": "off",

			/**
			 * @see https://github.com/solidjs-community/eslint-plugin-solid/blob/main/docs/components-return-once.md
			 */
			"solid/components-return-once": "error",

			/**
			 * @see https://github.com/solidjs-community/eslint-plugin-solid/blob/main/docs/event-handlers.md
			 */
			"solid/event-handlers": "error",

			/**
			 * @see https://github.com/solidjs-community/eslint-plugin-solid/blob/main/docs/imports.md
			 */
			"solid/imports": "error",

			/**
			 * @see https://github.com/solidjs-community/eslint-plugin-solid/blob/main/docs/jsx-no-duplicate-props.md
			 */
			"solid/jsx-no-duplicate-props": "error",

			/**
			 * @see https://github.com/solidjs-community/eslint-plugin-solid/blob/main/docs/jsx-no-script-url.md
			 */
			"solid/jsx-no-script-url": "error",

			/**
			 * @see https://github.com/solidjs-community/eslint-plugin-solid/blob/main/docs/jsx-no-undef.md
			 */
			"solid/jsx-no-undef": "error",

			/**
			 * @see https://github.com/solidjs-community/eslint-plugin-solid/blob/main/docs/jsx-uses-vars.md
			 */
			"solid/jsx-uses-vars": "error",

			/**
			 * @see https://github.com/solidjs-community/eslint-plugin-solid/blob/main/docs/no-array-handlers.md
			 */
			"solid/no-array-handlers": "error",

			/**
			 * @see https://github.com/solidjs-community/eslint-plugin-solid/blob/main/docs/no-destructure.md
			 */
			"solid/no-destructure": "error",

			/**
			 * @see https://github.com/solidjs-community/eslint-plugin-solid/blob/main/docs/no-innerhtml.md
			 */
			"solid/no-innerhtml": "error",

			/**
			 * All modern browsers support proxy objects.
			 * @see https://github.com/solidjs-community/eslint-plugin-solid/blob/main/docs/no-proxy-apis.md
			 */
			"solid/no-proxy-apis": "off",

			/**
			 * @see https://github.com/solidjs-community/eslint-plugin-solid/blob/main/docs/no-react-deps.md
			 */
			"solid/no-react-deps": "error",

			/**
			 * @see https://github.com/solidjs-community/eslint-plugin-solid/blob/main/docs/no-react-specific-props.md
			 */
			"solid/no-react-specific-props": "error",

			/**
			 * @see https://github.com/solidjs-community/eslint-plugin-solid/blob/main/docs/no-unknown-namespaces.md
			 */
			"solid/no-unknown-namespaces": "error",

			/**
			 * @see https://github.com/solidjs-community/eslint-plugin-solid/blob/main/docs/prefer-for.md
			 */
			"solid/prefer-for": "error",

			/**
			 * Using normal conditional expressions decouples our components from Solid-specific conveniences such as the `Show` component.
			 * @see https://github.com/solidjs-community/eslint-plugin-solid/blob/main/docs/prefer-show.md
			 */
			"solid/prefer-show": "off",

			/**
			 * @see https://github.com/solidjs-community/eslint-plugin-solid/blob/main/docs/reactivity.md
			 */
			"solid/reactivity": "error",

			/**
			 * @see https://github.com/solidjs-community/eslint-plugin-solid/blob/main/docs/self-closing-comp.md
			 */
			"solid/self-closing-comp": "error",

			/**
			 * @see https://github.com/solidjs-community/eslint-plugin-solid/blob/main/docs/style-prop.md
			 */
			"solid/style-prop": "error",
		},
	}
}
