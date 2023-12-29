import { eslintJsx } from "@rainstormy/preset-eslint-jsx";
import { eslintReact } from "@rainstormy/preset-eslint-react";
import "eslint";
function eslintPreact(options) {
  var _a;
  const reactPreset = eslintReact(options);
  const jsxPreset = eslintJsx(options);
  return {
    ...reactPreset,
    rules: {
      ...reactPreset.rules,
      /**
       * Preact uses the original HTML/SVG attribute names.
       * @see https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/no-unknown-property.md
       */
      "react/no-unknown-property": ((_a = jsxPreset.rules) == null ? void 0 : _a["react/no-unknown-property"]) ?? "off"
    },
    settings: {
      ...reactPreset.settings,
      react: {
        version: "18"
        // Preact 10 provides an API similar to React 18.
      }
    }
  };
}
export {
  eslintPreact
};
