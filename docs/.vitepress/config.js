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
        _render(src, env, md) {
          const html = md.render(src, env);
          if (env.frontmatter?.title)
            return md.render(`# ${env.frontmatter.title}`) + html;
          return html;
        },
      },
    },
    nav: navData,
    sidebar: sidebar,
  },
};
