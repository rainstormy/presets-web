import {
	eslintAmbientTypeScriptModules,
	eslintBase,
} from "@rainstormy/preset-eslint-base"

export default [
	{
		ignores: ["**/dist/*"],
	},
	eslintBase({
		files: ["**/*.+(js|ts)"],
		tsconfig: "./tsconfig.json",
	}),
	eslintAmbientTypeScriptModules({
		files: ["**/*.d.ts"],
	}),
]
