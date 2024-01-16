import importAliasPlugin from "@limegrass/eslint-plugin-import-alias"
import typescriptPlugin from "@typescript-eslint/eslint-plugin"
import typescriptParser from "@typescript-eslint/parser"
import { type Linter } from "eslint"
import eslintCommentsPlugin from "eslint-plugin-eslint-comments"
import functionalPlugin from "eslint-plugin-functional"
import importPlugin from "eslint-plugin-import"
import noBarrelFilesPlugin from "eslint-plugin-no-barrel-files"
import redundantUndefinedPlugin from "eslint-plugin-redundant-undefined"
import unicornPlugin from "eslint-plugin-unicorn"

export function eslintBase(options: {
	readonly files: ReadonlyArray<string>
	readonly tsconfig?: ReadonlyArray<string>
}): Linter.FlatConfig {
	return {
		files: [...options.files],
		languageOptions: {
			parser: typescriptParser,
			parserOptions: {
				project: options.tsconfig ?? "./tsconfig.json",
				sourceType: "module",
			},
		},
		plugins: {
			"eslint-comments": eslintCommentsPlugin,
			functional: functionalPlugin,
			import: importPlugin,
			"import-alias": importAliasPlugin,
			"no-barrel-files": noBarrelFilesPlugin,
			"redundant-undefined": redundantUndefinedPlugin,
			typescript: typescriptPlugin,
			unicorn: unicornPlugin,
		},
		/**
		 * @see https://eslint.org/docs/latest/rules eslint
		 * @see https://mysticatea.github.io/eslint-plugin-eslint-comments/rules eslint-comments
		 * @see https://github.com/eslint-functional/eslint-plugin-functional#rules functional
		 * @see https://github.com/import-js/eslint-plugin-import#rules import
		 * @see https://github.com/Limegrass/eslint-plugin-import-alias#configuration import-alias
		 * @see https://github.com/art0rz/eslint-plugin-no-barrel-files#rules no-barrel-files
		 * @see https://github.com/a-tarasyuk/eslint-plugin-redundant-undefined#usage redundant-undefined
		 * @see https://typescript-eslint.io/rules typescript
		 * @see https://github.com/sindresorhus/eslint-plugin-unicorn#rules unicorn
		 */
		rules: {
			/**
			 * @see https://eslint.org/docs/latest/rules/accessor-pairs
			 */
			"accessor-pairs": "error",

			/**
			 * Prettier supersedes this rule.
			 * @see https://eslint.org/docs/latest/rules/array-bracket-newline
			 */
			"array-bracket-newline": "off",

			/**
			 * Prettier supersedes this rule.
			 * @see https://eslint.org/docs/latest/rules/array-bracket-spacing
			 */
			"array-bracket-spacing": "off",

			/**
			 * @see https://eslint.org/docs/latest/rules/array-callback-return
			 */
			"array-callback-return": "error",

			/**
			 * Prettier supersedes this rule.
			 * @see https://eslint.org/docs/latest/rules/array-element-newline
			 */
			"array-element-newline": "off",

			/**
			 * Might conflict with Prettier. Please disable this rule if it does! 😅
			 * @see https://eslint.org/docs/latest/rules/arrow-body-style
			 */
			"arrow-body-style": ["error", "as-needed"],

			/**
			 * Prettier supersedes this rule.
			 * @see https://eslint.org/docs/latest/rules/arrow-parens
			 */
			"arrow-parens": "off",

			/**
			 * Prettier supersedes this rule.
			 * @see https://eslint.org/docs/latest/rules/arrow-spacing
			 */
			"arrow-spacing": "off",

			/**
			 * `no-var` supersedes this rule.
			 * @see https://eslint.org/docs/latest/rules/block-scoped-var
			 */
			"block-scoped-var": "off",

			/**
			 * `typescript/block-spacing` supersedes this rule.
			 * @see https://eslint.org/docs/latest/rules/block-spacing
			 */
			"block-spacing": "off",

			/**
			 * `typescript/brace-style` supersedes this rule.
			 * @see https://eslint.org/docs/latest/rules/brace-style
			 */
			"brace-style": "off",

			/**
			 * `typescript/naming-convention` supersedes this rule.
			 * @see https://eslint.org/docs/latest/rules/camelcase
			 */
			camelcase: "off",

			/**
			 * Inline comments in lowercase may specify units of measurement, e.g. `60 \* seconds *\`.
			 * This rule is also likely to discover code that has been commented out.
			 * @see https://eslint.org/docs/latest/rules/capitalized-comments
			 */
			"capitalized-comments": [
				"error",
				"always",
				{ ignoreInlineComments: true },
			],

			/**
			 * `functional/no-this-expressions` supersedes this rule.
			 * @see https://eslint.org/docs/latest/rules/class-methods-use-this
			 */
			"class-methods-use-this": "off",

			/**
			 * `typescript/comma-dangle` supersedes this rule.
			 * @see https://eslint.org/docs/latest/rules/comma-dangle
			 */
			"comma-dangle": "off",

			/**
			 * `typescript/comma-spacing` supersedes this rule.
			 * @see https://eslint.org/docs/latest/rules/comma-spacing
			 */
			"comma-spacing": "off",

			/**
			 * Prettier supersedes this rule.
			 * @see https://eslint.org/docs/latest/rules/comma-style
			 */
			"comma-style": "off",

			/**
			 * @see https://eslint.org/docs/latest/rules/complexity
			 */
			complexity: "error",

			/**
			 * Prettier supersedes this rule.
			 * @see https://eslint.org/docs/latest/rules/computed-property-spacing
			 */
			"computed-property-spacing": "off",

			/**
			 * `noImplicitReturns` in `tsconfig.json` supersedes this rule.
			 * @see https://eslint.org/docs/latest/rules/consistent-return
			 */
			"consistent-return": "off",

			/**
			 * `functional/no-this-expressions` supersedes this rule.
			 * @see https://eslint.org/docs/latest/rules/consistent-this
			 */
			"consistent-this": "off",

			/**
			 * `functional/no-classes` supersedes this rule.
			 * @see https://eslint.org/docs/latest/rules/constructor-super
			 */
			"constructor-super": "off",

			/**
			 * Might conflict with Prettier. Please disable this rule if it does! 😅
			 * @see https://eslint.org/docs/latest/rules/curly
			 */
			curly: "error",

			/**
			 * `typescript/switch-exhaustiveness-check` supersedes this rule.
			 * @see https://eslint.org/docs/latest/rules/default-case
			 */
			"default-case": "off",

			/**
			 * @see https://eslint.org/docs/latest/rules/default-case-last
			 */
			"default-case-last": "error",

			/**
			 * `typescript/default-param-last` supersedes this rule.
			 * @see https://eslint.org/docs/latest/rules/default-param-last
			 */
			"default-param-last": "off",

			/**
			 * Prettier supersedes this rule.
			 * @see https://eslint.org/docs/latest/rules/dot-location
			 */
			"dot-location": "off",

			/**
			 * `typescript/dot-notation` supersedes this rule.
			 * @see https://eslint.org/docs/latest/rules/dot-notation
			 */
			"dot-notation": "off",

			/**
			 * Prettier supersedes this rule.
			 * @see https://eslint.org/docs/latest/rules/eol-last
			 */
			"eol-last": "off",

			/**
			 * @see https://eslint.org/docs/latest/rules/eqeqeq
			 */
			eqeqeq: "error",

			/**
			 * @see https://eslint.org/docs/latest/rules/for-direction
			 */
			"for-direction": "error",

			/**
			 * `typescript/func-call-spacing` supersedes this rule.
			 * @see https://eslint.org/docs/latest/rules/func-call-spacing
			 */
			"func-call-spacing": "off",

			/**
			 * @see https://eslint.org/docs/latest/rules/func-name-matching
			 */
			"func-name-matching": "error",

			/**
			 * @see https://eslint.org/docs/latest/rules/func-names
			 */
			"func-names": "error",

			/**
			 * Function declarations are hoisted, allowing us to use the Stepdown Rule by Uncle Bob (https://dzone.com/articles/the-stepdown-rule).
			 * @see https://eslint.org/docs/latest/rules/func-style
			 */
			"func-style": ["error", "declaration", { allowArrowFunctions: true }],

			/**
			 * Prettier supersedes this rule.
			 * @see https://eslint.org/docs/latest/rules/function-call-argument-newline
			 */
			"function-call-argument-newline": "off",

			/**
			 * Prettier supersedes this rule.
			 * @see https://eslint.org/docs/latest/rules/function-paren-newline
			 */
			"function-paren-newline": "off",

			/**
			 * Prettier supersedes this rule.
			 * @see https://eslint.org/docs/latest/rules/generator-star-spacing
			 */
			"generator-star-spacing": "off",

			/**
			 * @see https://eslint.org/docs/latest/rules/getter-return
			 */
			"getter-return": "error",

			/**
			 * The `getBeforeSet` option improves consistency.
			 * @see https://eslint.org/docs/latest/rules/grouped-accessor-pairs
			 */
			"grouped-accessor-pairs": ["error", "getBeforeSet"],

			/**
			 * @see https://eslint.org/docs/latest/rules/guard-for-in
			 */
			"guard-for-in": "error",

			/**
			 * This rule has not been configured.
			 * `id-length` supersedes this rule to some extent.
			 * @see https://eslint.org/docs/latest/rules/id-denylist
			 */
			"id-denylist": "off",

			/**
			 * @see https://eslint.org/docs/latest/rules/id-length
			 */
			"id-length": "error",

			/**
			 * `typescript/naming-convention` supersedes this rule.
			 * @see https://eslint.org/docs/latest/rules/id-match
			 */
			"id-match": "off",

			/**
			 * Prettier supersedes this rule.
			 * @see https://eslint.org/docs/latest/rules/implicit-arrow-linebreak
			 */
			"implicit-arrow-linebreak": "off",

			/**
			 * `typescript/indent` supersedes this rule.
			 * @see https://eslint.org/docs/latest/rules/indent
			 */
			indent: "off",

			/**
			 * `typescript/init-declarations` supersedes this rule.
			 * @see https://eslint.org/docs/latest/rules/init-declarations
			 */
			"init-declarations": "off",

			/**
			 * Prettier supersedes this rule.
			 * @see https://eslint.org/docs/latest/rules/jsx-quotes
			 */
			"jsx-quotes": "off",

			/**
			 * `typescript/key-spacing` supersedes this rule.
			 * @see https://eslint.org/docs/latest/rules/key-spacing
			 */
			"key-spacing": "off",

			/**
			 * `typescript/keyword-spacing` supersedes this rule.
			 * @see https://eslint.org/docs/latest/rules/keyword-spacing
			 */
			"keyword-spacing": "off",

			/**
			 * Prettier supersedes this rule.
			 * @see https://eslint.org/docs/latest/rules/line-comment-position
			 */
			"line-comment-position": "off",

			/**
			 * Prettier supersedes this rule.
			 * @see https://eslint.org/docs/latest/rules/linebreak-style
			 */
			"linebreak-style": "off",

			/**
			 * `typescript/lines-around-comment` supersedes this rule.
			 * @see https://eslint.org/docs/latest/rules/lines-around-comment
			 */
			"lines-around-comment": "off",

			/**
			 * `typescript/lines-between-class-members` supersedes this rule.
			 * @see https://eslint.org/docs/latest/rules/lines-between-class-members
			 */
			"lines-between-class-members": "off",

			/**
			 * `functional/no-classes` supersedes this rule.
			 * @see https://eslint.org/docs/latest/rules/max-classes-per-file
			 */
			"max-classes-per-file": "off",

			/**
			 * @see https://eslint.org/docs/latest/rules/max-depth
			 */
			"max-depth": "error",

			/**
			 * Prettier supersedes this rule.
			 * @see https://eslint.org/docs/latest/rules/max-len
			 */
			"max-len": "off",

			/**
			 * @see https://eslint.org/docs/latest/rules/max-lines
			 */
			"max-lines": "error",

			/**
			 * @see https://eslint.org/docs/latest/rules/max-lines-per-function
			 */
			"max-lines-per-function": "error",

			/**
			 * @see https://eslint.org/docs/latest/rules/max-nested-callbacks
			 */
			"max-nested-callbacks": "error",

			/**
			 * @see https://eslint.org/docs/latest/rules/max-params
			 */
			"max-params": "error",

			/**
			 * `complexity` supersedes this rule.
			 * @see https://eslint.org/docs/latest/rules/max-statements
			 */
			"max-statements": "off",

			/**
			 * Prettier supersedes this rule.
			 * @see https://eslint.org/docs/latest/rules/max-statements-per-line
			 */
			"max-statements-per-line": "off",

			/**
			 * Line comments can be nested, involve fewer lines of code than starred block comments, and are easier to edit with multiline cursors.
			 * @see https://eslint.org/docs/latest/rules/multiline-comment-style
			 */
			"multiline-comment-style": ["error", "separate-lines"],

			/**
			 * Prettier supersedes this rule.
			 * @see https://eslint.org/docs/latest/rules/multiline-ternary
			 */
			"multiline-ternary": "off",

			/**
			 * @see https://eslint.org/docs/latest/rules/new-cap
			 */
			"new-cap": "error",

			/**
			 * Prettier supersedes this rule.
			 * @see https://eslint.org/docs/latest/rules/new-parens
			 */
			"new-parens": "off",

			/**
			 * Prettier supersedes this rule.
			 * @see https://eslint.org/docs/latest/rules/newline-per-chained-call
			 */
			"newline-per-chained-call": "off",

			/**
			 * @see https://eslint.org/docs/latest/rules/no-alert
			 */
			"no-alert": "error",

			/**
			 * `typescript/no-array-constructor` supersedes this rule.
			 * @see https://eslint.org/docs/latest/rules/no-array-constructor
			 */
			"no-array-constructor": "off",

			/**
			 * @see https://eslint.org/docs/latest/rules/no-async-promise-executor
			 */
			"no-async-promise-executor": "error",

			/**
			 * @see https://eslint.org/docs/latest/rules/no-await-in-loop
			 */
			"no-await-in-loop": "error",

			/**
			 * @see https://eslint.org/docs/latest/rules/no-bitwise
			 */
			"no-bitwise": "error",

			/**
			 * @see https://eslint.org/docs/latest/rules/no-caller
			 */
			"no-caller": "error",

			/**
			 * @see https://eslint.org/docs/latest/rules/no-case-declarations
			 */
			"no-case-declarations": "error",

			/**
			 * `functional/no-classes` supersedes this rule.
			 * @see https://eslint.org/docs/latest/rules/no-class-assign
			 */
			"no-class-assign": "off",

			/**
			 * @see https://eslint.org/docs/latest/rules/no-compare-neg-zero
			 */
			"no-compare-neg-zero": "error",

			/**
			 * Assignments in conditions make the code harder to read.
			 * @see https://eslint.org/docs/latest/rules/no-cond-assign
			 */
			"no-cond-assign": ["error", "always"],

			/**
			 * Prettier supersedes this rule.
			 * @see https://eslint.org/docs/latest/rules/no-confusing-arrow
			 */
			"no-confusing-arrow": "off",

			/**
			 * @see https://eslint.org/docs/latest/rules/no-console
			 */
			"no-console": "error",

			/**
			 * TypeScript supersedes this rule.
			 * @see https://eslint.org/docs/latest/rules/no-const-assign
			 */
			"no-const-assign": "off",

			/**
			 * @see https://eslint.org/docs/latest/rules/no-constant-binary-expression
			 */
			"no-constant-binary-expression": "error",

			/**
			 * @see https://eslint.org/docs/latest/rules/no-constant-condition
			 */
			"no-constant-condition": "error",

			/**
			 * `functional/no-classes` supersedes this rule.
			 * @see https://eslint.org/docs/latest/rules/no-constructor-return
			 */
			"no-constructor-return": "off",

			/**
			 * @see https://eslint.org/docs/latest/rules/no-continue
			 */
			"no-continue": "error",

			/**
			 * @see https://eslint.org/docs/latest/rules/no-control-regex
			 */
			"no-control-regex": "error",

			/**
			 * @see https://eslint.org/docs/latest/rules/no-debugger
			 */
			"no-debugger": "error",

			/**
			 * @see https://eslint.org/docs/latest/rules/no-delete-var
			 */
			"no-delete-var": "error",

			/**
			 * @see https://eslint.org/docs/latest/rules/no-div-regex
			 */
			"no-div-regex": "error",

			/**
			 * @see https://eslint.org/docs/latest/rules/no-dupe-args
			 */
			"no-dupe-args": "error",

			/**
			 * `typescript/no-dupe-class-members` supersedes this rule.
			 * @see https://eslint.org/docs/latest/rules/no-dupe-class-members
			 */
			"no-dupe-class-members": "off",

			/**
			 * @see https://eslint.org/docs/latest/rules/no-dupe-else-if
			 */
			"no-dupe-else-if": "error",

			/**
			 * @see https://eslint.org/docs/latest/rules/no-dupe-keys
			 */
			"no-dupe-keys": "error",

			/**
			 * @see https://eslint.org/docs/latest/rules/no-duplicate-case
			 */
			"no-duplicate-case": "error",

			/**
			 * `prettier-plugin-organize-imports` supersedes this rule.
			 * @see https://eslint.org/docs/latest/rules/no-duplicate-imports
			 */
			"no-duplicate-imports": "off",

			/**
			 * `else` is an unnecessary keyword.
			 * @see https://eslint.org/docs/latest/rules/no-else-return
			 */
			"no-else-return": ["error", { allowElseIf: false }],

			/**
			 * @see https://eslint.org/docs/latest/rules/no-empty
			 */
			"no-empty": "error",

			/**
			 * @see https://eslint.org/docs/latest/rules/no-empty-character-class
			 */
			"no-empty-character-class": "error",

			/**
			 * `typescript/no-empty-function` supersedes this rule.
			 * @see https://eslint.org/docs/latest/rules/no-empty-function
			 */
			"no-empty-function": "off",

			/**
			 * @see https://eslint.org/docs/latest/rules/no-empty-pattern
			 */
			"no-empty-pattern": "error",

			/**
			 * `functional/no-classes` supersedes this rule.
			 * @see https://eslint.org/docs/latest/rules/no-empty-static-block
			 */
			"no-empty-static-block": "off",

			/**
			 * `eqeqeq` supersedes this rule.
			 * @see https://eslint.org/docs/latest/rules/no-eq-null
			 */
			"no-eq-null": "off",

			/**
			 * @see https://eslint.org/docs/latest/rules/no-eval
			 */
			"no-eval": "error",

			/**
			 * @see https://eslint.org/docs/latest/rules/no-ex-assign
			 */
			"no-ex-assign": "error",

			/**
			 * @see https://eslint.org/docs/latest/rules/no-extend-native
			 */
			"no-extend-native": "error",

			/**
			 * @see https://eslint.org/docs/latest/rules/no-extra-bind
			 */
			"no-extra-bind": "error",

			/**
			 * @see https://eslint.org/docs/latest/rules/no-extra-boolean-cast
			 */
			"no-extra-boolean-cast": "error",

			/**
			 * `no-labels` supersedes this rule.
			 * @see https://eslint.org/docs/latest/rules/no-extra-label
			 */
			"no-extra-label": "off",

			/**
			 * `typescript/no-extra-parens` supersedes this rule.
			 * @see https://eslint.org/docs/latest/rules/no-extra-parens
			 */
			"no-extra-parens": "off",

			/**
			 * `typescript/no-extra-semi` supersedes this rule.
			 * @see https://eslint.org/docs/latest/rules/no-extra-semi
			 */
			"no-extra-semi": "off",

			/**
			 * @see https://eslint.org/docs/latest/rules/no-fallthrough
			 */
			"no-fallthrough": "error",

			/**
			 * Prettier supersedes this rule.
			 * @see https://eslint.org/docs/latest/rules/no-floating-decimal
			 */
			"no-floating-decimal": "off",

			/**
			 * @see https://eslint.org/docs/latest/rules/no-func-assign
			 */
			"no-func-assign": "error",

			/**
			 * @see https://eslint.org/docs/latest/rules/no-global-assign
			 */
			"no-global-assign": "error",

			/**
			 * @see https://eslint.org/docs/latest/rules/no-implicit-coercion
			 */
			"no-implicit-coercion": "error",

			/**
			 * @see https://eslint.org/docs/latest/rules/no-implicit-globals
			 */
			"no-implicit-globals": "error",

			/**
			 * `typescript/no-implied-eval` supersedes this rule.
			 * @see https://eslint.org/docs/latest/rules/no-implied-eval
			 */
			"no-implied-eval": "off",

			/**
			 * @see https://eslint.org/docs/latest/rules/no-import-assign
			 */
			"no-import-assign": "error",

			/**
			 * Prettier supersedes this rule.
			 * @see https://eslint.org/docs/latest/rules/no-inline-comments
			 */
			"no-inline-comments": "off",

			/**
			 * @see https://eslint.org/docs/latest/rules/no-inner-declarations
			 */
			"no-inner-declarations": "error",

			/**
			 * @see https://eslint.org/docs/latest/rules/no-invalid-regexp
			 */
			"no-invalid-regexp": "error",

			/**
			 * `typescript/no-invalid-this` supersedes this rule.
			 * @see https://eslint.org/docs/latest/rules/no-invalid-this
			 */
			"no-invalid-this": "off",

			/**
			 * Irregular whitespace characters must not appear anywhere, as they are very difficult to spot.
			 * @see https://eslint.org/docs/latest/rules/no-irregular-whitespace
			 */
			"no-irregular-whitespace": [
				"error",
				{
					skipComments: false,
					skipJSXText: false,
					skipRegExps: false,
					skipStrings: false,
					skipTemplates: false,
				},
			],

			/**
			 * @see https://eslint.org/docs/latest/rules/no-iterator
			 */
			"no-iterator": "error",

			/**
			 * `no-labels` supersedes this rule.
			 * @see https://eslint.org/docs/latest/rules/no-label-var
			 */
			"no-label-var": "off",

			/**
			 * @see https://eslint.org/docs/latest/rules/no-labels
			 */
			"no-labels": "error",

			/**
			 * @see https://eslint.org/docs/latest/rules/no-lone-blocks
			 */
			"no-lone-blocks": "error",

			/**
			 * @see https://eslint.org/docs/latest/rules/no-lonely-if
			 */
			"no-lonely-if": "error",

			/**
			 * `typescript/no-loop-func` supersedes this rule.
			 * @see https://eslint.org/docs/latest/rules/no-loop-func
			 */
			"no-loop-func": "off",

			/**
			 * `typescript/no-loss-of-precision` supersedes this rule.
			 * @see https://eslint.org/docs/latest/rules/no-loss-of-precision
			 */
			"no-loss-of-precision": "off",

			/**
			 * `typescript/no-magic-numbers` supersedes this rule.
			 * @see https://eslint.org/docs/latest/rules/no-magic-numbers
			 */
			"no-magic-numbers": "off",

			/**
			 * @see https://eslint.org/docs/latest/rules/no-misleading-character-class
			 */
			"no-misleading-character-class": "error",

			/**
			 * Prettier supersedes this rule.
			 * @see https://eslint.org/docs/latest/rules/no-mixed-operators
			 */
			"no-mixed-operators": "off",

			/**
			 * Prettier supersedes this rule.
			 * @see https://eslint.org/docs/latest/rules/no-mixed-spaces-and-tabs
			 */
			"no-mixed-spaces-and-tabs": "off",

			/**
			 * @see https://eslint.org/docs/latest/rules/no-multi-assign
			 */
			"no-multi-assign": "error",

			/**
			 * Prettier supersedes this rule.
			 * @see https://eslint.org/docs/latest/rules/no-multi-spaces
			 */
			"no-multi-spaces": "off",

			/**
			 * @see https://eslint.org/docs/latest/rules/no-multi-str
			 */
			"no-multi-str": "error",

			/**
			 * Prettier supersedes this rule.
			 * @see https://eslint.org/docs/latest/rules/no-multiple-empty-lines
			 */
			"no-multiple-empty-lines": "off",

			/**
			 * `unicorn/no-negated-condition` supersedes this rule.
			 * @see https://eslint.org/docs/latest/rules/no-negated-condition
			 */
			"no-negated-condition": "off",

			/**
			 * `unicorn/no-nested-ternary` supersedes this rule.
			 * @see https://eslint.org/docs/latest/rules/no-nested-ternary
			 */
			"no-nested-ternary": "off",

			/**
			 * @see https://eslint.org/docs/latest/rules/no-new
			 */
			"no-new": "error",

			/**
			 * @see https://eslint.org/docs/latest/rules/no-new-func
			 */
			"no-new-func": "error",

			/**
			 * `unicorn/new-for-builtins` supersedes this rule.
			 * @see https://eslint.org/docs/latest/rules/no-new-native-nonconstructor
			 */
			"no-new-native-nonconstructor": "off",

			/**
			 * `unicorn/new-for-builtins` supersedes this rule.
			 * @see https://eslint.org/docs/latest/rules/no-new-symbol
			 */
			"no-new-symbol": "off",

			/**
			 * @see https://eslint.org/docs/latest/rules/no-new-wrappers
			 */
			"no-new-wrappers": "error",

			/**
			 * @see https://eslint.org/docs/latest/rules/no-nonoctal-decimal-escape
			 */
			"no-nonoctal-decimal-escape": "error",

			/**
			 * @see https://eslint.org/docs/latest/rules/no-obj-calls
			 */
			"no-obj-calls": "error",

			/**
			 * @see https://eslint.org/docs/latest/rules/no-object-constructor
			 */
			"no-object-constructor": "error",

			/**
			 * @see https://eslint.org/docs/latest/rules/no-octal
			 */
			"no-octal": "error",

			/**
			 * @see https://eslint.org/docs/latest/rules/no-octal-escape
			 */
			"no-octal-escape": "error",

			/**
			 * @see https://eslint.org/docs/latest/rules/no-param-reassign
			 */
			"no-param-reassign": "error",

			/**
			 * @see https://eslint.org/docs/latest/rules/no-plusplus
			 */
			"no-plusplus": "error",

			/**
			 * @see https://eslint.org/docs/latest/rules/no-promise-executor-return
			 */
			"no-promise-executor-return": "error",

			/**
			 * @see https://eslint.org/docs/latest/rules/no-proto
			 */
			"no-proto": "error",

			/**
			 * @see https://eslint.org/docs/latest/rules/no-prototype-builtins
			 */
			"no-prototype-builtins": "error",

			/**
			 * `typescript/no-redeclare` supersedes this rule.
			 * @see https://eslint.org/docs/latest/rules/no-redeclare
			 */
			"no-redeclare": "off",

			/**
			 * @see https://eslint.org/docs/latest/rules/no-regex-spaces
			 */
			"no-regex-spaces": "error",

			/**
			 * This rule has not been configured.
			 * @see https://eslint.org/docs/latest/rules/no-restricted-exports
			 */
			"no-restricted-exports": "off",

			/**
			 * This rule has not been configured.
			 * @see https://eslint.org/docs/latest/rules/no-restricted-globals
			 */
			"no-restricted-globals": "off",

			/**
			 * `typescript/no-restricted-imports` supersedes this rule.
			 * @see https://eslint.org/docs/latest/rules/no-restricted-imports
			 */
			"no-restricted-imports": "off",

			/**
			 * This rule has not been configured.
			 * @see https://eslint.org/docs/latest/rules/no-restricted-properties
			 */
			"no-restricted-properties": "off",

			/**
			 * @see https://eslint.org/docs/latest/rules/no-restricted-syntax
			 */
			"no-restricted-syntax": [
				"error",
				{
					selector: "TSEnumDeclaration",
					message: "Prefer string literal types over enums",
				},
			],

			/**
			 * @see https://eslint.org/docs/latest/rules/no-return-assign
			 */
			"no-return-assign": "error",

			/**
			 * @see https://eslint.org/docs/latest/rules/no-return-await
			 */
			"no-return-await": "error",

			/**
			 * @see https://eslint.org/docs/latest/rules/no-script-url
			 */
			"no-script-url": "error",

			/**
			 * @see https://eslint.org/docs/latest/rules/no-self-assign
			 */
			"no-self-assign": "error",

			/**
			 * @see https://eslint.org/docs/latest/rules/no-self-compare
			 */
			"no-self-compare": "error",

			/**
			 * @see https://eslint.org/docs/latest/rules/no-sequences
			 */
			"no-sequences": "error",

			/**
			 * @see https://eslint.org/docs/latest/rules/no-setter-return
			 */
			"no-setter-return": "error",

			/**
			 * `typescript/no-shadow` supersedes this rule.
			 * @see https://eslint.org/docs/latest/rules/no-shadow
			 */
			"no-shadow": "off",

			/**
			 * @see https://eslint.org/docs/latest/rules/no-shadow-restricted-names
			 */
			"no-shadow-restricted-names": "error",

			/**
			 * @see https://eslint.org/docs/latest/rules/no-sparse-arrays
			 */
			"no-sparse-arrays": "error",

			/**
			 * Prettier supersedes this rule.
			 * @see https://eslint.org/docs/latest/rules/no-tabs
			 */
			"no-tabs": "off",

			/**
			 * @see https://eslint.org/docs/latest/rules/no-template-curly-in-string
			 */
			"no-template-curly-in-string": "error",

			/**
			 * The ternary operator is the simplest way to construct a conditional expression in JavaScript. An IIFE-based approach requires lots of boilerplate code.
			 * @see https://eslint.org/docs/latest/rules/no-ternary
			 */
			"no-ternary": "off",

			/**
			 * `functional/no-classes` supersedes this rule.
			 * @see https://eslint.org/docs/latest/rules/no-this-before-super
			 */
			"no-this-before-super": "off",

			/**
			 * `typescript/no-throw-literal` supersedes this rule.
			 * @see https://eslint.org/docs/latest/rules/no-throw-literal
			 */
			"no-throw-literal": "off",

			/**
			 * Prettier supersedes this rule.
			 * @see https://eslint.org/docs/latest/rules/no-trailing-spaces
			 */
			"no-trailing-spaces": "off",

			/**
			 * @see https://eslint.org/docs/latest/rules/no-undef
			 */
			"no-undef": "error",

			/**
			 * `init-declarations` supersedes this rule.
			 * @see https://eslint.org/docs/latest/rules/no-undef-init
			 */
			"no-undef-init": "off",

			/**
			 * `no-global-assign` and `no-shadow-restricted-names` supersede this rule.
			 * @see https://eslint.org/docs/latest/rules/no-undefined
			 */
			"no-undefined": "off",

			/**
			 * `typescript/naming-convention` supersedes this rule.
			 * @see https://eslint.org/docs/latest/rules/no-underscore-dangle
			 */
			"no-underscore-dangle": "off",

			/**
			 * @see https://eslint.org/docs/latest/rules/no-unexpected-multiline
			 */
			"no-unexpected-multiline": "error",

			/**
			 * @see https://eslint.org/docs/latest/rules/no-unmodified-loop-condition
			 */
			"no-unmodified-loop-condition": "error",

			/**
			 * @see https://eslint.org/docs/latest/rules/no-unneeded-ternary
			 */
			"no-unneeded-ternary": "error",

			/**
			 * @see https://eslint.org/docs/latest/rules/no-unreachable
			 */
			"no-unreachable": "error",

			/**
			 * @see https://eslint.org/docs/latest/rules/no-unreachable-loop
			 */
			"no-unreachable-loop": "error",

			/**
			 * @see https://eslint.org/docs/latest/rules/no-unsafe-finally
			 */
			"no-unsafe-finally": "error",

			/**
			 * @see https://eslint.org/docs/latest/rules/no-unsafe-negation
			 */
			"no-unsafe-negation": "error",

			/**
			 * @see https://eslint.org/docs/latest/rules/no-unsafe-optional-chaining
			 */
			"no-unsafe-optional-chaining": "error",

			/**
			 * `typescript/no-unused-expressions` supersedes this rule.
			 * @see https://eslint.org/docs/latest/rules/no-unused-expressions
			 */
			"no-unused-expressions": "off",

			/**
			 * `no-labels` supersedes this rule.
			 * @see https://eslint.org/docs/latest/rules/no-unused-labels
			 */
			"no-unused-labels": "off",

			/**
			 * `functional/no-classes` supersedes this rule.
			 * @see https://eslint.org/docs/latest/rules/no-unused-private-class-members
			 */
			"no-unused-private-class-members": "off",

			/**
			 * `typescript/no-unused-vars` supersedes this rule.
			 * @see https://eslint.org/docs/latest/rules/no-unused-vars
			 */
			"no-unused-vars": "off",

			/**
			 * `typescript/no-use-before-define` supersedes this rule.
			 * @see https://eslint.org/docs/latest/rules/no-use-before-define
			 */
			"no-use-before-define": "off",

			/**
			 * @see https://eslint.org/docs/latest/rules/no-useless-backreference
			 */
			"no-useless-backreference": "error",

			/**
			 * @see https://eslint.org/docs/latest/rules/no-useless-call
			 */
			"no-useless-call": "error",

			/**
			 * @see https://eslint.org/docs/latest/rules/no-useless-catch
			 */
			"no-useless-catch": "error",

			/**
			 * @see https://eslint.org/docs/latest/rules/no-useless-computed-key
			 */
			"no-useless-computed-key": "error",

			/**
			 * @see https://eslint.org/docs/latest/rules/no-useless-concat
			 */
			"no-useless-concat": "error",

			/**
			 * `typescript/no-useless-constructor` supersedes this rule.
			 * @see https://eslint.org/docs/latest/rules/no-useless-constructor
			 */
			"no-useless-constructor": "off",

			/**
			 * @see https://eslint.org/docs/latest/rules/no-useless-escape
			 */
			"no-useless-escape": "error",

			/**
			 * @see https://eslint.org/docs/latest/rules/no-useless-rename
			 */
			"no-useless-rename": "error",

			/**
			 * @see https://eslint.org/docs/latest/rules/no-useless-return
			 */
			"no-useless-return": "error",

			/**
			 * @see https://eslint.org/docs/latest/rules/no-var
			 */
			"no-var": "error",

			/**
			 * @see https://eslint.org/docs/latest/rules/no-void
			 */
			"no-void": "error",

			/**
			 * `unicorn/expiring-todo-comments` supersedes this rule.
			 * @see https://eslint.org/docs/latest/rules/no-warning-comments
			 */
			"no-warning-comments": "off",

			/**
			 * Prettier supersedes this rule.
			 * @see https://eslint.org/docs/latest/rules/no-whitespace-before-property
			 */
			"no-whitespace-before-property": "off",

			/**
			 * @see https://eslint.org/docs/latest/rules/no-with
			 */
			"no-with": "error",

			/**
			 * Prettier supersedes this rule.
			 * @see https://eslint.org/docs/latest/rules/nonblock-statement-body-position
			 */
			"nonblock-statement-body-position": "off",

			/**
			 * Prettier supersedes this rule.
			 * @see https://eslint.org/docs/latest/rules/object-curly-newline
			 */
			"object-curly-newline": "off",

			/**
			 * `typescript/object-curly-spacing` supersedes this rule.
			 * @see https://eslint.org/docs/latest/rules/object-curly-spacing
			 */
			"object-curly-spacing": "off",

			/**
			 * Prettier supersedes this rule.
			 * @see https://eslint.org/docs/latest/rules/object-property-newline
			 */
			"object-property-newline": "off",

			/**
			 * @see https://eslint.org/docs/latest/rules/object-shorthand
			 */
			"object-shorthand": "error",

			/**
			 * Local variable declarations are easier to rearrange when they are separated and self-contained.
			 * @see https://eslint.org/docs/latest/rules/one-var
			 */
			"one-var": ["error", "never"],

			/**
			 * Prettier supersedes this rule.
			 * @see https://eslint.org/docs/latest/rules/one-var-declaration-per-line
			 */
			"one-var-declaration-per-line": "off",

			/**
			 * @see https://eslint.org/docs/latest/rules/operator-assignment
			 */
			"operator-assignment": "error",

			/**
			 * Prettier supersedes this rule.
			 * @see https://eslint.org/docs/latest/rules/operator-linebreak
			 */
			"operator-linebreak": "off",

			/**
			 * Prettier supersedes this rule.
			 * @see https://eslint.org/docs/latest/rules/padded-blocks
			 */
			"padded-blocks": "off",

			/**
			 * `typescript/padding-line-between-statements` supersedes this rule.
			 * @see https://eslint.org/docs/latest/rules/padding-line-between-statements
			 */
			"padding-line-between-statements": "off",

			/**
			 * Might conflict with Prettier. Please disable this rule if it does! 😅
			 * @see https://eslint.org/docs/latest/rules/prefer-arrow-callback
			 */
			"prefer-arrow-callback": "error",

			/**
			 * @see https://eslint.org/docs/latest/rules/prefer-const
			 */
			"prefer-const": "error",

			/**
			 * Whether one approach or the other is preferable depends on the particular case.
			 * @see https://eslint.org/docs/latest/rules/prefer-destructuring
			 */
			"prefer-destructuring": "off",

			/**
			 * @see https://eslint.org/docs/latest/rules/prefer-exponentiation-operator
			 */
			"prefer-exponentiation-operator": "error",

			/**
			 * @see https://eslint.org/docs/latest/rules/prefer-named-capture-group
			 */
			"prefer-named-capture-group": "error",

			/**
			 * @see https://eslint.org/docs/latest/rules/prefer-numeric-literals
			 */
			"prefer-numeric-literals": "error",

			/**
			 * `Object.hasOwn()` requires a polyfill for Safari < 15.4.
			 * @see https://eslint.org/docs/latest/rules/prefer-object-has-own
			 */
			"prefer-object-has-own": "off",

			/**
			 * @see https://eslint.org/docs/latest/rules/prefer-object-spread
			 */
			"prefer-object-spread": "error",

			/**
			 * @see https://eslint.org/docs/latest/rules/prefer-promise-reject-errors
			 */
			"prefer-promise-reject-errors": "error",

			/**
			 * @see https://eslint.org/docs/latest/rules/prefer-regex-literals
			 */
			"prefer-regex-literals": "error",

			/**
			 * @see https://eslint.org/docs/latest/rules/prefer-rest-params
			 */
			"prefer-rest-params": "error",

			/**
			 * @see https://eslint.org/docs/latest/rules/prefer-spread
			 */
			"prefer-spread": "error",

			/**
			 * @see https://eslint.org/docs/latest/rules/prefer-template
			 */
			"prefer-template": "error",

			/**
			 * Prettier supersedes this rule.
			 * @see https://eslint.org/docs/latest/rules/quote-props
			 */
			"quote-props": "off",

			/**
			 * `typescript/quotes` supersedes this rule.
			 * @see https://eslint.org/docs/latest/rules/quotes
			 */
			quotes: "off",

			/**
			 * The `10` radix is unnecessary in ES2015+ environments.
			 * @see https://eslint.org/docs/latest/rules/radix
			 */
			radix: ["error", "as-needed"],

			/**
			 * @see https://eslint.org/docs/latest/rules/require-atomic-updates
			 */
			"require-atomic-updates": "error",

			/**
			 * `typescript/require-await` supersedes this rule.
			 * @see https://eslint.org/docs/latest/rules/require-await
			 */
			"require-await": "off",

			/**
			 * @see https://eslint.org/docs/latest/rules/require-unicode-regexp
			 */
			"require-unicode-regexp": "error",

			/**
			 * @see https://eslint.org/docs/latest/rules/require-yield
			 */
			"require-yield": "error",

			/**
			 * Prettier supersedes this rule.
			 * @see https://eslint.org/docs/latest/rules/rest-spread-spacing
			 */
			"rest-spread-spacing": "off",

			/**
			 * `typescript/semi` supersedes this rule.
			 * @see https://eslint.org/docs/latest/rules/semi
			 */
			semi: "off",

			/**
			 * Prettier supersedes this rule.
			 * @see https://eslint.org/docs/latest/rules/semi-spacing
			 */
			"semi-spacing": "off",

			/**
			 * Prettier supersedes this rule.
			 * @see https://eslint.org/docs/latest/rules/semi-style
			 */
			"semi-style": "off",

			/**
			 * `prettier-plugin-organize-imports` supersedes this rule.
			 * @see https://eslint.org/docs/latest/rules/sort-imports
			 */
			"sort-imports": "off",

			/**
			 * Altering the evaluation order of keys may change program semantics. Besides, why would you want `end` to appear before `start`? 😛
			 * @see https://eslint.org/docs/latest/rules/sort-keys
			 */
			"sort-keys": "off",

			/**
			 * `one-var` supersedes this rule.
			 * @see https://eslint.org/docs/latest/rules/sort-vars
			 */
			"sort-vars": "off",

			/**
			 * `typescript/space-before-blocks` supersedes this rule.
			 * @see https://eslint.org/docs/latest/rules/space-before-blocks
			 */
			"space-before-blocks": "off",

			/**
			 * `typescript/space-before-function-paren` supersedes this rule.
			 * @see https://eslint.org/docs/latest/rules/space-before-function-paren
			 */
			"space-before-function-paren": "off",

			/**
			 * Prettier supersedes this rule.
			 * @see https://eslint.org/docs/latest/rules/space-in-parens
			 */
			"space-in-parens": "off",

			/**
			 * `typescript/space-infix-ops` supersedes this rule.
			 * @see https://eslint.org/docs/latest/rules/space-infix-ops
			 */
			"space-infix-ops": "off",

			/**
			 * Prettier supersedes this rule.
			 * @see https://eslint.org/docs/latest/rules/space-unary-ops
			 */
			"space-unary-ops": "off",

			/**
			 * @see https://eslint.org/docs/latest/rules/spaced-comment
			 */
			"spaced-comment": "error",

			/**
			 * @see https://eslint.org/docs/latest/rules/strict
			 */
			strict: "error",

			/**
			 * Prettier supersedes this rule.
			 * @see https://eslint.org/docs/latest/rules/switch-colon-spacing
			 */
			"switch-colon-spacing": "off",

			/**
			 * @see https://eslint.org/docs/latest/rules/symbol-description
			 */
			"symbol-description": "error",

			/**
			 * Prettier supersedes this rule.
			 * @see https://eslint.org/docs/latest/rules/template-curly-spacing
			 */
			"template-curly-spacing": "off",

			/**
			 * Prettier supersedes this rule.
			 * @see https://eslint.org/docs/latest/rules/template-tag-spacing
			 */
			"template-tag-spacing": "off",

			/**
			 * Prettier supersedes this rule.
			 * @see https://eslint.org/docs/latest/rules/unicode-bom
			 */
			"unicode-bom": "off",

			/**
			 * @see https://eslint.org/docs/latest/rules/use-isnan
			 */
			"use-isnan": "error",

			/**
			 * @see https://eslint.org/docs/latest/rules/valid-typeof
			 */
			"valid-typeof": "error",

			/**
			 * `no-var` supersedes this rule.
			 * @see https://eslint.org/docs/latest/rules/vars-on-top
			 */
			"vars-on-top": "off",

			/**
			 * Prettier supersedes this rule.
			 * @see https://eslint.org/docs/latest/rules/wrap-iife
			 */
			"wrap-iife": "off",

			/**
			 * Prettier supersedes this rule.
			 * @see https://eslint.org/docs/latest/rules/wrap-regex
			 */
			"wrap-regex": "off",

			/**
			 * Prettier supersedes this rule.
			 * @see https://eslint.org/docs/latest/rules/yield-star-spacing
			 */
			"yield-star-spacing": "off",

			/**
			 * @see https://eslint.org/docs/latest/rules/yoda
			 */
			yoda: "error",

			/**
			 * @see https://mysticatea.github.io/eslint-plugin-eslint-comments/rules/disable-enable-pair
			 */
			"eslint-comments/disable-enable-pair": "error",

			/**
			 * @see https://mysticatea.github.io/eslint-plugin-eslint-comments/rules/no-aggregating-enable
			 */
			"eslint-comments/no-aggregating-enable": "error",

			/**
			 * @see https://mysticatea.github.io/eslint-plugin-eslint-comments/rules/no-duplicate-disable
			 */
			"eslint-comments/no-duplicate-disable": "error",

			/**
			 * `eslint-comments/no-unlimited-disable` supersedes this rule.
			 * @see https://mysticatea.github.io/eslint-plugin-eslint-comments/rules/no-restricted-disable
			 */
			"eslint-comments/no-restricted-disable": "off",

			/**
			 * @see https://mysticatea.github.io/eslint-plugin-eslint-comments/rules/no-unlimited-disable
			 */
			"eslint-comments/no-unlimited-disable": "error",

			/**
			 * @see https://mysticatea.github.io/eslint-plugin-eslint-comments/rules/no-unused-disable
			 */
			"eslint-comments/no-unused-disable": "error",

			/**
			 * @see https://mysticatea.github.io/eslint-plugin-eslint-comments/rules/no-unused-enable
			 */
			"eslint-comments/no-unused-enable": "error",

			/**
			 * The other rules in `eslint-plugin-eslint-comments` supersede this rule.
			 * @see https://mysticatea.github.io/eslint-plugin-eslint-comments/rules/no-use
			 */
			"eslint-comments/no-use": "off",

			/**
			 * It requires an explanation only when you disable a rule.
			 * @see https://mysticatea.github.io/eslint-plugin-eslint-comments/rules/require-description
			 */
			"eslint-comments/require-description": [
				"error",
				{ ignore: ["eslint-enable"] },
			],

			/**
			 * Functions without parameters may still be pure.
			 * @see https://github.com/eslint-functional/eslint-plugin-functional/blob/main/docs/rules/functional-parameters.md
			 */
			"functional/functional-parameters": [
				"error",
				{ enforceParameterCount: false },
			],

			/**
			 * @see https://github.com/eslint-functional/eslint-plugin-functional/blob/main/docs/rules/immutable-data.md
			 */
			"functional/immutable-data": "error",

			/**
			 * @see https://github.com/eslint-functional/eslint-plugin-functional/blob/main/docs/rules/no-classes.md
			 */
			"functional/no-classes": "error",

			/**
			 * Side effects are sometimes inevitable when interoperating with third-party libraries and APIs.
			 * @see https://github.com/eslint-functional/eslint-plugin-functional/blob/main/docs/rules/no-conditional-statements.md
			 */
			"functional/no-conditional-statements": "off",

			/**
			 * Side effects are sometimes inevitable when interoperating with third-party libraries and APIs.
			 * @see https://github.com/eslint-functional/eslint-plugin-functional/blob/main/docs/rules/no-expression-statements.md
			 */
			"functional/no-expression-statements": "off",

			/**
			 * @see https://github.com/eslint-functional/eslint-plugin-functional/blob/main/docs/rules/no-let.md
			 */
			"functional/no-let": "error",

			/**
			 * Side effects are sometimes inevitable when interoperating with third-party libraries and APIs.
			 * @see https://github.com/eslint-functional/eslint-plugin-functional/blob/main/docs/rules/no-loop-statements.md
			 */
			"functional/no-loop-statements": "off",

			/**
			 * @see https://github.com/eslint-functional/eslint-plugin-functional/blob/main/docs/rules/no-mixed-types.md
			 */
			"functional/no-mixed-types": "error",

			/**
			 * @see https://github.com/eslint-functional/eslint-plugin-functional/blob/main/docs/rules/no-promise-reject.md
			 */
			"functional/no-promise-reject": "error",

			/**
			 * Functions without return values are sometimes inevitable when interoperating with third-party libraries and APIs.
			 * @see https://github.com/eslint-functional/eslint-plugin-functional/blob/main/docs/rules/no-return-void.md
			 */
			"functional/no-return-void": "off",

			/**
			 * @see https://github.com/eslint-functional/eslint-plugin-functional/blob/main/docs/rules/no-this-expressions.md
			 */
			"functional/no-this-expressions": "error",

			/**
			 * Exceptions are useful to indicate truly illegal program states that occur from programming errors.
			 * @see https://github.com/eslint-functional/eslint-plugin-functional/blob/main/docs/rules/no-throw-statements.md
			 */
			"functional/no-throw-statement": "off",

			/**
			 * Exception handling is sometimes inevitable when interoperating with third-party libraries and APIs.
			 * @see https://github.com/eslint-functional/eslint-plugin-functional/blob/main/docs/rules/no-try-statements.md
			 */
			"functional/no-try-statement": "off",

			/**
			 * For now, this rule is disabled in favour of the deprecated `functional/prefer-readonly-type` which provides better feedback.
			 * @see https://github.com/eslint-functional/eslint-plugin-functional/blob/main/docs/rules/prefer-immutable-types.md
			 */
			"functional/prefer-immutable-types": "off",

			/**
			 * @see https://github.com/eslint-functional/eslint-plugin-functional/blob/main/docs/rules/prefer-property-signatures.md
			 */
			"functional/prefer-property-signatures": "error",

			/**
			 * For now, this rule provides better feedback than its newer counterparts `functional/prefer-immutable-types` and `functional/type-declaration-immutability`.
			 * @see https://github.com/eslint-functional/eslint-plugin-functional/blob/main/docs/rules/prefer-readonly-type.md
			 */
			"functional/prefer-readonly-type": "error",

			/**
			 * @see https://github.com/eslint-functional/eslint-plugin-functional/blob/main/docs/rules/prefer-tacit.md
			 */
			"functional/prefer-tacit": "error",

			/**
			 * The generic form, `Readonly<T>`, causes IntelliSense to display expanded types instead of type aliases. Expanded types are usually more difficult to comprehend.
			 * @see https://github.com/eslint-functional/eslint-plugin-functional/blob/main/docs/rules/readonly-type.md
			 */
			"functional/readonly-type": ["error", "keyword"],

			/**
			 * This rule raises false positives on union types.
			 * See also: https://github.com/eslint-functional/eslint-plugin-functional/issues/529.
			 *
			 * For now, this rule is disabled in favour of the deprecated `functional/prefer-readonly-type` which provides better feedback.
			 *
			 * @see https://github.com/eslint-functional/eslint-plugin-functional/blob/main/docs/rules/type-declaration-immutability.md
			 */
			"functional/type-declaration-immutability": "off",

			/**
			 * Inline type modifiers are less verbose than separate type import statements.
			 * @see https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/consistent-type-specifier-style.md
			 */
			"import/consistent-type-specifier-style": ["error", "prefer-inline"],

			/**
			 * TypeScript supersedes this rule.
			 * @see https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/default.md
			 */
			"import/default": "off",

			/**
			 * This rule does not work in non-webpack projects.
			 * @see https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/dynamic-import-chunkname.md
			 */
			"import/dynamic-import-chunkname": "off",

			/**
			 * TypeScript supersedes this rule.
			 * @see https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/export.md
			 */
			"import/export": "off",

			/**
			 * Separation of exported and non-exported declarations hurts coherence, as related declarations cannot necessarily be located next to each other.
			 * @see https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/exports-last.md
			 */
			"import/exports-last": "off",

			/**
			 * TypeScript supersedes this rule.
			 * @see https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/extensions.md
			 */
			"import/extensions": "off",

			/**
			 * @see https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/first.md
			 */
			"import/first": "error",

			/**
			 * Inline export declarations are less verbose than a separate export declaration.
			 * @see https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/group-exports.md
			 */
			"import/group-exports": "off",

			/**
			 * A composition root or a large union type may need to import many dependencies, as it would be impractical to split it into smaller parts created solely for the purpose of bringing down the number of dependencies.
			 * @see https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/max-dependencies.md
			 */
			"import/max-dependencies": "off",

			/**
			 * TypeScript supersedes this rule.
			 * @see https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/named.md
			 */
			"import/named": "off",

			/**
			 * TypeScript supersedes this rule.
			 * @see https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/namespace.md
			 */
			"import/namespace": "off",

			/**
			 * Prettier supersedes this rule.
			 * @see https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/newline-after-import.md
			 */
			"import/newline-after-import": "off",

			/**
			 * @see https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/no-absolute-path.md
			 */
			"import/no-absolute-path": "error",

			/**
			 * @see https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/no-amd.md
			 */
			"import/no-amd": "error",

			/**
			 * Anonymous default exports are less verbose than extracting intermediate variables for naming. Even with explicitly named variables, IntelliSense may have a hard time renaming it at its import sites.
			 * @see https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/no-anonymous-default-export.md
			 */
			"import/no-anonymous-default-export": "off",

			/**
			 * @see https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/no-commonjs.md
			 */
			"import/no-commonjs": "error",

			/**
			 * This rule requires the `import/parsers` setting to be specified, but it is incompatible with flat ESLint configs: https://github.com/import-js/eslint-plugin-import/issues/2556
			 * @see https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/no-cycle.md
			 */
			"import/no-cycle": "off",

			/**
			 * Default exports are sometimes inevitable when interoperating with third-party libraries and frameworks.
			 * @see https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/no-default-export.md
			 */
			"import/no-default-export": "off",

			/**
			 * This rule has poor performance.
			 * @see https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/no-deprecated.md
			 */
			"import/no-deprecated": "off",

			/**
			 * `prettier-plugin-organize-imports` supersedes this rule.
			 * @see https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/no-duplicates.md
			 */
			"import/no-duplicates": "off",

			/**
			 * @see https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/no-dynamic-require.md
			 */
			"import/no-dynamic-require": "error",

			/**
			 * @see https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/no-empty-named-blocks.md
			 */
			"import/no-empty-named-blocks": "error",

			/**
			 * @see https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/no-extraneous-dependencies.md
			 */
			"import/no-extraneous-dependencies": "error",

			/**
			 * @see https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/no-import-module-exports.md
			 */
			"import/no-import-module-exports": "error",

			/**
			 * This rule has not been configured.
			 * @see https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/no-internal-modules.md
			 */
			"import/no-internal-modules": "off",

			/**
			 * @see https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/no-mutable-exports.md
			 */
			"import/no-mutable-exports": "error",

			/**
			 * This rule requires the `import/parsers` setting to be specified, but it is incompatible with flat ESLint configs: https://github.com/import-js/eslint-plugin-import/issues/2556
			 * @see https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/no-named-as-default.md
			 */
			"import/no-named-as-default": "off",

			/**
			 * This rule requires the `import/parsers` setting to be specified, but it is incompatible with flat ESLint configs: https://github.com/import-js/eslint-plugin-import/issues/2556
			 * @see https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/no-named-as-default-member.md
			 */
			"import/no-named-as-default-member": "off",

			/**
			 * @see https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/no-named-default.md
			 */
			"import/no-named-default": "error",

			/**
			 * Named exports provide better IntelliSense than default exports and are easier to rename and tree-shake.
			 * @see https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/no-named-export.md
			 */
			"import/no-named-export": "off",

			/**
			 * @see https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/no-namespace.md
			 */
			"import/no-namespace": "error",

			/**
			 * Server-side code may use Node.js modules. We count on the bundler to discover issues with client-side code importing Node.js modules.
			 * @see https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/no-nodejs-modules.md
			 */
			"import/no-nodejs-modules": "off",

			/**
			 * @see https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/no-relative-packages.md
			 */
			"import/no-relative-packages": "error",

			/**
			 * `import/no-relative-packages` supersedes this rule.
			 * @see https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/no-relative-parent-imports.md
			 */
			"import/no-relative-parent-imports": "off",

			/**
			 * This rule has not been configured.
			 * @see https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/no-restricted-paths.md
			 */
			"import/no-restricted-paths": "off",

			/**
			 * @see https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/no-self-import.md
			 */
			"import/no-self-import": "error",

			/**
			 * Imports with side effects are sometimes inevitable when interoperating with third-party libraries and APIs.
			 * Examples include CSS imports, client-only/server-only poison pills, polyfills, and extensions to assertion matchers in testing frameworks.
			 * @see https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/no-unassigned-import.md
			 */
			"import/no-unassigned-import": "off",

			/**
			 * TypeScript supersedes this rule.
			 * @see https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/no-unresolved.md
			 */
			"import/no-unresolved": "off",

			/**
			 * This rule seems to be broken in some cases.
			 * @see https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/no-unused-modules.md
			 */
			"import/no-unused-modules": "off",

			/**
			 * @see https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/no-useless-path-segments.md
			 */
			"import/no-useless-path-segments": "error",

			/**
			 * While this rule is mostly useful in webpack projects, it may catch issues with code snippets borrowed from the Internet.
			 * @see https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/no-webpack-loader-syntax.md
			 */
			"import/no-webpack-loader-syntax": "error",

			/**
			 * `prettier-plugin-organize-imports` supersedes this rule.
			 * @see https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/order.md
			 */
			"import/order": "off",

			/**
			 * Named exports provide better IntelliSense than default exports and are easier to rename and tree-shake.
			 * @see https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/prefer-default-export.md
			 */
			"import/prefer-default-export": "off",

			/**
			 * @see https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/unambiguous.md
			 */
			"import/unambiguous": "error",

			/**
			 * @see https://github.com/Limegrass/eslint-plugin-import-alias/blob/main/docs/rules/import-alias.md
			 */
			"import-alias/import-alias": "error",

			/**
			 * @see https://github.com/art0rz/eslint-plugin-no-barrel-files#rules
			 */
			"no-barrel-files/no-barrel-files": "error",

			/**
			 * @see https://github.com/a-tarasyuk/eslint-plugin-redundant-undefined#usage
			 */
			"redundant-undefined/redundant-undefined": "error",

			/**
			 * `typescript/unified-signatures` supersedes this rule.
			 * @see https://typescript-eslint.io/rules/adjacent-overload-signatures
			 */
			"typescript/adjacent-overload-signatures": "off",

			/**
			 * The generic form, `Array<T>`, is consistent with the built-in types for `Set<T>` and `Map<K, V>`.
			 * @see https://typescript-eslint.io/rules/array-type
			 */
			"typescript/array-type": ["error", { default: "generic" }],

			/**
			 * @see https://typescript-eslint.io/rules/await-thenable
			 */
			"typescript/await-thenable": "error",

			/**
			 * @see https://typescript-eslint.io/rules/ban-ts-comment
			 */
			"typescript/ban-ts-comment": "error",

			/**
			 * @see https://typescript-eslint.io/rules/ban-tslint-comment
			 */
			"typescript/ban-tslint-comment": "error",

			/**
			 * This rule has not been configured apart from the defaults.
			 * @see https://typescript-eslint.io/rules/ban-types
			 */
			"typescript/ban-types": [
				"error",
				{
					extendDefaults: true,
					types: {},
				},
			],

			/**
			 * Prettier supersedes this rule.
			 * @see https://typescript-eslint.io/rules/block-spacing
			 */
			"typescript/block-spacing": "off",

			/**
			 * Prettier supersedes this rule.
			 * @see https://typescript-eslint.io/rules/brace-style
			 */
			"typescript/brace-style": "off",

			/**
			 * `functional/no-classes` supersedes this rule.
			 * @see https://typescript-eslint.io/rules/class-literal-property-style
			 */
			"typescript/class-literal-property-style": "off",

			/**
			 * Prettier supersedes this rule.
			 * @see https://typescript-eslint.io/rules/comma-dangle
			 */
			"typescript/comma-dangle": "off",

			/**
			 * Prettier supersedes this rule.
			 * @see https://typescript-eslint.io/rules/comma-spacing
			 */
			"typescript/comma-spacing": "off",

			/**
			 * @see https://typescript-eslint.io/rules/consistent-generic-constructors
			 */
			"typescript/consistent-generic-constructors": "error",

			/**
			 * @see https://typescript-eslint.io/rules/consistent-indexed-object-style
			 */
			"typescript/consistent-indexed-object-style": "error",

			/**
			 * `as const` or `satisfies` keyword provide stronger guarantees than type assertions on object literals.
			 * @see https://typescript-eslint.io/rules/consistent-type-assertions
			 */
			"typescript/consistent-type-assertions": [
				"error",
				{
					assertionStyle: "as",
					objectLiteralTypeAssertions: "never",
				},
			],

			/**
			 * Type aliases support compound types (e.g. union and intersection types).
			 * @see https://typescript-eslint.io/rules/consistent-type-definitions
			 */
			"typescript/consistent-type-definitions": ["error", "type"],

			/**
			 * @see https://typescript-eslint.io/rules/consistent-type-exports
			 */
			"typescript/consistent-type-exports": "error",

			/**
			 * Inline type modifiers are less verbose than separate type import statements.
			 * @see https://typescript-eslint.io/rules/consistent-type-imports
			 */
			"typescript/consistent-type-imports": [
				"error",
				{
					fixStyle: "inline-type-imports",
				},
			],

			/**
			 * @see https://typescript-eslint.io/rules/default-param-last
			 */
			"typescript/default-param-last": "error",

			/**
			 * @see https://typescript-eslint.io/rules/dot-notation
			 */
			"typescript/dot-notation": "error",

			/**
			 * The conciseness of arrow functions necessitates type inference.
			 * @see https://typescript-eslint.io/rules/explicit-function-return-type
			 */
			"typescript/explicit-function-return-type": [
				"error",
				{
					allowExpressions: true,
				},
			],

			/**
			 * `functional/no-classes` supersedes this rule.
			 * @see https://typescript-eslint.io/rules/explicit-member-accessibility
			 */
			"typescript/explicit-member-accessibility": "off",

			/**
			 * `typescript/explicit-function-return-type` and `noImplicitAny` in `tsconfig.json` supersede this rule. They also check non-exported functions.
			 * @see https://typescript-eslint.io/rules/explicit-module-boundary-types
			 */
			"typescript/explicit-module-boundary-types": "off",

			/**
			 * Prettier supersedes this rule.
			 * @see https://typescript-eslint.io/rules/func-call-spacing
			 */
			"typescript/func-call-spacing": "off",

			/**
			 * Prettier supersedes this rule.
			 * @see https://typescript-eslint.io/rules/indent
			 */
			"typescript/indent": "off",

			/**
			 * @see https://typescript-eslint.io/rules/init-declarations
			 */
			"typescript/init-declarations": "error",

			/**
			 * Prettier supersedes this rule.
			 * @see https://typescript-eslint.io/rules/key-spacing
			 */
			"typescript/key-spacing": "off",

			/**
			 * Prettier supersedes this rule.
			 * @see https://typescript-eslint.io/rules/keyword-spacing
			 */
			"typescript/keyword-spacing": "off",

			/**
			 * Prettier supersedes this rule.
			 * @see https://typescript-eslint.io/rules/lines-around-comment
			 */
			"typescript/lines-around-comment": "off",

			/**
			 * Prettier supersedes this rule.
			 * @see https://typescript-eslint.io/rules/lines-between-class-members
			 */
			"typescript/lines-between-class-members": "off",

			/**
			 * Prettier supersedes this rule.
			 * @see https://typescript-eslint.io/rules/member-delimiter-style
			 */
			"typescript/member-delimiter-style": "off",

			/**
			 * This rule is not auto-fixable, which would have caused a poor developer experience.
			 * @see https://github.com/typescript-eslint/typescript-eslint/issues/2296
			 * @see https://typescript-eslint.io/rules/member-ordering
			 */
			"typescript/member-ordering": "off",

			/**
			 * @see https://typescript-eslint.io/rules/method-signature-style
			 */
			"typescript/method-signature-style": "error",

			/**
			 * Object literals that deviate from the naming conventions are sometimes inevitable when interoperating with third-party libraries and APIs, for example to set HTTP headers and URL query strings.
			 * Unfortunately, this rule does not support the `types` option on functions, preventing us from enforcing naming conventions on boolean functions.
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
					selector: ["parameter", "property", "variable"],
					types: ["boolean"],
					prefix: ["has", "is"],
					format: ["PascalCase"],
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
			],

			/**
			 * @see https://typescript-eslint.io/rules/no-array-constructor
			 */
			"typescript/no-array-constructor": "error",

			/**
			 * @see https://typescript-eslint.io/rules/no-base-to-string
			 */
			"typescript/no-base-to-string": "error",

			/**
			 * @see https://typescript-eslint.io/rules/no-confusing-non-null-assertion
			 */
			"typescript/no-confusing-non-null-assertion": "error",

			/**
			 * @see https://typescript-eslint.io/rules/no-confusing-void-expression
			 */
			"typescript/no-confusing-void-expression": "error",

			/**
			 * `functional/no-classes` supersedes this rule.
			 * @see https://typescript-eslint.io/rules/no-dupe-class-members
			 */
			"typescript/no-dupe-class-members": "off",

			/**
			 * `no-restricted-syntax` supersedes this rule by disallowing enum declarations.
			 * @see https://typescript-eslint.io/rules/no-duplicate-enum-values
			 */
			"typescript/no-duplicate-enum-values": "off",

			/**
			 * @see https://typescript-eslint.io/rules/no-duplicate-type-constituents
			 */
			"typescript/no-duplicate-type-constituents": "error",

			/**
			 * @see https://typescript-eslint.io/rules/no-dynamic-delete
			 */
			"typescript/no-dynamic-delete": "error",

			/**
			 * @see https://typescript-eslint.io/rules/no-empty-function
			 */
			"typescript/no-empty-function": "error",

			/**
			 * `typescript/consistent-type-definitions` supersedes this rule.
			 * @see https://typescript-eslint.io/rules/no-empty-interface
			 */
			"typescript/no-empty-interface": "off",

			/**
			 * Encourages people to use the `unknown` type instead of `any`.
			 * @see https://typescript-eslint.io/rules/no-explicit-any
			 */
			"typescript/no-explicit-any": "error",

			/**
			 * @see https://typescript-eslint.io/rules/no-extra-non-null-assertion
			 */
			"typescript/no-extra-non-null-assertion": "error",

			/**
			 * Prettier supersedes this rule.
			 * @see https://typescript-eslint.io/rules/no-extra-parens
			 */
			"typescript/no-extra-parens": "off",

			/**
			 * Prettier supersedes this rule.
			 * @see https://typescript-eslint.io/rules/no-extra-semi
			 */
			"typescript/no-extra-semi": "off",

			/**
			 * `unicorn/no-static-only-class` supersedes this rule.
			 * @see https://typescript-eslint.io/rules/no-extraneous-class
			 */
			"typescript/no-extraneous-class": "off",

			/**
			 * @see https://typescript-eslint.io/rules/no-floating-promises
			 */
			"typescript/no-floating-promises": "error",

			/**
			 * @see https://typescript-eslint.io/rules/no-for-in-array
			 */
			"typescript/no-for-in-array": "error",

			/**
			 * @see https://typescript-eslint.io/rules/no-implied-eval
			 */
			"typescript/no-implied-eval": "error",

			/**
			 * @see https://typescript-eslint.io/rules/no-inferrable-types
			 */
			"typescript/no-inferrable-types": "error",

			/**
			 * `functional/no-this-expressions` supersedes this rule.
			 * @see https://typescript-eslint.io/rules/no-invalid-this
			 */
			"typescript/no-invalid-this": "off",

			/**
			 * @see https://typescript-eslint.io/rules/no-invalid-void-type
			 */
			"typescript/no-invalid-void-type": "error",

			/**
			 * @see https://typescript-eslint.io/rules/no-loop-func
			 */
			"typescript/no-loop-func": "error",

			/**
			 * @see https://typescript-eslint.io/rules/no-loss-of-precision
			 */
			"typescript/no-loss-of-precision": "error",

			/**
			 * -1 is commonly returned by functions in the JavaScript standard library.
			 * 0 is commonly used for checking array lengths.
			 * 1 is commonly used for incrementing and decrementing.
			 * 2 is commonly used for doubling and halving and for checking if a number is even or odd.
			 * @see https://typescript-eslint.io/rules/no-magic-numbers
			 */
			"typescript/no-magic-numbers": [
				"error",
				{
					ignore: [-1, 0, 1, 2],
					ignoreNumericLiteralTypes: true,
					ignoreTypeIndexes: true,
				},
			],

			/**
			 * @see https://typescript-eslint.io/rules/no-meaningless-void-operator
			 */
			"typescript/no-meaningless-void-operator": "error",

			/**
			 * @see https://typescript-eslint.io/rules/no-misused-new
			 */
			"typescript/no-misused-new": "error",

			/**
			 * @see https://typescript-eslint.io/rules/no-misused-promises
			 */
			"typescript/no-misused-promises": "error",

			/**
			 * We can use namespaces for nested type declarations where the name of the namespace matches the name of a type alias.
			 * @see https://typescript-eslint.io/rules/no-namespace
			 */
			"typescript/no-namespace": "off",

			/**
			 * @see https://typescript-eslint.io/rules/no-non-null-asserted-nullish-coalescing
			 */
			"typescript/no-non-null-asserted-nullish-coalescing": "error",

			/**
			 * @see https://typescript-eslint.io/rules/no-non-null-asserted-optional-chain
			 */
			"typescript/no-non-null-asserted-optional-chain": "error",

			/**
			 * @see https://typescript-eslint.io/rules/no-non-null-assertion
			 */
			"typescript/no-non-null-assertion": "error",

			/**
			 * We can use namespaces for nested type declarations where the name of the namespace matches the name of a type alias.
			 * @see https://typescript-eslint.io/rules/no-redeclare
			 */
			"typescript/no-redeclare": "off",

			/**
			 * @see https://typescript-eslint.io/rules/no-redundant-type-constituents
			 */
			"typescript/no-redundant-type-constituents": "error",

			/**
			 * @see https://typescript-eslint.io/rules/no-require-imports
			 */
			"typescript/no-require-imports": "error",

			/**
			 * This rule has not been configured.
			 * @see https://typescript-eslint.io/rules/no-restricted-imports
			 */
			"typescript/no-restricted-imports": "off",

			/**
			 * @see https://typescript-eslint.io/rules/no-shadow
			 */
			"typescript/no-shadow": "error",

			/**
			 * `functional/no-this-expressions` supersedes this rule.
			 * @see https://typescript-eslint.io/rules/no-this-alias
			 */
			"typescript/no-this-alias": "off",

			/**
			 * @see https://typescript-eslint.io/rules/no-throw-literal
			 */
			"typescript/no-throw-literal": "error",

			/**
			 * `typescript/consistent-type-definitions` supersedes this rule.
			 * @see https://typescript-eslint.io/rules/no-type-alias
			 */
			"typescript/no-type-alias": "off",

			/**
			 * @see https://typescript-eslint.io/rules/no-unnecessary-boolean-literal-compare
			 */
			"typescript/no-unnecessary-boolean-literal-compare": "error",

			/**
			 * @see https://typescript-eslint.io/rules/no-unnecessary-condition
			 */
			"typescript/no-unnecessary-condition": "error",

			/**
			 * @see https://typescript-eslint.io/rules/no-unnecessary-qualifier
			 */
			"typescript/no-unnecessary-qualifier": "error",

			/**
			 * @see https://typescript-eslint.io/rules/no-unnecessary-type-arguments
			 */
			"typescript/no-unnecessary-type-arguments": "error",

			/**
			 * @see https://typescript-eslint.io/rules/no-unnecessary-type-assertion
			 */
			"typescript/no-unnecessary-type-assertion": "error",

			/**
			 * @see https://typescript-eslint.io/rules/no-unnecessary-type-constraint
			 */
			"typescript/no-unnecessary-type-constraint": "error",

			/**
			 * `typescript/no-explicit-any` supersedes this rule.
			 * @see https://typescript-eslint.io/rules/no-unsafe-argument
			 */
			"typescript/no-unsafe-argument": "off",

			/**
			 * `typescript/no-explicit-any` supersedes this rule.
			 * @see https://typescript-eslint.io/rules/no-unsafe-assignment
			 */
			"typescript/no-unsafe-assignment": "off",

			/**
			 * `typescript/no-explicit-any` supersedes this rule.
			 * @see https://typescript-eslint.io/rules/no-unsafe-call
			 */
			"typescript/no-unsafe-call": "off",

			/**
			 * `no-restricted-syntax` supersedes this rule by disallowing enum declarations.
			 * @see https://typescript-eslint.io/rules/no-unsafe-enum-comparison
			 */
			"typescript/no-unsafe-enum-comparison": "off",

			/**
			 * `typescript/no-explicit-any` supersedes this rule.
			 * @see https://typescript-eslint.io/rules/no-unsafe-member-access
			 */
			"typescript/no-unsafe-member-access": "off",

			/**
			 * `typescript/no-explicit-any` supersedes this rule.
			 * @see https://typescript-eslint.io/rules/no-unsafe-return
			 */
			"typescript/no-unsafe-return": "off",

			/**
			 * @see https://typescript-eslint.io/rules/no-unsafe-unary-minus
			 */
			"typescript/no-unsafe-unary-minus": "error",

			/**
			 * @see https://typescript-eslint.io/rules/no-unused-expressions
			 */
			"typescript/no-unused-expressions": "error",

			/**
			 * @see https://typescript-eslint.io/rules/no-unused-vars
			 */
			"typescript/no-unused-vars": [
				"error",
				{ varsIgnorePattern: "[iI]gnored" },
			],

			/**
			 * Function declarations and type declarations are hoisted, allowing us to use the Stepdown Rule by Uncle Bob (https://dzone.com/articles/the-stepdown-rule).
			 * @see https://typescript-eslint.io/rules/no-use-before-define
			 */
			"typescript/no-use-before-define": [
				"error",
				{ functions: false, typedefs: false },
			],

			/**
			 * `functional/no-classes` supersedes this rule.
			 * @see https://typescript-eslint.io/rules/no-useless-constructor
			 */
			"typescript/no-useless-constructor": "off",

			/**
			 * @see https://typescript-eslint.io/rules/no-useless-empty-export
			 */
			"typescript/no-useless-empty-export": "error",

			/**
			 * @see https://typescript-eslint.io/rules/no-useless-template-literals
			 */
			"typescript/no-useless-template-literals": "error",

			/**
			 * @see https://typescript-eslint.io/rules/no-var-requires
			 */
			"typescript/no-var-requires": "error",

			/**
			 * @see https://typescript-eslint.io/rules/non-nullable-type-assertion-style
			 */
			"typescript/non-nullable-type-assertion-style": "error",

			/**
			 * Prettier supersedes this rule.
			 * @see https://typescript-eslint.io/rules/object-curly-spacing
			 */
			"typescript/object-curly-spacing": "off",

			/**
			 * Prettier supersedes this rule.
			 * @see https://typescript-eslint.io/rules/padding-line-between-statements
			 */
			"typescript/padding-line-between-statements": "off",

			/**
			 * `functional/no-classes` supersedes this rule.
			 * @see https://typescript-eslint.io/rules/parameter-properties
			 */
			"typescript/parameter-properties": "off",

			/**
			 * @see https://typescript-eslint.io/rules/prefer-as-const
			 */
			"typescript/prefer-as-const": "error",

			/**
			 * `no-restricted-syntax` supersedes this rule by disallowing enum declarations.
			 * @see https://typescript-eslint.io/rules/prefer-enum-initializers
			 */
			"typescript/prefer-enum-initializers": "off",

			/**
			 * `unicorn/no-for-loop` supersedes this rule.
			 * @see https://typescript-eslint.io/rules/prefer-for-of
			 */
			"typescript/prefer-for-of": "off",

			/**
			 * @see https://typescript-eslint.io/rules/prefer-function-type
			 */
			"typescript/prefer-function-type": "error",

			/**
			 * @see https://typescript-eslint.io/rules/prefer-includes
			 */
			"typescript/prefer-includes": "error",

			/**
			 * `no-restricted-syntax` supersedes this rule by disallowing enum declarations.
			 * @see https://typescript-eslint.io/rules/prefer-literal-enum-member
			 */
			"typescript/prefer-literal-enum-member": "off",

			/**
			 * @see https://typescript-eslint.io/rules/prefer-namespace-keyword
			 */
			"typescript/prefer-namespace-keyword": "error",

			/**
			 * @see https://typescript-eslint.io/rules/prefer-nullish-coalescing
			 */
			"typescript/prefer-nullish-coalescing": "error",

			/**
			 * @see https://typescript-eslint.io/rules/prefer-optional-chain
			 */
			"typescript/prefer-optional-chain": "error",

			/**
			 * `functional/prefer-readonly-type` supersedes this rule.
			 * @see https://typescript-eslint.io/rules/prefer-readonly
			 */
			"typescript/prefer-readonly": "off",

			/**
			 * `functional/prefer-readonly-type` supersedes this rule.
			 * @see https://typescript-eslint.io/rules/prefer-readonly-parameter-types
			 */
			"typescript/prefer-readonly-parameter-types": "off",

			/**
			 * @see https://typescript-eslint.io/rules/prefer-reduce-type-parameter
			 */
			"typescript/prefer-reduce-type-parameter": "error",

			/**
			 * @see https://typescript-eslint.io/rules/prefer-regexp-exec
			 */
			"typescript/prefer-regexp-exec": "error",

			/**
			 * `functional/no-this-expressions` supersedes this rule.
			 * @see https://typescript-eslint.io/rules/prefer-return-this-type
			 */
			"typescript/prefer-return-this-type": "off",

			/**
			 * @see https://typescript-eslint.io/rules/prefer-string-starts-ends-with
			 */
			"typescript/prefer-string-starts-ends-with": "error",

			/**
			 * @see https://typescript-eslint.io/rules/prefer-ts-expect-error
			 */
			"typescript/prefer-ts-expect-error": "error",

			/**
			 * @see https://typescript-eslint.io/rules/promise-function-async
			 */
			"typescript/promise-function-async": "error",

			/**
			 * Prettier supersedes this rule.
			 * @see https://typescript-eslint.io/rules/quotes
			 */
			"typescript/quotes": "off",

			/**
			 * @see https://typescript-eslint.io/rules/require-array-sort-compare
			 */
			"typescript/require-array-sort-compare": "error",

			/**
			 * `typescript/promise-function-async` supersedes this rule.
			 * @see https://typescript-eslint.io/rules/require-await
			 */
			"typescript/require-await": "off",

			/**
			 * @see https://typescript-eslint.io/rules/restrict-plus-operands
			 */
			"typescript/restrict-plus-operands": "error",

			/**
			 * @see https://typescript-eslint.io/rules/restrict-template-expressions
			 */
			"typescript/restrict-template-expressions": "error",

			/**
			 * @see https://typescript-eslint.io/rules/return-await
			 */
			"typescript/return-await": "error",

			/**
			 * Prettier supersedes this rule.
			 * @see https://typescript-eslint.io/rules/semi
			 */
			"typescript/semi": "off",

			/**
			 * @see https://typescript-eslint.io/rules/sort-type-constituents
			 */
			"typescript/sort-type-constituents": "error",

			/**
			 * Prettier supersedes this rule.
			 * @see https://typescript-eslint.io/rules/space-before-blocks
			 */
			"typescript/space-before-blocks": "off",

			/**
			 * Prettier supersedes this rule.
			 * @see https://typescript-eslint.io/rules/space-before-function-paren
			 */
			"typescript/space-before-function-paren": "off",

			/**
			 * Prettier supersedes this rule.
			 * @see https://typescript-eslint.io/rules/space-infix-ops
			 */
			"typescript/space-infix-ops": "off",

			/**
			 * @see https://typescript-eslint.io/rules/strict-boolean-expressions
			 */
			"typescript/strict-boolean-expressions": "error",

			/**
			 * @see https://typescript-eslint.io/rules/switch-exhaustiveness-check
			 */
			"typescript/switch-exhaustiveness-check": "error",

			/**
			 * @see https://typescript-eslint.io/rules/triple-slash-reference
			 */
			"typescript/triple-slash-reference": "error",

			/**
			 * Prettier supersedes this rule.
			 * @see https://typescript-eslint.io/rules/type-annotation-spacing
			 */
			"typescript/type-annotation-spacing": "off",

			/**
			 * `strict` in `tsconfig.json` supersedes this rule.
			 * @see https://typescript-eslint.io/rules/typedef
			 */
			"typescript/typedef": "off",

			/**
			 * `functional/no-this-expressions` supersedes this rule.
			 * @see https://typescript-eslint.io/rules/unbound-method
			 */
			"typescript/unbound-method": "off",

			/**
			 * @see https://typescript-eslint.io/rules/unified-signatures
			 */
			"typescript/unified-signatures": "error",

			/**
			 * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/better-regex.md
			 */
			"unicorn/better-regex": "error",

			/**
			 * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/catch-error-name.md
			 */
			"unicorn/catch-error-name": "error",

			/**
			 * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/consistent-destructuring.md
			 */
			"unicorn/consistent-destructuring": "error",

			/**
			 * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/consistent-function-scoping.md
			 */
			"unicorn/consistent-function-scoping": "error",

			/**
			 * `functional/no-classes` supersedes this rule.
			 * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/custom-error-definition.md
			 */
			"unicorn/custom-error-definition": "off",

			/**
			 * Prettier supersedes this rule.
			 * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/empty-brace-spaces.md
			 */
			"unicorn/empty-brace-spaces": "off",

			/**
			 * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/error-message.md
			 */
			"unicorn/error-message": "error",

			/**
			 * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/escape-case.md
			 */
			"unicorn/escape-case": "error",

			/**
			 * TODO-comments must include a GitHub or a Jira/YouTrack issue number in parentheses, e.g. `TODO (#1337)` or `TODO (PROJECT-1337)`.
			 * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/expiring-todo-comments.md
			 */
			"unicorn/expiring-todo-comments": [
				"error",
				{
					allowWarningComments: false,
					ignore: [/\(#\d+\)|\([A-Z]+-\d+\)/u],
				},
			],

			/**
			 * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/explicit-length-check.md
			 */
			"unicorn/explicit-length-check": "error",

			/**
			 * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/filename-case.md
			 */
			"unicorn/filename-case": [
				"error",
				{
					cases: {
						kebabCase: true,
						pascalCase: true,
					},
				},
			],

			/**
			 * This rule has not been configured.
			 * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/import-style.md
			 */
			"unicorn/import-style": ["error", { styles: {} }],

			/**
			 * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/new-for-builtins.md
			 */
			"unicorn/new-for-builtins": "error",

			/**
			 * `eslint-comments/no-unlimited-disable` supersedes this rule.
			 * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/no-abusive-eslint-disable.md
			 */
			"unicorn/no-abusive-eslint-disable": "off",

			/**
			 * `functional/prefer-tacit` supersedes this rule.
			 * The tacit form makes the code more readable at the small risk of causing issues that would have been caught by `unicorn/no-array-callback-reference`. A proper unit test should be able to catch these issues as well.
			 * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/no-array-callback-reference.md
			 */
			"unicorn/no-array-callback-reference": "off",

			/**
			 * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/no-array-for-each.md
			 */
			"unicorn/no-array-for-each": "error",

			/**
			 * `functional/no-this-expressions` supersedes this rule.
			 * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/no-array-method-this-argument.md
			 */
			"unicorn/no-array-method-this-argument": "off",

			/**
			 * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/no-array-push-push.md
			 */
			"unicorn/no-array-push-push": "error",

			/**
			 * `Array.reduce()` is a declarative alternative to the traditional imperative approach of accumulating the result in a mutable variable over a for-loop.
			 * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/no-array-reduce.md
			 */
			"unicorn/no-array-reduce": "off",

			/**
			 * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/no-await-expression-member.md
			 */
			"unicorn/no-await-expression-member": "error",

			/**
			 * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/no-console-spaces.md
			 */
			"unicorn/no-console-spaces": "error",

			/**
			 * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/no-document-cookie.md
			 */
			"unicorn/no-document-cookie": "error",

			/**
			 * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/no-empty-file.md
			 */
			"unicorn/no-empty-file": "error",

			/**
			 * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/no-for-loop.md
			 */
			"unicorn/no-for-loop": "error",

			/**
			 * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/no-hex-escape.md
			 */
			"unicorn/no-hex-escape": "error",

			/**
			 * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/no-instanceof-array.md
			 */
			"unicorn/no-instanceof-array": "error",

			/**
			 * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/no-invalid-remove-event-listener.md
			 */
			"unicorn/no-invalid-remove-event-listener": "error",

			/**
			 * With `functional/no-classes`, variables such as `newState` and `classList` are less likely to cause confusion.
			 * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/no-keyword-prefix.md
			 */
			"unicorn/no-keyword-prefix": "off",

			/**
			 * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/no-lonely-if.md
			 */
			"unicorn/no-lonely-if": "error",

			/**
			 * Non-null checks such as `if (value !== null) { ... }` are reasonable.
			 * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/no-negated-condition.md
			 */
			"unicorn/no-negated-condition": "off",

			/**
			 * Prettier supersedes this rule.
			 * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/no-nested-ternary.md
			 */
			"unicorn/no-nested-ternary": "off",

			/**
			 * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/no-new-array.md
			 */
			"unicorn/no-new-array": "error",

			/**
			 * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/no-new-buffer.md
			 */
			"unicorn/no-new-buffer": "error",

			/**
			 * `null` is sometimes inevitable when interoperating with third-party libraries and APIs.
			 * `null` is useful to indicate the intentional absence of a value while `undefined` indicates that a declaration has omitted to define its value.
			 * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/no-null.md
			 */
			"unicorn/no-null": "off",

			/**
			 * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/no-object-as-default-parameter.md
			 */
			"unicorn/no-object-as-default-parameter": "error",

			/**
			 * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/no-process-exit.md
			 */
			"unicorn/no-process-exit": "error",

			/**
			 * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/no-static-only-class.md
			 */
			"unicorn/no-static-only-class": "error",

			/**
			 * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/no-thenable.md
			 */
			"unicorn/no-thenable": "error",

			/**
			 * `typescript/no-this-alias` supersedes this rule.
			 */
			"unicorn/no-this-assignment": "off",

			/**
			 * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/no-typeof-undefined.md
			 */
			"unicorn/no-typeof-undefined": "error",

			/**
			 * `typescript/await-thenable` supersedes this rule.
			 * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/no-unnecessary-await.md
			 */
			"unicorn/no-unnecessary-await": "off",

			/**
			 * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/no-unnecessary-polyfills.md
			 */
			"unicorn/no-unnecessary-polyfills": "error",

			/**
			 * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/no-unreadable-array-destructuring.md
			 */
			"unicorn/no-unreadable-array-destructuring": "error",

			/**
			 * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/no-unreadable-iife.md
			 */
			"unicorn/no-unreadable-iife": "error",

			/**
			 * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/no-unused-properties.md
			 */
			"unicorn/no-unused-properties": "error",

			/**
			 * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/no-useless-fallback-in-spread.md
			 */
			"unicorn/no-useless-fallback-in-spread": "error",

			/**
			 * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/no-useless-length-check.md
			 */
			"unicorn/no-useless-length-check": "error",

			/**
			 * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/no-useless-promise-resolve-reject.md
			 */
			"unicorn/no-useless-promise-resolve-reject": "error",

			/**
			 * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/no-useless-spread.md
			 */
			"unicorn/no-useless-spread": "error",

			/**
			 * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/no-useless-switch-case.md
			 */
			"unicorn/no-useless-switch-case": "error",

			/**
			 * `init-declarations` supersedes this rule.
			 * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/no-useless-undefined.md
			 */
			"unicorn/no-useless-undefined": "off",

			/**
			 * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/no-zero-fractions.md
			 */
			"unicorn/no-zero-fractions": "error",

			/**
			 * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/number-literal-case.md
			 */
			"unicorn/number-literal-case": "error",

			/**
			 * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/numeric-separators-style.md
			 */
			"unicorn/numeric-separators-style": "error",

			/**
			 * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/prefer-add-event-listener.md
			 */
			"unicorn/prefer-add-event-listener": "error",

			/**
			 * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/prefer-array-find.md
			 */
			"unicorn/prefer-array-find": "error",

			/**
			 * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/prefer-array-flat.md
			 */
			"unicorn/prefer-array-flat": "error",

			/**
			 * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/prefer-array-flat-map.md
			 */
			"unicorn/prefer-array-flat-map": "error",

			/**
			 * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/prefer-array-index-of.md
			 */
			"unicorn/prefer-array-index-of": "error",

			/**
			 * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/prefer-array-some.md
			 */
			"unicorn/prefer-array-some": "error",

			/**
			 * `String.at()` requires a polyfill for all major browsers until primo 2022.
			 * https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/prefer-at.md
			 */
			"unicorn/prefer-at": "off",

			/**
			 * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/prefer-blob-reading-methods.md
			 */
			"unicorn/prefer-blob-reading-methods": "error",

			/**
			 * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/prefer-code-point.md
			 */
			"unicorn/prefer-code-point": "error",

			/**
			 * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/prefer-date-now.md
			 */
			"unicorn/prefer-date-now": "error",

			/**
			 * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/prefer-default-parameters.md
			 */
			"unicorn/prefer-default-parameters": "error",

			/**
			 * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/prefer-dom-node-append.md
			 */
			"unicorn/prefer-dom-node-append": "error",

			/**
			 * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/prefer-dom-node-dataset.md
			 */
			"unicorn/prefer-dom-node-dataset": "error",

			/**
			 * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/prefer-dom-node-remove.md
			 */
			"unicorn/prefer-dom-node-remove": "error",

			/**
			 * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/prefer-dom-node-text-content.md
			 */
			"unicorn/prefer-dom-node-text-content": "error",

			/**
			 * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/prefer-event-target.md
			 */
			"unicorn/prefer-event-target": "error",

			/**
			 * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/prefer-export-from.md
			 */
			"unicorn/prefer-export-from": "error",

			/**
			 * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/prefer-includes.md
			 */
			"unicorn/prefer-includes": "error",

			/**
			 * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/prefer-json-parse-buffer.md
			 */
			"unicorn/prefer-json-parse-buffer": "error",

			/**
			 * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/prefer-keyboard-event-key.md
			 */
			"unicorn/prefer-keyboard-event-key": "error",

			/**
			 * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/prefer-logical-operator-over-ternary.md
			 */
			"unicorn/prefer-logical-operator-over-ternary": "error",

			/**
			 * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/prefer-math-trunc.md
			 */
			"unicorn/prefer-math-trunc": "error",

			/**
			 * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/prefer-modern-dom-apis.md
			 */
			"unicorn/prefer-modern-dom-apis": "error",

			/**
			 * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/prefer-modern-math-apis.md
			 */
			"unicorn/prefer-modern-math-apis": "error",

			/**
			 * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/prefer-module.md
			 */
			"unicorn/prefer-module": "error",

			/**
			 * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/prefer-native-coercion-functions.md
			 */
			"unicorn/prefer-native-coercion-functions": "error",

			/**
			 * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/prefer-negative-index.md
			 */
			"unicorn/prefer-negative-index": "error",

			/**
			 * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/prefer-node-protocol.md
			 */
			"unicorn/prefer-node-protocol": "error",

			/**
			 * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/prefer-number-properties.md
			 */
			"unicorn/prefer-number-properties": "error",

			/**
			 * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/prefer-object-from-entries.md
			 */
			"unicorn/prefer-object-from-entries": "error",

			/**
			 * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/prefer-optional-catch-binding.md
			 */
			"unicorn/prefer-optional-catch-binding": "error",

			/**
			 * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/prefer-prototype-methods.md
			 */
			"unicorn/prefer-prototype-methods": "error",

			/**
			 * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/prefer-query-selector.md
			 */
			"unicorn/prefer-query-selector": "error",

			/**
			 * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/prefer-reflect-apply.md
			 */
			"unicorn/prefer-reflect-apply": "error",

			/**
			 * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/prefer-regexp-test.md
			 */
			"unicorn/prefer-regexp-test": "error",

			/**
			 * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/prefer-set-has.md
			 */
			"unicorn/prefer-set-has": "error",

			/**
			 * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/prefer-set-size.md
			 */
			"unicorn/prefer-set-size": "error",

			/**
			 * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/prefer-spread.md
			 */
			"unicorn/prefer-spread": "error",

			/**
			 * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/prefer-string-replace-all.md
			 */
			"unicorn/prefer-string-replace-all": "error",

			/**
			 * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/prefer-string-slice.md
			 */
			"unicorn/prefer-string-slice": "error",

			/**
			 * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/prefer-string-starts-ends-with.md
			 */
			"unicorn/prefer-string-starts-ends-with": "error",

			/**
			 * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/prefer-string-trim-start-end.md
			 */
			"unicorn/prefer-string-trim-start-end": "error",

			/**
			 * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/prefer-switch.md
			 */
			"unicorn/prefer-switch": "error",

			/**
			 * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/prefer-ternary.md
			 */
			"unicorn/prefer-ternary": "error",

			/**
			 * Zod has a top-level function named `catch()` which raises a false positive.
			 * @see https://github.com/sindresorhus/eslint-plugin-unicorn/issues/2149
			 * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/prefer-top-level-await.md
			 */
			"unicorn/prefer-top-level-await": "off",

			/**
			 * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/prefer-type-error.md
			 */
			"unicorn/prefer-type-error": "error",

			/**
			 * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/prevent-abbreviations.md
			 */
			"unicorn/prevent-abbreviations": [
				"error",
				{
					checkProperties: true,
					ignore: [
						"^.*[aA]rg[s]?",
						"^.*[dD]ev[s]?",
						"^.*[dD]ir[s]?",
						"^.*[dD]oc[s]?",
						"^.*[eE]nv[s]?",
						"^.*[lL]ib[s]?",
						"^.*[pP]aram[s]?",
						"^.*[pP]rop[s]?",
						"^.*[rR]ef[s]?",
						"^.*[vV]ar[s]?",
					],
				},
			],

			/**
			 * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/relative-url-style.md
			 */
			"unicorn/relative-url-style": ["error", "never"],

			/**
			 * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/require-array-join-separator.md
			 */
			"unicorn/require-array-join-separator": "error",

			/**
			 * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/require-number-to-fixed-digits-argument.md
			 */
			"unicorn/require-number-to-fixed-digits-argument": "error",

			/**
			 * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/require-post-message-target-origin.md
			 */
			"unicorn/require-post-message-target-origin": "error",

			/**
			 * Reports superfluous space characters.
			 * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/string-content.md
			 */
			"unicorn/string-content": [
				"error",
				{
					patterns: {
						// eslint-disable-next-line unicorn/string-content -- This particular string is appropriate, as it declares the pattern of consecutive space characters that we want to forbid 😄
						"  ": {
							suggest: " ",
							message: "Delete the extra space characters.",
						},
					},
				},
			],

			/**
			 * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/switch-case-braces.md
			 */
			"unicorn/switch-case-braces": "error",

			/**
			 * Indent by tabs, as done by `@rainstormy/preset-prettier-base`.
			 * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/template-indent.md
			 */
			"unicorn/template-indent": ["error", { indent: "\t" }],

			/**
			 * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/text-encoding-identifier-case.md
			 */
			"unicorn/text-encoding-identifier-case": "error",

			/**
			 * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/throw-new-error.md
			 */
			"unicorn/throw-new-error": "error",
		},
	}
}

export function eslintAmbientTypeScriptModules(options: {
	readonly files: ReadonlyArray<string>
}): Linter.FlatConfig {
	return {
		files: [...options.files],
		rules: {
			/**
			 * Ambient modules may consist solely of ambient type declarations without using any import statements or export declarations.
			 * @see https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/unambiguous.md
			 */
			"import/unambiguous": "off",

			/**
			 * Only dynamic imports will work in ambient modules.
			 * @see https://typescript-eslint.io/rules/consistent-type-imports
			 */
			"typescript/consistent-type-imports": "off",
		},
	}
}

export function eslintTestData(options: {
	readonly files: ReadonlyArray<string>
}): Linter.FlatConfig {
	return {
		files: [...options.files],
		rules: {
			/**
			 * Test data may contain a large number of declarations.
			 * @see https://eslint.org/docs/latest/rules/max-lines
			 */
			"max-lines": "off",

			/**
			 * Test data may include functions with large objects literals.
			 * @see https://eslint.org/docs/latest/rules/max-lines-per-function
			 */
			"max-lines-per-function": "off",

			/**
			 * Test data may contain magic numbers.
			 * @see https://typescript-eslint.io/rules/no-magic-numbers
			 */
			"typescript/no-magic-numbers": "off",

			/**
			 * Test data may include hard-coded numeric identifiers where numeric separators would make them harder to compare with identifiers from elsewhere.
			 * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/numeric-separators-style.md
			 */
			"unicorn/numeric-separators-style": "off",
		},
	}
}
