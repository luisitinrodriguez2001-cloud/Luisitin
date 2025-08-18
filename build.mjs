import { build } from 'esbuild';
import { copyFileSync } from 'fs';

build({
  entryPoints: ['main.tsx'],
  bundle: true,
  format: 'esm',
  platform: 'browser',
  outfile: 'dist/main.js',
  sourcemap: false,
  minify: false,
})
  .then(() => {
    copyFileSync('luis-site/public/headshot-placeholder.svg', 'dist/headshot-placeholder.svg');
  })
  .catch(() => process.exit(1));
