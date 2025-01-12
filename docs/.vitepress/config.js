// config.js
import sidebar from "./sidebar";
import navData from "./nav";
export default {
  title: "vitepress", // 博客的标题
  description: "xxxx 的个人博客", // 博客的介绍
  base: "/viteDocs/", // 这里填github的仓库名称
  layout: "home",
  lastUpdated: true, // 最后更新时间
  cleanUrls: true,
  metaChunk: true,
  themeConfig: {
    search: {
      provider: "local",
      options: {
        translations: {
          button: {
            buttonText: '搜索文档',
            buttonAriaLabel: '搜索文档'
          },
          modal: {
            noResultsText: '无法找到相关结果',
            resetButtonTitle: '清除查询条件',
            footer: {
              selectText: '选择',
              navigateText: '切换',
              closeText: '关闭'
            }
          }
        },
        detailedView: true,
        // 配置搜索逻辑
        search: function (items, term) {
          // 只搜索标题
          const regex = new RegExp(term, 'i')
          return items.filter(item => {
            return regex.test(item.title) || 
                   (item.headings && item.headings.some(heading => 
                     heading.level <= 2 && regex.test(heading.text)
                   ))
          })
        }
      },
    },
    lastUpdated: {
      text: '最后更新于',
      formatOptions: {
        dateStyle: 'full',
        timeStyle: 'medium',
        locale: 'zh-CN'
      }
    },
    nav: navData,
    sidebar: sidebar,
  },
};
