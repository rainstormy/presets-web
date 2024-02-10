import { type EslintPluginRuleset } from "@rainstormy/presets-eslint/dist/EslintConfig.js"

export type EslintPluginStorybookConfigurationRuleset = EslintPluginRuleset<
	"storybook",
	"storybook/no-uninstalled-addons"
>
