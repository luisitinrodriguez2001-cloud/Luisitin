import { build } from 'esbuild';

build({
  entryPoints: ['main.tsx'],
  bundle: true,
  format: 'esm',
  platform: 'browser',
  outfile: 'dist/main.js',
  sourcemap: false,
  minify: false,
}).catch(() => process.exit(1));
