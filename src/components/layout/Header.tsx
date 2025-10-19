"use client";

import Link from "next/link";
import { useState } from "react";
import { clsx } from "clsx";

const navItems = [
  { href: "#leistungen", label: "Leistungen" },
  { href: "#unternehmen", label: "KMU" },
  { href: "#kontakt", label: "Kontakt" },
];

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header
      className="sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-white/75 dark:supports-[backdrop-filter]:bg-[rgba(15,23,42,0.75)] border-b border-[var(--color-border)]"
      role="banner"
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-4">
        <Link href="/" className="text-lg font-semibold tracking-tight" aria-label="Tech Hilfe Pro Startseite">
          Tech Hilfe Pro
        </Link>
        <button
          type="button"
          className="md:hidden rounded-full border border-[var(--color-border)] bg-[var(--color-surface)] px-3 py-2 text-sm"
          aria-expanded={isMenuOpen}
          aria-controls="primary-navigation"
          onClick={() => setIsMenuOpen((value) => !value)}
        >
          {isMenuOpen ? "Menü schließen" : "Menü"}
        </button>
        <nav
          id="primary-navigation"
          aria-label="Hauptnavigation"
          className={clsx(
            "flex-1",
            "md:flex md:items-center md:justify-end",
            isMenuOpen ? "block" : "hidden md:block"
          )}
        >
          <ul className="flex flex-col gap-3 md:flex-row md:items-center md:gap-6">
            {navItems.map((item) => (
              <li key={item.href}>
                <Link
                  className="rounded-full px-3 py-2 text-sm font-medium text-[var(--color-text-subtle)] transition-colors hover:text-[var(--color-accent-strong)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-accent)]"
                  href={item.href}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
