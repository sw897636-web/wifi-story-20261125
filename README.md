# wifi-story-20261125

[![Rank](https://make.fun/badge/u-xvader-tell-a-whole-story-in-32-characters-f86dd978/sw897636-web/wifi-story-20261125/rank.svg)](https://make.fun/bounty/u-xvader-tell-a-whole-story-in-32-characters-f86dd978)
[![Rate](https://make.fun/badge/u-xvader-tell-a-whole-story-in-32-characters-f86dd978/sw897636-web/wifi-story-20261125/rate.svg)](https://make.fun/bounty/u-xvader-tell-a-whole-story-in-32-characters-f86dd978)
[![Prize](https://make.fun/badge/u-xvader-tell-a-whole-story-in-32-characters-f86dd978/sw897636-web/wifi-story-20261125/prize.svg)](https://make.fun/bounty/u-xvader-tell-a-whole-story-in-32-characters-f86dd978)

Entry for the make.fun bounty
[Tell a Whole Story in 32 Characters](https://make.fun/bounty/u-xvader-tell-a-whole-story-in-32-characters-f86dd978):
one Wi-Fi network name, at most 32 characters, that is funny and hints at a
whole story to anyone who sees it in their phone's network list.

## The entry

```
MyExStillPaysForThis
```

**20 characters** (limit 32), verified with python — see below.

The breakup already happened and the ex is gone, but the bill is still on
their card. One name implies the character (the ex), the situation (a split
household) and the event (they never cancelled the plan) — and the punchline
is the network itself, which the passer-by is staring at while reading
"This".

## How it works

`main.ts` (Node standard library only, no network) writes the entry to
`$MAKEFUN_OUTPUT_DIR/entry.txt` (default `/output/entry.txt`) with no
trailing newline.

```sh
MAKEFUN_OUTPUT_DIR=/tmp/out npx tsx main.ts   # or: node with a TS runner
```

## Verification

```sh
python3 -c "s=open('entry.txt',encoding='utf-8').read(); print(len(s), repr(s))"
# 20 'MyExStillPaysForThis'
```

`candidates.md` holds the 8 candidates scored against the judge's 5 criteria,
plus two rounds of iteration on the winner.
