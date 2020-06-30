## 图片裁剪

> 向原作者致敬 附上链接 https://github.com/xyxiao001/vue-cropper

安装
```js
cnpm install vue-cropper --save
// 开始因为没有加 --save， 导致package.json中没有它，打包失败。
```

使用
```js
// main.js里面使用
import VueCropper from 'vue-cropper'
Vue.use(VueCropper)
```

组件内使用
```js
import { VueCropper } from 'vue-cropper'
components: {
  VueCropper
}
```

值得注意：<br>
1.需要使用外层容器包裹并设置宽高。<br>
2.按照规定方式定义option<br>

附上代码：<br>

```html
<!-- 裁剪框 -->
<div class="leftImg">
  <VueCropper
    ref="cropper"
    centerBox
    :img="option.img"
    :outputSize="option.size"
    :outputType="option.outputType"
    :info="true"
    :full="option.full"
    :canMove="option.canMove"
    :canMoveBox="option.canMoveBox"
    :original="option.original"
    :autoCrop="option.autoCrop"
    :autoCropWidth="option.autoCropWidth"
    :autoCropHeight="option.autoCropHeight"
    :fixedBox="option.fixedBox"
    :fixedNumber="option.fixedNumber"
    :fixed="option.fixed"
    @realTime="realTime"
  />
</div>
<!-- 实时预览 -->
<div class="show-preview">
  <div class="preview"
      :style="{
        'width': previews.w + 'px !important',
        'height': previews.h + 'px',
        'transform': 'scale(' + 160/previews.w + ',' + 96/previews.h + ') ',
        'top': viewPosition,
        'left': viewPosition
    }">
    <img :src="option.img" :style="previews.img">
  </div>
</div>
```
```js
data() {
  return {
    previews: {},
    viewPosition: '0px',
    option: {
      img: '',
      outputSize:1, //剪切后的图片质量（0.1-1）
      size: 1,
      full: false, // 输出原图比例截图 props名full
      outputType: 'png',
      canMove: true,
      original: false,
      canMoveBox: true,
      autoCrop: true,
      autoCropWidth: 320,
      autoCropHeight: 192,
      fixedBox: false,
      fixedNumber: [5, 3],
      centerBox: true,
      fixed: true,
    },
  }
},
methods:{
  // 实时预览函数
  realTime(data) {
    this.previews = data;
    this.viewPosition = `${(110 - this.previews.h) / 2}px`;
  },
  //  确定裁剪输出的区域
  handleImg() {
    this.$refs.cropper.getCropData((data) => {
      let newFile = convertBase64UrlToBlob(data);
      this.$emit('handleClose', 'reUpload', newFile);
    })
  },
}
```
<!-- 
https://blog.csdn.net/hbjiankely/article/details/85268608
https://www.jianshu.com/p/36ca45c6b497
https://shnhz.github.io/shn-ui/#/component/vue-cropper
https://blog.csdn.net/qq_45740103/article/details/105207301?ops_request_misc=%257B%2522request%255Fid%2522%253A%2522159245992019724845057883%2522%252C%2522scm%2522%253A%252220140713.130102334.pc%255Fall.%2522%257D&request_id=159245992019724845057883&biz_id=0&utm_medium=distribute.pc_search_result.none-task-blog-2~all~first_rank_ecpm_v3~pc_rank_v2-1-105207301.first_rank_ecpm_v3_pc_rank_v2&utm_term=vueCropper+%E5%AE%9E%E6%97%B6%E9%A2%84%E8%A7%88+%E6%9C%89%E5%81%8F%E7%A7%BB -->