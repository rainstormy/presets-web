import { defineConfig } from "vite"
import dtsPlugin from "vite-plugin-dts"

export default defineConfig(() => ({
	build: {
		emptyOutDir: true,
		lib: {
			entry: { "preset-eslint-preact": "./preset-eslint-preact.ts" },
			formats: ["es" as const],
		},
		minify: false,
		rollupOptions: {
			external: [
				"@rainstormy/preset-eslint-jsx",
				"@rainstormy/preset-eslint-react",
				"eslint",
			],
		},
	},
	plugins: [
		dtsPlugin({
			include: ["preset-eslint-preact.ts"],
		}),
	],
}))
