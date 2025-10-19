# API Route Handler Beispiele

- Route Handler nutzen standardmäßig Streaming- und Edge-Fähigkeiten von Next.js App Router.
- Für Webhooks (z. B. Stripe) muss der **rohe Request-Body** verfügbar bleiben. Verwenden Sie `config = { api: { bodyParser: false } }` in den entsprechenden Routen und lesen Sie den Stream manuell.
- Authentifizierung, Ratenbegrenzung und Audit-Logging werden in späteren Aufgaben ergänzt.
