import {
	eslintPresetAmbientTypeScriptModules,
	eslintPresets,
} from "@rainstormy/presets-eslint"

export default [
	...eslintPresets({
		additionalPresets: [eslintPresetAmbientTypeScriptModules()],
	}),
	{
		files: ["**/*.ts"],
		rules: {
			/**
			 * It would be impractical to split a configuration across multiple files.
			 * @see https://eslint.org/docs/latest/rules/max-lines
			 */
			"max-lines": "off",

			/**
			 * It would be impractical to split a configuration across multiple functions.
			 * @see https://eslint.org/docs/latest/rules/max-lines-per-function
			 */
			"max-lines-per-function": "off",

			/**
			 * We want TypeScript to infer the const type of the ESLint preset functions, which contain large well-defined rule objects.
			 * @see https://typescript-eslint.io/rules/explicit-function-return-type
			 */
			"typescript/explicit-function-return-type": "off",
		},
	},
]
