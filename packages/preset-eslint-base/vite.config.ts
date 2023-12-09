import { defineConfig } from "vite"
import dtsPlugin from "vite-plugin-dts"

export default defineConfig(() => ({
	build: {
		emptyOutDir: true,
		lib: {
			entry: { "eslint.config": "./eslint.config.ts" },
			formats: ["es" as const],
		},
		minify: false,
		rollupOptions: {
			external: [
				"@typescript-eslint/eslint-plugin",
				"@typescript-eslint/parser",
				"eslint",
				"eslint-plugin-eslint-comments",
				"eslint-plugin-functional",
				"eslint-plugin-import",
				"eslint-plugin-redundant-undefined",
				"eslint-plugin-unicorn",
			],
		},
	},
	plugins: [
		dtsPlugin({
			include: ["eslint.config.ts"],
		}),
	],
}))
