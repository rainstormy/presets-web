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
): Array<OxlintRestrictedImportPattern> {
	return [
		...normalisedPaths(),
		explicitFileExtensions(),
		options.allowRelativePaths !== true && noRelativePaths(),
		options.allowNodejs !== true && noNodeProtocol(),
		noConfigs(),
		options.allowDecorators !== true && noDecorators(),
		options.allowFixtures !== true && noFixtures(),
		options.allowMocks !== true && noMocks(),
		noScripts(),
		options.allowStories !== true && noStories(),
		options.allowTests !== true && noTests(),
	].filter((pattern) => pattern !== false)
}

type OxlintRestrictedImportPattern = {
	regex: string
	message: string
}

/**
 * Normalised paths reduce variations in import statements to improve discoverability and reduce diff churn.
 * Using `#` as the path alias prefix preserves compatibility with Node.js subpath imports.
 */
function normalisedPaths(): Array<OxlintRestrictedImportPattern> {
	return [
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
}

/**
 * Explicit file extensions improve file resolution performance, as tools do not have to guess the correct file extension.
 */
function explicitFileExtensions(): OxlintRestrictedImportPattern {
	return {
		// language=regexp
		regex: String.raw`^[#.].*/([^./]+)(\.(decorators|fixtures|mocks|stories|tests))?$`, // Enforce file extensions on local files only.
		message: "Include the file extension.",
	}
}

/**
 * Path aliases decouple the code from the directory structure.
 */
function noRelativePaths(): OxlintRestrictedImportPattern {
	return {
		// language=regexp
		regex: String.raw`^[/.]`,
		message: "Prefer path aliases over relative paths.",
	}
}

/**
 * Using standardised APIs decouples the code from Node.js.
 */
function noNodeProtocol(): OxlintRestrictedImportPattern {
	return {
		// language=regexp
		regex: String.raw`^node:.+`,
		message: "Prefer the standard JavaScript library over Node.js specific modules.",
	}
}

function noConfigs(): OxlintRestrictedImportPattern {
	return {
		// language=regexp
		regex: String.raw`\.config\.[jt]s$`,
		message: "Do not import configuration files.",
	}
}

function noDecorators(): OxlintRestrictedImportPattern {
	return {
		// language=regexp
		regex: String.raw`\.decorators\.[jt]sr?x?$`,
		message: "Do not import story decorators.",
	}
}

function noFixtures(): OxlintRestrictedImportPattern {
	return {
		// language=regexp
		regex: String.raw`\.fixtures\.[jt]sr?x?$`,
		message: "Do not import test fixtures.",
	}
}

function noMocks(): OxlintRestrictedImportPattern {
	return {
		// language=regexp
		regex: String.raw`\.mocks\.[jt]sr?x?$`,
		message: "Do not import module mocks.",
	}
}

function noScripts(): OxlintRestrictedImportPattern {
	return {
		// language=regexp
		regex: String.raw`\.script\.[jt]s$`,
		message: "Do not import Node.js scripts.",
	}
}

function noStories(): OxlintRestrictedImportPattern {
	return {
		// language=regexp
		regex: String.raw`\.stories\.[jt]sr?x?$`,
		message: "Do not import stories.",
	}
}

function noTests(): OxlintRestrictedImportPattern {
	return {
		// language=regexp
		regex: String.raw`\.tests\.[jt]sr?x?$`,
		message: "Do not import unit tests.",
	}
}
