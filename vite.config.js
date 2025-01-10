import { defineConfig } from "vite";

export default defineConfig({
  server: {
    host: "0.0.0.0",
    port: 8080,
  },
  build: {
    outDir: "build",
    emptyOutDir: true,
  },
});