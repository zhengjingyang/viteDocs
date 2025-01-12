## 随机生成图片
```js
<div class="box" v-for="i in 6">
  <img :src="'https://picsum.photos/330/200?' + i" alt="">
</div>
```

## 设置防跨域浏览器
```js
"C:\Program Files\Google\Chrome\Application\chrome.exe" --disable-web-security --user-data-dir=C:\Program Files\Google\Chrome\Application
```
