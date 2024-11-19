import { defineConfig } from 'vitest/config';
import react from '@vitejs/plugin-react';

export default defineConfig({
  test: {
    globals: true,  // Use globals for testing
    environment: 'jsdom',  // Environment for testing
    setupFiles: './test/setup.ts',  // Setup file
    include: ['test/**/*.test.tsx'],  // Pattern to match test files
  },
  plugins: [react()]
});
