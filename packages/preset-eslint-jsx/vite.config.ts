import { defineConfig } from "vite"
import dtsPlugin from "vite-plugin-dts"

export default defineConfig(() => ({
	build: {
		emptyOutDir: true,
		lib: {
			entry: { "preset-eslint-jsx": "./preset-eslint-jsx.ts" },
			formats: ["es" as const],
		},
		minify: false,
		rollupOptions: {
			external: ["eslint", "eslint-plugin-jsx-a11y", "eslint-plugin-react"],
		},
	},
	plugins: [
		dtsPlugin({
			include: ["preset-eslint-jsx.ts"],
		}),
	],
}))
