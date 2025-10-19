# NIS2 Vorbereitung

## Risikoregister (Template)

| ID | Risiko | Auswirkung | Eintrittswahrscheinlichkeit | Maßnahmen | Verantwortlich | Status |
|----|--------|------------|-----------------------------|-----------|----------------|--------|
| 1  | Beispiel: Datenleck durch fehlende Zugriffskontrolle | Hoch | Mittel | RBAC & RLS implementieren | CTO | Offen |

## Evidence Log

| Datum | Maßnahme | Nachweis | Verantwortlich |
|-------|----------|----------|----------------|
| 2025-10-19 | CI/CD eingerichtet | `.github/workflows/ci.yml` | Engineering |

## ToDos
- Kritikalität der angebotenen Dienste bewerten (öffentliche vs. essenzielle Dienste)
- Lieferantenbewertung (Cloudflare, Supabase, Stripe) dokumentieren
- Incident-Response-Playbooks erstellen
