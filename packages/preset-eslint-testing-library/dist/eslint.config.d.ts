import { type Linter } from "eslint";
export declare function testingLibrary(options: {
    readonly files: ReadonlyArray<string>;
}): Linter.FlatConfig;
