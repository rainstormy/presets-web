import { type EslintPluginRuleset } from "../EslintConfig.js"

export type EslintPluginEslintCommentsRuleset = EslintPluginRuleset<
	"eslint-comments",
	| "eslint-comments/disable-enable-pair"
	| "eslint-comments/no-aggregating-enable"
	| "eslint-comments/no-duplicate-disable"
	| "eslint-comments/no-restricted-disable"
	| "eslint-comments/no-unlimited-disable"
	| "eslint-comments/no-unused-disable"
	| "eslint-comments/no-unused-enable"
	| "eslint-comments/no-use"
	| "eslint-comments/require-description"
>
