// config.js
import sidebar from './sidebar'
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
        _render(src, env, md) {
          const html = md.render(src, env);
          if (env.frontmatter?.title)
            return md.render(`# ${env.frontmatter.title}`) + html;
          return html;
        },
      },
    },
    nav: [
      // 页面右上角的导航
      {
        text: "前端",
        items: [
          { text: "Node", link: "/node" },
          {
            text: "Vue",
            link: "/vue",
          },
          {
            text: "Uniapp",
            link: "/uniapp",
          },
        ],
      },
      {
        text: "gis",
        items: [
          {
            text: "Cesium",
            link: "/gis/cesium",
          },
        ],
      },
      {
        text: "工具",
        link: "/tools/",
      },
      {
        text: "服务端",
        link: "/service/",
      },
    ],
    sidebar: sidebar
  },
};
