import { BUSINESS } from "@/config/business";

export default function Footer() {
  return (
    <footer className="border-t border-black/10 py-8 text-sm">
      <div className="mx-auto max-w-7xl px-4">
        <p className="font-medium">{BUSINESS.company}</p>
        <p className="text-black/70">{BUSINESS.notes.footerServiceMode}</p>
        <nav className="mt-3 flex gap-4">
          <a href="/impressum" className="underline">
            Impressum
          </a>
          <a href="/datenschutz" className="underline">
            Datenschutz
          </a>
        </nav>
      </div>
    </footer>
  );
}
