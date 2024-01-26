import {
	assertOptions,
	assertOptionsTargetFilePatterns,
	eslintPresetIdentifier,
	eslintPresetOrdinal,
	type EslintPreset,
	type EslintPresetOptionsTargetFilePatterns,
} from "@rainstormy/presets-eslint/dist/EslintPresetUtilities.js"
import storybookPlugin from "eslint-plugin-storybook"

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
 * })
 * ```
 *
 * @see https://github.com/storybookjs/eslint-plugin-storybook storybook/*
 */
export function eslintPresetStorybook(
	options?: EslintPresetOptionsTargetFilePatterns,
): EslintPreset
export function eslintPresetStorybook(options: unknown): EslintPreset {
	const eslintPresetName = "eslintPresetStorybook"
	const checkedOptions = options ?? {}

	assertOptions(checkedOptions, eslintPresetName)
	assertOptionsTargetFilePatterns(checkedOptions, eslintPresetName)

	const { targetFilePatterns = ["**/*.stories.@(js|jsx|ts|tsx)"] } =
		checkedOptions

	return {
		[eslintPresetIdentifier]: eslintPresetName,
		[eslintPresetOrdinal]: 1, // This preset must be applied after `eslintPresetJsx` (or any of its extensions) to override rules correctly.
		files: targetFilePatterns,
		plugins: {
			storybook: storybookPlugin,
		},
		rules: {
			/**
			 * The `render` function in stories uses prop spreading to provide args to components.
			 * @see https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-props-no-spreading.md
			 */
			"react/jsx-props-no-spreading": "off",

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
			 * By convention, stories are named in PascalCase.
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
					selector: "variableLike",
					format: ["strictCamelCase", "PascalCase"],
					leadingUnderscore: "forbid",
					trailingUnderscore: "forbid",
				},
			],
		},
	}
}

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
 * })
 * ```
 *
 * @see https://github.com/storybookjs/eslint-plugin-storybook storybook/*
 */
export function eslintPresetStorybookConfiguration(
	options?: EslintPresetOptionsTargetFilePatterns,
): EslintPreset
export function eslintPresetStorybookConfiguration(
	options: unknown,
): EslintPreset {
	const eslintPresetName = "eslintPresetStorybookConfiguration"
	const checkedOptions = options ?? {}

	assertOptions(checkedOptions, eslintPresetName)
	assertOptionsTargetFilePatterns(checkedOptions, eslintPresetName)

	const { targetFilePatterns = [".storybook/**/*.@(js|jsx|ts|tsx)"] } =
		checkedOptions

	return {
		[eslintPresetIdentifier]: eslintPresetName,
		files: targetFilePatterns,
		plugins: {
			storybook: storybookPlugin,
		},
		rules: {
			/**
			 * @see https://github.com/storybookjs/eslint-plugin-storybook/blob/main/docs/rules/no-uninstalled-addons.md
			 */
			"storybook/no-uninstalled-addons": "error",
		},
	}
}
