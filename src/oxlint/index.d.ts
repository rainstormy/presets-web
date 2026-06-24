import type { OxlintConfig } from "oxlint"

export declare function defineOxlintConfig(overrides?: Partial<OxlintConfig>): OxlintConfig

export declare function oxlintPreset(): OxlintConfig

export declare function oxlintNextjsPreset(): OxlintConfig

export declare function oxlintReactPreset(): OxlintConfig

export declare function oxlintReactRouterPreset(): OxlintConfig

export declare function oxlintStorybookPreset(): OxlintConfig

export declare function oxlintRestrictedImportPatterns(options?: {
	allowRelativePaths?: boolean
	allowNodejs?: boolean
	allowDecorators?: boolean
	allowFixtures?: boolean
	allowMocks?: boolean
	allowStories?: boolean
	allowTests?: boolean
}): Array<{ regex?: string; message?: string }>
