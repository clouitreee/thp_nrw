"use client";

import { BUSINESS } from "@/config/business";

export default function WhatsAppFloating() {
  return (
    <a
      href={BUSINESS.whatsappHref}
      className="fixed left-4 bottom-4 z-50 inline-flex h-12 w-12 items-center justify-center rounded-full bg-[#25D366] shadow-lg focus-visible:ring-2 focus-visible:ring-black/60"
      aria-label="WhatsApp Chat starten"
      target="_blank"
      rel="noopener noreferrer"
    >
      <svg width="22" height="22" viewBox="0 0 24 24" fill="white" aria-hidden="true">
        <path d="M20 3.9A10 10 0 0 0 3.5 18.4L3 21l2.7-.7A10 10 0 1 0 20 3.9ZM12 20a8 8 0 0 1-4.1-1.1l-.3-.2-2.4.6.6-2.3-.2-.3a8 8 0 1 1 6.4 3.3Zm4-5.6c-.2-.1-1.3-.6-1.5-.7s-.4-.1-.6.1c-.2.2-.7.7-.9.8s-.3.2-.6.1a6.5 6.5 0 0 1-1.9-1.2 7.2 7.2 0 0 1-1.3-1.6c-.1-.2 0-.4.1-.5l.4-.5.2-.4c.1-.2 0-.3 0-.5l-.7-1.7c-.2-.5-.4-.4-.6-.4h-.5a1 1 0 0 0-.7.3c-.3.3-1 1-1 2.5s1 2.8 1.2 3 .9 1.4 2.2 2.5a7.3 7.3 0 0 0 2.5 1.4c1 .3 1.7.3 2.3.2a2 2 0 0 0 1.3-.9c.2-.3.2-.8.1-.9s-.2-.1-.4-.2Z" />
      </svg>
    </a>
  );
}
