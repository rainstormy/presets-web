import {
	eslintAmbientTypeScriptModules,
	eslintBase,
} from "@rainstormy/preset-eslint-base"

export default [
	eslintBase({
		files: ["**/*.+(js|ts)"],
		tsconfig: "./tsconfig.json",
	}),

	// `eslintAmbientTypeScriptModules` must follow `eslintBase` to take effect.
	eslintAmbientTypeScriptModules({ files: ["**/*.d.ts"] }),
]
