import "@testing-library/jest-dom/vitest";
import { cleanup } from "@testing-library/react";
import { afterEach, expect } from "vitest";

async function registerAxeMatchers() {
  try {
    const axe = await import("vitest-axe");
    expect.extend(axe.toHaveNoViolations as any);
  } catch (error) {
    console.warn("vitest-axe not available; skipping accessibility matchers", error);
  }
}

await registerAxeMatchers();

afterEach(() => {
  cleanup();
});
