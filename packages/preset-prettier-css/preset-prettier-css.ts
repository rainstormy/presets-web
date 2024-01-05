import { type Config } from "prettier"
import cssOrderPlugin from "prettier-plugin-css-order"

type PrettierPluginCssOrderConfig = {
	readonly cssDeclarationSorterOrder?:
		| "alphabetical"
		| "concentric-css"
		| "smacss"
	readonly cssDeclarationSorterKeepOverrides?: boolean // eslint-disable-line typescript/naming-convention -- The plugin expects this name.
}

export function prettierCss(): Config & PrettierPluginCssOrderConfig {
	return {
		plugins: [
			/**
			 * @see https://github.com/Siilwyn/prettier-plugin-css-order
			 */
			cssOrderPlugin,
		],
		cssDeclarationSorterKeepOverrides: false, // As recommended by the plugin for new projects.
	}
}
