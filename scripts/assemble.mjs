import fs from 'fs-extra'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
const root = path.resolve(__dirname, '..')
const outputDir = path.join(root, '.output')

const targets = [
  {
    from: path.join(root, 'sites/portal/dist'),
    to: outputDir,
  },
  {
    from: path.join(root, 'sites/life/docs/.vitepress/dist'),
    to: path.join(outputDir, 'life'),
  },
  {
    from: path.join(root, 'sites/work/docs/.vitepress/dist'),
    to: path.join(outputDir, 'work'),
  },
  {
    from: path.join(root, 'sites/fun/docs/.vitepress/dist'),
    to: path.join(outputDir, 'fun'),
  },
  {
    from: path.join(root, 'sites/leisure/docs/.vitepress/dist'),
    to: path.join(outputDir, 'leisure'),
  },
]

await fs.remove(outputDir)
await fs.ensureDir(outputDir)

for (const target of targets) {
  if (!(await fs.pathExists(target.from))) {
    throw new Error(`Build output not found: ${target.from}`)
  }

  await fs.copy(target.from, target.to)
}

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url><loc>/</loc></url>
  <url><loc>/life/</loc></url>
  <url><loc>/work/</loc></url>
  <url><loc>/fun/</loc></url>
  <url><loc>/leisure/</loc></url>
</urlset>
`

await fs.writeFile(path.join(outputDir, 'sitemap.xml'), sitemap)
