import storybookPlugin from "eslint-plugin-storybook";
import "eslint";
function storybook(options) {
  return {
    files: [...options.files],
    plugins: {
      storybook: storybookPlugin
    },
    /**
     * @see https://github.com/storybookjs/eslint-plugin-storybook storybook
     */
    rules: {
      /**
       * @see https://nextjs.org/docs/messages/google-font-display
       */
      "next/google-font-display": "error",
      "react/jsx-props-no-spreading": "off",
      // This rule would have prevented conventional use of the `render` function with args as props.
      /**
       * @see https://github.com/storybookjs/eslint-plugin-storybook/blob/main/docs/rules/await-interactions.md
       */
      "storybook/await-interactions": "error",
      /**
       * @see https://github.com/storybookjs/eslint-plugin-storybook/blob/main/docs/rules/context-in-play-function.md
       */
      "storybook/context-in-play-function": "error",
      /**
       * @see https://github.com/storybookjs/eslint-plugin-storybook/blob/main/docs/rules/csf-component.md
       */
      "storybook/csf-component": "error",
      /**
       * @see https://github.com/storybookjs/eslint-plugin-storybook/blob/main/docs/rules/default-exports.md
       */
      "storybook/default-exports": "error",
      /**
       * @see https://github.com/storybookjs/eslint-plugin-storybook/blob/main/docs/rules/hierarchy-separator.md
       */
      "storybook/hierarchy-separator": "error",
      /**
       * @see https://github.com/storybookjs/eslint-plugin-storybook/blob/main/docs/rules/no-redundant-story-name.md
       */
      "storybook/no-redundant-story-name": "error",
      /**
       * @see https://github.com/storybookjs/eslint-plugin-storybook/blob/main/docs/rules/no-stories-of.md
       */
      "storybook/no-stories-of": "error",
      /**
       * @see https://github.com/storybookjs/eslint-plugin-storybook/blob/main/docs/rules/no-title-property-in-meta.md
       */
      "storybook/no-title-property-in-meta": "error",
      /**
       * @see https://github.com/storybookjs/eslint-plugin-storybook/blob/main/docs/rules/no-uninstalled-addons.md
       */
      "storybook/no-uninstalled-addons": "error",
      /**
       * @see https://github.com/storybookjs/eslint-plugin-storybook/blob/main/docs/rules/prefer-pascal-case.md
       */
      "storybook/prefer-pascal-case": "error",
      /**
       * @see https://github.com/storybookjs/eslint-plugin-storybook/blob/main/docs/rules/story-exports.md
       */
      "storybook/story-exports": "error",
      /**
       * @see https://github.com/storybookjs/eslint-plugin-storybook/blob/main/docs/rules/use-storybook-expect.md
       */
      "storybook/use-storybook-expect": "error",
      /**
       * @see https://github.com/storybookjs/eslint-plugin-storybook/blob/main/docs/rules/use-storybook-testing-library.md
       */
      "storybook/use-storybook-testing-library": "error"
    }
  };
}
export {
  storybook
};
