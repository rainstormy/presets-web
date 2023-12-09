import { type Linter } from "eslint";
export declare function base(options: {
    readonly files: ReadonlyArray<string>;
    readonly tsconfig?: ReadonlyArray<string> | string;
}): Linter.FlatConfig;
export declare function ambientTypeScriptModules(options: {
    readonly files: ReadonlyArray<string>;
}): Linter.FlatConfig;
export declare function testData(options: {
    readonly files: ReadonlyArray<string>;
}): Linter.FlatConfig;
