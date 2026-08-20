import type { OxlintConfig, OxlintOverride } from "oxlint"

/**
 * @see https://oxc.rs/docs/guide/usage/linter/config-file-reference.html
 * @see https://oxc.rs/docs/guide/usage/linter/rules.html
 */
export function oxlintReactRouterPreset() {
	return {
		overrides: [overrideRoutes(), overrideRouteConfig()],
	} as const satisfies OxlintConfig
}

/**
 * @see https://reactrouter.com/how-to/file-route-conventions
 * @see https://reactrouter.com/start/framework/route-module
 */
function overrideRoutes() {
	return {
		files: ["**/src/routes/**.tsx", "**/src/root.tsx"],
		rules: {
			"eslint/no-restricted-exports": "off", // Allow default exports of routes.
			"react/only-export-components": [
				"warn",
				{
					allowExportNames: [
						"action",
						"clientAction",
						"clientLoader",
						"clientMiddleware",
						"ErrorBoundary",
						"handle",
						"headers",
						"HydrateFallback",
						"links",
						"loader",
						// "meta", // Discouraged in React 19.
						"middleware",
						"shouldRevalidate",
					],
				},
			],
			"unicorn/filename-case": "off", // Allow all route names.
		},
	} as const satisfies OxlintOverride
}

/**
 * @see https://reactrouter.com/how-to/file-route-conventions
 */
function overrideRouteConfig() {
	return {
		files: ["**/src/routes.ts"],
		rules: {
			"eslint/no-restricted-exports": "off", // Allow default exports of the route configuration.
			"unicorn/filename-case": "off",
		},
	} as const satisfies OxlintOverride
}
