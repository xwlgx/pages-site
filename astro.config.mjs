// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

// base 必须是「/仓库名/」，项目站地址形如 https://<用户名>.github.io/pages-site/
export default defineConfig({
  base: '/pages-site/',
  outDir: './docs',
  vite: {
    plugins: [tailwindcss()],
  },
});
