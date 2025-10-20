# NIS2 Umsetzung – Tech Hilfe Pro

Die Dienstleistungen (Remote-IT-Support, Automatisierung) fallen in Deutschland potenziell unter das **NIS2UmsuCG** für digitale Dienste.

## Scope & Verantwortlichkeiten
- **Scope:** Next.js Applikation, Cloudflare Workers Builds, Supabase, Stripe, GitHub Actions.
- **Management:** Jose C. Martin Lache (Owner) – übergeordnete Verantwortung.
- **Security Lead:** Principal Engineer – Umsetzung von Controls, Koordination Disclosure.
- **Operations:** Cloudflare Pages/Workers Team (extern), Supabase Projekt Owner.
- **Incident Response:** Jose + Engineering in Rufbereitschaft (max. 4h erste Antwort, 24h Zwischenbericht).

## Risikoregister (Template)

| ID | Risiko | Auswirkung | Eintrittswahrscheinlichkeit | Maßnahmen | Verantwortlich | Status |
|----|--------|------------|-----------------------------|-----------|----------------|--------|
| 1  | Datenleck über kompromittierte Zugangsdaten | Sehr hoch | Mittel | MFA & Secret-Rotation, Cloudflare Access | Management | Offen |
| 2  | Fehlkonfiguration Cloudflare (CSP/HSTS) | Hoch | Mittel | Automatisierte Header-Tests, Review vor Deploy | Engineering | In Arbeit |
| 3  | Stripe Webhook Abuse / Replay | Mittel | Niedrig | Nonce-basierte Verifikation, idempotente Verarbeitung | Engineering | In Arbeit |
| 4  | Supabase RLS fehlend | Hoch | Mittel | RLS-Policies entwerfen & testen | Engineering | Geplant |

## Incident Reporting & Kommunikation
- **Meldewege:** security@techhilfe.pro (siehe `security.txt`).
- **Fristen:** Erstmeldung an BSI innerhalb von 24h nach kritischem Vorfall, Abschlussbericht innerhalb von 72h.
- **Interne Kommunikation:** Matrix/Signal Gruppe "THP-IR" (noch aufzusetzen), Backup über Telefonliste.
- **Externe Kommunikation:** Kunden über E-Mail & Statuspage (geplant) informieren.

## Evidence Log

| Datum | Maßnahme | Nachweis | Verantwortlich |
|-------|----------|----------|----------------|
| 2025-10-19 | CI/CD eingerichtet | `.github/workflows/ci.yml` | Engineering |
| 2025-10-20 | OpenNext Workers Builds migriert | `docs/deployment/cloudflare-workers-builds.md` | Engineering |
| 2025-10-20 | security.txt veröffentlicht | `public/.well-known/security.txt` | Engineering |

## Kritische Lieferanten & Abhängigkeiten
- **Cloudflare Workers/Pages:** Hosting, Security Headers – SLA prüfen, Audit-Logs aktivieren.
- **Supabase:** Auth & Datenhaltung – RLS, Backups, EU-Region.
- **Stripe:** Payment Processing – Webhook Security, PCI-DSS Verantwortlichkeiten.
- **GitHub:** Quellcode, Actions Runner – Branch Protection, Dependabot, CodeQL.

## Offene Maßnahmen
- Incident-Response-Playbooks finalisieren (Checklisten + Kontaktketten).
- Tabletop-Übungen mindestens halbjährlich dokumentieren.
- Datenschutz-Folgenabschätzung (DSFA) evaluieren, sobald personenbezogene Daten verarbeitet werden.
