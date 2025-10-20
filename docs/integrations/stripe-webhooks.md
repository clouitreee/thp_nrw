# Stripe Webhook Handling auf Cloudflare Workers Builds

## Ziel
- Verifikation der Stripe-Signatur mit `constructEventAsync`
- Nutzung von Cloudflare WebCrypto (`Stripe.createSubtleCryptoProvider()`)
- Verarbeitung des **rohen Request-Bodys** ohne JSON-Parsing

## Setup
1. Hinterlege folgende Secrets im Cloudflare Workers Builds Dashboard:
   - `STRIPE_SECRET_KEY`
   - `STRIPE_WEBHOOK_SECRET`
2. Aktiviere den Webhook in Stripe unter *Developers → Webhooks* und wähle die Events, die verarbeitet werden sollen.
3. Trage die Production-URL ein: `https://techhilfe.pro/api/webhooks/stripe` (oder Preview-URL).

## Funktionsweise
- Next.js Route Handler (`src/app/api/webhooks/stripe/route.ts`) läuft im Edge/Workers-Runtime (`runtime = "edge"`).
- Der Body wird mit `await request.arrayBuffer()` gelesen und **nicht** verändert.
- Die Verifikation nutzt `Stripe.createSubtleCryptoProvider()`, damit Cloudflare Workers die HMAC-Prüfung serverseitig durchführt.
- Bei Erfolg antworten wir mit Status `204` und enqueuen Folgeprozesse (Durable Objects / Supabase Functions geplant).
- Bei Fehlern liefern wir Status `400` und loggen die Fehlermeldung (Rate-Limits beachten, Logging später an Workers Analytics anbinden).

## Rotation & Sicherheit
- Secrets jährlich oder nach Personalwechsel rotieren. Vorgehen dokumentieren (`docs/compliance/NIS2.md`).
- Neue Secrets zuerst in Staging testen, dann Produktion.
- Stripe empfiehlt separate Secrets je Umgebung; Webhook-Signaturen unterscheiden sich pro Endpoint.
- Überwache fehlgeschlagene Prüfungen über Stripe Dashboard → Events → Webhooks.

## Troubleshooting
- `Signature verification failed`: Prüfe Zeitabweichung (>5 Minuten) oder falsches Secret.
- `Webhook misconfigured`: Environment-Variablen fehlen; Deployment stoppen, bis Secrets gesetzt sind.
- `Unhandled event type`: Ergänze Business-Logik oder entziehe das Event im Stripe Dashboard.

## Weiterführende Ressourcen
- [Stripe Docs: Verify webhook signatures](https://docs.stripe.com/webhooks/signatures)
- [OpenNext Cloudflare Guide](https://opennext.js.org/cloudflare/get-started)
- [Cloudflare Workers Logs](https://developers.cloudflare.com/workers/observability/logs/)
