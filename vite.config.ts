import { defineConfig } from "vite"

export default defineConfig({
	build: {
		emptyOutDir: true,
		minify: "oxc",
		reportCompressedSize: false,
		target: "es2022",
	},
	cacheDir: "node_modules/.cache/",
	plugins: [],
})
