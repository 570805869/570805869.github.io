---
title: Element-UI组件-笔记
date: 2020-07-05
categories:
 - Element-UI
tags:
 - Element-UI
---

## Table

### 固定表头
> 只要在el-table元素中定义了height属性，即可实现固定表头的表格，而不需要额外的代码。

```js
<el-table
  :data="tableData"
  height="250"  // 固定高度
  border
  style="width: 100%">
  <el-table-column
    prop="date"
    label="日期"
    width="180">
  </el-table-column>
  <el-table-column
    prop="name"
    label="姓名"
    width="180">
  </el-table-column>
  <el-table-column
    prop="address"
    label="地址">
  </el-table-column>
</el-table>
```
但是这样是不行的因为，你的窗口大小是有可能变化的，这种固定高度无法满足需求。所以我们需要动态设置。

例如：
```js
<template>
  <div class="app-container">
    <div>
      <el-table :height="tableHeight" />
        <el-table-column prop="studentName" ></el-table-column>
        <el-table-column prop="telephone"></el-table-column>
      </el-table>
    </div>
  </div>
</template>

<script>
  data() {
    return{
      tableHeight: 50, // 默认高度
    }
  },
  mounted() {
    // 这里面的具体数值要根据页面内，你想要展示高度去计算
    this.$nextTick(() => {
      this.tableHeight = window.innerHeight - 420; 
      window.onresize = () =>  { // 监听窗口大小变化
        this.tableHeight = window.innerHeight - this.$refs.table.$el.offsetTop - 140
      }
    })
  },
</script>
```

## upload上传

有两种，一种是有服务器地址，直接上传到服务器中，接口返回图片地址，再根据需求进行下一步操作。<br>
另一种是，把图片添加上，完成一些列填空，最后通过form表单格式，将数据一起发给后台。<br>

第一种

html代码
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
js代码
```js
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
},
```

第二种

html代码

```html
<el-upload
  ref="imgUpload"
  list-type="picture-card"
  :on-remove="handleRemove"
  :before-remove="beforeRemove"
  :http-request="handleUploadFile"
  :before-upload="beforeLogoUpload"
  :before-upload="beforeUpload"
  :auto-upload="false"
  action="" 
  :on-change="handleChange"
  :limit="2"
  :file-list="fileList">
  <i class="el-icon-plus"></i>
</el-upload>

<!-- 其中auto-upload，这个设置为false,不自动上传 -->
<!-- :action 这里要为空 -->
```

js代码
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



## el-select 增加加载更多事件

需求背景：下拉框数据特别多的情况需要下拉至底部后动态加载更多数据.<br>
注意事项：使用加载更多后，前端检索下拉框的数据是局部数据、检索最好使用远程数据.<br>
实现思路：自定义事件（通过计算滚动条高度，触发自定义事件）。页面通过自定义事件加载更多数据.<br>

- 首先自定义好下拉加载更多的方法 新增 loadmore.js
```js
export default {
  bind (el, binding) {
    // 获取element-ui定义好的scroll盒子 select 滚动到底部加载更多数据
    const SELECTWRAP_DOM = el.querySelector('.el-select-dropdown .el-select-dropdown__wrap')
    SELECTWRAP_DOM.addEventListener('scroll', function () {
        const CONDITION = this.scrollHeight - (parseInt(this.scrollTop)+1) <= this.clientHeight
        if (CONDITION) {
            binding.value()
        }
    })
  }
}
```
新增好之后，放在一个文件夹中。

- 在一个统一的文件中给vue注册自定义事件

```js
import loadmore from "../loadmore";

const install = function(Vue) {
  Vue.directive('loadmore', loadmore)
}

if (window.Vue) {
  Vue.use(install); // eslint-disable-line
}

export default install
```

- 在main.js中（即最外层js）引入该文件并使用

```js
import permission from './directive/permission'

Vue.use(permission)

```

- 使用示例代码
```vue

<el-select
  filterable
  remote
  :remote-method="remoteMethod"
  clearable 
  v-model="queryParams.schoolName"
  @focus="focusSchool"
  placeholder="学校"
  v-loadmore="loadMoreSelect"
>
    <el-option
        v-for="(item,index) in schoolList"
        :key="index"
        :label="item.name"
        :value="item.name">
    </el-option>
    <el-option v-show="loadingSelect" value="loading" style="text-align: center;">加载中...</el-option> // 注意这个要加到下拉中
</el-select>
```

- 其中loadMoreSelect绑定的事件

```js
// 学校加载更多
loadMoreSelect() {
    this.loadingSelect = true // 是否显示加载中这个选项
    this.schoolParam.pageNum++ // 有分页思想，记录当前加载页数

    apiSchoolList(this.schoolParam).then((res) => {
        this.loadingSelect = false // 隐藏加载中 选项
        this.schoolList.push(...res.data) // 把请求到的数据push到下拉数组中
    })
},
```

部分变量需要在data中声明，不可直接应用。