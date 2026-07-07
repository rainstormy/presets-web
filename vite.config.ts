import { defineConfig } from "vite-plus"
import { defineOxfmtConfig } from "#oxfmt/DefineOxfmtConfig.ts"
import { defineOxlintConfig } from "#oxlint/DefineOxlintConfig.ts"

export default defineConfig({
	build: {
		emptyOutDir: true,
		minify: "oxc",
		reportCompressedSize: false,
		target: "es2022",
	},
	fmt: defineOxfmtConfig({ ignorePatterns: ["dist/**/*", "**/*.md"] }),
	lint: defineOxlintConfig({ ignorePatterns: ["dist/**/*"] }),
	run: {
		tasks: {
			build: {
				// language=sh
				command: [
					"vite build --ssr src/oxfmt/index.ts --outDir dist/oxfmt/",
					"vite build --ssr src/oxlint/index.ts --outDir dist/oxlint/",
					"node build.script.ts",
				],
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
