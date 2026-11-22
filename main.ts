import { writeFileSync, mkdirSync } from "node:fs";

const plan =
  "Day 1: $20 API credits, $5 domain. Build a scraper verifying 200 B2B leads/hour. Days 2–5: email 50 agencies/day, free 10-lead sample, $79 per 200 leads. Days 6–30: deliver 2–3 orders/week, reinvest 20%. Day 30: 8–12 orders ≈ $630–950. Edge: pay only for verified leads.";

if ([...plan].length > 280 || [...plan].length < 1)
  throw new Error("plan must be 1–280 Unicode code points");

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(`${outDir}/entry.txt`, plan, "utf8");
