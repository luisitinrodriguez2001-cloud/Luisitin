import { build } from 'esbuild';
import { copyFileSync } from 'fs';
import { resolve } from 'path';

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
  alias: {
    react: resolve('node_modules/react'),
    'react-dom': resolve('node_modules/react-dom'),
  },
})
  .then(() => {
    copyFileSync('luis-site/public/headshot-placeholder.svg', 'headshot-placeholder.svg');
  })
  .catch(() => process.exit(1));
