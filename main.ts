// One Word From Your Ex — entry program.
//
// Writes exactly one word to /output/entry.txt: the word my ex would use
// to describe me. Nothing else — no newline, no extra text. The file is
// the word, byte for byte.
//
// The word: "Insufferable"
// Round 1 said "Exhausting" — tired, generic, something anyone could say
// about anyone. "Insufferable" is the escalation: not just tiring to be
// around, but impossible to stand. It is funnier because it is more
// extreme and more self-aware, it stings harder because it admits the ex
// genuinely could not bear me, and it lands instantly — one vivid word
// no near-synonym can replace without losing its edge.
import { mkdirSync, readFileSync, writeFileSync } from "node:fs";

const WORD = "Insufferable";

// Self-check against the sealed gate before writing: the entry must be
// UTF-8 text of 1 to 24 characters, not only white space, and exactly one
// word. Fail loudly instead of silently shipping an invalid entry.
if (WORD.length < 1 || WORD.length > 24 || !/\S/.test(WORD) || /\s/.test(WORD)) {
  throw new Error(`Invalid entry word: ${JSON.stringify(WORD)}`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", WORD, "utf8");

// Read back and confirm the bytes on disk are exactly the word.
const written = readFileSync("/output/entry.txt", "utf8");
if (written !== WORD) {
  throw new Error(`Wrote ${JSON.stringify(written)}, expected ${JSON.stringify(WORD)}`);
}
console.log(`Wrote ${WORD.length} bytes to /output/entry.txt`);
