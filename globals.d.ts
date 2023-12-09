type EslintParser = import("eslint").ESLint.ParserModule
type EslintPlugin = import("eslint").ESLint.Plugin
type PrettierPlugin = import("prettier").Plugin

const eslintParser: EslintParser = {}
const eslintPlugin: EslintPlugin = {}
const prettierPlugin: PrettierPlugin = {}

declare module "@next/eslint-plugin-next" {
	export = eslintPlugin
}

declare module "@typescript-eslint/parser" {
	export = eslintParser
}

declare module "@typescript-eslint/eslint-plugin" {
	export = eslintPlugin
}

declare module "eslint-plugin-eslint-comments" {
	export = eslintPlugin
}

declare module "eslint-plugin-functional" {
	export = eslintPlugin
}

declare module "eslint-plugin-import" {
	export = eslintPlugin
}

declare module "eslint-plugin-jsx-a11y" {
	export = eslintPlugin
}

declare module "eslint-plugin-qwik" {
	export = eslintPlugin
}

declare module "eslint-plugin-react" {
	export = eslintPlugin
}

declare module "eslint-plugin-react-hooks" {
	export = eslintPlugin
}

declare module "eslint-plugin-redundant-undefined" {
	export = eslintPlugin
}

declare module "eslint-plugin-solid" {
	export = eslintPlugin
}

declare module "eslint-plugin-storybook" {
	export = eslintPlugin
}

declare module "eslint-plugin-tailwindcss" {
	export = eslintPlugin
}

declare module "eslint-plugin-unicorn" {
	export = eslintPlugin
}

declare module "eslint-plugin-vitest" {
	export = eslintPlugin
}

declare module "prettier-plugin-organize-imports" {
	export = prettierPlugin
}

declare module "prettier-plugin-packagejson" {
	export = prettierPlugin
}
