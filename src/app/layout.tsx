import "./globals.css";

import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";
import Footer from "@/components/layout/Footer";
import WhatsAppFloating from "@/components/common/WhatsAppFloating";
import MeetergoSidebar from "@/components/integrations/MeetergoSidebar";
import { Header } from "@/components/layout/Header";
import { clsx } from "clsx";

export const metadata: Metadata = {
  title: "Tech Hilfe Pro | Digitale Hilfe für NRW",
  description:
    "Sichere, barrierearme IT-Dienstleistungen für Privathaushalte und kleine Unternehmen in Nordrhein-Westfalen.",
  metadataBase: new URL("https://techhilfe.pro"),
  alternates: {
    canonical: "/",
  },
};

export const viewport: Viewport = {
  themeColor: "#2563eb",
};

interface RootLayoutProps {
  children: ReactNode;
}

const bodyClassName = clsx("antialiased", "bg-[var(--color-surface)]", "text-[var(--color-text)]");

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="de" suppressHydrationWarning>
      <body className={bodyClassName}>
        <a className="skip-link" href="#main-content">
          Zum Inhalt springen
        </a>
        <Header />
        <main id="main-content" role="main">
          {children}
        </main>
        <Footer />
        <WhatsAppFloating />
        <MeetergoSidebar />
      </body>
    </html>
  );
}
