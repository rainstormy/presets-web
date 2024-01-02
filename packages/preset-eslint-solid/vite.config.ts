import { defineConfig } from "vite"
import dtsPlugin from "vite-plugin-dts"

export default defineConfig(() => ({
	build: {
		emptyOutDir: true,
		lib: {
			entry: { "preset-eslint-solid": "./preset-eslint-solid.ts" },
			formats: ["es" as const],
		},
		minify: false,
		rollupOptions: {
			external: [
				"@rainstormy/preset-eslint-jsx",
				"eslint",
				"eslint-plugin-solid",
			],
		},
	},
	plugins: [
		dtsPlugin({
			include: ["preset-eslint-solid.ts"],
		}),
	],
}))
