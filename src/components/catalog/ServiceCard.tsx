"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { Service } from "../../lib/services";

interface ServiceCardProps {
  service: Service;
  isSelected: boolean;
  onToggle: (service: Service) => void;
}

export function ServiceCard({ service, isSelected, onToggle }: ServiceCardProps) {
  const prefersReducedMotion = useReducedMotion();

  const baseStyles =
    "flex h-full min-h-[8rem] flex-col justify-between gap-4 rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)] p-5 text-left text-sm text-[var(--color-text)] shadow-sm transition-shadow focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-accent)]";

  return (
    <motion.button
      type="button"
      aria-pressed={isSelected}
      onClick={() => onToggle(service)}
      className={`${baseStyles} ${isSelected ? "border-[var(--color-accent)] shadow-[var(--shadow-soft)]" : "hover:shadow-lg"}`}
      whileHover={prefersReducedMotion ? undefined : { translateY: -4 }}
      whileTap={prefersReducedMotion ? undefined : { scale: 0.98 }}
      layout
    >
      <span className="text-base font-semibold">{service}</span>
      <span
        className="inline-flex items-center justify-center rounded-full border border-[var(--color-border)] px-3 py-1 text-xs"
      >
        {isSelected ? "Ausgewählt" : "Auswählen"}
      </span>
    </motion.button>
  );
}
