import nextPlugin from "@next/eslint-plugin-next"
import type { Linter } from "eslint"

/* eslint-disable max-lines,max-lines-per-function -- It would be impractical to split the configuration across multiple files and functions. */
export function next(options: {
	readonly files: ReadonlyArray<string>
}): Linter.FlatConfig {
	return {
		files: [...options.files],
		plugins: {
			next: nextPlugin,
		},
		/**
		 * @see https://nextjs.org/docs/app/building-your-application/configuring/eslint#eslint-plugin next
		 */
		rules: {
			/**
			 * @see https://nextjs.org/docs/messages/google-font-display
			 */
			"next/google-font-display": "error",

			/**
			 * @see https://nextjs.org/docs/messages/google-font-preconnect
			 */
			"next/google-font-preconnect": "error",

			/**
			 * @see https://nextjs.org/docs/messages/inline-script-id
			 */
			"next/inline-script-id": "error",

			/**
			 * @see https://nextjs.org/docs/messages/next-script-for-ga
			 */
			"next/next-script-for-ga": "error",

			/**
			 * @see https://nextjs.org/docs/messages/no-assign-module-variable
			 */
			"next/no-assign-module-variable": "error",

			/**
			 * @see https://nextjs.org/docs/messages/no-async-client-component
			 */
			"next/no-async-client-component": "error",

			/**
			 * @see https://nextjs.org/docs/messages/no-before-interactive-script-outside-document
			 */
			"next/no-before-interactive-script-outside-document": "error",

			/**
			 * @see https://nextjs.org/docs/messages/no-css-tags
			 */
			"next/no-css-tags": "error",

			/**
			 * @see https://nextjs.org/docs/messages/no-document-import-in-page
			 */
			"next/no-document-import-in-page": "error",

			/**
			 * @see https://nextjs.org/docs/messages/no-duplicate-head
			 */
			"next/no-duplicate-head": "error",

			/**
			 * @see https://nextjs.org/docs/messages/no-head-element
			 */
			"next/no-head-element": "error",

			/**
			 * @see https://nextjs.org/docs/messages/no-head-import-in-document
			 */
			"next/no-head-import-in-document": "error",

			/**
			 * @see https://nextjs.org/docs/messages/no-html-link-for-pages
			 */
			"next/no-html-link-for-pages": "error",

			/**
			 * @see https://nextjs.org/docs/messages/no-img-element
			 */
			"next/no-img-element": "error",

			/**
			 * @see https://nextjs.org/docs/messages/no-page-custom-font
			 */
			"next/no-page-custom-font": "error",

			/**
			 * @see https://nextjs.org/docs/messages/no-script-component-in-head
			 */
			"next/no-script-component-in-head": "error",

			/**
			 * @see https://nextjs.org/docs/messages/no-styled-jsx-in-document
			 */
			"next/no-styled-jsx-in-document": "error",

			/**
			 * @see https://nextjs.org/docs/messages/no-sync-scripts
			 */
			"next/no-sync-scripts": "error",

			/**
			 * @see https://nextjs.org/docs/messages/no-title-in-document-head
			 */
			"next/no-title-in-document-head": "error",

			/**
			 * Currently, this rule is not documented.
			 */
			"next/no-typos": "error",

			/**
			 * @see https://nextjs.org/docs/messages/no-unwanted-polyfillio
			 */
			"next/no-unwanted-polyfillio": "error",
		},
	}
}

/* eslint-enable max-lines,max-lines-per-function */
