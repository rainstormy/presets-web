import { type Linter } from "eslint";
export declare function eslintBase(options: {
    readonly files: ReadonlyArray<string>;
    readonly tsconfig?: ReadonlyArray<string> | string;
}): Linter.FlatConfig;
export declare function eslintAmbientTypeScriptModules(options: {
    readonly files: ReadonlyArray<string>;
}): Linter.FlatConfig;
export declare function eslintTestData(options: {
    readonly files: ReadonlyArray<string>;
}): Linter.FlatConfig;
