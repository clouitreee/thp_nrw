declare module "@vitejs/plugin-react" {
  import type { PluginOption } from "vite";
  interface ReactPluginOptions {
    jsxRuntime?: "classic" | "automatic";
  }
  export default function react(options?: ReactPluginOptions): PluginOption;
}

declare module "vite-tsconfig-paths" {
  import type { PluginOption } from "vite";
  export default function tsconfigPaths(): PluginOption;
}

declare module "jsdom" {
  export class JSDOM {
    constructor(html?: string, options?: Record<string, unknown>);
    window: Record<string, unknown>;
  }
}
