import { defineConfig, devices } from "@playwright/test";

const PORT = process.env.PORT ?? "3000";
const HOST = "127.0.0.1";
const baseURL = process.env.PLAYWRIGHT_BASE_URL ?? `http://${HOST}:${PORT}`;

export default defineConfig({
  testDir: "./e2e",
  fullyParallel: true,
  retries: process.env.CI ? 2 : 0,
  reporter: process.env.CI ? [["html", { outputFolder: "playwright-report" }], ["list"]] : "list",
  use: {
    baseURL,
    trace: "on-first-retry",
    headless: true,
  },
  webServer: {
    command: `npm run dev -- --hostname ${HOST} --port ${PORT}`,
    url: baseURL,
    reuseExistingServer: !process.env.CI,
    timeout: 120_000,
  },
  projects: [
    {
      name: "chromium",
      use: { ...devices["Desktop Chrome"] },
    },
  ],
});
