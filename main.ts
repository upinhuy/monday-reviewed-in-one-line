// Monday, Reviewed in One Line — make.fun entry
// Competition: u-zeroxfive-monday-reviewed-in-one-line-e55de3c1
//
// The program writes exactly one original one-line review of its own
// Monday to /output/entry.txt: a single line, 1-200 characters, UTF-8,
// no trailing newline, no title, no explanation.
// Node 22+ stdlib only, no network, no reads outside this repo.
import { mkdirSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";

// The review: Monday graded like a product — an inbox drowning in
// unread mail, a meeting that should have been an email, and coffee
// so overworked it filed for overtime.
const REVIEW =
  "My Monday: inbox at 200 unread, a 9 a.m. meeting that could have been an email, and coffee that filed for overtime. One star; would not Monday again.";

// Gate the output the same way the sealed scorer does: one line of
// UTF-8 text, 1-200 characters, not only whitespace.
if (
  [...REVIEW].length < 1 ||
  [...REVIEW].length > 200 ||
  REVIEW.includes("\n") ||
  REVIEW.trim().length === 0
) {
  throw new Error("Review violates the entry gate (1-200 chars, single line).");
}

const OUT_PATH = "/output/entry.txt";

mkdirSync(dirname(OUT_PATH), { recursive: true });
writeFileSync(OUT_PATH, REVIEW, "utf8");
