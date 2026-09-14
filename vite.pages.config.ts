import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/postcss';
import { resolve } from 'node:path';
import { defineConfig } from 'vite';

export default defineConfig({
  root: 'pages',
  base: './',
  css: { postcss: { plugins: [tailwindcss()] } },
  publicDir: '../public',
  resolve: {
    alias: {
      '@': resolve(__dirname, '.'),
      'next/image': resolve(__dirname, 'pages/image.tsx'),
    },
  },
  plugins: [react()],
  build: {
    outDir: '../gh-pages',
    emptyOutDir: true,
  },
});
