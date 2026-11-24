import { mkdirSync, writeFileSync } from "node:fs";

// The slip: "working" autocorrected to "twerking" in a new intern's
// first-day text to the whole team — one wrong word, very wrong meeting.
// Built from parts so the greeting and the slip stay independently editable.
const greeting = "Hi, I'm the new intern starting Monday";
const slip = "really looking forward to twerking with you all!";
const entry = `${greeting} — ${slip}`;

// Gate: the competition accepts UTF-8 text of 1 to 199 chars, one line.
if (entry.length < 1 || entry.length > 199) {
  throw new Error(`entry must be 1-199 chars, got ${entry.length}`);
}
if (entry.split("\n").length !== 1) {
  throw new Error("entry must be a single line");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", entry, "utf8");
console.log(`Wrote ${entry.length} chars to /output/entry.txt`);
