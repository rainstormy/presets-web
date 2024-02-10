import { type EslintPluginRuleset } from "@rainstormy/presets-eslint/dist/EslintConfig.js"

export type EslintPluginReactJsxRuleset = EslintPluginRuleset<
	"react",
	| "react/boolean-prop-naming"
	| "react/button-has-type"
	| "react/function-component-definition"
	| "react/iframe-missing-sandbox"
	| "react/jsx-boolean-value"
	| "react/jsx-child-element-spacing"
	| "react/jsx-closing-bracket-location"
	| "react/jsx-closing-tag-location"
	| "react/jsx-curly-brace-presence"
	| "react/jsx-curly-newline"
	| "react/jsx-curly-spacing"
	| "react/jsx-equals-spacing"
	| "react/jsx-filename-extension"
	| "react/jsx-first-prop-new-line"
	| "react/jsx-fragments"
	| "react/jsx-handler-names"
	| "react/jsx-indent-props"
	| "react/jsx-indent"
	| "react/jsx-key"
	| "react/jsx-max-depth"
	| "react/jsx-max-props-per-line"
	| "react/jsx-newline"
	| "react/jsx-no-bind"
	| "react/jsx-no-comment-textnodes"
	| "react/jsx-no-constructed-context-values"
	| "react/jsx-no-duplicate-props"
	| "react/jsx-no-leaked-render"
	| "react/jsx-no-literals"
	| "react/jsx-no-script-url"
	| "react/jsx-no-target-blank"
	| "react/jsx-no-undef"
	| "react/jsx-no-useless-fragment"
	| "react/jsx-one-expression-per-line"
	| "react/jsx-pascal-case"
	| "react/jsx-props-no-multi-spaces"
	| "react/jsx-props-no-spreading"
	| "react/jsx-sort-props"
	| "react/jsx-tag-spacing"
	| "react/jsx-uses-vars"
	| "react/jsx-wrap-multilines"
	| "react/no-adjacent-inline-elements"
	| "react/no-multi-comp"
	| "react/no-unknown-property"
	| "react/self-closing-comp"
>