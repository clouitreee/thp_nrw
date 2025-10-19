# Tech Hilfe Pro

Digitale Hilfe und Automatisierung für Privathaushalte und kleine Unternehmen in Nordrhein-Westfalen.

## Stack
- [Next.js 15](https://nextjs.org/) mit App Router und Route Handlers
- [React 18](https://react.dev/)
- [Tailwind CSS 4](https://tailwindcss.com/) (Zero-Config Baseline)
- [TypeScript 5](https://www.typescriptlang.org/)
- [Framer Motion](https://www.framer.com/motion/) für sanfte, rücksichtsvolle Animationen
- Cloudflare Pages + `@cloudflare/next-on-pages` für Deployment

## Accessibility (WCAG 2.2 AA)
- Globaler Skip-Link, Fokus-Styling und `prefers-reduced-motion` Support
- Komponenten werden keyboard-first entwickelt; Tests berücksichtigen Screenreader-Feedback
- Animations-Fallbacks für Nutzer:innen mit Bewegungseinschränkungen

## Security & Privacy
- Strikte Content Security Policy mit Nonce-basierter Skript- und Style-Freigabe
- HSTS, X-Frame-Options, Referrer-Policy und Permissions-Policy vordefiniert (siehe `docs/security/headers.md`)
- API-Routen bereiten Webhook-Handling mit Raw-Body vor (Stripe, Supabase)

## Cloudflare Pages Deployment
- `npx @cloudflare/next-on-pages@latest build`
- Output: `.vercel/output/static`
- Variablen & Secrets laut `.env.example` im Pages Dashboard setzen
- Branch Protection und CodeQL aktivieren, um Deployments abzusichern

## Service-Katalog
Privater Subscription-Katalog (keine Produktklassifizierung):
`Computer`, `Computer Software`, `Printer/Scanner`, `E-Book Reader/Tablets`, `Hard Drives & Backup`, `Network/WLAN`, `Consoles & VR`, `Kitchen/Home`, `SmartHome Assistants`, `Smartwatch/Fitness Tracker`, `Phone/Fax`, `Audio/HiFi`, `TV/DVD/BluRay/Video`, `TV over Internet/Streaming`, `TV Setup`, `Windows 11`.

## Kleinunternehmer §19 UStG
Tech Hilfe Pro arbeitet aktuell unter den Regelungen des §19 UStG. Rechnungen werden netto ausgewiesen. Sobald sich der Status ändert, aktualisieren wir Dokumentation und CI-Checks.

## Weitere Dokumentation
- `CONTRIBUTING.md`: Arbeitsabläufe, Conventional Commits, Review-Anforderungen
- `SECURITY.md`: Kontakt für Schwachstellenmeldungen
- `docs/UX_DECISIONS.md`: Fokus, Motion, Navigationsprinzipien
- `docs/compliance/ASVS.md`: Abbildung zu OWASP ASVS Level 2
- `docs/compliance/NIS2.md`: Risikoregister & Evidence Log
- `docs/architecture/ADR-0001.md`: Entscheidung für Next.js 15 + Cloudflare Pages + Tailwind v4
