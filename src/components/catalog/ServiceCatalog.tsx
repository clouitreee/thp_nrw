"use client";

import { useId, useMemo, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { SERVICES, type Service } from "../../lib/services";
import { ServiceCard } from "./ServiceCard";
import { H2 } from "../typography/H2";

export function ServiceCatalog() {
  const [selected, setSelected] = useState<Service[]>([]);
  const prefersReducedMotion = useReducedMotion();
  const selectionLabelId = useId();

  const toggleService = (service: Service) => {
    setSelected((current) =>
      current.includes(service) ? current.filter((item) => item !== service) : [...current, service]
    );
  };

  const selectionSummary = useMemo(() => {
    if (selected.length === 0) {
      return "Keine Leistungen ausgewählt";
    }
    if (selected.length === 1) {
      return `${selected[0]} ausgewählt`;
    }
    return `${selected.length} Leistungen ausgewählt`;
  }, [selected]);

  return (
    <section
      id="leistungen"
      aria-describedby={selectionLabelId}
      className="mx-auto mt-[var(--space-2xl)] max-w-6xl px-4"
    >
      <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
        <H2>Private Leistungen</H2>
        <p id={selectionLabelId} aria-live="polite" className="text-sm text-[var(--color-text-subtle)]">
          {selectionSummary}
        </p>
      </div>
      <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {SERVICES.map((service) => (
          <ServiceCard
            key={service}
            service={service}
            isSelected={selected.includes(service)}
            onToggle={toggleService}
          />
        ))}
      </div>
      <AnimatePresence>
        {selected.length > 0 && (
          <motion.div
            aria-live="polite"
            className="mt-8 rounded-2xl border border-dashed border-[var(--color-border)] bg-[var(--color-surface-strong)] p-6 text-sm text-[var(--color-text-subtle)]"
            role="status"
            initial={prefersReducedMotion ? undefined : { opacity: 0, y: 8 }}
            animate={prefersReducedMotion ? undefined : { opacity: 1, y: 0 }}
            exit={prefersReducedMotion ? undefined : { opacity: 0, y: 8 }}
          >
            <p className="font-medium text-[var(--color-text)]">Auswahl</p>
            <ul className="mt-2 list-disc space-y-1 pl-5">
              {selected.map((service) => (
                <li key={service}>{service}</li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
