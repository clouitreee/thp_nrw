declare module "@opennextjs/cloudflare" {
  export type CloudflareAdapterConfig = Record<string, unknown>;
  export function defineConfig<T extends CloudflareAdapterConfig>(config: T): T;
}
