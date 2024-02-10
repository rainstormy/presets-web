import { type EslintPluginRuleset } from "@rainstormy/presets-eslint/dist/EslintConfig.js"

export type EslintPluginTailwindRuleset = EslintPluginRuleset<
	"tailwind",
	| "tailwind/classnames-order"
	| "tailwind/enforces-negative-arbitrary-values"
	| "tailwind/enforces-shorthand"
	| "tailwind/migration-from-tailwind-2"
	| "tailwind/no-arbitrary-value"
	| "tailwind/no-contradicting-classname"
	| "tailwind/no-custom-classname"
>
