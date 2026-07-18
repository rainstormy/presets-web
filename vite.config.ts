import { type UserConfig, defineConfig } from "vite-plus"
import { defineOxfmtConfig } from "#oxfmt/DefineOxfmtConfig.ts"
import { defineOxlintConfig } from "#oxlint/DefineOxlintConfig.ts"

type ViteOxlintConfig = NonNullable<UserConfig["lint"]>

export default defineConfig({
	fmt: defineOxfmtConfig({ ignorePatterns: ["dist/**/*", "**/*.md"] }),
	lint: defineOxlintConfig({ ignorePatterns: ["dist/**/*"] }) as ViteOxlintConfig, // Suppress type errors from stricter rule schemas in newer versions of Oxlint.
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
		tasks: {
			build: {
				// language=sh
				command: ["vp pack", "node build.script.ts"],
				input: [{ auto: true }, "!dist/**/*"],
			},
			check: {
				// language=sh
				command: "vp check",
			},
			fmt: {
				// language=sh
				command: "vp check --fix",
			},
			install: {
				// language=sh
				command: [
					"vp install --frozen-lockfile --ignore-scripts",
					'if [ "$LEFTHOOK" != "0" ]; then lefthook install; fi',
				],
				cache: false,
			},
			test: {
				// language=sh
				command: "vp test",
				input: [{ auto: true }, "!node_modules/.vite-temp/vite.config.ts.timestamp-*"],
			},
			yolo: {
				// language=sh
				command: "lefthook uninstall",
				cache: false,
			},
		},
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
