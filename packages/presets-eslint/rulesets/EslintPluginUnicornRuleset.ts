import { type EslintPluginRuleset } from "../EslintConfig.js"

export type EslintPluginUnicornRuleset = EslintPluginRuleset<
	"unicorn",
	| "unicorn/better-regex"
	| "unicorn/catch-error-name"
	| "unicorn/consistent-destructuring"
	| "unicorn/consistent-function-scoping"
	| "unicorn/custom-error-definition"
	| "unicorn/empty-brace-spaces"
	| "unicorn/error-message"
	| "unicorn/escape-case"
	| "unicorn/expiring-todo-comments"
	| "unicorn/explicit-length-check"
	| "unicorn/filename-case"
	| "unicorn/import-style"
	| "unicorn/new-for-builtins"
	| "unicorn/no-abusive-eslint-disable"
	| "unicorn/no-array-callback-reference"
	| "unicorn/no-array-for-each"
	| "unicorn/no-array-method-this-argument"
	| "unicorn/no-array-push-push"
	| "unicorn/no-array-reduce"
	| "unicorn/no-await-expression-member"
	| "unicorn/no-console-spaces"
	| "unicorn/no-document-cookie"
	| "unicorn/no-empty-file"
	| "unicorn/no-for-loop"
	| "unicorn/no-hex-escape"
	| "unicorn/no-instanceof-array"
	| "unicorn/no-invalid-remove-event-listener"
	| "unicorn/no-keyword-prefix"
	| "unicorn/no-lonely-if"
	| "unicorn/no-negated-condition"
	| "unicorn/no-nested-ternary"
	| "unicorn/no-new-array"
	| "unicorn/no-new-buffer"
	| "unicorn/no-null"
	| "unicorn/no-object-as-default-parameter"
	| "unicorn/no-process-exit"
	| "unicorn/no-static-only-class"
	| "unicorn/no-thenable"
	| "unicorn/no-this-assignment"
	| "unicorn/no-typeof-undefined"
	| "unicorn/no-unnecessary-await"
	| "unicorn/no-unnecessary-polyfills"
	| "unicorn/no-unreadable-array-destructuring"
	| "unicorn/no-unreadable-iife"
	| "unicorn/no-unused-properties"
	| "unicorn/no-useless-fallback-in-spread"
	| "unicorn/no-useless-length-check"
	| "unicorn/no-useless-promise-resolve-reject"
	| "unicorn/no-useless-spread"
	| "unicorn/no-useless-switch-case"
	| "unicorn/no-useless-undefined"
	| "unicorn/no-zero-fractions"
	| "unicorn/number-literal-case"
	| "unicorn/numeric-separators-style"
	| "unicorn/prefer-add-event-listener"
	| "unicorn/prefer-array-find"
	| "unicorn/prefer-array-flat-map"
	| "unicorn/prefer-array-flat"
	| "unicorn/prefer-array-index-of"
	| "unicorn/prefer-array-some"
	| "unicorn/prefer-at"
	| "unicorn/prefer-blob-reading-methods"
	| "unicorn/prefer-code-point"
	| "unicorn/prefer-date-now"
	| "unicorn/prefer-default-parameters"
	| "unicorn/prefer-dom-node-append"
	| "unicorn/prefer-dom-node-dataset"
	| "unicorn/prefer-dom-node-remove"
	| "unicorn/prefer-dom-node-text-content"
	| "unicorn/prefer-event-target"
	| "unicorn/prefer-export-from"
	| "unicorn/prefer-includes"
	| "unicorn/prefer-json-parse-buffer"
	| "unicorn/prefer-keyboard-event-key"
	| "unicorn/prefer-logical-operator-over-ternary"
	| "unicorn/prefer-math-trunc"
	| "unicorn/prefer-modern-dom-apis"
	| "unicorn/prefer-modern-math-apis"
	| "unicorn/prefer-module"
	| "unicorn/prefer-native-coercion-functions"
	| "unicorn/prefer-negative-index"
	| "unicorn/prefer-node-protocol"
	| "unicorn/prefer-number-properties"
	| "unicorn/prefer-object-from-entries"
	| "unicorn/prefer-optional-catch-binding"
	| "unicorn/prefer-prototype-methods"
	| "unicorn/prefer-query-selector"
	| "unicorn/prefer-reflect-apply"
	| "unicorn/prefer-regexp-test"
	| "unicorn/prefer-set-has"
	| "unicorn/prefer-set-size"
	| "unicorn/prefer-spread"
	| "unicorn/prefer-string-replace-all"
	| "unicorn/prefer-string-slice"
	| "unicorn/prefer-string-starts-ends-with"
	| "unicorn/prefer-string-trim-start-end"
	| "unicorn/prefer-switch"
	| "unicorn/prefer-ternary"
	| "unicorn/prefer-top-level-await"
	| "unicorn/prefer-type-error"
	| "unicorn/prevent-abbreviations"
	| "unicorn/relative-url-style"
	| "unicorn/require-array-join-separator"
	| "unicorn/require-number-to-fixed-digits-argument"
	| "unicorn/require-post-message-target-origin"
	| "unicorn/string-content"
	| "unicorn/switch-case-braces"
	| "unicorn/template-indent"
	| "unicorn/text-encoding-identifier-case"
	| "unicorn/throw-new-error"
>
