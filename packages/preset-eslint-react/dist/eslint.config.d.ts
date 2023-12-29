import { type Linter } from "eslint";
export declare function eslintReact(options: {
    readonly files: ReadonlyArray<string>;
}): Linter.FlatConfig;
