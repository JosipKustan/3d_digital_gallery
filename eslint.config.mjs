import { defineConfig, globalIgnores } from "eslint/config";
import next from "eslint-config-next";

export default defineConfig([
  ...next,
  {
    rules: {
      // Copy is written with plain apostrophes ("we'll", "it's"). React renders
      // them correctly, so escaping every one as &apos; only hurts readability.
      "react/no-unescaped-entities": "off",
    },
  },
  globalIgnores([".next/**", "out/**", ".netlify/**", "public/**"]),
]);
