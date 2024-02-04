import { type EslintPresetsStandardRuleset } from "@rainstormy/presets-eslint"
import { type EslintPreset } from "@rainstormy/presets-eslint/dist/EslintConfig.js"
import accessibilityPlugin from "eslint-plugin-jsx-a11y"
import reactPlugin from "eslint-plugin-react"
import { type EslintPluginAccessibilityRuleset } from "./rulesets/EslintPluginAccessibilityRuleset.js"
import { type EslintPluginReactJsxRuleset } from "./rulesets/EslintPluginReactJsxRuleset.js"

export type EslintPresetJsx = EslintPreset<
	EslintPresetsStandardRuleset,
	EslintPluginAccessibilityRuleset & EslintPluginReactJsxRuleset
>

/**
 * A predefined, opinionated ESLint configuration for JSX components in general.
 *
 * - For Preact components, use [`@rainstormy/presets-eslint-preact`](https://github.com/rainstormy/presets-web/tree/main/packages/presets-eslint-preact) instead.
 * - For React components, use [`@rainstormy/presets-eslint-react`](https://github.com/rainstormy/presets-web/tree/main/packages/presets-eslint-react) instead.
 * - For Solid components, use [`@rainstormy/presets-eslint-solid`](https://github.com/rainstormy/presets-web/tree/main/packages/presets-eslint-solid) instead.
 *
 * ```javascript
 * eslintPresetJsx()
 * ```
 *
 * is equivalent to
 *
 * ```javascript
 * eslintPresetJsx({
 *     targetFilePatterns: ["**\/*.@(jsx|tsx)"],
 *     overrideRules: {},
 * })
 * ```
 *
 * @see https://github.com/jsx-eslint/eslint-plugin-jsx-a11y#supported-rules accessibility/*
 * @see https://github.com/jsx-eslint/eslint-plugin-react#list-of-supported-rules react/*
 */
