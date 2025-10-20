# Cloudflare Pages (Workers Builds) Deployment

## Voraussetzungen
- Node.js 22 (lokal) und `npm`
- Cloudflare Account mit Zugriff auf Pages

## Schritte
1. Repository auf GitHub verbinden und in Cloudflare Pages ein neues Projekt anlegen.
2. "Connect to Git" auswählen und `main` als Produktionsbranch festlegen.
3. Unter **Build** den Modus **Workers Builds** wählen und die Befehle aus `docs/deployment/cloudflare-workers-builds.md` übernehmen.
4. Environment Variables entsprechend `.env.example` hinzufügen:
   - Public: `NEXT_PUBLIC_*` (z. B. `NEXT_PUBLIC_MEETERGO_WIDGET_SRC`)
   - Secret: `SUPABASE_URL`, `SUPABASE_SERVICE_ROLE_KEY`, `STRIPE_SECRET_KEY`, `STRIPE_WEBHOOK_SECRET`, `CF_ANALYTICS_TOKEN`
5. Optional: Pages Functions/Workers-Variablen dokumentieren und mit Secrets versehen.
6. Nach dem ersten Deploy lokal `npm run preview:cf` testen, um SSR-spezifische Fehler zu finden.
7. In Cloudflare "Always Online" deaktivieren, damit SSR-Fehler sichtbar bleiben.
8. Web Analytics aktivieren und mit CSP-Domains abgleichen.

## SSR und Edge Hinweise
- Next.js 15 App Router unterstützt Edge Runtime; prüfen, ob API-Routen kompatibel sind.
- Nutzen Sie Cloudflare KV/R2 nur nach Security-Review.
- Für gezielte Deployments `npm run deploy:cf` mit den optionalen CLI-Flags von OpenNext ausführen.

## Rollbacks
- Cloudflare Pages bietet Versionshistorie. Dokumentieren Sie Rollbacks in `docs/compliance/ASVS.md` unter "Betriebsprozesse".
