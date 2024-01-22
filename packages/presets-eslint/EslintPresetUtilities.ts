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

export function assertOptions(
	candidate: NonNullable<unknown>,
	presetName: string,
): asserts candidate is object {
	if (typeof candidate !== "object") {
		throw new TypeError(
			`\`${presetName}\` expects \`object\`, but got \`${typeof candidate}\``,
		)
	}
}

export type EslintPresetOptionsTargetFilePatterns = {
	readonly targetFilePatterns?: ReadonlyArray<string>
}

export function assertOptionsTargetFilePatterns(
	candidate: object,
	presetName: string,
): asserts candidate is EslintPresetOptionsTargetFilePatterns {
	if ("targetFilePatterns" in candidate) {
		assertStringArray(
			candidate.targetFilePatterns,
			presetName,
			"targetFilePatterns",
		)
	}
}

export type EslintPresetOptionsTsConfigFiles = {
	readonly tsconfigFiles?: ReadonlyArray<string> | "closest-to-each-source-file"
}

export function assertOptionsTsConfigFiles(
	candidate: object,
	presetName: string,
): asserts candidate is EslintPresetOptionsTsConfigFiles {
	if (
		"tsconfigFiles" in candidate &&
		candidate.tsconfigFiles !== "closest-to-each-source-file"
	) {
		assertStringArray(candidate.tsconfigFiles, presetName, "tsconfigFiles")
	}
}

export type EslintPresetOptionsAdditionalPresets = {
	readonly additionalPresets?: ReadonlyArray<EslintPreset>
}

export function assertOptionsAdditionalPresets(
	candidate: object,
	presetName: string,
): asserts candidate is EslintPresetOptionsAdditionalPresets {
	if ("additionalPresets" in candidate) {
		if (!Array.isArray(candidate.additionalPresets)) {
			throw new TypeError(
				`\`${presetName}\` expects \`additionalPresets\` to be \`Array<EslintPreset>\`, but got \`${typeof candidate}\``,
			)
		}

		const invalidElements = candidate.additionalPresets.filter(
			(element) => !isEslintPreset(element),
		)

		if (invalidElements.length > 0) {
			throw new TypeError(
				`\`${presetName}\` expects \`additionalPresets\` to be \`Array<EslintPreset>\`, but had ${invalidElements.length} invalid element(s)`,
			)
		}

		const duplicates = candidate.additionalPresets
			.map((preset) => preset[eslintPresetIdentifier])
			.filter(
				(identifier, index, allIdentifiers) =>
					allIdentifiers.indexOf(identifier) !== index,
			)

		if (duplicates.length > 0) {
			const uniqueDuplicates = [...new Set(duplicates)]
			const formattedDuplicates = uniqueDuplicates.join(", ")
			throw new TypeError(
				`\`${presetName}\` expects \`additionalPresets\` to be \`Array<EslintPreset>\`, but had ${uniqueDuplicates.length} duplicate(s): ${formattedDuplicates}`,
			)
		}
	}
}

function isEslintPreset(candidate: unknown): candidate is EslintPreset {
	return (
		typeof candidate === "object" &&
		candidate !== null &&
		eslintPresetIdentifier in candidate &&
		typeof candidate[eslintPresetIdentifier] === "string" &&
		(!(eslintPresetOrdinal in candidate) ||
			typeof candidate[eslintPresetOrdinal] === "number") &&
		"files" in candidate &&
		Array.isArray(candidate.files) &&
		"rules" in candidate &&
		typeof candidate.rules === "object" &&
		candidate.rules !== null
	)
}

function assertStringArray(
	candidate: unknown,
	presetName: string,
	propertyName: string,
): asserts candidate is ReadonlyArray<string> {
	if (!Array.isArray(candidate)) {
		throw new TypeError(
			`\`${presetName}\` expects \`${propertyName}\` to be \`Array<string>\`, but got \`${typeof candidate}\``,
		)
	}

	const invalidElements = candidate.filter(
		(element) => typeof element !== "string",
	)

	if (invalidElements.length > 0) {
		throw new TypeError(
			`\`${presetName}\` expects \`${propertyName}\` to be \`Array<string>\`, but had ${invalidElements.length} invalid element(s)`,
		)
	}
}
