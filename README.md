````md
# Tech Hilfe Pro – IT-Support & Automatisierung für NRW

> **Hinweis Kleinunternehmerregelung (§ 19 UStG):** Es wird **keine** Umsatzsteuer ausgewiesen. Preisangaben erfolgen ohne MwSt.-Hinweis; Formulierungen wie „inkl. MwSt.“ sind unzulässig. :contentReference[oaicite:0]{index=0}

## Überblick
**Tech Hilfe Pro** ist eine Plattform für professionellen IT-Support, Cybersecurity und Prozessautomatisierung in NRW. Der Fokus dieser Iteration liegt auf einem modernen, barrierearmen Frontend (Next.js App Router) mit klarer Informationsarchitektur, animierten, aber zurückhaltenden Interaktionen und sauberer Codebasis für spätere Integrationen (Stripe, Supabase, Cloudflare Pages/Workers). :contentReference[oaicite:1]{index=1}

---

## Funktionsumfang (Stand: Design-/Frontend-Grundlage)
- **Abonnement-Katalog (Privatkunden, Auswahl-UI)**: interaktive, tastaturbedienbare Karten mit Micro-Interaktionen und „reduced motion“-Fallback. :contentReference[oaicite:2]{index=2}  
- **Barrierefreiheit** gemäß **WCAG 2.2** und **WAI-ARIA APG**-Mustern (Buttons, Dialoge, Tabs). :contentReference[oaicite:3]{index=3}  
- **Bereit für Cloudflare Pages/Workers** (SSR/ISR via `@cloudflare/next-on-pages` bzw. Adapter); Build-/Lint-Checks. :contentReference[oaicite:4]{index=4}  
- **Sicherheits- und Compliance-Grundlagen**: OWASP ASVS Mapping, NIS2-Orientierung (DE). :contentReference[oaicite:5]{index=5}

---

## Abonnement-Katalog (Privatkunden – nur Auflistung/Selektion)
Die folgenden Kategorien werden **ohne weitere Klassifizierung** als wählbare Optionen dargestellt:

- Computer  
- Computer Software  
- Printer/Scanner  
- E-Book Reader/Tablets  
- Hard Drives & Backup  
- Network/WLAN  
- Consoles & VR  
- Kitchen/Home  
- SmartHome Assistants  
- Smartwatch/Fitness Tracker  
- Phone/Fax  
- Audio/HiFi  
- TV/DVD/BluRay/Video  
- TV over Internet/Streaming  
- TV Setup  
- Windows 11

> Es gibt zusätzlich einen **visuell getrennten Platzhalter** für KMU/Business-Abos, jedoch **ohne** inhaltliche Ausgestaltung in dieser Phase.

---

## Architektur & Tech-Stack
- **Framework**: Next.js (App Router, Route Handlers für APIs). :contentReference[oaicite:6]{index=6}  
- **UI**: Tailwind CSS v4 (Token-first, Performance), **shadcn/ui** als kopierbare Komponentenbasis. :contentReference[oaicite:7]{index=7}  
- **Interaktionen**: framer-motion mit globalem `prefers-reduced-motion`. :contentReference[oaicite:8]{index=8}  
- **Deployment**: Cloudflare Pages/Workers, Build via **`@cloudflare/next-on-pages`**. :contentReference[oaicite:9]{index=9}  
- **Optionale Backends (spätere Phase)**:
  - **Stripe** (Checkout/Webhooks; Rohkörperprüfung). :contentReference[oaicite:10]{index=10}  
  - **Supabase** (DB/Storage, **RLS** verpflichtend für öffentliche Schemas). :contentReference[oaicite:11]{index=11}

### Verzeichnisstruktur (Vorschlag)
```txt
src/
  app/
    (marketing)/
    api/
      webhooks/
        stripe/route.ts      # Node/Pages-Fn Variante; Rohkörper prüfen
  components/
    ui/                      # shadcn/ui adaptierte Bausteine
    catalog/
  lib/
    a11y/
    config/
    security/
    stripe/
    supabase/
  styles/
public/
  downloads/                 # NIS2-Checkliste (PDF)
docs/
  architecture/
  compliance/                # NIS2, ASVS-Mapping, Nachweise
  security/                  # CSP, Header, Threat Model
.github/
  workflows/                 # CI (lint/typecheck/test/build, SBOM, CodeQL)
````

---

## Installation & Quickstart

```bash
# 1) Repository klonen
git clone <REPO_URL>
cd tech-hilfe-pro

# 2) Abhängigkeiten installieren
npm ci

# 3) Lokale Entwicklung starten
npm run dev
```

### Konfiguration (Beispiel `.env.example`)

> **Wichtig:** Nur Variablennamen versionieren; **keine Secrets**. Echte Werte später im Cloudflare-Dashboard setzen. ([Cloudflare Docs][1])

```bash
# Öffentlich (Client-sicher)
NEXT_PUBLIC_SITE_URL=http://localhost:3000
NEXT_PUBLIC_SUPABASE_URL=
NEXT_PUBLIC_SUPABASE_ANON_KEY=
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=

