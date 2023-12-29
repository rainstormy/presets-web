import { type Linter } from "eslint";
export declare function eslintJsx(options: {
    readonly files: ReadonlyArray<string>;
}): Linter.FlatConfig;
