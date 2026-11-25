import * as fs from "node:fs";
import * as path from "node:path";

// FINAL (v2) — Wi-Fi network name, 20 characters (limit 32).
// "MyExStillPaysForThis": the breakup already happened, the ex is gone,
// but the bill is still on their card. One name implies the character
// (the ex), the situation (a split household) and the event (they never
// cancelled the plan) — and the punchline is the network itself, which
// the passer-by is staring at while reading "This".
const ENTRY = "MyExStillPaysForThis";

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
fs.mkdirSync(outDir, { recursive: true });
fs.writeFileSync(path.join(outDir, "entry.txt"), ENTRY, "utf8");
