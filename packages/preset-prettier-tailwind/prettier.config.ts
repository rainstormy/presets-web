import type { Config } from "prettier"
import { options, parsers, printers } from "prettier-plugin-tailwindcss"

export function tailwind(): Config {
	return {
		plugins: [
			/**
			 * @see https://github.com/tailwindlabs/prettier-plugin-tailwindcss
			 */
			{ options, parsers, printers },
		],
	}
}
