# webview与H5双向通信



## 文档

https://zh.uniapp.dcloud.io/component/web-view.html



## uniapp组件

```vue
<template>
	<view class="content">
		<web-view src="http://192.168.194.100:5500/index.html" @message="message"></web-view>
	</view>
</template>

<script>
	export default {
		methods: {
			message(e) {
				let self = this
				//接收H5发送给app的消息
				// e.detail.data即为H5中uni.webView.postMessage()的data的内容
				let mesg = e.detail.data[0]
				console.log("mesg", mesg)
				if (mesg.action == 'getGps') {
					uni.getLocation({
						type: 'wgs84',
						geocode: true, // 位置解析 仅app支持
						success: function (res) {
							console.log('当前位置：' + res);
							// 向H5发送消息	
							const currentWebview = self.$scope.$getAppWebview()
							const wv = currentWebview.children()[0] // 要想达到UNIAPP给webview的H5传值则要先获取webview的实例
							wv.evalJS(`appCallBack('app信息 ${JSON.stringify(res)} ')`)
						}
					});
				}
			}
		}
	}
</script>
```



## H5组件

```html
<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <script src="./uni.webview.1.5.6.js"></script>
  <title>Document</title>
</head>

<body>
  <button id="btn">按钮通信</button>
  <script>
    let btn = document.getElementById("btn")
    btn.addEventListener('click', function () {
      //h5向app传参，触发事件
      uni.webView.postMessage({
        data: {
          action: 'getGps',
        }
      })
    })

    window.appCallBack = async (arg) => {
      // 填写H5中相关的代码逻辑
      console.log(arg, '11');
      alert('appCallBack: '+JSON.stringify(arg))
    };
  </script>
</body>

</html>
```

### uni.webview.1.5.6.js

- `uni.webview.js` 最新版地址：https://gitcode.net/dcloud/uni-app/-/raw/dev/dist/uni.webview.1.5.6.js

