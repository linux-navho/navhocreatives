import { vitePlugin as remix } from "@remix-run/dev";
import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";

export default defineConfig({
  base: '/navhocreatives/',
  plugins: [
    remix({
      basename: '/navhocreatives/',
      ssr: false,
    }),
    tsconfigPaths(),
  ],
});
