# UX Entscheidungen

## Fokus-Styling
- Kontrastreiche Outline (`outline: 3px solid var(--color-accent)`) global gesetzt
- Fokus ist immer sichtbar und deckt Buttons, Links, Cards ab

## Motion Policy
- `prefers-reduced-motion` wird respektiert (CSS und Framer Motion Hooks)
- Animationen dienen nur der Orientierung (Hover, Auswahl), niemals Pflicht für Funktionalität
- View Transitions optional über `NEXT_PUBLIC_VIEW_TRANSITIONS`

## Navigationsmuster
- Skip-Link ermöglicht direkten Zugriff auf `main`
- Header Navigation ist keyboard-tauglich und für mobile als Toggle verfügbar
- Service Cards sind Buttons (statt divs) für bessere Accessibility

## Copy & Tone
- Klar, empathisch, zielgruppengerecht für NRW Haushalte und KMUs
- Keine Fachjargon-Flut; Sicherheitsbegriffe werden erklärt

## Performance
- Leichte Komponenten, keine Third-Party Fonts ohne Audit
- Animationskosten werden über `prefersReducedMotion` minimiert
