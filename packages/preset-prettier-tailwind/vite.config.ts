import { defineConfig } from "vite"
import dtsPlugin from "vite-plugin-dts"

export default defineConfig(() => ({
	build: {
		emptyOutDir: true,
		lib: {
			entry: { "prettier.config": "./prettier.config.ts" },
			formats: ["es" as const],
		},
		minify: false,
		rollupOptions: {
			external: ["prettier", "prettier-plugin-tailwindcss"],
		},
	},
	plugins: [
		dtsPlugin({
			include: ["prettier.config.ts"],
		}),
	],
}))
