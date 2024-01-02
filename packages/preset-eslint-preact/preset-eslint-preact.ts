import { eslintJsx } from "@rainstormy/preset-eslint-jsx"
import { eslintReact } from "@rainstormy/preset-eslint-react"
import { type Linter } from "eslint"

export function eslintPreact(options: {
	readonly files: ReadonlyArray<string>
}): Linter.FlatConfig {
	const reactPreset = eslintReact(options)
	const jsxPreset = eslintJsx(options)

	return {
		...reactPreset,
		/**
		 * @see https://github.com/jsx-eslint/eslint-plugin-jsx-a11y#supported-rules jsx-a11y
		 * @see https://github.com/jsx-eslint/eslint-plugin-react#list-of-supported-rules react
		 * @see https://github.com/facebook/react/tree/main/packages/eslint-plugin-react-hooks#custom-configuration react-hooks
		 */
		rules: {
			...reactPreset.rules,

			/**
			 * Preact uses the original HTML/SVG attribute names.
			 * @see https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/no-unknown-property.md
			 */
			"react/no-unknown-property":
				jsxPreset.rules?.["react/no-unknown-property"] ?? "off",
		},
		settings: {
			...reactPreset.settings,
			react: {
				version: "18", // Preact 10 provides an API similar to React 18.
			},
		},
	}
}
