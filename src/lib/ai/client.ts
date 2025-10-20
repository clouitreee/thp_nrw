import OpenAI from "openai";

export const AI_ENABLED = process.env.AI_ENABLED === "true";

export function getOpenAIClient() {
  if (!AI_ENABLED) {
    throw new Error("AI features are disabled");
  }

  const apiKey = process.env.OPENAI_API_KEY;
  if (!apiKey) {
    throw new Error("OPENAI_API_KEY is not configured");
  }

  return new OpenAI({
    apiKey,
  });
}

export interface AiResponseOptions {
  model?: string;
  instructions?: string;
}

export function resolveModel({ model }: AiResponseOptions = {}) {
  const configured = model ?? process.env.OPENAI_MODEL;
  if (!configured) {
    throw new Error("OPENAI_MODEL is not configured");
  }

  return configured;
}
