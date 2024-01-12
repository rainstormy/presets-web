import {
	eslintAmbientTypeScriptModules,
	eslintBase,
} from "@rainstormy/preset-eslint-base"

export default [
	eslintBase({
		files: ["packages/*/*.ts", "*.config.js"],
		tsconfig: ["./packages/*/tsconfig.json", "./tsconfig.json"],
	}),
	{
		files: ["packages/*/*.ts"],
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
		},
	},

	// `eslintAmbientTypeScriptModules` must follow `eslintBase` to take effect.
	eslintAmbientTypeScriptModules({ files: ["packages/*/*.d.ts"] }),
]
