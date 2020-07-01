---
title: Vue-截图插件-html2canvas
date: 2020-06-10
categories:
 - Vue
tags:
 - Vue-plugins
---

> 向作者致敬,附上官网地址 http://html2canvas.hertzen.com/

安装
```js
cnpm install --save html2canvas // 有条件的就用cnpm，我用npm反正没有下下来
```

使用
```js
import html2canvas from 'html2canvas'; // 在需要用的组件中 定义
```

html
```html
<div id="capture" style="padding: 10px; background: #f5da55">
    <h4 style="color: #000; ">Hello world!</h4>
</div>
<!-- 或者 封装成一个组件 关键的是那个id -->
<LeftModel
  id="imagePart"
  symbol="fixed"
  :organLogoBase64="organLogoBase64"
  :modelObj="modelObj"
  :curMode="curMode"
  :posterQrCodeUrl="posterQrCodeUrl"
  :pageData="pageData"/>
```

```js
methods: {
  //点击生成图片
  generatorImage() { // 最好在调用方法是延迟一点，不然有时候图片会加载不全
    let timer = setTimeout(() => {
      clearTimeout(timer);
      this.htmlPhoto('preview');
    }, 1000)
  },
  htmlPhoto() {
    const div = document.getElementById('imagePart');
    html2canvas(div,{
      backgroundColor: null,
      backgroundPositionX: '0px;',
      backgroundPositionY: '0px',
      scale: 4, // 设置这个解决了生成图片模糊问题
      scrollY: 0,
      useCORS:true,
    }).then((canvas) => {
      let imgUrl = canvas.toDataURL("image/png");
      // todo
    });
  },
}
```

coding中遇到的问题：<br>
1.元素中有图片用到了非本地的会有跨域问题，两种解决方式<br>
  - 1.在跨域的图片里设置 crossOrigin="anonymous" 并且需要给imgUrl加上随机数<br>
  - 2.将跨域图片转为base64格式（本次应用逻辑是后台将图片转为base64发给了前端）<br>

2.类似于图片中<br>
<img src="../../imgs/plugins/13.png" style="width: 80%;">
- 1.最左边这个情况一般发生在，页面有竖向滚动条时，当页面发生了滚动，他就有一部分图片消失了
- 2.中间这个情况是在滚动条没有动的初始状态下，会向右偏移

统一解决的思路是，在html代码中复制了一模一样的，因为我是包装成了组件，所以只是将组件再复制了一份。<br>
不同的是，另一份，是通过position:fixed 国定在视口中，并将z-index设置为-1,<br>
这样不管你屏幕怎么滚动，他都始终在这里。只是属于比较笨的方法，因为写了重复代码<br>
在没有找到新的解决思路之前，可能会保持这个状态<br>


