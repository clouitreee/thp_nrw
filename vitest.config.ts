import type { PluginOption } from "vite";
import { defineConfig } from "vitest/config";

export default defineConfig(async () => {
  const plugins: PluginOption[] = [];

  try {
    const tsconfigPaths = (await import("vite-tsconfig-paths")).default;
    plugins.push(tsconfigPaths());
  } catch (error) {
    console.warn("vite-tsconfig-paths not available; module resolution may differ from Next.js", error);
  }

  try {
    const react = (await import("@vitejs/plugin-react")).default;
    plugins.push(react());
  } catch (error) {
    console.warn("@vitejs/plugin-react not available; skipping React-specific transforms", error);
  }

  return {
    plugins,
    test: {
      environment: "jsdom",
      setupFiles: ["./src/test/setup-tests.ts"],
      coverage: {
        reporter: ["text", "json", "html"],
      },
    },
  };
});
