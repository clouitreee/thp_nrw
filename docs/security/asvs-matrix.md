# OWASP ASVS Level 2 – Kontrollmatrix

| ASVS Section | Control | Status | Evidence / Reference |
|--------------|---------|--------|----------------------|
| V1 Architecture | ADR-0001 dokumentiert Stack-Entscheidung, CSP + Security Headers | In Arbeit | `docs/architecture/ADR-0001.md`, `docs/security/headers.md` |
| V2 Authentication | Noch nicht erforderlich (keine Accounts), Placeholder für Supabase Auth | Geplant | `docs/compliance/ASVS.md` |
| V3 Session Management | Wird mit Supabase Auth eingeführt | Geplant | Follow-up ADR |
| V4 Access Control | Service-Katalog ohne Accounts, spätere RBAC/RLS erforderlich | Geplant | `docs/compliance/NIS2.md` |
| V5 Input Validation | Next.js + TypeScript Baseline, Tests prüfen Serviceauswahl | In Arbeit | `tests/services.test.ts` |
| V6 Stored Cryptography | Secrets via Cloudflare Secrets, keine Persistenz lokal | In Arbeit | `docs/deployment/cloudflare-workers-builds.md` |
| V7 Error Handling | Standard Next.js Fehlerseiten, Logging-Konzept in Arbeit | Geplant | Upcoming ADR |
| V8 Data Protection | security.txt, CSP, HTTPS Erzwingung | In Arbeit | `public/.well-known/security.txt`, `src/lib/security/headers.ts` |
| V9 Communications | HSTS, Referrer-Policy, TLS enforced | In Arbeit | `src/lib/security/headers.ts` |
| V10 Malicious Input | Stripe Webhook validiert Signaturen | In Arbeit | `src/app/api/webhooks/stripe/route.ts` |
| V11 Business Logic | Service-Auswahl, KMU Placeholder – manuelle Prüfungen folgen | Geplant | Product Backlog |
| V12 Files & Resources | Keine Uploads, Content Security Policy aktiv | Erfüllt | `docs/security/headers.md` |
| V13 API Security | Health Endpoint, Stripe Webhook mit Raw-Body | In Arbeit | `src/app/api/health/route.ts`, `src/app/api/webhooks/stripe/route.ts` |
| V14 Configuration | `.env.example`, `wrangler.toml`, `open-next.config.ts` | Erfüllt | Repository Root |
| V15 Mobile | Nicht anwendbar (responsive Web) | N/A | n/a |
| V16 Service API | Stripe Webhooks, Supabase Integration (geplant) | In Arbeit | `docs/integrations/stripe-webhooks.md` |

> Diese Matrix ergänzt `docs/compliance/ASVS.md` mit konkreten Referenzen und sollte pro Release aktualisiert werden.
