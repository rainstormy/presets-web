import { type EslintPluginRuleset } from "@rainstormy/presets-eslint/dist/EslintConfig.js"

export type EslintPluginStorybookRuleset = EslintPluginRuleset<
	"storybook",
	| "storybook/await-interactions"
	| "storybook/context-in-play-function"
	| "storybook/csf-component"
	| "storybook/default-exports"
	| "storybook/hierarchy-separator"
	| "storybook/no-redundant-story-name"
	| "storybook/no-stories-of"
	| "storybook/no-title-property-in-meta"
	| "storybook/prefer-pascal-case"
	| "storybook/story-exports"
	| "storybook/use-storybook-expect"
	| "storybook/use-storybook-testing-library"
>
