import {
	prettierPresetIdentifier,
	prettierPresetOrdinal,
	type PrettierPreset,
} from "@rainstormy/presets-prettier/dist/PrettierPresetUtilities.js"
import { options, parsers, printers } from "prettier-plugin-tailwindcss"

const tailwindPlugin = { options, parsers, printers }

/**
 * A predefined, opinionated Prettier configuration for Tailwind CSS classes.
 */
export function prettierPresetTailwind(): PrettierPreset {
	return {
		[prettierPresetIdentifier]: "prettierPresetTailwind",
		[prettierPresetOrdinal]: Number.MAX_SAFE_INTEGER, // This preset must always be applied last.
		plugins: [
			/**
			 * @see https://github.com/tailwindlabs/prettier-plugin-tailwindcss
			 */
			tailwindPlugin,
		],
	}
}
