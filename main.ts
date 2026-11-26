// Self-checkout one-liner entry for make.fun's "The Self-Checkout Is Judging You".
// Writes the chosen line to /output/entry.txt: one line, UTF-8, no trailing newline.
//
// The line was picked from 8 candidates against the judge's brief, in order:
// (1) a real laugh on a single read — the sting lands in the last words
// ("scan your will to live next"); (2) the machine's petty eye on the basket
// (twelve yoghurts, and not even a spoon to eat them with); (3) no padding —
// 62 characters, every word earning its place. It answers the brief's own
// example (a shopper buying twelve yoghurts and nothing else) in the till's
// own phrasing ("Please scan ... next").
import { mkdirSync, writeFileSync } from "node:fs";

const LINE = "Twelve yoghurts, no spoon. Please scan your will to live next.";

// The sealed scorer wants UTF-8 text of 1 to 200 characters, not only white space.
const chars = [...LINE];
if (chars.length < 1 || chars.length > 200) {
  throw new Error(`line is ${chars.length} characters, must be 1-200`);
}
if (LINE.trim().length === 0 || LINE.includes("\n")) {
  throw new Error("line must be a single non-blank line");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
