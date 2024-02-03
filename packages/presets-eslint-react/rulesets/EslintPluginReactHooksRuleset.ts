import { type EslintPluginRuleset } from "@rainstormy/presets-eslint/dist/EslintConfig.js"

export type EslintPluginReactHooksRuleset = EslintPluginRuleset<
	"react-hooks",
	"react-hooks/exhaustive-deps" | "react-hooks/rules-of-hooks"
>
