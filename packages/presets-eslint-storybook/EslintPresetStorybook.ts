import { type EslintPresetsStandardRuleset } from "@rainstormy/presets-eslint"
import { type EslintPreset } from "@rainstormy/presets-eslint/dist/EslintConfig.js"
import storybookPlugin from "eslint-plugin-storybook"
import { type EslintPluginStorybookConfigurationRuleset } from "./rulesets/EslintPluginStorybookConfigurationRuleset.js"
import { type EslintPluginStorybookRuleset } from "./rulesets/EslintPluginStorybookRuleset.js"

export type EslintPresetStorybook = EslintPreset<
	EslintPresetsStandardRuleset,
	EslintPluginStorybookRuleset
>

/**
 * A predefined, opinionated ESLint configuration for files with Storybook stories in Component Story Format 3 (CSF3).
 *
 * ```javascript
 * eslintPresetStorybook()
 * ```
 *
 * is equivalent to
 *
 * ```javascript
 * eslintPresetStorybook({
 *     targetFilePatterns: ["**\/*.stories.@(js|jsx|ts|tsx)"],
 *     overrideRules: {},
 * })
 * ```
 *
 * @see https://github.com/storybookjs/eslint-plugin-storybook storybook/*
 */
export function eslintPresetStorybook(
	options: {
		readonly overrideRules?: Partial<EslintPresetStorybook["rules"]>
		readonly targetFilePatterns?: ReadonlyArray<string>
	} = {},
): EslintPresetStorybook {
	const {
		overrideRules,
		targetFilePatterns = ["**/*.stories.@(js|jsx|ts|tsx)"],
	} = options

	// Use a separate constant to disable `react/` rules without introducing a dependency on `@rainstormy/presets-eslint-jsx` to satisfy the `EslintPresetStorybook` type declaration.
	const overrideReactRules = {
		/**
		 * The `render` function in stories uses prop spreading to provide args to components.
		 * @see https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-props-no-spreading.md
		 */
		"react/jsx-props-no-spreading": "off",
	} as const

	return {
		presetOrdinal: 2, // This preset must be applied after `eslintPresetJsx` (or any of its extensions) to override `react/` rules correctly.
		files: targetFilePatterns,
		plugins: {
			storybook: storybookPlugin,
		},
		rules: {
			/**
			 * @see https://github.com/storybookjs/eslint-plugin-storybook/blob/main/docs/rules/await-interactions.md
			 */
			"storybook/await-interactions": "error",

			/**
			 * @see https://github.com/storybookjs/eslint-plugin-storybook/blob/main/docs/rules/context-in-play-function.md
			 */
			"storybook/context-in-play-function": "error",

			/**
			 * @see https://github.com/storybookjs/eslint-plugin-storybook/blob/main/docs/rules/csf-component.md
			 */
			"storybook/csf-component": "error",

			/**
			 * @see https://github.com/storybookjs/eslint-plugin-storybook/blob/main/docs/rules/default-exports.md
			 */
			"storybook/default-exports": "error",

			/**
			 * @see https://github.com/storybookjs/eslint-plugin-storybook/blob/main/docs/rules/hierarchy-separator.md
			 */
			"storybook/hierarchy-separator": "error",

			/**
			 * @see https://github.com/storybookjs/eslint-plugin-storybook/blob/main/docs/rules/no-redundant-story-name.md
			 */
			"storybook/no-redundant-story-name": "error",

			/**
			 * @see https://github.com/storybookjs/eslint-plugin-storybook/blob/main/docs/rules/no-stories-of.md
			 */
			"storybook/no-stories-of": "error",

			/**
			 * @see https://github.com/storybookjs/eslint-plugin-storybook/blob/main/docs/rules/no-title-property-in-meta.md
			 */
			"storybook/no-title-property-in-meta": "error",

			/**
			 * @see https://github.com/storybookjs/eslint-plugin-storybook/blob/main/docs/rules/prefer-pascal-case.md
			 */
			"storybook/prefer-pascal-case": "error",

			/**
			 * @see https://github.com/storybookjs/eslint-plugin-storybook/blob/main/docs/rules/story-exports.md
			 */
			"storybook/story-exports": "error",

			/**
			 * @see https://github.com/storybookjs/eslint-plugin-storybook/blob/main/docs/rules/use-storybook-expect.md
			 */
			"storybook/use-storybook-expect": "error",

			/**
			 * @see https://github.com/storybookjs/eslint-plugin-storybook/blob/main/docs/rules/use-storybook-testing-library.md
			 */
			"storybook/use-storybook-testing-library": "error",

			/**
			 * Inherited from `presets-jsx`.
			 * By convention, stories are named in PascalCase. A story name must be prefixed with an underscore in order to begin with a number.
			 * @see https://typescript-eslint.io/rules/naming-convention
			 */
			"typescript/naming-convention": [
				"error",
				{
					selector: "default",
					format: ["strictCamelCase"],
					leadingUnderscore: "forbid",
					trailingUnderscore: "forbid",
				},
				{
					selector: "objectLiteralProperty",
					format: null,
					leadingUnderscore: "allow",
					trailingUnderscore: "allow",
				},
				{
					selector: "typeLike",
					format: ["PascalCase"],
					leadingUnderscore: "forbid",
					trailingUnderscore: "forbid",
				},
				{
					selector: ["import", "variableLike"],
					format: ["strictCamelCase", "PascalCase"],
					leadingUnderscore: "allow",
					trailingUnderscore: "forbid",
				},
			],

			...overrideReactRules,
			...overrideRules,
		},
	}
}

export type EslintPresetStorybookConfiguration = EslintPreset<
	EslintPresetsStandardRuleset,
	EslintPluginStorybookConfigurationRuleset
>

/**
 * A predefined, opinionated ESLint configuration for Storybook configuration files.
 *
 * ```javascript
 * eslintPresetStorybookConfiguration()
 * ```
 *
 * is equivalent to
 *
 * ```javascript
 * eslintPresetStorybookConfiguration({
 *     targetFilePatterns: [".storybook/**\/*.@(js|jsx|ts|tsx)"],
 *     overrideRules: {},
 * })
 * ```
 *
 * @see https://github.com/storybookjs/eslint-plugin-storybook storybook/*
 */
export function eslintPresetStorybookConfiguration(
	options: {
		readonly overrideRules?: Partial<
			EslintPresetStorybookConfiguration["rules"]
		>
		readonly targetFilePatterns?: ReadonlyArray<string>
	} = {},
): EslintPresetStorybookConfiguration {
	const {
		overrideRules,
		targetFilePatterns = [".storybook/**/*.@(js|jsx|ts|tsx)"],
	} = options

	return {
		files: targetFilePatterns,
		plugins: {
			storybook: storybookPlugin,
		},
		rules: {
			/**
			 * @see https://github.com/storybookjs/eslint-plugin-storybook/blob/main/docs/rules/no-uninstalled-addons.md
			 */
			"storybook/no-uninstalled-addons": "error",

			...overrideRules,
		},
	}
}
