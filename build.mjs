// Tiny build step: stamps the commit and time into dist/index.html.
import { mkdirSync, readFileSync, writeFileSync } from 'node:fs'
const sha = process.env.GITHUB_SHA ?? 'local'
const html = readFileSync('src/index.html', 'utf8')
  .replaceAll('__COMMIT_FULL__', sha)
  .replaceAll('__COMMIT__', sha.slice(0, 7))
  .replaceAll('__BUILT__', new Date().toISOString().replace('T', ' ').slice(0, 16) + ' UTC')
mkdirSync('dist', { recursive: true })
writeFileSync('dist/index.html', html)
console.log('built dist/index.html')
