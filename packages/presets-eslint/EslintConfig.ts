import { type ESLint, type Linter } from "eslint"

export type EslintPartialConfig<Ruleset extends EslintRuleset<string>> = Omit<
	Linter.FlatConfig,
	"files" | "plugins" | "rules"
> & {
	readonly files: ReadonlyArray<string>
	readonly plugins?: Partial<
		Readonly<Record<PluginFromRuleName<keyof Ruleset>, ESLint.Plugin>>
	>
	readonly rules: Partial<Ruleset>
}

export type EslintCompleteConfig<Ruleset extends EslintRuleset<string>> = Omit<
	Linter.FlatConfig,
	"files" | "plugins" | "rules"
> & {
	readonly files: ReadonlyArray<string>
	readonly plugins: Readonly<
		Record<PluginFromRuleName<keyof Ruleset>, ESLint.Plugin>
	>
	readonly rules: Ruleset
}

export type EslintPreset<
	InheritedRuleset extends EslintRuleset<string>,
	Ruleset extends EslintRuleset<string> | null = null,
> = EslintPartialConfig<InheritedRuleset> &
	(Ruleset extends object ? EslintCompleteConfig<Ruleset> : unknown) & {
		readonly presetOrdinal?: number
	}

type PluginFromRuleName<RuleName extends number | string | symbol> =
	RuleName extends `${infer PluginName}/${string}` ? PluginName : never

export type EslintPluginRuleset<
	PluginName extends string,
	RuleName extends `${PluginName}/${string}`,
> = EslintRuleset<RuleName>

export type EslintRuleset<RuleName extends string> = Readonly<
	Record<RuleName, EslintRuleSeverityAndOptions>
>

type EslintRuleSeverityAndOptions =
	| readonly ["error", unknown, ...ReadonlyArray<unknown>]
	| "error"
	| "off"
