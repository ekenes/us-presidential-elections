import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { viteStaticCopy } from "vite-plugin-static-copy";

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    viteStaticCopy({
      structured: true,
      targets: [
        {
          src: "node_modules/@arcgis/core/assets/**/*",
          dest: "arcgis-assets/core",
          rename: { stripBase: 4 },
        },
        {
          src: "node_modules/@arcgis/map-components/dist/cdn/assets/**/*",
          dest: "arcgis-assets/map-components/assets",
          rename: { stripBase: 6 },
        },
        {
          src: "node_modules/@arcgis/common-components/dist/cdn/assets/**/*",
          dest: "arcgis-assets/common-components/assets",
          rename: { stripBase: 6 },
        },
        {
          src: "node_modules/@esri/calcite-components/dist/cdn/assets/**/*",
          dest: "arcgis-assets/calcite-components/assets",
          rename: { stripBase: 6 },
        },
      ],
    }),
  ],
  base: "/us-presidential-elections/",
  build: {
    outDir: "dist",
    assetsDir: "assets",
    sourcemap: true,
    rollupOptions: {
      output: {
        manualChunks: undefined,
      },
    },
  },
  resolve: {
    alias: {
      "@": "/src",
    },
  },
});
