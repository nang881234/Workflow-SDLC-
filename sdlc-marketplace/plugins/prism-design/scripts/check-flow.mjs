#!/usr/bin/env node
// Kiem file Mermaid flowchart trong phase Design cua PRISM.
// Dung: node check-flow.mjs <thu-muc>
import { readdirSync, readFileSync } from "node:fs";
import { join } from "node:path";

const dir = process.argv[2] ?? "docs/sdlc/02-flow";

// Go nhan ra khoi node de con lai id thuan: A([x]) A[/x/] A{x} A[x] A((x)) -> A
const SHAPES = /([A-Za-z_][\w]*)\s*(\(\[[\s\S]*?\]\)|\[\/[\s\S]*?\/\]|\[\\[\s\S]*?\\\]|\[\[[\s\S]*?\]\]|\(\([\s\S]*?\)\)|\{\{[\s\S]*?\}\}|\[[\s\S]*?\]|\([\s\S]*?\)|\{[\s\S]*?\})/g;
// Cac dang mui ten Mermaid, ke ca -- nhan --> va -->|nhan|
const ARROW = /\s*(?:-{2,}[^->|\n]*-{1,}>|={2,}[^=>|\n]*={1,}>|-{3,}|-{2,}>|={2,}>|-\.[^.\n]*\.->)\s*(?:\|[^|\n]*\|\s*)?/;

let blocking = 0, checked = 0;
let list;
try { list = readdirSync(dir).filter(f => f.endsWith(".mmd")).map(f => join(dir, f)); }
catch { console.error(`Khong tim thay thu muc ${dir}`); process.exit(2); }
if (!list.length) { console.error(`Khong co file .mmd nao trong ${dir}`); process.exit(2); }

for (const f of list) {
  const raw = readFileSync(f, "utf8");
  const problems = [];
  if (!/^\s*(flowchart|graph)\b/m.test(raw)) problems.push("Thieu khai bao flowchart hoac graph");

  const decisions = new Set([...raw.matchAll(/([A-Za-z_][\w]*)\s*\{[^{}]*\}/g)].map(m => m[1]));
  const bare = raw.replace(SHAPES, "$1");

  const declared = new Set(), from = new Set(), to = new Set();
  const outCount = new Map();

  for (let line of bare.split("\n")) {
    line = line.replace(/%%.*$/, "").trim();
    if (!line || /^(flowchart|graph|subgraph|end|classDef|class|style|linkStyle|direction)\b/.test(line)) continue;
    const parts = line.split(ARROW);
    if (parts.length > 1) {
      const ids = parts.map(p => (p.trim().match(/^[A-Za-z_][\w]*/) || [])[0]).filter(Boolean);
      for (let i = 0; i < ids.length; i++) {
        declared.add(ids[i]);
        if (i < ids.length - 1) { from.add(ids[i]); outCount.set(ids[i], (outCount.get(ids[i]) || 0) + 1); }
        if (i > 0) to.add(ids[i]);
      }
    } else {
      const id = (line.match(/^[A-Za-z_][\w]*/) || [])[0];
      if (id) declared.add(id);
    }
  }

  for (const n of declared) if (!from.has(n) && !to.has(n)) problems.push(`Node ${n} khong noi voi node nao`);
  for (const d of decisions) {
    const out = outCount.get(d) || 0;
    if (out < 2) problems.push(`Node quyet dinh ${d} chi co ${out} nhanh ra, can it nhat 2`);
  }
  if (!/\[\/|loi|lỗi|error|that bai|thất bại|huy|huỷ/i.test(raw)) problems.push("Khong thay nhanh loi hoac huy nao trong flow");

  checked++;
  if (problems.length) { blocking += problems.length; console.log(`\nCHAN  ${f}`); problems.forEach(p => console.log(`   - ${p}`)); }
  else console.log(`DAT   ${f}`);
}
console.log(`\nTong: ${checked} flow, ${blocking} hang muc chan.`);
process.exit(blocking ? 1 : 0);
