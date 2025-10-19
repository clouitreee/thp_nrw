# Cloudflare Workers Builds mit OpenNext

Die Production-Pipeline nutzt das offizielle OpenNext-Adapterpaket, um Next.js 15 auf Cloudflare Workers zu betreiben. Diese Schritte gelten für neue Projekte und für Migrationen von klassischen Pages-Builds.

## Build- und Deploy-Befehle
- **Build command:** `npx @opennextjs/cloudflare build`
- **Deploy command:** `npx @opennextjs/cloudflare deploy`
- **Lokale Vorschau:** `npx wrangler dev --local`

Die Befehle stehen ebenfalls als npm-Skripte (`npm run build:cf`, `npm run deploy:cf`, `npm run preview:cf`) zur Verfügung.

## Konfiguration im Cloudflare Dashboard
1. Navigiere zu *Workers & Pages* → *Create application* → *Workers Builds*.
2. Wähle das GitHub-Repository (`main` als Produktionsbranch) und hinterlege die obigen Build-/Deploy-Befehle. Das Feld "Output directory" bleibt leer.
3. Optional: Setze `NODE_VERSION=22` in den Umgebungsvariablen, falls das Projekt nicht automatisch die `.nvmrc` erkennt.
4. Übernimm alle Variablen und Secrets gemäß `.env.example`.
5. Aktiviere Web Analytics und observiere Fehler über Workers Logs.

## Weitere Hinweise
- Dokumentation: [OpenNext Cloudflare Guide](https://opennext.js.org/cloudflare/get-started) und [Cloudflare Workers Blogpost](https://blog.cloudflare.com/deploying-nextjs-apps-to-cloudflare-workers-with-the-opennext-adapter/).
- Bei Fehlern im Build zuerst `npm run build:cf` lokal ausführen, damit TypeScript/ESLint-Fehler früh auffallen.
- Rollbacks erfolgen über die Workers Builds Deployment-Historie; dokumentiere Entscheidungen unter `docs/compliance/ASVS.md`.
