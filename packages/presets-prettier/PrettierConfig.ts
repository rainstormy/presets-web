import { type Config, type Plugin } from "prettier"

export type PrettierConfig = Omit<Config, "plugins"> & {
	readonly plugins: ReadonlyArray<Plugin>
}

export type PrettierPreset = PrettierConfig & {
	readonly presetOrdinal?: number
}
