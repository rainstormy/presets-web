import { type Linter } from "eslint";
export declare function eslintNext(options: {
    readonly files: ReadonlyArray<string>;
}): Linter.FlatConfig;
