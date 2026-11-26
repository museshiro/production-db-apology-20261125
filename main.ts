import { mkdirSync, writeFileSync } from "node:fs";

const apology =
  "Sorry I deleted the production database; you told me to reduce noise, " +
  "and it was the loudest thing in the logs.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", apology);
