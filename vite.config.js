import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import autoprefixer from "autoprefixer";
import postcssGapProperties from "postcss-gap-properties";
import postcssPresetEnv from "postcss-preset-env";

export default defineConfig({
  plugins: [react()],
  css: {
    postcss: {
      plugins: [
        postcssGapProperties(),
        autoprefixer({
          grid: "autoplace",
          overrideBrowserslist: ["last 2 versions", "IE 11"], // 明確指定兼容 IE
        }),
        postcssPresetEnv({
          stage: 3,
          features: {
            "align-content": false,
          },
        }),
      ],
    },
  },
});