# Server/Workers (Secrets - NICHT versionieren)
SUPABASE_SERVICE_ROLE_KEY=
STRIPE_SECRET_KEY=
STRIPE_WEBHOOK_SECRET=
```

* **Supabase**: `anon` Key ist im Browser **nur** bei aktivem RLS akzeptabel; `service_role` niemals im Client verwenden. ([Supabase][2])
* **Stripe** Webhook: Signatur per `stripe.webhooks.constructEvent(rawBody, signature, secret)` prüfen; JSON nicht vorab parsen. ([Stripe Dokumentation][3])

---

## Qualitätssicherung & CI/CD

* **Branch Protection** auf `main`: PRs erforderlich, 1–2 Reviews, **required status checks** (Typecheck, Lint, Test, Build). ([GitHub Docs][4])
* **Code Scanning (CodeQL)** aktivieren. ([GitHub Docs][5])
* **Dependabot** Security-/Version-Updates. ([GitHub Docs][6])
* **Pre-commit Hooks**: Format/Lint/Tests (husky + lint-staged).
* **SBOM** (CycloneDX) als Build-Artefakt für Lieferkettennachweise.

---

## Barrierefreiheit (A11y)

* **WCAG 2.2 AA** als Ziel (Fokus sichtbar, Tastaturbedienung, robuste Semantik). ([W3C][7])
* **WAI-ARIA APG**-Muster für interaktive Komponenten. ([W3C][8])
* **Motion-Policy**: Animationen kurz, dezent; `prefers-reduced-motion` respektieren. ([W3C][9])

---

## Sicherheit & Compliance

* **OWASP ASVS**: Projektziel L2; Mapping in `docs/compliance/asvs-matrix.md`. ([OWASP][10])
* **CSP + Security-Header**: Vorgaben in `docs/security/headers.md` (CSP Nonce, HSTS, Referrer-Policy, Permissions-Policy).
* **NIS2 (DE)**: Orientierung an BSI-Leitseiten; ergänzende Nachweise (Risiko-Register, Incidents, Lieferkette) in `docs/compliance/`. ([BSI][11])
* **Rechtliches (DE)**: **Impressumspflicht § 5 DDG**; README und UI enthalten feste Verlinkung im Footer. ([Industrie- und Handelskammer][12])
* **Kleinunternehmer (§ 19 UStG)**: Keine MwSt.-Ausweisung in UI, PDFs oder E-Mails. ([Industrie- und Handelskammer][13])

---

## Deployment (Cloudflare Pages/Workers)

* Build/Dev mit **`@cloudflare/next-on-pages`**; bei SSR/ISR Workers-Runtime auswählen. Anleitungen siehe Cloudflare-Dokumentation. ([GitHub][14])
* Secrets/Variablen ausschließlich im **Cloudflare-Dashboard** pflegen (keine Commit-Leaks). ([Cloudflare Docs][1])

---

## Dokumentation

* **README**: Überblick, Setup, Sicherheits- und Compliance-Hinweise.
* **ADRs** (MADR): Architekturentscheidungen (Hosting, UI-Bibliothek, CSP-Strategie).
* **/docs/security/**: Header/CSP, Threat Model, ASVS-Matrix.
* **/docs/compliance/**: NIS2-Status, Risiko-Register, Nachweise.
* **/docs/architecture/**: Komponenten- und Navigationsübersichten.

---

## Mitmachen / Beiträge

* Pull Requests mit **Conventional Commits** und PR-Template.
* PR-Checkliste: Tests grün, Lint/Typecheck, A11y geprüft (Fokus, Kontrast, Tab-Reihenfolge), Performance-Budget eingehalten.

---

## Roadmap (Auszug)

* [ ] Checkout/Stripe-Integration (nach Freigabe der Secrets) – Webhook-Signaturprüfung. ([Stripe Dokumentation][3])
* [ ] Supabase-Anbindung mit **RLS-Policies** und Migrationsskripten. ([Supabase][15])
* [ ] NIS2-Checkliste (PDF) als Download unter `/public/downloads/`.
* [ ] KMU-/Business-Angebotsseite befüllen (separater Track).

---

## FAQ (Platzhalter)

* **Was ist Tech Hilfe Pro?**
  Plattform für IT-Support/Automatisierung in NRW (Details folgen).
* **Welche Vorteile bietet das Abomodell?**
  Transparente Kosten, planbare Reaktionszeiten (Details folgen).
* **Wie schützen wir Daten?**
  Defense-in-Depth, ASVS-Mapping, CSP/Headers; NIS2-orientierte Prozesse (Details folgen). ([OWASP][10])

---

## Quellen (Auszug)

* Next.js App Router: Route Handlers. ([Next.js][16])
* Tailwind CSS v4.0. ([tailwindcss.com][17])
* shadcn/ui (Dokumentation). ([ui.shadcn.com][18])
* Cloudflare Pages & `next-on-pages`. ([GitHub][14])
* Stripe Webhooks: Signaturverifizierung mit Rohkörper. ([Stripe Dokumentation][3])
* Supabase: RLS & Environment Keys. ([Supabase][15])
* WCAG 2.2 & WAI-ARIA APG. ([W3C][7])
* Impressumspflicht § 5 DDG (IHK). ([Industrie- und Handelskammer][12])
* Kleinunternehmerregelung § 19 UStG (IHK/Leitfäden). ([Industrie- und Handelskammer][13])
* NIS2 (BSI Überblick/FAQ). ([BSI][11])
* OWASP ASVS. ([OWASP][10])

---

## Lizenz

MIT (siehe `LICENSE`).

---

## Anhang: `.gitignore` (für dieses Projekt)

```gitignore
# Node / Next.js
node_modules/
.next/
out/
dist/
coverage/
*.log
npm-debug.log*
yarn-debug.log*
yarn-error.log*
pnpm-debug.log*
.vscode/
.idea/
.DS_Store

