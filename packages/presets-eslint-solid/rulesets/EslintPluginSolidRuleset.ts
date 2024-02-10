import { type EslintPluginRuleset } from "@rainstormy/presets-eslint/dist/EslintConfig.js"

export type EslintPluginSolidRuleset = EslintPluginRuleset<
	"solid",
	| "solid/components-return-once"
	| "solid/event-handlers"
	| "solid/imports"
	| "solid/jsx-no-duplicate-props"
	| "solid/jsx-no-script-url"
	| "solid/jsx-no-undef"
	| "solid/jsx-uses-vars"
	| "solid/no-array-handlers"
	| "solid/no-destructure"
	| "solid/no-innerhtml"
	| "solid/no-proxy-apis"
	| "solid/no-react-deps"
	| "solid/no-react-specific-props"
	| "solid/no-unknown-namespaces"
	| "solid/prefer-for"
	| "solid/prefer-show"
	| "solid/reactivity"
	| "solid/self-closing-comp"
	| "solid/style-prop"
>
