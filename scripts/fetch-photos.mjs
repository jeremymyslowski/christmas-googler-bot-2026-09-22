import { mkdir, writeFile, access } from 'node:fs/promises';
import { join } from 'node:path';

const BASE =
  'https://raw.githubusercontent.com/jeremymyslowski/christmas-googler-bot-2026-09-22/main/public/photos';
const PHOTOS = [
  'about-field.jpg',
  'barn-visit.jpg',
  'christmas-path.jpg',
  'hero-needles.jpg',
  'intro-rows.jpg',
  'landscape-path.jpg',
];

const outDir = join(process.cwd(), 'public', 'photos');
await mkdir(outDir, { recursive: true });

for (const name of PHOTOS) {
  const dest = join(outDir, name);
  try {
    await access(dest);
    const { size } = await import('node:fs').then((fs) => fs.promises.stat(dest));
    if (size > 1000) {
      console.log(`keep existing ${name} (${size} bytes)`);
      continue;
    }
  } catch {
    // missing
  }
  const url = `${BASE}/${name}`;
  console.log(`fetch ${url}`);
  const res = await fetch(url);
  if (!res.ok) throw new Error(`Failed ${name}: ${res.status}`);
  const buf = Buffer.from(await res.arrayBuffer());
  await writeFile(dest, buf);
  console.log(`wrote ${name} (${buf.length} bytes)`);
}
