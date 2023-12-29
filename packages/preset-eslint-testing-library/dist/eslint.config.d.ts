import { type Linter } from "eslint";
export declare function eslintTestingLibrary(options: {
    readonly files: ReadonlyArray<string>;
}): Linter.FlatConfig;
