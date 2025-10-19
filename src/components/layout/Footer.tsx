import Link from "next/link";

export function Footer() {
  return (
    <footer
      className="border-t border-[var(--color-border)] bg-[var(--color-surface-strong)] text-[var(--color-text-subtle)]"
      role="contentinfo"
      id="kontakt"
    >
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-4 py-10 md:flex-row md:items-start md:justify-between">
        <div>
          <p className="text-sm font-semibold text-[var(--color-text)]">Tech Hilfe Pro</p>
          <p className="mt-2 max-w-sm text-sm">
            Digitale Unterstützung für Menschen und kleine Unternehmen in Nordrhein-Westfalen – sicher, empathisch und
            nachhaltig.
          </p>
        </div>
        <div className="flex flex-col gap-2 text-sm">
          <Link href="mailto:kontakt@techhilfe.pro" className="hover:text-[var(--color-accent-strong)]">
            kontakt@techhilfe.pro
          </Link>
          <Link href="/impressum" className="hover:text-[var(--color-accent-strong)]">
            Impressum
          </Link>
          <Link href="/datenschutz" className="hover:text-[var(--color-accent-strong)]">
            Datenschutz
          </Link>
        </div>
        <p className="text-xs text-[var(--color-text-subtle)]">
          © {new Date().getFullYear()} Tech Hilfe Pro. Alle Rechte vorbehalten.
        </p>
      </div>
    </footer>
  );
}
