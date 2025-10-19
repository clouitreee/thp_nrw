import { BUSINESS } from "@/config/business";

export const metadata = { title: "Impressum | Tech Hilfe Pro" };

export default function ImpressumPage() {
  return (
    <main className="mx-auto max-w-3xl px-4 py-10">
      <h1 className="text-3xl font-bold tracking-tight">Impressum</h1>
      <section className="mt-6 space-y-1">
        <p>
          <strong>Verantwortlich:</strong> {BUSINESS.owner}
        </p>
        <p>
          <strong>Unternehmen:</strong> {BUSINESS.company}
        </p>
        <p>
          <strong>Adresse:</strong> {BUSINESS.legalAddress.street}, {BUSINESS.legalAddress.zipCity}
        </p>
        <p>
          <strong>E-Mail:</strong>{" "}
          <a className="underline" href={`mailto:${BUSINESS.email}`}>
            {BUSINESS.email}
          </a>
        </p>
        <p>
          <strong>Telefon:</strong>{" "}
          <a className="underline" href="tel:+4915565029989">
            {BUSINESS.phone}
          </a>
        </p>
      </section>
    </main>
  );
}
