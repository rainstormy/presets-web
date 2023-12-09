import { type Linter } from "eslint";
export declare function next(options: {
    readonly files: ReadonlyArray<string>;
}): Linter.FlatConfig;
