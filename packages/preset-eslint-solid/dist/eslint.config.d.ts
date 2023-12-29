import { type Linter } from "eslint";
export declare function eslintSolid(options: {
    readonly files: ReadonlyArray<string>;
}): Linter.FlatConfig;
