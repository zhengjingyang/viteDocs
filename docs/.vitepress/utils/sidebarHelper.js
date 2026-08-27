import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const docsRoot = path.resolve(__dirname, '../../')

/**
 * 解析 Markdown frontmatter（仅支持简单 key: value）
 */
function parseFrontmatter(content) {
  const match = content.match(/^---\r?\n([\s\S]*?)\r?\n---/)
  if (!match) return {}

  const fm = {}
  match[1].split(/\r?\n/).forEach((line) => {
    const m = line.match(/^(\w+):\s*(.*)$/)
    if (!m) return

    const key = m[1]
    let val = m[2].trim()
    if (
      (val.startsWith('"') && val.endsWith('"')) ||
      (val.startsWith("'") && val.endsWith("'"))
    ) {
      val = val.slice(1, -1)
    }
    if (key === 'order') {
      const num = Number(val)
      if (!Number.isNaN(num)) fm.order = num
      return
    }
    fm[key] = val
  })
  return fm
}

function getOrderFromName(name) {
  const m = name.match(/^(\d+)/)
  return m ? Number(m[1]) : null
}

function getDisplayText(name, title) {
  if (title) return title
  return name.replace(/^\d+[.\s_-]*/, '') || name
}

/**
 * 收集目录下文档（忽略 index.md）
 */
export function collectDocs(dirPath) {
  const items = []
  const fullPath = path.resolve(docsRoot, dirPath)

  if (!fs.existsSync(fullPath)) return items

  const files = fs.readdirSync(fullPath)

  files.forEach((file) => {
    if (file.startsWith('.') || file === 'index.md') return

    const filePath = path.join(fullPath, file)
    const stat = fs.statSync(filePath)

    if (stat.isFile() && file.endsWith('.md')) {
      const name = file.replace(/\.md$/, '')
      const content = fs.readFileSync(filePath, 'utf-8')
      const fm = parseFrontmatter(content)

      items.push({
        text: getDisplayText(name, fm.title),
        link: `/${dirPath}/${name}/`,
        order: fm.order ?? getOrderFromName(name) ?? Number.POSITIVE_INFINITY,
        name
      })
    }
  })

  return items.sort((a, b) => {
    if (a.order !== b.order) return a.order - b.order
    return a.name.localeCompare(b.name, 'zh')
  })
}

/**
 * 自动生成侧边栏配置
 */
export function generateSidebarItems(dirPath) {
  return collectDocs(dirPath).map(({ text, link }) => ({ text, link }))
}

/**
 * 获取目录下第一篇文档链接
 */
export function getFirstDocLink(dirPath) {
  const docs = collectDocs(dirPath)
  return docs[0]?.link || `/${dirPath}/`
}

/**
 * 目录内最大 order + 1（无文档时为 1）
 */
export function getNextOrder(dirPath) {
  const docs = collectDocs(dirPath)
  if (!docs.length) return 1
  const max = Math.max(
    ...docs.map((d) => (Number.isFinite(d.order) ? d.order : 0))
  )
  return max + 1
}

/**
 * 扁平化 sections 中所有带 dir 的项
 */
export function flattenSections(sections) {
  const list = []
  for (const section of sections) {
    if (section.dir) {
      list.push({ text: section.text, dir: section.dir })
    }
    if (section.items) {
      for (const item of section.items) {
        if (item.dir) list.push({ text: item.text, dir: item.dir })
      }
    }
  }
  return list
}
