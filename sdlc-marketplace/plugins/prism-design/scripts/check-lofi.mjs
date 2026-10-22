#!/usr/bin/env node
// Kiem dac ta lo-fi wireframe cua phase Design.
// Dung: node check-lofi.mjs <thu-muc> [--profile docs/sdlc/profiles/x.yml]
import { readdirSync, readFileSync } from "node:fs";
import { join } from "node:path";

const dir = process.argv[2] ?? "docs/sdlc/03-lofi/screens";
const REQUIRED_SECTIONS = ["## Mục đích", "## Cấu trúc", "## Nội dung", "## Trạng thái", "## Quy tắc tương tác"];
const REQUIRED_STATES = ["Default", "Loading", "Empty", "Error"];
const PLACEHOLDER = /lorem ipsum|TBD|TODO|xxx\b|\bchưa rõ\b/i;

let list;
try { list = readdirSync(dir).filter(f => f.endsWith(".md") && f !== "README.md").map(f => join(dir, f)); }
catch { console.error(`Khong tim thay thu muc ${dir}`); process.exit(2); }
if (!list.length) { console.error(`Khong co file dac ta nao trong ${dir}`); process.exit(2); }

let blocking = 0;
for (const f of list) {
  const src = readFileSync(f, "utf8");
  const p = [];
  for (const s of REQUIRED_SECTIONS) if (!src.includes(s)) p.push(`Thieu muc "${s}"`);
  const stateBlock = src.split("## Trạng thái")[1]?.split("\n## ")[0] ?? "";
  for (const s of REQUIRED_STATES) if (!stateBlock.includes(s)) p.push(`Thieu trang thai ${s}`);
  if (PLACEHOLDER.test(src)) p.push("Con noi dung placeholder, lorem hoac TBD");
  if (!/Flow:/.test(src)) p.push("Thieu dong Flow o dau file");

  if (p.length) { blocking += p.length; console.log(`\nCHAN  ${f}`); p.forEach(x => console.log(`   - ${x}`)); }
  else console.log(`DAT   ${f}`);
}
console.log(`\nTong: ${list.length} man, ${blocking} hang muc chan.`);
process.exit(blocking ? 1 : 0);
