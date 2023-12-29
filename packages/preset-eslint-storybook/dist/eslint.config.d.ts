import { type Linter } from "eslint";
export declare function eslintStorybook(options: {
    readonly files: ReadonlyArray<string>;
}): Linter.FlatConfig;
