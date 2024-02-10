import { type PrettierPreset } from "@rainstormy/presets-prettier/dist/PrettierConfig.js"
import {
	options as tailwindOptions,
	parsers as tailwindParsers,
	printers as tailwindPrinters,
} from "prettier-plugin-tailwindcss"

const tailwindPlugin = {
	options: tailwindOptions,
	parsers: tailwindParsers,
	printers: tailwindPrinters,
}

export type PrettierPresetTailwind = PrettierPreset & {
	readonly tailwindAttributes?: ReadonlyArray<string>
	readonly tailwindConfig?: string
	readonly tailwindFunctions?: ReadonlyArray<string>
}

/**
 * A predefined, opinionated Prettier configuration for Tailwind CSS classes.
 */
export function prettierPresetTailwind(
	options: {
		readonly classNameAttributes?: ReadonlyArray<string>
		readonly classNameFunctions?: ReadonlyArray<string>
		readonly tailwindConfigPath?: string
	} = {},
): PrettierPresetTailwind {
	const { classNameAttributes, classNameFunctions, tailwindConfigPath } =
		options

	return {
		presetOrdinal: Number.MAX_SAFE_INTEGER, // As recommended by the Tailwind CSS plugin, this preset must always be applied last.
		plugins: [
			/**
			 * @see https://github.com/tailwindlabs/prettier-plugin-tailwindcss
			 */
			tailwindPlugin,
		],
		tailwindAttributes: classNameAttributes,
		tailwindConfig: tailwindConfigPath,
		tailwindFunctions: classNameFunctions,
	}
}
