import { defineConfig } from "vite"
import dtsPlugin from "vite-plugin-dts"

export default defineConfig(() => ({
	build: {
		emptyOutDir: true,
		lib: {
			entry: { "preset-eslint-tailwind": "./preset-eslint-tailwind.ts" },
			formats: ["es" as const],
		},
		minify: false,
		rollupOptions: {
			external: ["eslint", "eslint-plugin-tailwindcss"],
		},
	},
	plugins: [
		dtsPlugin({
			include: ["preset-eslint-tailwind.ts"],
		}),
	],
}))
