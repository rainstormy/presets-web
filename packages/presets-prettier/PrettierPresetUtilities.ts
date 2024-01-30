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
