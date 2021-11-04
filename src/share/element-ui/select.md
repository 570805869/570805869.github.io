---
title: Select&Vue自定义指令
date: 2021-11-04
categories:
 - Element-UI
tags:
 - Element-UI
---

# el-select 增加加载更多事件

> 需求背景：下拉框数据特别多的情况需要下拉至底部后动态加载更多数据.<br>
> 注意事项：使用加载更多后，前端检索下拉框的数据是局部数据、检索最好使用远程数据.<br>
> 实现思路：自定义事件（通过计算滚动条高度，触发自定义事件）。页面通过自定义事件加载更多数据.<br>

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