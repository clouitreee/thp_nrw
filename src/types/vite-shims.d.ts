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

declare module "@playwright/test" {
  export const test: any;
  export const expect: any;
  export const devices: Record<string, Record<string, unknown>>;
  export interface PlaywrightTestConfig {
    [key: string]: unknown;
  }
  export function defineConfig(config: PlaywrightTestConfig): PlaywrightTestConfig;
}

declare module "@axe-core/playwright" {
  export function injectAxe(page: unknown): Promise<void>;
  export function checkA11y(page: unknown, context?: unknown, options?: unknown): Promise<void>;
}

declare module "vitest-axe" {
  export interface AxeResults {
    violations: unknown[];
  }
  export function axe(container: unknown, options?: unknown): Promise<AxeResults>;
  export const toHaveNoViolations: {
    toHaveNoViolations(results?: AxeResults): { pass: boolean; message(): string };
  };
}
