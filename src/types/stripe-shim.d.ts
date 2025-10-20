declare module "stripe" {
  export type LatestApiVersion = string;

  export default class Stripe {
    constructor(apiKey: string, config?: Record<string, unknown>);
    static createFetchHttpClient(): unknown;
    static createSubtleCryptoProvider(): unknown;
    webhooks: {
      constructEventAsync(
        payload: string | ArrayBuffer,
        signature: string,
        secret: string,
        tolerance?: number,
        options?: { cryptoProvider?: unknown }
      ): Promise<{ type: string }>;
    };
  }
}
