import { defineConfig } from "vitest/config";

type PluginOption = import("vite").PluginOption;

type PluginFactory = () => PluginOption;

type Loader<T> = () => Promise<T>;

async function loadModule<T>(loader: Loader<T>, fallback: () => T, label: string): Promise<T> {
  try {
    return await loader();
  } catch (error) {
    console.warn(
      `[vitest] ${label} unavailable; applying fallback`,
      error instanceof Error ? error.message : error
    );
    return fallback();
  }
}

const loadReactPlugin = () =>
  loadModule<PluginFactory>(
    () => import("@vitejs/plugin-react").then((mod) => mod.default),
    () => () => ({
      name: "mock-react-plugin",
      enforce: "pre",
      config() {
        return {
          esbuild: {
            jsx: "automatic",
            jsxDev: true,
          },
        };
      },
    }),
    "@vitejs/plugin-react"
  );

const loadTsconfigPaths = () =>
  loadModule<PluginOption>(
    () => import("vite-tsconfig-paths").then((mod) => mod.default()),
    () => ({ name: "mock-tsconfig-paths" }),
    "vite-tsconfig-paths"
  );

async function resolveEnvironment(): Promise<"jsdom" | "node"> {
  try {
    await import("jsdom");
    return "jsdom";
  } catch (error) {
    console.warn(
      "[vitest] jsdom unavailable; using node environment",
      error instanceof Error ? error.message : error
    );
    return "node";
  }
}

export default defineConfig(async () => {
  const [react, tsconfigPaths, environment] = await Promise.all([
    loadReactPlugin(),
    loadTsconfigPaths(),
    resolveEnvironment(),
  ]);

  return {
    plugins: [tsconfigPaths, react()],
    test: {
      environment,
      setupFiles: ["./src/test/setup-tests.ts"],
      coverage: {
        reporter: ["text", "json", "html"],
      },
    },
  };
});
