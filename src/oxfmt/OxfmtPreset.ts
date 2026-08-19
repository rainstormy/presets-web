import type { OxfmtConfig } from "oxfmt"

/**
 * @see https://oxc.rs/docs/guide/usage/formatter/config-file-reference.html
 */
export function oxfmtPreset() {
	return {
		ignorePatterns: [".idea/**/*", "node_modules/**/*", "package-lock.json", "pnpm-lock.yaml"],

		/**
		 * Omit semicolons to reduce noise and improve readability.
		 *
		 * @see https://slides.com/evanyou/semicolons
		 */
		semi: false,

		sortImports: {
			groups: ["side_effect", "side_effect_style", "builtin", "external", "subpath", "unknown"],
			newlinesBetween: false,
		},

		/**
		 * Indent by tabs to gain accessibility (by making the indentation width customisable per developer),
		 * to reduce the number of required keystrokes, and to reduce the file sizes.
		 *
		 * @see https://blog.jetbrains.com/dotnet/2022/08/11/virtual-formatter-in-resharper-2022-2/#what-was-it-about-again
		 */
		useTabs: true,

		overrides: [
			{
				files: ["**/*.{code-workspace,json,jsonc}"],
				options: {
					trailingComma: "none", // JSON does not allow trailing commas.
				},
			},
			{
				files: ["**/*.md"],
				options: {
					useTabs: false, // Use space indentation in Markdown files to support nested lists and YAML code blocks.
				},
			},
			{
				files: ["**/*.toml"],
				options: {
					useTabs: false, // mise-en-place prefers space indentation in TOML files.
				},
			},
			{
				files: ["**/*.{yml,yaml}"],
				options: {
					singleQuote: true, // Use single quotes in YAML to match the GitHub Actions syntax for `hashFiles()`.
					useTabs: false, // YAML does not support tab indentation.
				},
			},
		],
	} as const satisfies OxfmtConfig
}
