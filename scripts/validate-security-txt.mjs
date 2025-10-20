import { readFile } from "node:fs/promises";
import { resolve } from "node:path";
import process from "node:process";

const root = process.cwd();

const requiredValues = [
  { label: "contact", value: "security@techhilfe.pro" },
  { label: "encryption", value: "https://techhilfe.pro/pgp.txt" },
  { label: "policy", value: "https://techhilfe.pro/SECURITY" },
  { label: "canonical", value: "https://techhilfe.pro/.well-known/security.txt" },
];

async function loadFile(filePath) {
  return readFile(resolve(root, filePath), "utf8");
}

async function main() {
  const [securityMd, securityTxt] = await Promise.all([
    loadFile("SECURITY.md"),
    loadFile("public/.well-known/security.txt"),
  ]);

  for (const { label, value } of requiredValues) {
    if (!securityMd.includes(value)) {
      throw new Error(`SECURITY.md missing ${label} reference: ${value}`);
    }
    if (!securityTxt.includes(value)) {
      throw new Error(`security.txt missing ${label} reference: ${value}`);
    }
  }

  if (!securityTxt.trim().toLowerCase().startsWith("contact:")) {
    throw new Error("security.txt must start with Contact directive");
  }

  process.stdout.write("security.txt and SECURITY.md contain aligned disclosure metadata.\n");
}

main().catch((error) => {
  console.error(error instanceof Error ? error.message : error);
  process.exitCode = 1;
});
