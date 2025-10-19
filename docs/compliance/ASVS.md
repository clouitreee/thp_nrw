# OWASP ASVS Mapping (Level 2 Ziel)

| ASVS Kapitel | Status | Hinweise |
|--------------|--------|----------|
| V1 Architektur, Design und Bedrohungsmodellierung | In Arbeit | ADR-0001 dokumentiert grundlegende Entscheidungen; Bedrohungsmodell folgt |
| V2 Authentifizierung | Geplant | Keine Accounts im MVP; Supabase-Integration später |
| V3 Session-Management | Geplant | Wird mit Auth eingeführt |
| V4 Access Control | Geplant | Rollen & RLS Policy nach Supabase-Anbindung |
| V5 Validierung, Sanitization | Teilweise | Next.js und TypeScript gewährleisten Baseline; weitere Validierungen in Services notwendig |
| V6 Stored Cryptography | Geplant | Secrets via Cloudflare Pages verwaltet |
| V7 Fehlerbehandlung & Logging | Geplant | Logging-Konzept in zukünftiger ADR |
| V8 Daten-Schutz | In Arbeit | CSP, HSTS, Referrer-Policy definiert |
| V9 Kommunikations-Security | In Arbeit | HSTS + HTTPS verpflichtend |
| V10 Malicious Input Handling | Geplant | Sanitizer/Validator libs noch offen |
| V11 Business Logic | Geplant | Service-spezifische Regeln folgen |
| V12 Files & Ressourcen | Geplant | Uploads deaktiviert, Policies folgen |
| V13 API Security | In Arbeit | Health Endpoint verfügbar, Auth folgt |
| V14 Konfigurationssicherheit | In Arbeit | `.env.example`, `wrangler.toml`, GitHub Actions |
| V15 Mobile | Nicht anwendbar | Web-App Fokus |
| V16 Service API | Geplant | Stripe/Supabase Hooks in Vorbereitung |

## Nächste Schritte
- Threat Modeling Workshop ansetzen
- Logging & Monitoring Architektur definieren
- Supabase RLS Policies dokumentieren
