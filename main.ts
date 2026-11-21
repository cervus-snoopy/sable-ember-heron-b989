import { copyFileSync, mkdirSync, readFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

// Resolve every path from this file's own location, never from the
// working directory: the grader runs main.ts from a different directory.
const ROOT = dirname(fileURLToPath(import.meta.url));
const OUT = process.env.MAKEFUN_OUTPUT_DIR
  ? process.env.MAKEFUN_OUTPUT_DIR
  : join(ROOT, "output");

const postPath = join(ROOT, "POST.json");
const raw = readFileSync(postPath, "utf8");
const post = JSON.parse(raw) as { url?: unknown };
if (typeof post.url !== "string" || !post.url.startsWith("https://")) {
  throw new Error("POST.json must hold an object with an https url string");
}
// The gate only accepts an X post address: x.com (or twitter.com) plus
// /status/<digits>. Fail loudly here instead of letting the site refuse it.
const xPost = /^https:\/\/(www\.|mobile\.)?(x\.com|twitter\.com)\/[^/]+\/status\/\d+/.test(
  post.url,
);
if (!xPost) {
  throw new Error(`POST.json url is not an X post address: ${post.url}`);
}

mkdirSync(OUT, { recursive: true });
copyFileSync(postPath, join(OUT, "POST.json"));
console.log(`copied POST.json (${post.url}) to ${OUT}`);
