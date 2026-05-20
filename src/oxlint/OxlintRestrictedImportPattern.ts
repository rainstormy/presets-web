type OxlintRestrictedImportPattern = {
	regex: string
	message: string
}

type RestrictedImportPatterns = Array<OxlintRestrictedImportPattern>

/**
 * Normalised paths reduce variations in import statements to improve discoverability and reduce diff churn.
 * Using `#` as the path alias prefix preserves compatibility with Node.js subpath imports.
 */
const normalisedPaths: RestrictedImportPatterns = [
	{
		// language=regexp
		regex: String.raw`[^:]//`, // Allow importing from protocols like `https://`.
		message: "Delete redundant slash characters.",
	},
	{
		// language=regexp
		regex: String.raw`/\.\.?/`,
		message: "Delete path traversal segments like `/./` and `/../`.",
	},
	{
		// language=regexp
		regex: String.raw`^[#@]/`,
		message:
			"Prefer named path aliases (e.g. '#lib/*' and '#utilities/*') over a global wildcard path alias like `#/*` and `@/*`.",
	},
	{
		// language=regexp
		regex: String.raw`^[^#@\w].+/`, // Allow importing scoped npm packages (`@scope/package-name`).
		message: "Prefer '#' as the prefix of path aliases.",
	},
]

/**
 * Explicit file extensions improve file resolution performance, as tools do not have to guess the correct file extension.
 */
const explicitFileExtensions: OxlintRestrictedImportPattern = {
	// language=regexp
	regex: String.raw`^[#.].*/([^./]+)(\.(decorators|fixtures|mocks|stories|tests))?$`, // Enforce file extensions on local files only.
	message: "Include the file extension.",
}

/**
 * Path aliases decouple the code from the directory structure.
 */
const noRelativePaths: OxlintRestrictedImportPattern = {
	// language=regexp
	regex: String.raw`^[/.]`,
	message: "Prefer path aliases over relative paths.",
}

/**
 * Using standardised APIs decouples the code from Node.js.
 */
const noNodeProtocol: OxlintRestrictedImportPattern = {
	// language=regexp
	regex: String.raw`^node:.+`,
	message: "Prefer the standard JavaScript library over Node.js specific modules.",
}

const noConfigs: OxlintRestrictedImportPattern = {
	// language=regexp
	regex: String.raw`\.config\.[jt]s$`,
	message: "Do not import configuration files.",
}

const noDecorators: OxlintRestrictedImportPattern = {
	// language=regexp
	regex: String.raw`\.decorators\.[jt]sr?x?$`,
	message: "Do not import story decorators.",
}

const noFixtures: OxlintRestrictedImportPattern = {
	// language=regexp
	regex: String.raw`\.fixtures\.[jt]sr?x?$`,
	message: "Do not import test fixtures.",
}

const noMocks: OxlintRestrictedImportPattern = {
	// language=regexp
	regex: String.raw`\.mocks\.[jt]sr?x?$`,
	message: "Do not import module mocks.",
}

const noScripts: OxlintRestrictedImportPattern = {
	// language=regexp
	regex: String.raw`\.script\.[jt]s$`,
	message: "Do not import Node.js scripts.",
}

const noStories: OxlintRestrictedImportPattern = {
	// language=regexp
	regex: String.raw`\.stories\.[jt]sr?x?$`,
	message: "Do not import stories.",
}

const noTests: OxlintRestrictedImportPattern = {
	// language=regexp
	regex: String.raw`\.tests\.[jt]sr?x?$`,
	message: "Do not import unit tests.",
}

export function oxlintRestrictedImportPatterns(
	options: {
		allowRelativePaths?: boolean
		allowNodejs?: boolean
		allowDecorators?: boolean
		allowFixtures?: boolean
		allowMocks?: boolean
		allowStories?: boolean
		allowTests?: boolean
	} = {},
): RestrictedImportPatterns {
	return [
		...normalisedPaths,
		explicitFileExtensions,
		!options.allowRelativePaths && noRelativePaths,
		!options.allowNodejs && noNodeProtocol,
		noConfigs,
		!options.allowDecorators && noDecorators,
		!options.allowFixtures && noFixtures,
		!options.allowMocks && noMocks,
		noScripts,
		!options.allowStories && noStories,
		!options.allowTests && noTests,
	].filter((pattern) => pattern !== false)
}
