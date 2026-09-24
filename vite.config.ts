import { defineConfig } from "vite-plus"
import { defineOxfmtConfig } from "#oxfmt/DefineOxfmtConfig.ts"
import { defineOxlintConfig } from "#oxlint/DefineOxlintConfig.ts"

/**
 * Configure Vite+.
 *
 * @see https://viteplus.dev/config
 */
export default defineConfig({
	/**
	 * Configure Oxfmt.
	 *
	 * @see https://viteplus.dev/config/fmt
	 * @see https://oxc.rs/docs/guide/usage/formatter/config.html
	 */
	fmt: defineOxfmtConfig({ ignorePatterns: ["dist/**/*", "**/*.md"] }),

	/**
	 * Configure Oxlint.
	 *
	 * @see https://viteplus.dev/config/lint
	 * @see https://oxc.rs/docs/guide/usage/linter/config.html
	 */
	lint: defineOxlintConfig({
		ignorePatterns: ["dist/**/*"],
		options: { typeCheck: false },
		overrides: [
			{
				files: ["src/{oxfmt,oxlint}/DefineOx*Config.ts", "src/{oxfmt,oxlint}/Ox*Preset.ts"],
				rules: {
					// Preset functions must be marked with `as const` and rely solely on type inference instead of returning `OxfmtConfig` and `OxlintConfig`.
					// The Oxfmt/Oxlint versions installed at the client may differ from the ones installed in this project and their type definitions may be incompatible.
					"typescript/explicit-function-return-type": "off",
				},
			},
		],
	}),

	/**
	 * Configure tsdown.
	 *
	 * @see https://viteplus.dev/config/pack
	 * @see https://tsdown.dev/options/config-file
	 */
	pack: [
		{
			entry: "src/oxfmt/index.ts",
			outDir: "dist/oxfmt/",
			format: "esm",
			platform: "neutral",
			dts: true,
			minify: { compress: true },
		},
		{
			entry: "src/oxlint/index.ts",
			outDir: "dist/oxlint/",
			format: "esm",
			platform: "neutral",
			dts: true,
			minify: { compress: true },
		},
	],

	/**
	 * Define tasks.
	 *
	 * @see https://viteplus.dev/config/run
	 */
	run: {
		// language=sh
		tasks: {
			build: { command: "vp pack && node tools/build.script.ts" },
			check: { command: "vp lint --type-check && node tools/check.script.ts" },
			fmt: { command: "vp check --fix" },
			install: { command: "vp install --frozen-lockfile --ignore-scripts", cache: false },
			setup: { command: "node tools/setup.script.ts", cache: false },
			test: { command: "vp test" },
		},
	},

	/**
	 * Configure lint-staged for the pre-commit hook.
	 *
	 * @see https://viteplus.dev/config/staged
	 * @see https://github.com/lint-staged/lint-staged
	 */
	// language=sh
	staged: {
		"*.{json,jsonc,md,ts,yaml,yml}": "vpr fmt",
	},

	/**
	 * Configure Vitest.
	 *
	 * @see https://viteplus.dev/config/test
	 * @see https://vitest.dev/config
	 */
	test: {
		include: ["src/**/*.tests.ts"],
		pool: "vmThreads",
		setupFiles: [],
		mockReset: true,
		unstubEnvs: true,
		unstubGlobals: true,
	},
})
