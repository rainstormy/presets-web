import { type Linter } from "eslint";
export declare function eslintVitest(options: {
    readonly files: ReadonlyArray<string>;
}): Linter.FlatConfig;
