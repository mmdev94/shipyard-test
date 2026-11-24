// Tiny build step: stamps the commit and time into dist/index.html.
import { mkdirSync, readFileSync, writeFileSync } from 'node:fs'
const html = readFileSync('src/index.html', 'utf8')
  .replace('__COMMIT__', (process.env.GITHUB_SHA ?? 'local').slice(0, 7))
  .replace('__BUILT__', new Date().toISOString())
mkdirSync('dist', { recursive: true })
writeFileSync('dist/index.html', html)
console.log('built dist/index.html')
