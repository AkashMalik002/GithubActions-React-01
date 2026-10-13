import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  test: {
    globals: true, // <--- This is what defines `expect` globally
    environment: 'jsdom',
    setupFiles: './src/test-setup.js',
    css: true,
  },
});
