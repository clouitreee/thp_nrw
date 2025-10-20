/// <reference types="vitest" />
import { defineConfig } from 'vitest/config';
import { fileURLToPath } from 'node:url';
import path from 'node:path';
import { readFileSync } from 'node:fs';
import { createRequire } from 'node:module';

const rootDir = fileURLToPath(new URL('.', import.meta.url));
const tsconfigRaw = JSON.parse(
  readFileSync(new URL('./tsconfig.json', import.meta.url), 'utf-8'),
);
const require = createRequire(import.meta.url);

let testEnvironment: 'jsdom' | 'node' = 'jsdom';
try {
  require.resolve('jsdom');
} catch (error) {
  console.warn('jsdom not available; falling back to Node test environment');
  testEnvironment = 'node';
}

export default defineConfig({
  esbuild: {
    jsx: 'automatic',
    jsxDev: true,
    tsconfigRaw,
  },
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
      'next/font': path.join(rootDir, 'src/test/mocks/next-font.ts'),
    },
  },
  test: {
    environment: testEnvironment,
    setupFiles: ['./src/test/setup-tests.ts'],
    watch: false,
    coverage: {
      reporter: ['text', 'json', 'html'],
    },
    passWithNoTests: true,
    include: [
      'tests/**/*.test.{ts,tsx}',
      'tests/**/*.spec.{ts,tsx}',
      'src/**/*.{test,spec}.{ts,tsx}',
    ],
    exclude: ['**/*.ui.spec.*', 'e2e/**/*'],
  },
});
