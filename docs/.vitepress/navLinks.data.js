import sections from './sections'
import { collectDocs } from './utils/sidebarHelper'

/**
 * 构建期生成导航数据，供入口页 DocNav 使用（避免浏览器端引用 fs）
 */
export default {
  load() {
    return sections.map((section) => {
      if (section.dir) {
        const docs = collectDocs(section.dir)
        return {
          title: section.text,
          links: [
            {
              text: section.text,
              link: docs[0]?.link || '',
              empty: docs.length === 0
            }
          ]
        }
      }
      return {
        title: section.text,
        links: (section.items || []).map((item) => {
          const docs = collectDocs(item.dir)
          return {
            text: item.text,
            link: docs[0]?.link || '',
            empty: docs.length === 0
          }
        })
      }
    })
  }
}
