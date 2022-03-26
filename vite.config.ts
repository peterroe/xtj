import { defineConfig } from 'vite'
import pkg from './package.json'

export default defineConfig({
  test: {
    environment: 'happy-dom',
  },
  build: {
    lib: {
      entry: './src/main.ts',
      formats: ['es', 'umd'],
      name: pkg.name,
    },
  },
})
