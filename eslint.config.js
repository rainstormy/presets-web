import { ambientTypeScriptModules, base } from "@rainstormy/preset-eslint-base"

export default [
	{
		ignores: ["**/dist/*"],
	},
	base({
		files: ["**/*.+(js|ts)"],
		tsconfig: "./tsconfig.json",
	}),
	ambientTypeScriptModules({
		files: ["**/*.d.ts"],
	}),
]
