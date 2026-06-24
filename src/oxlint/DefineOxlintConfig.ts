import type { OxlintConfig } from "oxlint"
import { oxlintPreset } from "#oxlint/OxlintPreset.ts"
import { deepMerge } from "#utilities/Objects.ts"

export function defineOxlintConfig(overrides: Partial<OxlintConfig> = {}): OxlintConfig {
	const base: OxlintConfig = { extends: [oxlintPreset()] }
	return deepMerge<OxlintConfig>(base, overrides)
}
