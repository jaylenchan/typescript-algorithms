/// <reference types="vitest" />

import { resolve } from 'node:path'

import tsconfigPaths from 'vite-tsconfig-paths'
import { defineConfig } from 'vitest/config'


export default defineConfig({
  plugins: [
    tsconfigPaths({
      projects: [
        resolve(__dirname, './algorithms'),
        resolve(__dirname, './structures'),
        resolve(__dirname, './leetcode'),
      ],
    }),
  ],
  optimizeDeps: {
    disabled: true,
  },
  test: {
    globals: true,
    environmentMatchGlobs: [
      ['./algorithms/**/__tests__/*.test.ts', 'node'],
      ['./structures/**/__tests__/*.test.ts', 'node'],
      ['./leetcode/**/__tests__/*.test.ts', 'node'],
    ],
  },
})
