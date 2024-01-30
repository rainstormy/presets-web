import { type Linter } from "eslint"

export type EslintConfig = Omit<Linter.FlatConfig, "files" | "rules"> & {
	readonly files: ReadonlyArray<string>
	readonly rules: Linter.RulesRecord
}

export const eslintPresetIdentifier = "eslintPresetIdentifier"
export const eslintPresetOrdinal = "eslintPresetOrdinal"

export type EslintPreset = EslintConfig & {
	readonly [eslintPresetIdentifier]: string
	readonly [eslintPresetOrdinal]?: number
}
