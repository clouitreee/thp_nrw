# Contributing Guide

Danke, dass du Tech Hilfe Pro verbessern möchtest! Dieser Leitfaden hilft dir, hochwertige Beiträge zu erstellen.

## Voraussetzungen
- Node.js 22 (`.nvmrc`)
- npm 10
- Vertrautheit mit Next.js App Router & TypeScript

## Workflow
1. Issue erstellen oder einem bestehenden Issue zugeordnet werden.
2. Branch von `main` ableiten (`feat/...`, `fix/...`, `chore/...`).
3. Commit-Messages nach [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/).
4. `npm install` ausführen (Lockfile generiert werden lassen) und `npm run prepare` für Husky Hooks.
5. Vor jedem Commit:
   ```bash
   npm run lint
   npm run typecheck
   npm run test
   ```
6. Pull Request erstellen und PR-Template ausfüllen (Tests, Lint, A11y, Security).
7. Mindestens ein Review einholen.

## Coding Standards
- TypeScript strikt, keine `any`
- Komponenten barrierefrei testen (Keyboard, Screenreader-Notizen)
- Sicherheitskritische Änderungen dokumentieren (`docs/security` oder `docs/compliance`)

## Review Checklist
- [ ] Tests abgedeckt
- [ ] Security- und Privacy-Auswirkungen bewertet
- [ ] Accessibility nach WCAG 2.2 AA geprüft
- [ ] Performance-Metriken (LCP, TBT) eingeschätzt

## Lokale Tools
- `npm run dev` startet Next.js im Entwicklungsmodus
- `npm run coverage` erzeugt V8-Coverage (Vitest)
- `npm run sbom:*` liefert CycloneDX & SPDX-Artefakte

Danke für deinen Beitrag! 💙
