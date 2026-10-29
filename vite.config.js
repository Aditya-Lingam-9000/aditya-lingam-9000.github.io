import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// Relative base so the build works from any static host path (GitHub Pages included).
export default defineConfig({
  plugins: [react()],
  base: './',
});
