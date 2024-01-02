import { defineConfig } from "vite"
import dtsPlugin from "vite-plugin-dts"

export default defineConfig(() => ({
	build: {
		emptyOutDir: true,
		lib: {
			entry: { "preset-eslint-base": "./preset-eslint-base.ts" },
			formats: ["es" as const],
		},
		minify: false,
		rollupOptions: {
			external: [
				"@limegrass/eslint-plugin-import-alias",
				"@typescript-eslint/eslint-plugin",
				"@typescript-eslint/parser",
				"eslint",
				"eslint-plugin-eslint-comments",
				"eslint-plugin-functional",
				"eslint-plugin-import",
				"eslint-plugin-no-barrel-files",
				"eslint-plugin-redundant-undefined",
				"eslint-plugin-unicorn",
			],
		},
	},
	plugins: [
		dtsPlugin({
			include: ["preset-eslint-base.ts"],
		}),
	],
}))
