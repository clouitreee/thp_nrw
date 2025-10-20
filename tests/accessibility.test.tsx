import { render } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { axe } from "vitest-axe";
import { Header } from "@/components/layout/Header";

describe("Accessibility smoke tests", () => {
  it("header has no detectable violations", async () => {
    const { container } = render(<Header />);
    const results = await axe(container);
    (expect(results) as unknown as { toHaveNoViolations: () => void }).toHaveNoViolations();
  });
});
