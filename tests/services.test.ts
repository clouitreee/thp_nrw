import { describe, expect, it } from "vitest";
import { SERVICES } from "../src/lib/services";

describe("SERVICES catalog", () => {
  it("contains 16 entries", () => {
    expect(SERVICES).toHaveLength(16);
  });

  it("includes Windows 11 support", () => {
    expect(SERVICES).toContain("Windows 11");
  });
});
