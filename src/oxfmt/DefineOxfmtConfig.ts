import type { OxfmtConfig } from "oxfmt"
import { oxfmtPreset } from "#oxfmt/OxfmtPreset.ts"
import { deepMerge } from "#utilities/Objects.ts"

export function defineOxfmtConfig(overrides: Partial<OxfmtConfig> = {}) {
	const base: OxfmtConfig = oxfmtPreset()
	return deepMerge<OxfmtConfig>(base, overrides)
}
