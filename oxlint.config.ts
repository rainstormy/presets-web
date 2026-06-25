import { defineOxlintConfig } from "#oxlint/DefineOxlintConfig.ts"
import { oxlintRestrictedImportPatterns } from "#oxlint/OxlintRestrictedImportPattern.ts"

export default defineOxlintConfig({
	ignorePatterns: ["dist/**/*"],
	rules: {
		"eslint/no-restricted-imports": [
			"warn",
			{
				patterns: oxlintRestrictedImportPatterns({
					allowNodejs: true,
				}),
			},
		],
	},
})
