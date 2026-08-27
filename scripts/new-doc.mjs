#!/usr/bin/env node
/**
 * 新建文档脚手架
 *
 * 用法:
 *   npm run new -- <目录> <英文slug> [中文标题]
 *
 * 示例:
 *   npm run new -- vue image-compress 前端图片压缩
 *   npm run new -- node pm2-logs
 *   npm run new -- gis/arcgis layer-popup 图层弹窗
 *
 * 约定: 文件名用英文短横线 slug，侧边栏文案用 title（中文）
 */
import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'
import sections from '../docs/.vitepress/sections.js'
import {
  flattenSections,
  getNextOrder
} from '../docs/.vitepress/utils/sidebarHelper.js'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const docsRoot = path.resolve(__dirname, '../docs')

const [, , dirArg, slugArg, ...titleParts] = process.argv

function quoteYaml(val) {
  if (/[:#{}[\],&*?|>!%@`]/.test(val) || /^\s|\s$/.test(val) || /['"]/.test(val)) {
    return JSON.stringify(val)
  }
  return val
}

function printHelp() {
  const dirs = flattenSections(sections)
    .map((d) => `  - ${d.dir}  (${d.text})`)
    .join('\n')
  console.log(`
用法: npm run new -- <目录> <英文slug> [中文标题]

可用目录:
${dirs}

示例:
  npm run new -- vue image-compress 前端图片压缩
`)
}

if (!dirArg || !slugArg || dirArg === '-h' || dirArg === '--help') {
  printHelp()
  process.exit(dirArg ? 0 : 1)
}

const dir = dirArg.replace(/^\/+|\/+$/g, '').replace(/\\/g, '/')
const slug = slugArg
  .trim()
  .replace(/\.md$/i, '')
  .replace(/\s+/g, '-')
  .replace(/[^a-zA-Z0-9\u4e00-\u9fa5._-]/g, '-')
  .replace(/-+/g, '-')
  .replace(/^-|-$/g, '')

if (!slug) {
  console.error('错误: slug 无效')
  process.exit(1)
}

if (/[\u4e00-\u9fa5]/.test(slug)) {
  console.warn('提示: 建议使用英文 slug 作为文件名，中文放到标题参数里')
}

const known = new Set(flattenSections(sections).map((d) => d.dir))
if (!known.has(dir)) {
  console.warn(`警告: 目录 "${dir}" 不在 sections.js 中，侧边栏/导航不会显示`)
  console.warn('请在 docs/.vitepress/sections.js 中补充配置')
}

const title = titleParts.join(' ').trim() || slug
const targetDir = path.join(docsRoot, dir)
const targetFile = path.join(targetDir, `${slug}.md`)

if (!fs.existsSync(targetDir)) {
  fs.mkdirSync(targetDir, { recursive: true })
  console.log(`已创建目录: docs/${dir}`)
}

if (fs.existsSync(targetFile)) {
  console.error(`错误: 文件已存在 docs/${dir}/${slug}.md`)
  process.exit(1)
}

const order = getNextOrder(dir)
const md = `---
title: ${quoteYaml(title)}
order: ${order}
---

# ${title}

`

fs.writeFileSync(targetFile, md, 'utf8')
console.log(`已创建: docs/${dir}/${slug}.md`)
console.log(`title: ${title}`)
console.log(`order: ${order}`)
console.log(`预览路径: /${dir}/${slug}/`)
