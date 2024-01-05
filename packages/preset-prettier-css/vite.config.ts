import { defineConfig } from "vite"
import dtsPlugin from "vite-plugin-dts"

export default defineConfig(() => ({
	build: {
		emptyOutDir: true,
		lib: {
			entry: { "preset-prettier-css": "./preset-prettier-css.ts" },
			formats: ["es" as const],
		},
		minify: false,
		rollupOptions: {
			external: ["prettier", "prettier-plugin-css-order"],
		},
	},
	plugins: [
		dtsPlugin({
			include: ["preset-prettier-css.ts"],
		}),
	],
}))
