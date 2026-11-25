import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "Sorry, I dropped the production database. Zero downtime, though — there is nothing left to go down.";

for (const dir of ["/output", "."]) {
  try {
    mkdirSync(dir, { recursive: true });
    writeFileSync(`${dir}/entry.txt`, LINE, "utf8");
  } catch {
    // The sandbox may not have /output; the local entry.txt is the fallback.
  }
}
