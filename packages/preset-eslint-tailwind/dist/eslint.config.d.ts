import { type Linter } from "eslint";
export declare function eslintTailwind(options: {
    readonly files: ReadonlyArray<string>;
}): Linter.FlatConfig;
