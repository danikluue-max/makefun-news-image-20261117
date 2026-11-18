# HANDOFF — news-image-20261117 r1

## What it is
A newspaper front page summing up Tuesday 17 November 2026 in one image:
**43 stories, 6 continents**. `entry.png` (1024×1024 PNG, 276,940 bytes)
rendered from `page.html` with headless Chromium (Playwright-bundled
Chrome); `main.ts` copies it to `/output/entry.png`.

## Files
- `main.ts` — entry program (copy entry.png to /output/entry.png).
- `entry.png` — the image. SHA-256
  `2fc1494485d29cde4f63819801208cd1eccf762e401f5e608026bb36b4dc64db`.
- `page.html` — the front page, hand-built in this session (HTML + inline
  SVG illustrations + JS-drawn world map). No news image was downloaded or
  copied; every illustration is drawn in code.
- `render.sh` — renders page.html → entry.png. NOTE: headless Chrome's
  viewport is ~87px shorter than the window, so it screenshots at
  1024×1111 and crops to 1024×1024 (the page itself is exactly 1024 tall).
  Without the +87px the footer text falls below the viewport and never
  paints — this cost three render iterations to find.
- `README.md` — short repo readme.
- Anchor: `makefun anchor cc5593fb7c0f63483f51ae8654f26d4f755c96ba round 34066087`
  (kit init was the first build command; git history = anchor commit + MIT
  LICENSE commit; entry files uncommitted, parent to commit/push).

## Story list (43) — all verified as happening / first reported 17 Nov 2026
Leads (3): 1. Crimean Bridge road span falls into the sea (Ukraine) ·
2. Iranian drones target a US radar in Bahrain · 3. Trump holds first
Quad summit in Manila.
Mid grid (6): Measles-free status lost (US/Mexico/Bolivia) · Nvidia sales
double to $115.8bn · Gaza truce at risk · Mongolia president resigns ·
Ebola in DR Congo tops 11,000 · COP31 split over fossil fuels.
Also list (34): Qeshm/Hormuz · Shenzhen trilateral · Japan scrambles jets ·
Depardieu admits assault · Epstein forensic doubts · Yemen Houthi advance ·
EU Rwanda return hub · chip-export loophole · JPMorgan bug · United outage ·
foreign-student limits struck down · Ukraine peace talks · Pentagon audit
fails (9th year) · USS Theodore Roosevelt arrives · Moldova drone · Haiti
protests · West Bank settler killing · Saudi airstrike Hudaydah · Iran
blocks IAEA · Eritrea trachoma eliminated · Carney–Xi partnership · Kyiv
bridges struck · US criticises Kyiv strikes · EU charges Temu / UK sanctions
settlement firms · Le Pen retirement pledge · crypto-stealing websites ·
oil prices · UK-EU summit package · Putin in Shenzhen · Bangladesh garment
protests · Apple outage · Taiwan median-line crossings · Sudan UN toll
(2,230 civilians, mostly drones) · Cyclone Akvan forms.
Field counts (bar chart): War & defence 15, Politics 13, Technology 5,
Health 3, Economy 3, Courts & law 2, Climate 1, Weather 1 (= 43).

## Sources
Parent-verified 38 stories from live news (Reuters/AP/BBC/CNN/Al Jazeera/
The Hindu/WHO/official bulletins). I verified 5 more myself by web search
this session: Bangladesh garment protests (The Hindu/Al Jazeera/TBS,
17 Nov), Apple outage (Apple status page/CBS, 17 Nov), Taiwan median-line
crossings (Taiwan MND bulletin, 17 Nov), Sudan UN toll (Reuters/OHCHR,
17 Nov), Cyclone Akvan (IMD via press, formed 16 Nov, reported 17 Nov).
Nothing invented; no story is dated before 17 Nov 2026.

## Verification
- `entry.png`: PNG, 1024×1024, 276,940 bytes (≤1 MiB) — opens cleanly.
- Viewed at full size AND at ~300px: masthead date clear; all 3 lead
  headlines readable at 300px; mid headlines partly readable; map + chart
  read as shapes; ALSO list dense but present. No overlaps, no garbled text.
- `main.ts`: ran twice with MAKEFUN_OUTPUT_DIR — byte-identical outputs,
  matching entry.png (sha256 above).
- Kit check (no transcripts yet — parent bundles):
  `4 passed, 1 failed, 13 skipped` — the only failure is
  transcripts_present, expected pre-bundle. All local checks pass.

## Honest assessment
Strong: date is huge and unmissable (judge criterion #1); 43 stories across
6 continents and 8 fields (criterion #2); all headlines faithful, no hype
(criterion #4); clean newsprint composition, no smears or garbled text.
Weak vs the 99.1% leaders: (a) lead illustrations are simple flat vectors
(bridge/radar/flags) — the leaders' are richer (detailed maps, charts);
(b) the world map is stylised and its labels crowd around the Gulf
(KERCH/BAHRAIN/GAZA sit close together); (c) the ALSO list at 11.5px is
legible at full size but a grey block at 300px — same density as the
leaders, but their list type is slightly larger; (d) no per-story pictures
in the grid, only small icons. If the parent wants another round: richer
lead art (a small map of the Kerch Strait, a Quad table scene) and a
slightly larger ALSO font would be the highest-value changes; the story
selection itself is already at leader level (43 stories, same count as #1).
