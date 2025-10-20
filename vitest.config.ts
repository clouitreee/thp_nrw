/// <reference types="vitest" />
import { defineConfig } from "vitest/config";
import { fileURLToPath } from "node:url";
import path from "node:path";
import { createRequire } from "node:module";
import { readFileSync } from "node:fs";

const require = createRequire(import.meta.url);

let testEnvironment: "jsdom" | "node" = "jsdom";
try {
  require.resolve("jsdom");
} catch (error) {
  console.warn("jsdom not available; falling back to Node test environment", error);
  testEnvironment = "node";
}

const tsconfigUrl = new URL("./tsconfig.json", import.meta.url);
const tsconfigRaw = JSON.parse(readFileSync(tsconfigUrl, "utf-8"));

export default defineConfig({
  esbuild: {
    jsx: "automatic",
    jsxDev: true,
    tsconfigRaw,
  },
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
      "next/font": path.resolve(process.cwd(), "src/test/mocks/next-font.ts"),
    },
  },
  test: {
    environment: testEnvironment,
    setupFiles: ["./src/test/setup-tests.ts"],
    watch: false,
    coverage: {
      reporter: ["text", "json", "html"],
    },
    passWithNoTests: true,
    include: [
      "tests/**/*.test.{ts,tsx}",
      "tests/**/*.spec.{ts,tsx}",
      "src/**/*.{test,spec}.{ts,tsx}",
    ],
    exclude: ["**/*.ui.spec.*", "e2e/**/*"],
  },
});
