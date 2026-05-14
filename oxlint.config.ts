import { defineConfig } from "oxlint"
import { oxlintPreset } from "#oxlint/OxlintPreset.ts"
import { oxlintRestrictedImportPatterns } from "#oxlint/OxlintRestrictedImportPattern.ts"

export default defineConfig({
	extends: [oxlintPreset()],
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
