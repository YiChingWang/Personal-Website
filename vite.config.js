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
        postcssGapProperties(), // 處理 gap 不兼容問題
        autoprefixer({
          grid: "autoplace", // 支持 IE 11 的 Grid
          overrideBrowserslist: ["last 2 versions", "IE 11"], // 明確指定兼容 IE
        }),
        postcssPresetEnv({
          stage: 3, // 啟用現代 CSS 特性
          features: {
            "align-content": false, // 禁止 align-content
          },
        }),
      ],
    },
  },
});
