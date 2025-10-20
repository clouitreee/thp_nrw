import { AI_ENABLED, getOpenAIClient, resolveModel } from "@/lib/ai/client";

export const runtime = "nodejs";

export async function POST(request: Request) {
  if (!AI_ENABLED) {
    return new Response("AI features are disabled", { status: 503 });
  }

  const body = await request.json().catch(() => null);
  const prompt: string | undefined = body?.prompt;

  if (!prompt) {
    return new Response("Prompt is required", { status: 400 });
  }

  try {
    const client = getOpenAIClient();
    const model = resolveModel();

    const stream = await client.responses.stream({
      model,
      input: prompt,
    });

    return new Response(stream.toReadableStream(), {
      headers: {
        "Content-Type": "text/event-stream", // SSE compatible
        "Cache-Control": "no-store", // prevent caching of sensitive output
      },
    });
  } catch (error) {
    console.error("AI assist endpoint failed", error);
    return new Response("AI request failed", { status: 500 });
  }
}
