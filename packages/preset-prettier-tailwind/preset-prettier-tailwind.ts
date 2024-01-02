import { type Config } from "prettier"
import { options, parsers, printers } from "prettier-plugin-tailwindcss"

export function prettierTailwind(): Config {
	return {
		plugins: [
			/**
			 * @see https://github.com/tailwindlabs/prettier-plugin-tailwindcss
			 */
			{ options, parsers, printers },
		],
	}
}
