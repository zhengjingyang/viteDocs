# iframe
```html
 <iframe src="" style="width:100%;height:100%" id="iframe_map"></iframe> 
```
### 获取iframe的window
```js
const iframeWindow = document.getElementById('iframe_map').contentWindow;
```

## 父页面向子iframe传值
### 父页面
```js
const iframeWindow = document.getElementById('iframe_map').contentWindow;
iframeWindow.postMessage('Hello from parent', '*');
```
### 子iframe
```js
window.addEventListener('message', function(event) {
  console.log(event.data);
});
```

## 子iframe向父页面传值
### 子iframe
```js
window.parent.postMessage("数据", '*'); 
```
### 父页面
```js
window.addEventListener('message', function(event) {
  console.log(event.data);
});
```

## IFrame onload 事件
### 定义和用法
onload 事件在frame或者iframe载入完成后被触发。
```html
<iframe src="frame_a.htm" onload="load()"> </iframe>
<script>
  function load(){
    alert("Frame is loaded");
  }
</script> 
```
### vue 中使用iframe的onload事件
```js
<iframe src="frame_a.htm" onload="load()"> </iframe>
<script>
  function load(){
    alert("Frame is loaded");
  }
</script> 
```

