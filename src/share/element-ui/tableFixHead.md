---
title: Table-固定表头
date: 2020-07-05
categories:
 - Element-UI
tags:
 - Element-UI
---

# 固定表头
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