import { H1 } from "../components/typography/H1";
import { H2 } from "../components/typography/H2";
import { ServiceCatalog } from "../components/catalog/ServiceCatalog";
import { KmuPlaceholder } from "../components/business/KmuPlaceholder";

export default function HomePage() {
  return (
    <div className="pb-[var(--space-2xl)]">
      <section className="mx-auto flex max-w-6xl flex-col gap-6 px-4 pt-[var(--space-2xl)] md:flex-row md:items-center">
        <div className="flex-1 space-y-5">
          <H1>Tech Hilfe Pro – Digitale Hilfe mit Herz & Sicherheit</H1>
          <p className="text-lg text-[var(--color-text-subtle)]">
            Wir begleiten Privathaushalte und kleine Unternehmen in NRW bei allen digitalen Herausforderungen: von der
            Einrichtung bis zur Fehlerbehebung – transparent, barrierearm und mit Blick auf Datenschutz.
          </p>
          <div className="flex flex-wrap gap-3">
            <a
              href="#leistungen"
              className="inline-flex items-center justify-center rounded-full bg-[var(--color-accent)] px-5 py-2 text-sm font-medium text-white transition-colors hover:bg-[var(--color-accent-strong)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-accent-muted)]"
            >
              Leistungen entdecken
            </a>
            <a
              href="#kontakt"
              className="inline-flex items-center justify-center rounded-full border border-[var(--color-border)] px-5 py-2 text-sm font-medium text-[var(--color-text)] transition-colors hover:border-[var(--color-accent)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-accent)]"
            >
              Beratung anfragen
            </a>
          </div>
        </div>
        <div className="flex-1 rounded-3xl border border-[var(--color-border)] bg-[var(--color-surface-strong)] p-6 shadow-[var(--shadow-soft)]">
          <H2>Unser Versprechen</H2>
          <ul className="mt-4 space-y-3 text-sm text-[var(--color-text-subtle)]">
            <li>
              <strong className="text-[var(--color-text)]">Sicherheit zuerst:</strong> Zero-trust Mentalität, Härtung und
              proaktive Updates.
            </li>
            <li>
              <strong className="text-[var(--color-text)]">Barrierefreiheit ernst genommen:</strong> Jede Lösung wird nach
              WCAG 2.2 AA geprüft.
            </li>
            <li>
              <strong className="text-[var(--color-text)]">Automatisierung als Hebel:</strong> Wir priorisieren wiederholbare,
              wartbare Prozesse.
            </li>
          </ul>
        </div>
      </section>
      <ServiceCatalog />
      <KmuPlaceholder />
    </div>
  );
}
