import { type EslintPluginRuleset } from "../EslintConfig.js"

export type EslintPluginFunctionalRuleset = EslintPluginRuleset<
	"functional",
	| "functional/functional-parameters"
	| "functional/immutable-data"
	| "functional/no-classes"
	| "functional/no-conditional-statements"
	| "functional/no-expression-statements"
	| "functional/no-let"
	| "functional/no-loop-statements"
	| "functional/no-mixed-types"
	| "functional/no-promise-reject"
	| "functional/no-return-void"
	| "functional/no-this-expressions"
	| "functional/no-throw-statement"
	| "functional/no-try-statement"
	| "functional/prefer-immutable-types"
	| "functional/prefer-property-signatures"
	| "functional/prefer-readonly-type"
	| "functional/prefer-tacit"
	| "functional/readonly-type"
	| "functional/type-declaration-immutability"
>
