/**
 * 文档分区配置（侧边栏 / 导航 / 入口页共用）
 * 新增分类：在此加一项，并创建对应 docs 子目录即可
 */
export default [
  {
    text: '前端',
    items: [
      { text: 'HTML', dir: 'html' },
      { text: 'Vue', dir: 'vue' },
      { text: 'Vue3', dir: 'vue/vue3' },
      { text: 'Uniapp', dir: 'uniapp' }
    ]
  },
  {
    text: 'GIS',
    items: [
      { text: 'Cesium', dir: 'gis/cesium' },
      { text: 'Arcgis', dir: 'gis/arcgis' },
      { text: 'Mapbox', dir: 'gis/mapbox' }
    ]
  },
  {
    text: '服务端',
    items: [
      { text: 'Node', dir: 'node' },
      { text: 'Python', dir: 'python' }
    ]
  },
  {
    text: '工具',
    dir: 'tools'
  },
  {
    text: '运维',
    dir: 'yunwei'
  }
]
