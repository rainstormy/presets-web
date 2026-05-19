import { mkdir, readFile, readdir, writeFile } from "node:fs/promises"

await minifyJsoncFiles("src/typescript/", "dist/typescript/")

async function minifyJsoncFiles(inputDirectory: string, outputDirectory: string): Promise<void> {
	const filenames = await readdir(inputDirectory)

	await mkdir(outputDirectory, { recursive: true })
	await Promise.all(
		filenames.map((filename) => {
			const inputPath = `${inputDirectory}${filename}`
			const outputPath = `${outputDirectory}${filename.slice(0, -1)}` // Convert `.jsonc` to `.json`.
			return minifyJsoncFile(inputPath, outputPath)
		}),
	)
}

async function minifyJsoncFile(inputPath: string, outputPath: string): Promise<void> {
	try {
		const jsoncContent = await readFile(inputPath, "utf8")
		const jsonContent = removeJsonLineComments(jsoncContent)

		// Discard the `$schema` field.
		const { $schema: _ignored, ...fieldsToKeep } = JSON.parse(jsonContent)

		const minifiedOutput = JSON.stringify(fieldsToKeep)
		await writeFile(outputPath, minifiedOutput, "utf8")
	} catch (error: unknown) {
		const message = error instanceof Error ? error.message : "Unknown error"
		throw new Error(`${inputPath}: ${message}.`, { cause: error })
	}
}

function removeJsonLineComments(jsoncContent: string): string {
	return jsoncContent.replaceAll(/(?<=["}\]0-9e],?\s|\t)\/\/.*$/gmu, "")
}
