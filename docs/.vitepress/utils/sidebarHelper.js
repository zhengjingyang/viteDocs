import fs from 'fs'
import path from 'path'

/**
 * 自动生成侧边栏配置
 * @param {string} dirPath 目录路径
 * @returns {Array} 侧边栏配置数组
 */
export function generateSidebarItems(dirPath) {
  const items = []
  const fullPath = path.resolve(__dirname, '../../', dirPath)
  
  if (!fs.existsSync(fullPath)) return items
  
  const files = fs.readdirSync(fullPath)
  
  files.forEach(file => {
    // 忽略以 . 开头的文件和目录
    if (file.startsWith('.')) return
    
    const stat = fs.statSync(path.join(fullPath, file))
    
    if (stat.isFile() && file.endsWith('.md')) {
      // 处理markdown文件
      const name = file === 'index.md' ? '' : file.replace('.md', '')
      items.push({
        text: name || '介绍',
        // 确保目录以 / 结尾，并且非index.md文件也以 / 结尾
        link: `/${dirPath}${dirPath.endsWith('/') ? '' : '/'}${name}${name ? '/' : ''}`
      })
    }
  })
  
  return items.sort((a, b) => {
    // index.md 始终排在最前
    if (a.text === '介绍') return -1
    if (b.text === '介绍') return 1
    return a.text.localeCompare(b.text)
  })
} 