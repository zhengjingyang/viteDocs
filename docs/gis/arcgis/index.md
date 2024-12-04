# 在vue中使用arcgis api for js

## 一、安装@arcgis/core：

```bash
 npm install @arcgis/core 
```

## 二、使用ncp将资源复制到本地（提高加载地图速度，可忽略）：

### 1. 安装ncp

```bash
npm i ncp
```

### 2. 在package.json文件中配置脚本：

```
"serve": "npm run copy && vue-cli-service serve",
"build": "npm run copy && vue-cli-service build",
"copy": "ncp ./node_modules/@arcgis/core/assets ./public/assets"
```

### 3.在main.js中配置esriConfig

```js
import esriConfig from "@arcgis/core/config.js"
esriConfig.assetsPath = `./assets`  //不设置assetsPath则默认从CDN中提取资源（非离线）
import '@arcgis/core/assets/esri/themes/light/main.css' // 引入样式文件
```