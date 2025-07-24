import { defineConfig } from 'tsdown'

export default defineConfig({
  entry: ['src/main.ts'],
  dts: false,
  noExternal: [/^@repo\/.*/],
  onSuccess: "tsc -b && node --enable-source-maps dist/main.js",
  sourcemap: true,
})
