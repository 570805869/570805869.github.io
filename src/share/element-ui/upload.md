---
title: Upload
date: 2020-07-05
categories:
 - Element-UI
tags:
 - Element-UI
---

# upload上传

> 有两种，一种是有服务器地址，直接上传到服务器中，接口返回图片地址，再根据需求进行下一步操作。<br>
> 另一种是，把图片添加上，完成一些列填空，最后通过form表单格式，将数据一起发给后台。<br>

- 第一种

``` html
<el-upload
  class="avatar-uploader"
  action=""
  :show-file-list="false"
  :http-request="handleUploadFile"
  :on-success="handleAvatarSuccess">
  <img v-if="imageUrl" :src="imageUrl" class="avatar">
  <i v-else class="uploadIcon">
    <span class="uploadImgPart">
      <span class="uploadImg"></span>
      <span class="uploadTxt">上传二维码</span>
    </span>
  </i>
</el-upload>
````

```javascript
handleUploadFile(context) {
  // 准备图片数据，因为后台需要的是formdata形式所以是这种
  const data = new FormData(); // 创建form对象
  data.append('qrcode', context.file); // 通过append向form对象添加数据
  api.postPersonQrcode(data).then((res) => {
    if (res.status === 0) {
      console.log('上传成功')
      this.imageUrl = res.data.qrCodeUrl; // 上传框显示图片
    } else {
      console.log('上传失败')
    }
  });
}
```

第二种

```html
<el-upload
  ref="imgUpload"
  list-type="picture-card"
  :on-remove="handleRemove"
  :before-remove="beforeRemove"
  :http-request="handleUploadFile"
  :auto-upload="false"
  action="" 
  :on-change="handleChange"
  :limit="2"
  :file-list="fileList">
  <i class="el-icon-plus"></i>
</el-upload>

```
- 其中auto-upload，这个设置为false,不自动上传 before-upload绑定事件会失效
- :action 这里要为空

```js
methods: {
  // 重要语句
  btnClick() {
    this.$refs.imgUpload.submit(); // 例如一个按钮点击，写他，他会自动调用handleUploadFile 这个方法
  }
  handleUploadFile(context) { // ⭐️
    const preData = new FormData(); // 创建form对象
    preData.append('id', this.diaId);
    preData.append('file', context.file);
    this.addData(preData);
  },
  addData(data) {
    api.postPyCoverImg(data).then((res) => {
      if (res.status === 0) {
        console.log('操作成功')
      } else {
        console.log('操作失败')
      }
    });
  },
  beforeLogoUpload(file) { // 限制格式/大小/尺寸
    // 格式
    if (!formatArr.includes(file.type)) {
      this.$message({
        message: '请上传正确的图片格式',
        type: 'warning',
      });
      return false;
    }
    // 大小
    const isSize1M = file.size / 1024 / 1024 < 1;
    if (!isSize1M) {
      this.$message({
        message: '图片大小不能超过1MB',
        type: 'warning',
      });
      return false;
    }
    // 尺寸
    const isSize = new Promise(((resolve, reject) => {
      let width = 160;
      let height = 96;
      let _URL = window.URL || window.webkitURL;
      let img = new Image();
      img.onload = function () {
        let valid = img.width == width && img.height == height;
        valid ? resolve() : reject();
      }
      img.src = _URL.createObjectURL(file);
    })).then(() => {
     return file;
    }, () => {
     this.$message.error('上传的图片宽高必须是160*96!');
     return Promise.reject();
    });
    return isSize1M && isSize;
  },
}
```
在上传组件中有一些方法没有写，详情参考官网。