```js
!function(e,n){"object"==typeof exports&&"undefined"!=typeof module?module.exports=n():"function"==typeof define&&define.amd?define(n):(e=e||self).uni=n()}(this,(function(){"use strict";try{var e={};Object.defineProperty(e,"passive",{get:function(){!0}}),window.addEventListener("test-passive",null,e)}catch(e){}var n=Object.prototype.hasOwnProperty;function i(e,i){return n.call(e,i)}var t=[];function o(){return window.__dcloud_weex_postMessage||window.__dcloud_weex_}function a(){return window.__uniapp_x_postMessage||window.__uniapp_x_}var r=function(e,n){var i={options:{timestamp:+new Date},name:e,arg:n};if(a()){if("postMessage"===e){var r={data:n};return window.__uniapp_x_postMessage?window.__uniapp_x_postMessage(r):window.__uniapp_x_.postMessage(JSON.stringify(r))}var d={type:"WEB_INVOKE_APPSERVICE",args:{data:i,webviewIds:t}};window.__uniapp_x_postMessage?window.__uniapp_x_postMessageToService(d):window.__uniapp_x_.postMessageToService(JSON.stringify(d))}else if(o()){if("postMessage"===e){var s={data:[n]};return window.__dcloud_weex_postMessage?window.__dcloud_weex_postMessage(s):window.__dcloud_weex_.postMessage(JSON.stringify(s))}var w={type:"WEB_INVOKE_APPSERVICE",args:{data:i,webviewIds:t}};window.__dcloud_weex_postMessage?window.__dcloud_weex_postMessageToService(w):window.__dcloud_weex_.postMessageToService(JSON.stringify(w))}else{if(!window.plus)return window.parent.postMessage({type:"WEB_INVOKE_APPSERVICE",data:i,pageId:""},"*");if(0===t.length){var u=plus.webview.currentWebview();if(!u)throw new Error("plus.webview.currentWebview() is undefined");var g=u.parent(),v="";v=g?g.id:u.id,t.push(v)}if(plus.webview.getWebviewById("__uniapp__service"))plus.webview.postMessageToUniNView({type:"WEB_INVOKE_APPSERVICE",args:{data:i,webviewIds:t}},"__uniapp__service");else{var c=JSON.stringify(i);plus.webview.getLaunchWebview().evalJS('UniPlusBridge.subscribeHandler("'.concat("WEB_INVOKE_APPSERVICE",'",').concat(c,",").concat(JSON.stringify(t),");"))}}},d={navigateTo:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=e.url;r("navigateTo",{url:encodeURI(n)})},navigateBack:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=e.delta;r("navigateBack",{delta:parseInt(n)||1})},switchTab:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=e.url;r("switchTab",{url:encodeURI(n)})},reLaunch:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=e.url;r("reLaunch",{url:encodeURI(n)})},redirectTo:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=e.url;r("redirectTo",{url:encodeURI(n)})},getEnv:function(e){a()?e({uvue:!0}):o()?e({nvue:!0}):window.plus?e({plus:!0}):e({h5:!0})},postMessage:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};r("postMessage",e.data||{})}},s=/uni-app/i.test(navigator.userAgent),w=/Html5Plus/i.test(navigator.userAgent),u=/complete|loaded|interactive/;var g=window.my&&navigator.userAgent.indexOf(["t","n","e","i","l","C","y","a","p","i","l","A"].reverse().join(""))>-1;var v=window.swan&&window.swan.webView&&/swan/i.test(navigator.userAgent);var c=window.qq&&window.qq.miniProgram&&/QQ/i.test(navigator.userAgent)&&/miniProgram/i.test(navigator.userAgent);var p=window.tt&&window.tt.miniProgram&&/toutiaomicroapp/i.test(navigator.userAgent);var _=window.wx&&window.wx.miniProgram&&/micromessenger/i.test(navigator.userAgent)&&/miniProgram/i.test(navigator.userAgent);var m=window.qa&&/quickapp/i.test(navigator.userAgent);var f=window.ks&&window.ks.miniProgram&&/micromessenger/i.test(navigator.userAgent)&&/miniProgram/i.test(navigator.userAgent);var l=window.tt&&window.tt.miniProgram&&/Lark|Feishu/i.test(navigator.userAgent);var E=window.jd&&window.jd.miniProgram&&/jdmp/i.test(navigator.userAgent);var x=window.xhs&&window.xhs.miniProgram&&/xhsminiapp/i.test(navigator.userAgent);for(var S,h=function(){window.UniAppJSBridge=!0,document.dispatchEvent(new CustomEvent("UniAppJSBridgeReady",{bubbles:!0,cancelable:!0}))},y=[function(e){if(s||w)return window.__uniapp_x_postMessage||window.__uniapp_x_||window.__dcloud_weex_postMessage||window.__dcloud_weex_?document.addEventListener("DOMContentLoaded",e):window.plus&&u.test(document.readyState)?setTimeout(e,0):document.addEventListener("plusready",e),d},function(e){if(_)return window.WeixinJSBridge&&window.WeixinJSBridge.invoke?setTimeout(e,0):document.addEventListener("WeixinJSBridgeReady",e),window.wx.miniProgram},function(e){if(c)return window.QQJSBridge&&window.QQJSBridge.invoke?setTimeout(e,0):document.addEventListener("QQJSBridgeReady",e),window.qq.miniProgram},function(e){if(g){document.addEventListener("DOMContentLoaded",e);var n=window.my;return{navigateTo:n.navigateTo,navigateBack:n.navigateBack,switchTab:n.switchTab,reLaunch:n.reLaunch,redirectTo:n.redirectTo,postMessage:n.postMessage,getEnv:n.getEnv}}},function(e){if(v)return document.addEventListener("DOMContentLoaded",e),window.swan.webView},function(e){if(p)return document.addEventListener("DOMContentLoaded",e),window.tt.miniProgram},function(e){if(m){window.QaJSBridge&&window.QaJSBridge.invoke?setTimeout(e,0):document.addEventListener("QaJSBridgeReady",e);var n=window.qa;return{navigateTo:n.navigateTo,navigateBack:n.navigateBack,switchTab:n.switchTab,reLaunch:n.reLaunch,redirectTo:n.redirectTo,postMessage:n.postMessage,getEnv:n.getEnv}}},function(e){if(f)return window.WeixinJSBridge&&window.WeixinJSBridge.invoke?setTimeout(e,0):document.addEventListener("WeixinJSBridgeReady",e),window.ks.miniProgram},function(e){if(l)return document.addEventListener("DOMContentLoaded",e),window.tt.miniProgram},function(e){if(E)return window.JDJSBridgeReady&&window.JDJSBridgeReady.invoke?setTimeout(e,0):document.addEventListener("JDJSBridgeReady",e),window.jd.miniProgram},function(e){if(x)return window.xhs.miniProgram},function(e){return document.addEventListener("DOMContentLoaded",e),d}],M=0;M<y.length&&!(S=y[M](h));M++);S||(S={});var P="undefined"!=typeof uni?uni:{};if(!P.navigateTo)for(var b in S)i(S,b)&&(P[b]=S[b]);return P.webView=S,P}));
```

