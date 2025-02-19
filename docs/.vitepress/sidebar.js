import { generateSidebarItems } from "./utils/sidebarHelper";

export default {
  "/node/": [
    {
      text: "Node",
      collapsible: true,
      items: generateSidebarItems("node")
    }
  ],
  "/html/": [
    {
      text: "HTML",
      collapsible: true,
      items: generateSidebarItems("html")
    }
  ],
  "/vue/": [
    {
      text: "Vue",
      items: generateSidebarItems("vue")
    }
  ],
  "/vue/vue3/": [
    {
      text: "Vue3",
      items: generateSidebarItems("vue/vue3")
    }
  ],
  "/uniapp/": [
    {
      text: "uniapp",
      items: generateSidebarItems("uniapp")
    }
  ],
  "/gis/cesium/": [
    {
      text: "Cesium",
      collapsible: true,
      items: generateSidebarItems("gis/cesium")
    }
  ],
  "/gis/arcgis/": [
    {
      text: "Arcgis",
      collapsible: true,
      items: generateSidebarItems("gis/arcgis")
    }
  ],
  "/yunwei/": [
    {
      text: "服务端",
      collapsible: true,
      items: generateSidebarItems("yunwei")
    }
  ]
};
