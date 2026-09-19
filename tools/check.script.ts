import { readFile } from "node:fs/promises"
import { resolve as resolvePath } from "node:path"
// oxlint-disable-next-line no-restricted-imports -- Access the `peerDependencies` field directly from `package.json`.
import packagejson from "../package.json" with { type: "json" }

await checkPeerDependencyRanges()

async function checkPeerDependencyRanges(): Promise<void> {
	const projectDirectory = resolvePath(import.meta.dirname, "..")
	const workspaceYaml = await readFile(resolvePath(projectDirectory, "pnpm-workspace.yaml"), "utf8")

	const catalogContent = /^catalog:(?:\s*\n|\s+.*)*/mu.exec(workspaceYaml)?.[0] ?? ""
	const catalog = new Map(
		catalogContent
			.split("\n")
			.filter((line) => line.startsWith("  ") && !line.startsWith("  #") && line.includes(": "))
			.map((line) => line.trim().split(": ") as [string, string])
			.map(([name, value]) => [name.replaceAll("'", "").trim(), value.trim()] as const),
	)

	for (const [name, range] of Object.entries(packagejson.peerDependencies)) {
		const catalogVersion = catalog.get(name)
		const minimumPeerVersion = range.trim().split(" ")[0].slice(">=".length)

		if (catalogVersion === undefined) {
			throw new Error(
				`Peer dependency '${name}' is missing in the catalog of 'pnpm-workspace.yaml'`,
			)
		}

		if (minimumPeerVersion !== catalogVersion) {
			throw new Error(
				`Peer dependency '${name}' with minimum version '${minimumPeerVersion}' does not match the catalog version '${catalogVersion}' of 'pnpm-workspace.yaml'`,
			)
		}
	}
}
