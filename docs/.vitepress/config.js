// config.js
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
          // 可以配置成下拉
          { text: "Node", link: "/node" },
          {
            text: "elementplus",
            items: [
              // 可以配置成下拉
              {
                text: "react",
                link: "/node",
              },
              { text: "elementplus", link: "/node" },
              { text: "node", link: "/node" },
            ],
          },
          { text: "node", link: "/node" },
        ],
      },
      {
        text: "java",
        items: [
          // 可以配置成下拉
          { text: "react", link: "" },
          { text: "elementplus", link: "" },
          { text: "node", link: "" },
        ],
      },
      {
        text: "服务端",
        items: [
          // 可以配置成下拉
          { text: "react", link: "" },
          { text: "elementplus", link: "" },
          { text: "node", link: "" },
        ],
      },
      {
        text: "工具",
        link: "/tools/",
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
    ],
    sidebar: {
      "/node/": [
        {
          text: "Node",
          collapsible: true,
          items: [
            {
              text: "Nvm",
              link: "/node/nvm",
            },
            {
              text: "Npm",
              link: "/node/npm",
            },
            {
              text: "test2",
              items: [
                {
                  text: "Level 3",
                  link: "",
                },
                {
                  text: "Level 3-2",
                  items: [
                    {
                      text: "Level 4",
                      link: "",
                    },
                  ],
                },
              ],
            },
          ],
        },
      ],
      "/gis/cesium/": [
        {
          text: "Cesium",
          collapsible: true,
          items: [
            {
              text: "Demo",
              link: "/gis/cesium/demo",
            },
          ]
        }
      ]
    },
  },
};
