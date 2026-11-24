// Ridiculous at First Glance, Real by the Second — make.fun entry.
// Writes this entry's single sentence to /output/entry.txt.
// Gate: UTF-8 text, 1-200 characters, not only whitespace. This line is 133.
import { mkdirSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";

const LINE =
  "We rent soundproof pods to open-plan offices by the hour, selling silence to workers while their bosses pay us to stop them quitting.";

const candidates = ["/output/entry.txt", "output/entry.txt"];

let wrote = "";
for (const target of candidates) {
  try {
    mkdirSync(dirname(target), { recursive: true });
    writeFileSync(target, LINE, "utf8");
    wrote = target;
    break;
  } catch {
    // /output may not exist outside the grading sandbox; try the next path.
  }
}

if (!wrote) {
  throw new Error("could not write entry.txt to any candidate path");
}

console.log(`wrote ${LINE.length} characters to ${wrote}`);
