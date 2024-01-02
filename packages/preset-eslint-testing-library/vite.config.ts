import { defineConfig } from "vite"
import dtsPlugin from "vite-plugin-dts"

export default defineConfig(() => ({
	build: {
		emptyOutDir: true,
		lib: {
			entry: {
				"preset-eslint-testing-library": "./preset-eslint-testing-library.ts",
			},
			formats: ["es" as const],
		},
		minify: false,
		rollupOptions: {
			external: ["eslint", "eslint-plugin-testing-library"],
		},
	},
	plugins: [
		dtsPlugin({
			include: ["preset-eslint-testing-library.ts"],
		}),
	],
}))
