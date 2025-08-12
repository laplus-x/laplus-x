/// <reference types="vitest" />
import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react-swc';
import { visualizer } from "rollup-plugin-visualizer";
import { defineConfig, loadEnv } from "vite";
import tsconfigPaths from 'vite-tsconfig-paths';

// https://vite.dev/config/
export default defineConfig(({ mode }) => {
  process.env = { ...process.env, ...loadEnv(mode, process.cwd(), "") };

  return ({
    base: "laplus-x",
    plugins: [
      react({ tsDecorators: true }),
      tailwindcss(),
      tsconfigPaths(),
      visualizer({
        filename: ".inspect/stats.html",
        gzipSize: process.env.DEBUG === "true",
        brotliSize: process.env.DEBUG === "true",
        open: process.env.DEBUG === "true",
      }),
    ],
    test: {
      globals: true,
      environment: "node",
      include: ['./src/**/*.test.ts'],
      setupFiles: ['./vitest.setup.ts']
    },
    esbuild: {
      drop: process.env.NODE_ENV == "production" ? ["console", "debugger"] : [],
    },
    build: {
      manifest: true,
      sourcemap: true,
      reportCompressedSize: true,
      rollupOptions: {
        output: {
          manualChunks: {
            "react-vendor": [
              "react-to-print",
              "react-router",
              "react-markdown",
              "react-i18next"
            ],
            "i18next-vendor": [
              "i18next",
              "i18next-browser-languagedetector",
              "i18next-http-backend",
            ],
          },
        },
      },
    },
  })
})
