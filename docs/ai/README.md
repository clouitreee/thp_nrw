# AI Integration Blueprint

Tech Hilfe Pro will progressively enable AI-assisted support flows. The runtime scaffolding introduced in `src/lib/ai/client.ts` keeps the feature disabled (`AI_ENABLED=false`) until credentials are injected through environment variables.

## Environment Variables

- `AI_ENABLED`: Set to `true` to allow the assist endpoint to run. Keep `false` in production until security, privacy, and data processing agreements are finalised.
- `OPENAI_API_KEY`: Service API key configured in the Cloudflare Workers secret store.
- `OPENAI_MODEL`: Default model identifier (for example, `gpt-4.1-mini`).

## Endpoint Skeleton

`app/api/ai/assist/route.ts` exposes a streaming Response API endpoint which:

1. validates the incoming payload,
2. resolves the configured model,
3. streams Server-Sent Events back to the client, and
4. short-circuits when AI is disabled or misconfigured.

## Next Steps

1. Add audit logging + rate limiting before enabling AI in production.
2. Extend the endpoint to support structured outputs and tool calling once business workflows are confirmed.
3. Coordinate with legal to update data-processing agreements prior to flipping `AI_ENABLED` in production.
