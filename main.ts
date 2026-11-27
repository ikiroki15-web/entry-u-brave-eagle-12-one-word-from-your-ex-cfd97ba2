// makefun anchor b66964b617780e597073aa8ec71360c202bb2394 round 34239920
import { mkdirSync, writeFileSync } from "node:fs";

const ENTRY_TEXT = "Exhausting";
const MIN_LENGTH = 1;
const MAX_LENGTH = 200;

const OUTPUT_DIR = "/output";
const OUTPUT_PATH = `${OUTPUT_DIR}/entry.txt`;

function validateLength(text: string): void {
  if (text.length < MIN_LENGTH || text.length > MAX_LENGTH) {
    throw new Error(
      `entry length must be ${MIN_LENGTH}-${MAX_LENGTH} characters, got ${text.length}`,
    );
  }
}

function guardEntry(text: string): void {
  validateLength(text);
  if (OUTPUT_PATH.length === 0) {
    throw new Error("output path must not be empty");
  }
}

function writeEntry(text: string): void {
  guardEntry(text);
  mkdirSync(OUTPUT_DIR, { recursive: true });
  writeFileSync(OUTPUT_PATH, text, "utf8");
}

writeEntry(ENTRY_TEXT);
