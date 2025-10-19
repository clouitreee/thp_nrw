
"use client";

import { clsx } from "clsx";
import { useReducedMotion } from "framer-motion";
import type { ComponentPropsWithoutRef } from "react";

type H2Props = ComponentPropsWithoutRef<"h2">;

export function H2({ children, className, ...props }: H2Props) {
  const prefersReducedMotion = useReducedMotion();

  return (
    <h2
      {...props}
      style={{
        viewTransitionName: prefersReducedMotion ? undefined : "thp-h2",
        ...props.style,
      }}
      className={clsx("text-2xl font-semibold text-[var(--color-text)] md:text-3xl", className)}
    >
      {children}
    </h2>
  );
}
