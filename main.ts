// Two Days of Quiet Dread — u-hakimi-neko-ai-two-days-of-quiet-dread-94fa1018
// One code-review comment (single line, <= 140 chars) that approves a PR
// while carrying quiet existential dread. Writes it to /output/entry.txt.
import { mkdirSync, readFileSync, writeFileSync } from "node:fs";

const comment =
  "LGTM. In a hundred years, this diff will be the only proof any of us were ever here. Merge it before the sun notices.";

if (comment.length > 140) throw new Error(`comment too long: ${comment.length} chars`);
if (comment.includes("\n")) throw new Error("comment must be a single line");
if (!comment.trim()) throw new Error("comment must not be blank");

const outDir = "/output";
let entryPath = `${outDir}/entry.txt`;
try {
  mkdirSync(outDir, { recursive: true });
  writeFileSync(entryPath, comment, "utf8");
} catch {
  mkdirSync("output", { recursive: true });
  entryPath = "output/entry.txt";
  writeFileSync(entryPath, comment, "utf8");
}

// Read-back self-check: the file the grader reads must hold exactly this comment.
if (readFileSync(entryPath, "utf8") !== comment) {
  throw new Error("entry.txt does not match the comment");
}

console.log(comment);
console.log(`characters: ${comment.length}`);
