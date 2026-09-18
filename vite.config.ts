import { defineConfig } from "vite-plus"
import { defineOxfmtConfig } from "#oxfmt/DefineOxfmtConfig.ts"
import { defineOxlintConfig } from "#oxlint/DefineOxlintConfig.ts"

export default defineConfig({
	fmt: defineOxfmtConfig({ ignorePatterns: ["dist/**/*", "**/*.md"] }),
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
	run: {
		// language=sh
		tasks: {
			build: { command: "vp pack && node build.script.ts" },
			check: { command: "vp lint --type-check" },
			fmt: { command: "vp check --fix" },
			install: { command: "vp install --frozen-lockfile --ignore-scripts", cache: false },
			setup: { command: "node tools/setup.script.ts", cache: false },
			test: { command: "vp test" },
		},
	},
	// language=sh
	staged: {
		"*.{json,jsonc,md,ts,yaml,yml}": "vpr fmt",
	},
	test: {
		include: ["src/**/*.tests.ts"],
		pool: "vmThreads",
		setupFiles: [],
		mockReset: true,
		unstubEnvs: true,
		unstubGlobals: true,
	},
})
