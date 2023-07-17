import { options, parsers, printers } from "prettier-plugin-tailwindcss";
function tailwind() {
  return {
    plugins: [
      /**
       * @see https://github.com/tailwindlabs/prettier-plugin-tailwindcss
       */
      { options, parsers, printers }
    ]
  };
}
export {
  tailwind
};
