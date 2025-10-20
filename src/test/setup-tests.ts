import "@testing-library/jest-dom/vitest";
import { cleanup } from "@testing-library/react";
import { afterEach, expect } from "vitest";
import { toHaveNoViolations } from "vitest-axe";

expect.extend(toHaveNoViolations as any);

afterEach(() => {
  cleanup();
});
