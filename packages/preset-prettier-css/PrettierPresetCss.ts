import {
	prettierPresetIdentifier,
	type PrettierPreset,
} from "@rainstormy/preset-prettier-base/dist/PrettierPresetUtilities.js"
import cssOrderPlugin from "prettier-plugin-css-order"

type PrettierPresetCss = PrettierPreset & {
	readonly cssDeclarationSorterOrder?:
		| "alphabetical"
		| "concentric-css"
		| "smacss"
	readonly cssDeclarationSorterKeepOverrides?: boolean // eslint-disable-line typescript/naming-convention -- The plugin expects this name.
}

/**
 * A predefined, opinionated Prettier configuration for CSS declarations.
 */
export function prettierPresetCss(): PrettierPresetCss {
	return {
		[prettierPresetIdentifier]: "prettierPresetCss",
		plugins: [
			/**
			 * @see https://github.com/Siilwyn/prettier-plugin-css-order
			 */
			cssOrderPlugin,
		],
		cssDeclarationSorterKeepOverrides: false, // As recommended by the plugin for new projects.
	}
}
