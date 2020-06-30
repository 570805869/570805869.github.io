# 一键复制功能

### 第一步-下载
```js
npm install clipboard --save
```

### 第二步-引入（我在主main.js中引入）
```js
import clipboard from 'clipboard';
Vue.prototype.clipboard = clipboard;
```

### 第三步-使用
html代码
```
<div class="listItem">
  <p class="listTitle">机构端网址</p>
  <p class="listCont">https://edu.wecode123.com/zylp</p>
  <div data-clipboard-text="https://edu.wecode123.com/zylp" data-clipboard-action="copy" class="copyIcon" title="复制" @click="copyLink"></div>
</div>
```
js代码
```js
  copyLink() {
    let _this = this;
    let clipboardObj = new this.clipboard(".copyIcon");
    clipboardObj.on('success', () => {
      console.log('复制成功')
    });
    clipboardObj.on('error', () => {
      console.log('复制失败')
    });
  },
```
需要注意的是this.clipboard(".copyIcon")重的copyIcon要和事件的那个元素相呼应。