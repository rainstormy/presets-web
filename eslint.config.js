import {
	eslintAmbientTypeScriptModules,
	eslintBase,
} from "@rainstormy/preset-eslint-base"

export default [
	eslintBase({
		files: ["packages/*/*.ts", "*/*.config.js"],
		tsconfig: ["./packages/*/tsconfig.json", "./tsconfig.json"],
	}),
	{
		files: ["packages/*/*.ts"],
		rules: {
			"import-alias/import-alias": "off",
		},
	},

	// `eslintAmbientTypeScriptModules` must follow `eslintBase` to take effect.
	eslintAmbientTypeScriptModules({ files: ["packages/*/*.d.ts"] }),
]
