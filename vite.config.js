import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import autoprefixer from "autoprefixer";

export default defineConfig({
  plugins: [react()],
  css: {
    postcss: {
      plugins: [
        autoprefixer({
          grid: "autoplace", // 強制支援舊版 CSS Grid
        }),
      ],
    },
  },
});
