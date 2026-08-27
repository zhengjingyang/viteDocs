import sections from './sections'
import {
  flattenSections,
  generateSidebarItems,
  getFirstDocLink
} from './utils/sidebarHelper'

/** 由 sections 自动生成侧边栏 */
export function buildSidebar() {
  const sidebar = {}
  for (const { text, dir } of flattenSections(sections)) {
    sidebar[`/${dir}/`] = [
      {
        text,
        collapsible: true,
        collapsed: false,
        items: generateSidebarItems(dir)
      }
    ]
  }
  return sidebar
}

/** 由 sections 自动生成顶部导航 */
export function buildNav() {
  return [
    { text: '导航', link: '/start/' },
    ...sections.map((section) => {
      if (section.dir) {
        return {
          text: section.text,
          link: getFirstDocLink(section.dir)
        }
      }
      return {
        text: section.text,
        items: (section.items || []).map((item) => ({
          text: item.text,
          link: getFirstDocLink(item.dir)
        }))
      }
    })
  ]
}

export default buildSidebar()
