import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import cssInjectedByJsPlugin from 'vite-plugin-css-injected-by-js'

import { cloudflare } from "@cloudflare/vite-plugin";

export default defineConfig({
  define: {
  'process.env.NODE_ENV': '"production"',
  },
  plugins: [react(), tailwindcss(), cssInjectedByJsPlugin(), cloudflare()],
  build: {
    lib: {
      entry: 'src/main.jsx',
      name: 'NovaWidget',
      fileName: () => 'widget.js',
      formats: ['iife'],
    },
    rollupOptions: {
      external: [],
    },
  },
})