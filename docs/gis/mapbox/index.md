
## mapboxgl之symbol控制避让属性，使symbol始终显示

当layer属性为symbol时，为了画面简洁，默认是开启标签避让的，如果你添加的symbol不需要监测避让，需要开启以下属性：
 'icon-ignore-placement': true,与其他元素重叠时，同时显示。
 'icon-allow-overlap': true,与其他元素重叠时，此元素不隐藏。
 'icon-keep-upright': true,元素始终保持在最上面。
 此时，就可让你新增加的symbol始终显示了