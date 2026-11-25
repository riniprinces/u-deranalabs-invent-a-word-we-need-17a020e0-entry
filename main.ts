// Invent a Word We Need — make.fun entry
// ===============================================================
// COINAGE
//   seenziety (n.) — seen + anxiety, pronounced seen-ZY-uh-tee.
//
// WHY THIS WORD
//   The gap: the anxiety of watching someone stay online after
//   leaving your message on read. Almost everyone with a phone
//   knows that exact knot in the stomach, yet English has no
//   single word for it. "Seenziety" names it in one breath.
//   It is sayable, spellable and memorable, built from two
//   familiar parts, and it sounds like a word English could
//   have grown on its own.
//
// OUTPUT
//   Exactly one line is written to <output>/entry.txt: the word,
//   its part of speech, and a one-line definition that lands in
//   a single reading. The line is validated before it is written:
//   1–140 characters, a single line, not only whitespace.
// ===============================================================

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The single entry line. Keep it under 140 characters.
const WORD = "seenziety";
const PART_OF_SPEECH = "n.";
const DEFINITION =
  "the anxiety of watching someone stay online after leaving your message on read.";
const ENTRY = `${WORD} (${PART_OF_SPEECH}) — ${DEFINITION}`;

const MAX_CHARS = 140;

function validateEntry(line: string): void {
  if (line.length < 1 || line.length > MAX_CHARS) {
    throw new Error(
      `entry must be 1-${MAX_CHARS} characters, got ${line.length}`,
    );
  }
  if (line.trim().length === 0) {
    throw new Error("entry must not be only whitespace");
  }
  if (line.includes("\n") || line.includes("\r")) {
    throw new Error("entry must be a single line");
  }
}

function main(): void {
  validateEntry(ENTRY);
  const outDir = process.env.OUTPUT_DIR ?? "/output";
  mkdirSync(outDir, { recursive: true });
  writeFileSync(join(outDir, "entry.txt"), ENTRY, "utf8");
}

main();
