// config.js
export default {
  title: "vitepress", // 博客的标题
  description: "xxxx 的个人博客", // 博客的介绍
  base: "/viteDocs/", // 这里填github的仓库名称
  themeConfig: {
    nav: [
      // 页面右上角的导航
      { text: "vue", link: "https://cn.vuejs.org/" },
      {
        text: "博客文档",
        items: [
          // 可以配置成下拉
          { text: "react", link: "" },
          { text: "elementplus", link: "" },
          { text: "node", link: "" }
        ]
      }
    ]
  }
};
