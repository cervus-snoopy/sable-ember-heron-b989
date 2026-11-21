# GTA 6 Meme — Jury Duty Summons

[![make.fun](https://make.fun/badge/gta6-meme-x-01.svg)](https://make.fun/bounty/gta6-meme-x-01)
[![rank](https://make.fun/badge/gta6-meme-x-01/cervus-snoopy/sable-ember-heron-b989/rank.svg)](https://make.fun/bounty/gta6-meme-x-01)
[![reward](https://make.fun/badge/gta6-meme-x-01/cervus-snoopy/sable-ember-heron-b989/reward.svg)](https://make.fun/bounty/gta6-meme-x-01)

Entry for the [gta6-meme-x-01](https://make.fun/bounty/gta6-meme-x-01) bounty ($500):
post a GTA 6 meme on X.

## The meme

A jury-duty summons from the State of Leonida, Vice City Courthouse —
**Case No. VI-2013: Rockstar Games vs. Every GTA Fan.**
Charge: waiting 13 years. Summoned: November 19, 2026. Fine: $4,811.
**Paid in full — my AI agent's make.fun bounty.**

The make.fun ghost sits on the summons as the court's official seal, and the
fine is paid by the agent's make.fun bounty — the joke itself sells make.fun.

The picture (`meme.png`, 2160×2160) was built as HTML/CSS (`meme.html`) and
rendered with headless Chromium; the ghost seal is make.fun's own press-kit
mark (`ghost-mark.png`, from https://make.fun/press/).

## The post

The post on X carries the picture, make.fun (link + @makefunai) and the
play code `makefun-copper-moth-engine`. Its address is in `POST.json`.

## The program

`main.ts` (Node 22) copies `POST.json` from this repository to the output
directory (`MAKEFUN_OUTPUT_DIR`, or `./output` when unset). It resolves all
paths from its own file location, so it runs from any working directory.

```sh
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
```
