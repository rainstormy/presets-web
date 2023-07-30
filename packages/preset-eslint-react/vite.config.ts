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
				"@rainstormy/preset-eslint-jsx",
				"eslint",
				"eslint-plugin-react-hooks",
			],
		},
	},
	plugins: [
		dtsPlugin({
			include: ["eslint.config.ts"],
		}),
	],
}))
