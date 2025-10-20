declare module "openai" {
  export default class OpenAI {
    constructor(config: { apiKey: string });
    responses: {
      stream(input: {
        model: string;
        input: unknown;
      }): Promise<{ toReadableStream(): ReadableStream<Uint8Array> }>;
    };
  }
}
