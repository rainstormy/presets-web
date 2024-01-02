import { defineConfig } from "vite"
import dtsPlugin from "vite-plugin-dts"

export default defineConfig(() => ({
	build: {
		emptyOutDir: true,
		lib: {
			entry: { "preset-eslint-vitest": "./preset-eslint-vitest.ts" },
			formats: ["es" as const],
		},
		minify: false,
		rollupOptions: {
			external: ["eslint", "eslint-plugin-vitest"],
		},
	},
	plugins: [
		dtsPlugin({
			include: ["preset-eslint-vitest.ts"],
		}),
	],
}))
