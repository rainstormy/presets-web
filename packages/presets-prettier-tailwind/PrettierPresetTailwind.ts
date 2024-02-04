import {
	type PrettierPreset,
} from "@rainstormy/presets-prettier/dist/PrettierConfig.js"
import { options, parsers, printers } from "prettier-plugin-tailwindcss"

const tailwindPlugin = { options, parsers, printers }

/**
 * A predefined, opinionated Prettier configuration for Tailwind CSS classes.
 */
export function prettierPresetTailwind(): PrettierPreset {
	return {
		presetOrdinal: Number.MAX_SAFE_INTEGER, // As recommended by the Tailwind CSS plugin, this preset must always be applied last.
		plugins: [
			/**
			 * @see https://github.com/tailwindlabs/prettier-plugin-tailwindcss
			 */
			tailwindPlugin,
		],
	}
}