# Env & lokale Konfiguration
.env
.env.*
!.env.example

# Cloudflare / Adapter / Build Artefakte
.wrangler/
.vercel/
.vercel/output/
.build/
.cache/
functions/.cache/

# Tests & Reports
junit.xml
reports/
*.lcov

# OS/Editor
Thumbs.db
*.swp
*.swo

# SBOM/Artifacts
sbom*.json
cyclonedx*.json

# Storybook (falls verwendet)
storybook-static/
```

```
::contentReference[oaicite:41]{index=41}
```

[1]: https://developers.cloudflare.com/pages/?utm_source=chatgpt.com "Overview · Cloudflare Pages docs"
[2]: https://supabase.com/docs/guides/functions/secrets?utm_source=chatgpt.com "Environment Variables"
[3]: https://docs.stripe.com/webhooks/signature?utm_source=chatgpt.com "Resolve webhook signature verification errors"
[4]: https://docs.github.com/en/repositories/configuring-branches-and-merges-in-your-repository/managing-protected-branches/managing-a-branch-protection-rule?utm_source=chatgpt.com "Managing a branch protection rule"
[5]: https://docs.github.com/code-security/code-scanning/introduction-to-code-scanning/about-code-scanning-with-codeql?utm_source=chatgpt.com "About code scanning with CodeQL"
[6]: https://docs.github.com/en/code-security/dependabot/dependabot-security-updates/about-dependabot-security-updates?utm_source=chatgpt.com "About Dependabot security updates"
[7]: https://www.w3.org/TR/WCAG22/?utm_source=chatgpt.com "Web Content Accessibility Guidelines (WCAG) 2.2"
[8]: https://www.w3.org/WAI/ARIA/apg/?utm_source=chatgpt.com "ARIA Authoring Practices Guide | APG | WAI"
[9]: https://www.w3.org/WAI/standards-guidelines/wcag/new-in-22/?utm_source=chatgpt.com "What's New in WCAG 2.2 | Web Accessibility Initiative (WAI)"
[10]: https://owasp.org/www-project-application-security-verification-standard/?utm_source=chatgpt.com "OWASP Application Security Verification Standard (ASVS)"
[11]: https://www.bsi.bund.de/DE/Themen/Regulierte-Wirtschaft/NIS-2-regulierte-Unternehmen/nis-2-regulierte-unternehmen_node.html?utm_source=chatgpt.com "Umsetzung der NIS-2-Richtlinie für die regulierte Wirtschaft - BSI"
[12]: https://www.ihk.de/chemnitz/recht-und-steuern/rechtsinformationen/internetrecht/pflichtangaben-im-internet-die-impressumspflicht-4401580?utm_source=chatgpt.com "Informationspflichten im Internet - Die Impressumspflicht"
[13]: https://www.ihk.de/osnabrueck/recht-und-fair-play/recht/internetrecht/preisangaben-bei-umsatzsteuer-befreiten-kleinunternehmern-1085390?utm_source=chatgpt.com "Preisangaben bei Umsatzsteuer befreiten ..."
[14]: https://github.com/cloudflare/next-on-pages?utm_source=chatgpt.com "CLI to build and develop Next.js apps for Cloudflare Pages"
[15]: https://supabase.com/docs/guides/database/postgres/row-level-security?utm_source=chatgpt.com "Row Level Security | Supabase Docs"
[16]: https://nextjs.org/docs/app?utm_source=chatgpt.com "Next.js Docs: App Router"
[17]: https://tailwindcss.com/blog/tailwindcss-v4?utm_source=chatgpt.com "Tailwind CSS v4.0"
[18]: https://ui.shadcn.com/docs?utm_source=chatgpt.com "Introduction - shadcn/ui"
