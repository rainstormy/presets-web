import { type Linter } from "eslint"
import storybookPlugin from "eslint-plugin-storybook"

export function eslintStorybook(options: {
	readonly files: ReadonlyArray<string>
}): Linter.FlatConfig {
	return {
		files: [...options.files],
		plugins: {
			storybook: storybookPlugin,
		},
		/**
		 * @see https://github.com/storybookjs/eslint-plugin-storybook storybook
		 */
		rules: {
			/**
			 * Stories must be as simple as possible.
			 * @see https://eslint.org/docs/latest/rules/complexity
			 */
			complexity: ["error", { max: 2 }],

			/**
			 * It is impractical to limit the size of a story file.
			 * @see https://eslint.org/docs/latest/rules/max-lines
			 */
			"max-lines": "off",

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
			 * @see https://github.com/storybookjs/eslint-plugin-storybook/blob/main/docs/rules/no-uninstalled-addons.md
			 */
			"storybook/no-uninstalled-addons": "error",

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
		},
	}
}
