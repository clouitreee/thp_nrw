# Stack + Deployment Audit (2024-12-04)

## Executive Summary

- **React 19 not yet activated**: the project pins React 18.3.1 to keep Testing Library compatibility. Upgrading to React 19 requires verifying `@testing-library/react` and related tooling once their React 19 support ships.
- **OpenNext Workers Builds**: adapter + scripts are present. Confirm `wrangler@3.99.0` installs successfully during CI (current sandbox blocks registry access).
- **Stripe Webhooks**: verification now enforced via WebCrypto and Node runtime; fulfilment queue is still TODO.
- **AI scaffolding**: disabled-by-default OpenAI Responses client and streaming route placeholder prepared. Secrets remain out of the repo.

## Detected Risks & Actions

| Severity | Area | Finding | Recommended Action |
| --- | --- | --- | --- |
| High | Runtime | Registry fetches blocked in sandbox | Run `npm install` locally, commit the generated `package-lock.json`, and re-run CI. |
| High | Stripe | No fulfilment/idempotency store | Implement durable persistence (Supabase or KV) before enabling live events. |
| Medium | React stack | React 19 gap | Track Testing Library React 19 support, then raise PR to bump React/React DOM to 19.x with full test pass. |
| Medium | AI | No rate limiting/logging | Add middleware to throttle requests and append audit trail before enabling `AI_ENABLED`. |
| Low | Docs | Cloudflare manual steps pending | Owner must apply checklist in Cloudflare dashboard. |

## Follow-up Tickets

1. **React 19 adoption**
   - Monitor upstream releases and raise an upgrade branch once peer dependencies are ready.
2. **Stripe fulfilment worker**
   - Wire webhook events into Supabase functions or Durable Objects with idempotency keys.
3. **AI safeguards**
   - Add abuse detection, request quotas, and privacy notices before launch.
4. **Automated OpenNext smoke test**
   - Ensure CI environment caches `@opennextjs/cloudflare` CLI to avoid cold start penalties.
