// main.ts — entry program for post-x-promote-make-your-own-bounty-01.
//
// The entry is one post on X: a quote of make.fun's make-your-own-bounty post,
// carrying make.fun / @makefunai and the entrant's play code. This program does
// exactly one thing: it copies POST.json, which names that post's address,
// from this repository into the output directory. The house reads the post
// itself from X; nothing this program writes about the post counts.
//
// Stdlib only. No network, no wall clock, no files outside the repository.
// The two runs of an entry write the same bytes.

import { copyFileSync, mkdirSync } from "node:fs";
import { join } from "node:path";

const POST_FILE = "POST.json";

const botDir = process.env.MAKEFUN_BOT_DIR ?? ".";
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";

mkdirSync(outDir, { recursive: true });
copyFileSync(join(botDir, POST_FILE), join(outDir, POST_FILE));
