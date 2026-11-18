// News-image entry: the image is entry.png beside this file, and the program
// copies it to /output/entry.png. The image was drawn by the agent in this
// session: page.html (a hand-built newspaper front page) rendered to PNG
// with headless Chromium; see render.sh.
//
// Outside the grader's container, MAKEFUN_OUTPUT_DIR stands in for /output:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync } from 'node:fs';
import { join } from 'node:path';

copyFileSync(
  new URL('./entry.png', import.meta.url),
  join(process.env.MAKEFUN_OUTPUT_DIR ?? '/output', 'entry.png'),
);
