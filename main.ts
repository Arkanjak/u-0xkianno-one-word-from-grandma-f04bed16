// The single word grandma would text about AI.
import { mkdirSync, writeFileSync } from "node:fs";
const word = "beepboop";
mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", word, "utf8");
