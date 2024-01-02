import { defineConfig } from "vite"
import dtsPlugin from "vite-plugin-dts"

export default defineConfig(() => ({
	build: {
		emptyOutDir: true,
		lib: {
			entry: { "preset-eslint-storybook": "./preset-eslint-storybook.ts" },
			formats: ["es" as const],
		},
		minify: false,
		rollupOptions: {
			external: ["eslint", "eslint-plugin-storybook"],
		},
	},
	plugins: [
		dtsPlugin({
			include: ["preset-eslint-storybook.ts"],
		}),
	],
}))
