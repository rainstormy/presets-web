import "eslint";
import tailwindPlugin from "eslint-plugin-tailwindcss";
function tailwind(options) {
  return {
    files: [...options.files],
    plugins: {
      tailwind: tailwindPlugin
    },
    /**
     * @see https://github.com/francoismassart/eslint-plugin-tailwindcss#supported-rules tailwindcss
     */
    rules: {
      /**
       * Prettier supersedes this rule.
       * @see https://github.com/francoismassart/eslint-plugin-tailwindcss/blob/master/docs/rules/classnames-order.md
       */
      "tailwind/classnames-order": "off",
      /**
       * @see https://github.com/francoismassart/eslint-plugin-tailwindcss/blob/master/docs/rules/enforces-negative-arbitrary-values.md
       */
      "tailwind/enforces-negative-arbitrary-values": "error",
      /**
       * @see https://github.com/francoismassart/eslint-plugin-tailwindcss/blob/master/docs/rules/enforces-shorthand.md
       */
      "tailwind/enforces-shorthand": "error",
      /**
       * Detects obsolete code snippets borrowed from the Internet.
       * @see https://github.com/francoismassart/eslint-plugin-tailwindcss/blob/master/docs/rules/migration-from-tailwind-2.md
       */
      "tailwind/migration-from-tailwind-2": "error",
      /**
       * Arbitrary values are allowed.
       * @see https://github.com/francoismassart/eslint-plugin-tailwindcss/blob/master/docs/rules/no-arbitrary-value.md
       */
      "tailwind/no-arbitrary-value": "off",
      /**
       * @see https://github.com/francoismassart/eslint-plugin-tailwindcss/blob/master/docs/rules/no-contradicting-classname.md
       */
      "tailwind/no-contradicting-classname": "error",
      /**
       * Catches typos in class names.
       * Overriding the configuration of this rule is recommended to improve its performance.
       * @see https://github.com/francoismassart/eslint-plugin-tailwindcss/blob/master/docs/rules/no-custom-classname.md
       */
      "tailwind/no-custom-classname": "error"
    }
  };
}
export {
  tailwind
};
