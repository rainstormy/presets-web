import { jsx } from "@rainstormy/preset-eslint-jsx"
import { react } from "@rainstormy/preset-eslint-react"
import type { Linter } from "eslint"

export function preact(options: {
	readonly files: ReadonlyArray<string>
}): Linter.FlatConfig {
	const reactPreset = react(options)
	const jsxPreset = jsx(options)

	return {
		...reactPreset,
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
