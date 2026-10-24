import { beforeEach, expect, it } from "vitest"
import { oxlintOfficialRuleset } from "#oxlint/utilities/OxlintOfficialRuleset.ts"
import { oxlintPresetRuleset } from "#oxlint/utilities/OxlintPresetRuleset.ts"

let officialRuleset: Set<string>
let presetRuleset: Set<string>

beforeEach(async () => {
	officialRuleset = oxlintOfficialRuleset()
	presetRuleset = await oxlintPresetRuleset()
})

it("configures all available rules", () => {
	const unconfiguredRules = [...officialRuleset.difference(presetRuleset)]
	expect(unconfiguredRules, "Missing rules in the Oxlint presets").toEqual([])
})

it("does not configure any unknown rules", () => {
	const unknownRules = [...presetRuleset.difference(officialRuleset)]
	expect(unknownRules, "Unknown rules in the Oxlint presets").toEqual([])
})
