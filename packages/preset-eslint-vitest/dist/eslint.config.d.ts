import type { Linter } from "eslint";
export declare function vitest(options: {
    readonly files: ReadonlyArray<string>;
}): Linter.FlatConfig;
