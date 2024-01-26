import { type Config, type Plugin } from "prettier"

export type PrettierConfig = Omit<Config, "plugins"> & {
	readonly plugins: ReadonlyArray<Plugin>
}

export const prettierPresetIdentifier = "prettierPresetIdentifier"
export const prettierPresetOrdinal = "prettierPresetOrdinal"

export type PrettierPreset = PrettierConfig & {
	readonly [prettierPresetIdentifier]: string
	readonly [prettierPresetOrdinal]?: number
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

export type PrettierPresetOptionsAdditionalPresets = {
	readonly additionalPresets?: ReadonlyArray<PrettierPreset>
}

export function assertOptionsAdditionalPresets(
	candidate: object,
	presetName: string,
): asserts candidate is PrettierPresetOptionsAdditionalPresets {
	if ("additionalPresets" in candidate) {
		if (!Array.isArray(candidate.additionalPresets)) {
			throw new TypeError(
				`\`${presetName}\` expects \`additionalPresets\` to be \`Array<PrettierPreset>\`, but got \`${typeof candidate}\``,
			)
		}

		const invalidElements = candidate.additionalPresets.filter(
			(element) => !isPrettierPreset(element),
		)

		if (invalidElements.length > 0) {
			throw new TypeError(
				`\`${presetName}\` expects \`additionalPresets\` to be \`Array<PrettierPreset>\`, but had ${invalidElements.length} invalid element(s)`,
			)
		}

		const duplicates = candidate.additionalPresets
			.map((preset) => preset[prettierPresetIdentifier])
			.filter(
				(identifier, index, allIdentifiers) =>
					allIdentifiers.indexOf(identifier) !== index,
			)

		if (duplicates.length > 0) {
			const uniqueDuplicates = [...new Set(duplicates)]
			const formattedDuplicates = uniqueDuplicates.join(", ")
			throw new TypeError(
				`\`${presetName}\` expects \`additionalPresets\` to be \`Array<PrettierPreset>\`, but had ${uniqueDuplicates.length} duplicate(s): ${formattedDuplicates}`,
			)
		}
	}
}

function isPrettierPreset(candidate: unknown): candidate is PrettierPreset {
	return (
		typeof candidate === "object" &&
		candidate !== null &&
		prettierPresetIdentifier in candidate &&
		typeof candidate[prettierPresetIdentifier] === "string" &&
		(!(prettierPresetOrdinal in candidate) ||
			typeof candidate[prettierPresetOrdinal] === "number") &&
		"plugins" in candidate &&
		Array.isArray(candidate.plugins)
	)
}
