# Cloudflare Pages Deployment

## Voraussetzungen
- Node.js 22 (lokal) und `npm`
- Cloudflare Account mit Zugriff auf Pages

## Schritte
1. Repository auf GitHub verbinden und in Cloudflare Pages neues Projekt anlegen.
2. "Connect to Git" auswählen und `main` als Produktionsbranch festlegen.
3. Build-Einstellungen:
   - Framework Preset: `Next.js`
   - Build Command: `npx @cloudflare/next-on-pages@latest build`
   - Build Output Directory: `.vercel/output/static`
4. Environment Variables entsprechend `.env.example` hinzufügen:
   - Public: `NEXT_PUBLIC_*`
   - Secret: `SUPABASE_SERVICE_ROLE_KEY`, `STRIPE_SECRET_KEY`, `STRIPE_WEBHOOK_SECRET`
5. Optional: Pages Functions aktivieren und secrets im Abschnitt `[[d1_databases]]`, `[vars]` etc. dokumentieren.
6. Nach dem ersten Deploy `npx @cloudflare/next-on-pages@latest preview` lokal testen, um SSR-spezifische Fehler zu finden.
7. In Cloudflare "Always Online" deaktivieren, damit SSR-Fehler sichtbar bleiben.
8. Web Analytics aktivieren und mit CSP-Domains abgleichen.

## SSR und Edge Hinweise
- Next.js 15 App Router unterstützt Edge Runtime; prüfen, ob API-Routen kompatibel sind.
- Nutzen Sie Cloudflare KV/R2 nur nach Security-Review.
- Für Revalidierung `npx @cloudflare/next-on-pages@latest deploy --branch=<name>` verwenden.

## Rollbacks
- Cloudflare Pages bietet Versionshistorie. Dokumentieren Sie Rollbacks in `docs/compliance/ASVS.md` unter "Betriebsprozesse".
