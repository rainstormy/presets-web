import { defineConfig } from "oxfmt"
import { oxfmtPreset } from "#oxfmt/OxfmtPreset.ts"

export default defineConfig({
	...oxfmtPreset(),
	ignorePatterns: [".idea/", "dist/", "node_modules/", "**/*.md", "pnpm-lock.yaml"],
})
