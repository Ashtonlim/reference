import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

import { resolve } from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
  },
  // allows you to see which line CSS comes from in inspect tool.
  css: {
    devSourcemap: true,
  },
  // resolve: {
  //     alias: {
  //         src: path.resolve(__dirname, 'src'),
  //     },
  // },
});
