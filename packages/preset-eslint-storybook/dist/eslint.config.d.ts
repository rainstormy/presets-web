import { type Linter } from "eslint";
export declare function storybook(options: {
    readonly files: ReadonlyArray<string>;
}): Linter.FlatConfig;
