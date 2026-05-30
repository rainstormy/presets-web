import type { OxlintConfig, OxlintOverride } from "oxlint"

/**
 * @see https://oxc.rs/docs/guide/usage/linter/config-file-reference.html
 * @see https://oxc.rs/docs/guide/usage/linter/rules.html
 */
export function oxlintReactRouterPreset(): OxlintConfig {
	return {
		overrides: [overrideRoutes(), overrideRouteConfig()],
	}
}

/**
 * @see https://reactrouter.com/how-to/file-route-conventions
 * @see https://reactrouter.com/start/framework/route-module
 */
function overrideRoutes(): OxlintOverride {
	return {
		files: ["src/routes/**.tsx", "src/root.tsx"],
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
	}
}

/**
 * @see https://reactrouter.com/how-to/file-route-conventions
 */
function overrideRouteConfig(): OxlintOverride {
	return {
		files: ["src/routes.ts"],
		rules: {
			"eslint/no-restricted-exports": "off", // Allow default exports of the route configuration.
			"unicorn/filename-case": "off",
		},
	}
}
