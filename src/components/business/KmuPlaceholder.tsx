import { H2 } from "../typography/H2";

export function KmuPlaceholder() {
  return (
    <section
      id="unternehmen"
      className="mx-auto mt-[var(--space-2xl)] max-w-6xl rounded-3xl border border-[var(--color-border)] bg-[var(--color-surface-strong)] px-6 py-10"
      aria-labelledby="kmu-placeholder-heading"
    >
      <H2 id="kmu-placeholder-heading">KMU-Angebote in Vorbereitung</H2>
      <div className="mt-4 space-y-4 text-sm text-[var(--color-text-subtle)]">
        <p>
          Wir arbeiten an einem spezialisierten Support-Portfolio für kleine und mittlere Unternehmen in NRW.
          Schwerpunkte werden Sicherheit, Automatisierung und Schulungen sein.
        </p>
        <p>
          Möchten Sie frühzeitig informiert werden? Kontaktieren Sie uns unter
          <a className="ml-1 text-[var(--color-accent)] hover:text-[var(--color-accent-strong)]" href="mailto:kontakt@techhilfe.pro">
            kontakt@techhilfe.pro
          </a>
          und wir melden uns mit Pilotmöglichkeiten.
        </p>
        <p>
          Dieser Bereich bleibt bewusst neutral, bis Branchen- und Compliance-Anforderungen (z. B. NIS2) mit unseren
          Partnern abgestimmt sind.
        </p>
      </div>
    </section>
  );
}
