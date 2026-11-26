// Tiny build step: stamps the commit and time into dist/index.html.
import { cpSync, existsSync, mkdirSync, readFileSync, writeFileSync } from 'node:fs'
const sha = process.env.GITHUB_SHA ?? 'local'
const html = readFileSync('src/index.html', 'utf8')
  .replaceAll('__COMMIT_FULL__', sha)
  .replaceAll('__COMMIT__', sha.slice(0, 7))
  .replaceAll('__BUILT__', new Date().toISOString().replace('T', ' ').slice(0, 16) + ' UTC')
mkdirSync('dist', { recursive: true })
writeFileSync('dist/index.html', html)
// probe files for measuring how ms.computer serves static sites (temporary)
if (existsSync('src/static')) cpSync('src/static', 'dist', { recursive: true })
console.log('built dist/index.html')
