import type { OxlintConfig, OxlintOverride } from "oxlint"
import { oxlintRestrictedImportPatterns } from "#oxlint/OxlintRestrictedImportPattern.ts"

/**
 * @see https://oxc.rs/docs/guide/usage/linter/config-file-reference.html
 * @see https://oxc.rs/docs/guide/usage/linter/rules.html
 */
export function oxlintStorybookPreset(): OxlintConfig {
	return {
		overrides: [overrideDecorators(), overrideStories(), overrideStorybookConfig()],
	}
}

function overrideDecorators(): OxlintOverride {
	return {
		files: ["**/src/**/*.decorators.{ts,tsx}"],
		rules: {
			"eslint/complexity": ["warn", { max: 12, variant: "modified" }],
			"eslint/no-restricted-imports": [
				"warn",
				{
					patterns: oxlintRestrictedImportPatterns({
						allowDecorators: true,
						allowFixtures: true,
					}),
				},
			],
		},
	}
}

/**
 * @see https://storybook.js.org/docs/api/csf
 */
function overrideStories(): OxlintOverride {
	return {
		files: ["**/src/**/*.stories.{ts,tsx}"],
		rules: {
			"eslint/complexity": ["warn", { max: 12, variant: "modified" }],
			"eslint/no-restricted-exports": "off", // Allow default exports of static metadata.
			"eslint/no-restricted-imports": [
				"warn",
				{
					patterns: oxlintRestrictedImportPatterns({
						allowMocks: true,
						allowDecorators: true,
						allowStories: true,
						allowFixtures: true,
					}),
				},
			],
			"eslint/no-unused-vars": ["warn", { reportUsedIgnorePattern: false }],
			"react/rules-of-hooks": "off", // Allow hooks in `render` components.
		},
	}
}

/**
 * @see https://storybook.js.org/docs/configure
 */
function overrideStorybookConfig(): OxlintOverride {
	return {
		files: [
			"**/.storybook/main.{ts,tsx}",
			"**/.storybook/manager.{ts,tsx}",
			"**/.storybook/preview.{ts,tsx}",
		],
		rules: {
			"eslint/no-console": "off",
			"eslint/no-restricted-exports": "off", // Allow default exports.
			"eslint/no-restricted-globals": "off", // Allow access to environment variables through `process.env`.
			"eslint/no-restricted-imports": [
				"warn",
				{
					patterns: oxlintRestrictedImportPatterns({
						allowRelativePaths: true,
						allowNodejs: true,
						allowFixtures: true,
						allowDecorators: true,
						allowMocks: true,
					}),
				},
			],
			"unicorn/filename-case": ["warn", { case: "kebabCase" }],
			"unicorn/no-process-exit": "off",
		},
	}
}
