
"use client";

import { clsx } from "clsx";
import { useReducedMotion } from "framer-motion";
import type { ComponentPropsWithoutRef } from "react";

type H1Props = ComponentPropsWithoutRef<"h1">;

export function H1({ children, className, ...props }: H1Props) {
  const prefersReducedMotion = useReducedMotion();

  return (
    <h1
      {...props}
      style={{
        viewTransitionName: prefersReducedMotion ? undefined : "thp-h1",
        ...props.style,
      }}
      className={clsx("text-4xl font-semibold tracking-tight text-[var(--color-text)] md:text-5xl", className)}
    >
      {children}
    </h1>
  );
}
