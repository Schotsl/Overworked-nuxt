import { defineNuxtConfig } from "nuxt";

import eslintPlugin from "vite-plugin-eslint";

export default defineNuxtConfig({
  target: "static",
  vite: {
    plugins: [eslintPlugin()],
  },
});
