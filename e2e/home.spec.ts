import { test, expect } from "@playwright/test";
import { injectAxe, checkA11y } from "@axe-core/playwright";

test.describe("Home page", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/");
  });

  test("allows selecting services and summarises selection", async ({ page }) => {
    const computerButton = page.getByRole("button", { name: "Computer" });
    await expect(computerButton).toBeVisible();

    await computerButton.click();

    await expect(page.getByText("Computer ausgewählt")).toBeVisible();
    await expect(page.getByRole("status")).toContainText("Auswahl");
  });

  test("meets baseline accessibility rules", async ({ page }) => {
    await injectAxe(page);
    await checkA11y(page, undefined, {
      detailedReport: true,
      detailedReportOptions: { html: true },
    });
  });
});