export function eslintPresetJsx(
	options: {
		readonly overrideRules?: Partial<EslintPresetJsx["rules"]>
		readonly targetFilePatterns?: ReadonlyArray<string>
	} = {},
): EslintPresetJsx {
	const { overrideRules, targetFilePatterns = ["**/*.@(jsx|tsx)"] } = options

	return {
		presetOrdinal: 1, // This preset must be applied after `eslintPresetTailwind` to override Tailwind CSS settings correctly.
		files: targetFilePatterns,
		plugins: {
			accessibility: accessibilityPlugin,
			react: reactPlugin,
		},
		rules: {
			/**
			 * JSX components require more lines of code than plain JavaScript functions.
			 * We would also want to avoid hasty abstractions of components due to this rule.
			 * `max-lines` supersedes this rule to keep the size of component files under control.
			 * @see https://eslint.org/docs/latest/rules/max-lines-per-function
			 */
			"max-lines-per-function": "off",

			/**
			 * @see https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/main/docs/rules/alt-text.md
			 */
			"accessibility/alt-text": "error",

			/**
			 * This rule has not been configured, as it supports only the English locale by default.
			 * @see https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/main/docs/rules/anchor-ambiguous-text.md
			 */
			"accessibility/anchor-ambiguous-text": "off",

			/**
			 * @see https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/main/docs/rules/anchor-has-content.md
			 */
			"accessibility/anchor-has-content": "error",

			/**
			 * @see https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/main/docs/rules/anchor-is-valid.md
			 */
			"accessibility/anchor-is-valid": "error",

			/**
			 * @see https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/main/docs/rules/aria-activedescendant-has-tabindex.md
			 */
			"accessibility/aria-activedescendant-has-tabindex": "error",

			/**
			 * @see https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/main/docs/rules/aria-props.md
			 */
			"accessibility/aria-props": "error",

			/**
			 * @see https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/main/docs/rules/aria-proptypes.md
			 */
			"accessibility/aria-proptypes": "error",

			/**
			 * @see https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/main/docs/rules/aria-role.md
			 */
			"accessibility/aria-role": "error",

			/**
			 * @see https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/main/docs/rules/aria-unsupported-elements.md
			 */
			"accessibility/aria-unsupported-elements": "error",

			/**
			 * @see https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/main/docs/rules/autocomplete-valid.md
			 */
			"accessibility/autocomplete-valid": "error",

			/**
			 * @see https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/main/docs/rules/click-events-have-key-events.md
			 */
			"accessibility/click-events-have-key-events": "error",

			/**
			 * @see https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/main/docs/rules/control-has-associated-label.md
			 */
			"accessibility/control-has-associated-label": "error",

			/**
			 * @see https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/main/docs/rules/heading-has-content.md
			 */
			"accessibility/heading-has-content": "error",

			/**
			 * `accessibility/lang` supersedes this rule.
			 * @see https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/main/docs/rules/html-has-lang.md
			 */
			"accessibility/html-has-lang": "off",

			/**
			 * @see https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/main/docs/rules/iframe-has-title.md
			 */
			"accessibility/iframe-has-title": "error",

			/**
			 * This rule has not been configured, as it supports only the English locale by default.
			 * @see https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/main/docs/rules/img-redundant-alt.md
			 */
			"accessibility/img-redundant-alt": "off",

			/**
			 * @see https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/main/docs/rules/interactive-supports-focus.md
			 */
			"accessibility/interactive-supports-focus": "error",

			/**
			 * @see https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/main/docs/rules/label-has-associated-control.md
			 */
			"accessibility/label-has-associated-control": "error",

			/**
			 * @see https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/main/docs/rules/lang.md
			 */
			"accessibility/lang": "error",

			/**
			 * @see https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/main/docs/rules/media-has-caption.md
			 */
			"accessibility/media-has-caption": "error",

			/**
			 * @see https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/main/docs/rules/mouse-events-have-key-events.md
			 */
			"accessibility/mouse-events-have-key-events": "error",

			/**
			 * @see https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/main/docs/rules/no-access-key.md
			 */
			"accessibility/no-access-key": "error",

			/**
			 * @see https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/main/docs/rules/no-autofocus.md
			 */
			"accessibility/no-autofocus": "error",

			/**
			 * @see https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/main/docs/rules/no-distracting-elements.md
			 */
			"accessibility/no-distracting-elements": "error",

			/**
			 * @see https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/main/docs/rules/no-interactive-element-to-noninteractive-role.md
			 */
			"accessibility/no-interactive-element-to-noninteractive-role": "error",

			/**
			 * @see https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/main/docs/rules/no-noninteractive-element-interactions.md
			 */
			"accessibility/no-noninteractive-element-interactions": "error",

			/**
			 * @see https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/main/docs/rules/no-noninteractive-element-to-interactive-role.md
			 */
			"accessibility/no-noninteractive-element-to-interactive-role": "error",

			/**
			 * @see https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/main/docs/rules/no-noninteractive-tabindex.md
			 */
			"accessibility/no-noninteractive-tabindex": "error",

			/**
			 * @see https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/main/docs/rules/no-redundant-roles.md
			 */
			"accessibility/no-redundant-roles": "error",

			/**
			 * @see https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/main/docs/rules/no-static-element-interactions.md
			 */
			"accessibility/no-static-element-interactions": "error",

			/**
			 * @see https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/main/docs/rules/prefer-tag-over-role.md
			 */
			"accessibility/prefer-tag-over-role": "error",

			/**
			 * @see https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/main/docs/rules/role-has-required-aria-props.md
			 */
			"accessibility/role-has-required-aria-props": "error",

			/**
			 * @see https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/main/docs/rules/role-supports-aria-props.md
			 */
			"accessibility/role-supports-aria-props": "error",

			/**
			 * @see https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/main/docs/rules/scope.md
			 */
			"accessibility/scope": "error",

			/**
			 * @see https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/main/docs/rules/tabindex-no-positive.md
			 */
			"accessibility/tabindex-no-positive": "error",

			/**
			 * Components may have render props and event handler props.
			 * @see https://github.com/eslint-functional/eslint-plugin-functional/blob/main/docs/rules/no-mixed-types.md
			 */
			"functional/no-mixed-types": "off",

			/**
			 * Usual boolean naming conventions encourage prefixes such as `is` and `has`.
			 * However, prefixing just for the sake of prefixing is Hungarian notation, which is generally undesirable, as it may in fact lead to less readable names.
			 * Native HTML elements have boolean attributes such as `autofocus`, `checked`, `default`, and `open`, making it difficult to define a consistent naming convention.
			 * @see https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/boolean-prop-naming.md
			 */
			"react/boolean-prop-naming": "off",

			/**
			 * @see https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/button-has-type.md
			 */
			"react/button-has-type": "error",

			/**
			 * Functions have a mandatory return statement which causes less diff churn with Prettier and makes it easier to add hooks, local variables etc.
			 * @see https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/function-component-definition.md
			 */
			"react/function-component-definition": "error",

			/**
			 * @see https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/iframe-missing-sandbox.md
			 */
			"react/iframe-missing-sandbox": "error",

			/**
			 * @see https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-boolean-value.md
			 */
			"react/jsx-boolean-value": "error",

			/**
			 * Prettier supersedes this rule.
			 * @see https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-child-element-spacing.md
			 */
			"react/jsx-child-element-spacing": "off",

			/**
			 * Prettier supersedes this rule.
			 * @see https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-closing-bracket-location.md
			 */
			"react/jsx-closing-bracket-location": "off",

			/**
			 * Prettier supersedes this rule.
			 * @see https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-closing-tag-location.md
			 */
			"react/jsx-closing-tag-location": "off",

			/**
			 * Render props must always use braces and redundant braces must be removed elsewhere.
			 * @see https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-curly-brace-presence.md
			 */
			"react/jsx-curly-brace-presence": [
				"error",
				{
					props: "never",
					children: "never",
					propElementValues: "always",
				},
			],

			/**
			 * Prettier supersedes this rule.
			 * @see https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-curly-newline.md
			 */
			"react/jsx-curly-newline": "off",

			/**
			 * Prettier supersedes this rule.
			 * @see https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-curly-spacing.md
			 */
			"react/jsx-curly-spacing": "off",

			/**
			 * Prettier supersedes this rule.
			 * @see https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-equals-spacing.md
			 */
			"react/jsx-equals-spacing": "off",

			/**
			 * Files without JSX syntax should not have the `jsx`/`tsx` extension, as we would always expect these files to contain components.
			 * Consequently, we may configure tools such as ESLint and Tailwind CSS to process them differently.
			 * @see https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-filename-extension.md
			 */
			"react/jsx-filename-extension": [
				"error",
				{ allow: "as-needed", extensions: [".jsx", ".tsx"] },
			],

			/**
			 * Prettier supersedes this rule.
			 * @see https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-first-prop-new-line.md
			 */
			"react/jsx-first-prop-new-line": "off",

			/**
			 * Always use the `Fragment` element to prepare for the `key` attribute if needed.
			 * @see https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-fragments.md
			 */
			"react/jsx-fragments": ["error", "element"],

			/**
			 * @see https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-handler-names.md
			 */
			"react/jsx-handler-names": "error",

			/**
			 * Prettier supersedes this rule.
			 * @see https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-indent.md
			 */
			"react/jsx-indent": "off",

			/**
			 * Prettier supersedes this rule.
			 * @see https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-indent-props.md
			 */
			"react/jsx-indent-props": "off",

			/**
			 * @see https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-key.md
			 */
			"react/jsx-key": "error",

			/**
			 * Corresponds to `max-nested-callbacks`.
			 * @see https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-max-depth.md
			 */
			"react/jsx-max-depth": ["error", { max: 10 }],

			/**
			 * Prettier supersedes this rule.
			 * @see https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-max-props-per-line.md
			 */
			"react/jsx-max-props-per-line": "off",

			/**
			 * @see https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-newline.md
			 */
			"react/jsx-newline": "off",

			/**
			 * Wrapping every event handler in `useCallback` is a sign of premature optimisation.
			 * It leads to less readable code in every case, and `useCallback` causes some allocation overhead that cannot be justified in most cases.
			 * @see https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-no-bind.md
			 */
			"react/jsx-no-bind": "off",

			/**
			 * @see https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-no-comment-textnodes.md
			 */
			"react/jsx-no-comment-textnodes": "error",

			/**
			 * @see https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-no-constructed-context-values.md
			 */
			"react/jsx-no-constructed-context-values": "error",

			/**
			 * @see https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-no-duplicate-props.md
			 */
			"react/jsx-no-duplicate-props": "error",

			/**
			 * Prefers ternary expressions over coercion to booleans.
			 * @see https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-no-leaked-render.md
			 */
			"react/jsx-no-leaked-render": ["error", { validStrategies: ["ternary"] }],

			/**
			 * `jsx-curly-brace-presence` supersedes this rule.
			 * @see https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-no-literals.md
			 */
			"react/jsx-no-literals": "off",

			/**
			 * @see https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-no-script-url.md
			 */
			"react/jsx-no-script-url": "error",

			/**
			 * @see https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-no-target-blank.md
			 */
			"react/jsx-no-target-blank": "error",

			/**
			 * @see https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-no-undef.md
			 */
			"react/jsx-no-undef": "error",

			/**
			 * @see https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-no-useless-fragment.md
			 */
			"react/jsx-no-useless-fragment": "error",

			/**
			 * Prettier supersedes this rule.
			 * @see https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-one-expression-per-line.md
			 */
			"react/jsx-one-expression-per-line": "off",

			/**
			 * @see https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-pascal-case.md
			 */
			"react/jsx-pascal-case": "error",

			/**
			 * Prettier supersedes this rule.
			 * @see https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-props-no-multi-spaces.md
			 */
			"react/jsx-props-no-multi-spaces": "off",

			/**
			 * @see https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-props-no-spreading.md
			 */
			"react/jsx-props-no-spreading": "error",

			/**
			 * Altering the evaluation order of props may change program semantics. Besides, why would you want `end` to appear before `start`? 😛
			 * @see https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-sort-props.md
			 */
			"react/jsx-sort-props": "off",

			/**
			 * Prettier supersedes this rule.
			 * @see https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-tag-spacing.md
			 */
			"react/jsx-tag-spacing": "off",

			/**
			 * @see https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-uses-vars.md
			 */
			"react/jsx-uses-vars": "error",

			/**
			 * Prettier supersedes this rule.
			 * @see https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-wrap-multilines.md
			 */
			"react/jsx-wrap-multilines": "off",

			/**
			 * @see https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/no-adjacent-inline-elements.md
			 */
			"react/no-adjacent-inline-elements": "error",

			/**
			 * A strict limitation of one component per file may lead to a larger number of files, causing directories to be less readable.
			 * Having to separate components into multiple files may also cause some undesirable lack of encapsulation.
			 * `max-lines` supersedes this rule to keep the size of component files under control.
			 * @see https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/no-multi-comp.md
			 */
			"react/no-multi-comp": "off",

			/**
			 * @see https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/no-unknown-property.md
			 */
			"react/no-unknown-property": [
				"error",
				{
					ignore: [
						// HTML attributes.
						"class",
						"for",

						// SVG attributes.
						"alignment-baseline",
						"baseline-shift",
						"clip-path",
						"clip-rule",
						"color-interpolation",
						"color-interpolation-filters",
						"color-rendering",
						"dominant-baseline",
						"fill-opacity",
						"fill-rule",
						"flood-color",
						"flood-opacity",
						"font-family",
						"font-size",
						"font-size-adjust",
						"font-stretch",
						"font-style",
						"font-variant",
						"font-weight",
						"image-rendering",
						"letter-spacing",
						"lighting-color",
						"marker-end",
						"marker-mid",
						"marker-start",
						"overline-position",
						"overline-thickness",
						"paint-order",
						"pointer-events",
						"rendering-intent",
						"shape-rendering",
						"stop-color",
						"stop-opacity",
						"strikethrough-position",
						"strikethrough-thickness",
						"stroke-dasharray",
						"stroke-dashoffset",
						"stroke-linecap",
						"stroke-linejoin",
						"stroke-miterlimit",
						"stroke-opacity",
						"stroke-width",
						"text-anchor",
						"text-decoration",
						"text-rendering",
						"transform-origin",
						"underline-position",
						"underline-thickness",
						"unicode-bidi",
						"vector-effect",
						"word-spacing",
						"writing-mode",
					],
				},
			],

			/**
			 * @see https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/self-closing-comp.md
			 */
			"react/self-closing-comp": "error",

			/**
			 * Inherited from `presets-eslint`.
			 * By convention, components are named in PascalCase to distinguish them from native HTML elements.
			 * This naming convention covers local variables and default import statements, too, as they may contain component instances or references.
			 * @see https://typescript-eslint.io/rules/naming-convention
			 */
			"typescript/naming-convention": [
				"error",
				{
					selector: "default",
					format: ["strictCamelCase"],
					leadingUnderscore: "forbid",
					trailingUnderscore: "forbid",
				},
				{
					selector: "objectLiteralProperty",
					format: null,
					leadingUnderscore: "allow",
					trailingUnderscore: "allow",
				},
				{
					selector: "typeLike",
					format: ["PascalCase"],
					leadingUnderscore: "forbid",
					trailingUnderscore: "forbid",
				},
				{
					selector: ["import", "variableLike"],
					format: ["strictCamelCase", "PascalCase"],
					leadingUnderscore: "forbid",
					trailingUnderscore: "forbid",
				},
			],

			...overrideRules,
		},
		settings: {
			tailwindcss: {
				classRegex: "[Cc]lass(?:Name)?$",
			},
		},
	}
}
