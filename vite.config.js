import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import autoprefixer from "autoprefixer";
import postcssFlexbugsFixes from "postcss-flexbugs-fixes";
import postcssPresetEnv from "postcss-preset-env";

export default defineConfig({
  plugins: [react()],
  css: {
    postcss: {
      plugins: [
        autoprefixer({
          grid: "autoplace", // 強制支援舊版 CSS Grid
        }),
        postcssFlexbugsFixes(), // 修復 Flexbox 和 Grid 的 bug
        postcssPresetEnv({
          stage: 3, // 啟用現代 CSS 功能並兼容舊版
          features: {
            "align-content": false, // 處理 align-items/align-self 問題
          },
        }),
      ],
    },
  },
});
