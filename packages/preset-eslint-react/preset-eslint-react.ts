import { eslintJsx } from "@rainstormy/preset-eslint-jsx"
import { type Linter } from "eslint"
import reactHooksPlugin from "eslint-plugin-react-hooks"

export function eslintReact(options: {
	readonly files: ReadonlyArray<string>
}): Linter.FlatConfig {
	const jsxPreset = eslintJsx(options)

	return {
		...jsxPreset,
		plugins: {
			...jsxPreset.plugins,
			"react-hooks": reactHooksPlugin,
		},
		/**
		 * @see https://github.com/jsx-eslint/eslint-plugin-jsx-a11y#supported-rules jsx-a11y
		 * @see https://github.com/jsx-eslint/eslint-plugin-react#list-of-supported-rules react
		 * @see https://github.com/facebook/react/tree/main/packages/eslint-plugin-react-hooks#custom-configuration react-hooks
		 */
		rules: {
			...jsxPreset.rules,

			/**
			 * `functional/no-classes` supersedes this rule.
			 * @see https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/default-props-match-prop-types.md
			 */
			"react/default-props-match-prop-types": "off",

			/**
			 * Using normal property access decouples our components from React-specific conveniences such as props destructuring.
			 * @see https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/destructuring-assignment.md
			 */
			"react/destructuring-assignment": ["error", "never"],

			/**
			 * `react/function-component-definition` supersedes this rule, as React infers the display name from the function name.
			 * @see https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/display-name.md
			 */
			"react/display-name": "off",

			/**
			 * This rule has not been configured.
			 * @see https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/forbid-component-props.md
			 */
			"react/forbid-component-props": "off",

			/**
			 * This rule has not been configured.
			 * @see https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/forbid-dom-props.md
			 */
			"react/forbid-dom-props": "off",

			/**
			 * This rule has not been configured.
			 * @see https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/forbid-elements.md
			 */
			"react/forbid-elements": "off",

			/**
			 * TypeScript supersedes this rule.
			 * @see https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/forbid-foreign-prop-types.md
			 */
			"react/forbid-foreign-prop-types": "off",

			/**
			 * TypeScript supersedes this rule.
			 * @see https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/forbid-prop-types.md
			 */
			"react/forbid-prop-types": "off",

			/**
			 * @see https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/hook-use-state.md
			 */
			"react/hook-use-state": "error",

			/**
			 * Unnecessary in React 17 and newer.
			 * @see https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-uses-react.md
			 */
			"react/jsx-uses-react": "off",

			/**
			 * @see https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/no-access-state-in-setstate.md
			 */
			"react/no-access-state-in-setstate": "error",

			/**
			 * @see https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/no-array-index-key.md
			 */
			"react/no-array-index-key": "error",

			/**
			 * `functional/no-classes` supersedes this rule.
			 * @see https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/no-arrow-function-lifecycle.md
			 */
			"react/no-arrow-function-lifecycle": "off",

			/**
			 * @see https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/no-children-prop.md
			 */
			"react/no-children-prop": "error",

			/**
			 * @see https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/no-danger.md
			 */
			"react/no-danger": "error",

			/**
			 * @see https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/no-danger-with-children.md
			 */
			"react/no-danger-with-children": "error",

			/**
			 * @see https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/no-deprecated.md
			 */
			"react/no-deprecated": "error",

			/**
			 * `functional/no-classes` supersedes this rule.
			 * @see https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/no-did-mount-set-state.md
			 */
			"react/no-did-mount-set-state": "off",

			/**
			 * `functional/no-classes` supersedes this rule.
			 * @see https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/no-did-update-set-state.md
			 */
			"react/no-did-update-set-state": "off",

			/**
			 * `functional/no-classes` supersedes this rule.
			 * @see https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/no-direct-mutation-state.md
			 */
			"react/no-direct-mutation-state": "off",

			/**
			 * @see https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/no-find-dom-node.md
			 */
			"react/no-find-dom-node": "error",

			/**
			 * @see https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/no-invalid-html-attribute.md
			 */
			"react/no-invalid-html-attribute": "error",

			/**
			 * `functional/no-classes` supersedes this rule.
			 * @see https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/no-is-mounted.md
			 */
			"react/no-is-mounted": "off",

			/**
			 * @see https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/no-multi-comp.md
			 */
			"react/no-multi-comp": "error",

			/**
			 * @see https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/no-namespace.md
			 */
			"react/no-namespace": "error",

			/**
			 * @see https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/no-object-type-as-default-prop.md
			 */
			"react/no-object-type-as-default-prop": "error",

			/**
			 * `functional/no-classes` supersedes this rule.
			 * @see https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/no-redundant-should-component-update.md
			 */
			"react/no-redundant-should-component-update": "off",

			/**
			 * @see https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/no-render-return-value.md
			 */
			"react/no-render-return-value": "error",

			/**
			 * `functional/no-classes` supersedes this rule.
			 * @see https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/no-set-state.md
			 */
			"react/no-set-state": "error",

			/**
			 * @see https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/no-string-refs.md
			 */
			"react/no-string-refs": "error",

			/**
			 * `functional/no-this-expressions` supersedes this rule.
			 * @see https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/no-this-in-sfc.md
			 */
			"react/no-this-in-sfc": "off",

			/**
			 * `functional/no-classes` supersedes this rule.
			 * @see https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/no-typos.md
			 */
			"react/no-typos": "off",

			/**
			 * @see https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/no-unescaped-entities.md
			 */
			"react/no-unescaped-entities": "error",

			/**
			 * @see https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/no-unknown-property.md
			 */
			"react/no-unknown-property": "error",

			/**
			 * `functional/no-classes` supersedes this rule.
			 * @see https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/no-unsafe.md
			 */
			"react/no-unsafe": "off",

			/**
			 * @see https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/no-unstable-nested-components.md
			 */
			"react/no-unstable-nested-components": "error",

			/**
			 * `functional/no-classes` supersedes this rule.
			 * @see https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/no-unused-class-component-methods.md
			 */
			"react/no-unused-class-component-methods": "off",

			/**
			 * `functional/no-classes` supersedes this rule.
			 * @see https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/no-unused-prop-types.md
			 */
			"react/no-unused-prop-types": "off",

			/**
			 * `functional/no-classes` supersedes this rule.
			 * @see https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/no-unused-state.md
			 */
			"react/no-unused-state": "off",

			/**
			 * `functional/no-classes` supersedes this rule.
			 * @see https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/no-will-update-set-state.md
			 */
			"react/no-will-update-set-state": "off",

			/**
			 * `functional/no-classes` supersedes this rule.
			 * @see https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/prefer-es6-class.md
			 */
			"react/prefer-es6-class": "off",

			/**
			 * `functional/no-classes` supersedes this rule.
			 * @see https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/prefer-exact-props.md
			 */
			"react/prefer-exact-props": "off",

			/**
			 * `functional/prefer-readonly-type` supersedes this rule.
			 * @see https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/prefer-read-only-props.md
			 */
			"react/prefer-read-only-props": "off",

			/**
			 * @see https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/prefer-stateless-function.md
			 */
			"react/prefer-stateless-function": "error",

			/**
			 * TypeScript supersedes this rule.
			 * @see https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/prop-types.md
			 */
			"react/prop-types": "off",

			/**
			 * Unnecessary in React 17 and newer.
			 * @see https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/react-in-jsx-scope.md
			 */
			"react/react-in-jsx-scope": "off",

			/**
			 * `functional/no-classes` supersedes this rule.
			 * @see https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/require-default-props.md
			 */
			"react/require-default-props": "off",

			/**
			 * `functional/no-classes` supersedes this rule.
			 * @see https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/require-optimization.md
			 */
			"react/require-optimization": "off",

			/**
			 * `functional/no-classes` supersedes this rule.
			 * @see https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/require-render-return.md
			 */
			"react/require-render-return": "off",

			/**
			 * `functional/no-classes` supersedes this rule.
			 * @see https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/sort-comp.md
			 */
			"react/sort-comp": "off",

			/**
			 * `functional/no-classes` supersedes this rule.
			 * @see https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/sort-default-props.md
			 */
			"react/sort-default-props": "off",

			/**
			 * Altering the declaration order of props may introduce inconsistencies in components, as the counterpart rule `react/jsx-sort-props` has been disabled.
			 * @see https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/sort-prop-types.md
			 */
			"react/sort-prop-types": "off",

			/**
			 * `functional/no-classes` supersedes this rule.
			 * @see https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/state-in-constructor.md
			 */
			"react/state-in-constructor": "off",

			/**
			 * `functional/no-classes` supersedes this rule.
			 * @see https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/static-property-placement.md
			 */
			"react/static-property-placement": "off",

			/**
			 * @see https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/style-prop-object.md
			 */
			"react/style-prop-object": "error",

			/**
			 * @see https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/void-dom-elements-no-children.md
			 */
			"react/void-dom-elements-no-children": "error",

			/**
			 * @see https://react.dev/learn/editor-setup#linting
			 * @see https://legacy.reactjs.org/docs/hooks-faq.html#performance-optimizations
			 */
			"react-hooks/exhaustive-deps": "error",

			/**
			 * @see https://react.dev/learn/editor-setup#linting
			 * @see https://legacy.reactjs.org/docs/hooks-rules.html
			 */
			"react-hooks/rules-of-hooks": "error",
		},
		settings: {
			react: {
				version: "detect",
			},
		},
	}
}
