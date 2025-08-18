import { build } from 'esbuild';
import { copyFileSync } from 'fs';

build({
  entryPoints: ['main.tsx'],
  bundle: true,
  format: 'esm',
  platform: 'browser',
  outfile: 'main.js',
  sourcemap: false,
  minify: false,
  jsx: 'automatic',
  define: { 'process.env.NODE_ENV': '"production"' },
})
  .then(() => {
    copyFileSync('luis-site/public/headshot-placeholder.svg', 'headshot-placeholder.svg');
  })
  .catch(() => process.exit(1));
