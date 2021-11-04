---
title: Table-单元格合并
date: 2020-07-05
categories:
 - Element-UI
tags:
 - Element-UI
---

# 列表部分单元格合并
> 需求背景：展示数据的列表中第一列时间相同，合并单元格。

```vue
<el-table
    v-loading="loading"
    :row-class-name="isCell ? setCellClass : ''"
    @cell-mouse-enter="handleMouse"
    @cell-mouse-leave="handleMouseLeve"
    :data="tableData"
    :span-method="objectSpanMethod"
>
<el-table/>
```
table外层这里需要注意以下 两 点
- 关注点1：这里需要绑定 :span-method="objectSpanMethod" 方法，在里面写具体逻辑（objectSpanMethod）
- 关注点2：关于样式问题，解决方式：绑定这3个属性， 
    :row-class-name="isCell ? setCellClass : ''"
    @cell-mouse-enter="handleMouse"
    @cell-mouse-leave="handleMouseLeve"

针对关注点1：

```vue
data() {
    return{
        spanArr: [],
        pos: 0, // spanArr 的索引
    }
},
methods:{
    // 通过请求拿到列表数据
    getList(data) {
        this.handeleTableAry(data) // data是我们的列表数据
    },
    handeleTableAry(data) {
        this.spanArr = [];
        data.forEach((item, index) => {
            if (index === 0) {
                this.spanArr.push(1);
                this.pos = 0;
            } else {
                // 判断当前元素与上一个元素是否相同 用自己的判定标准替换ownerWeek
                if (item.ownerWeek === data[index - 1].ownerWeek) { 
                    this.spanArr[this.pos] += 1;
                    this.spanArr.push(0);
                } else {
                    this.spanArr.push(1);
                    this.pos = index;
                }
            }
        })
    },
    objectSpanMethod({ row, column, rowIndex, columnIndex }) {
        if (columnIndex === 0) { // 第一列
            const _row = this.spanArr[rowIndex]; 
            const _col = _row > 0 ? 1 : 0; 
            return { 
                rowspan: _row, // 合并行数
                colspan: _col, // 当前是否往下合并 1合并 0不合并
            };
        }
    },
}
```

针对关注点2：
除了顶部 绑定的3个属性，我们需要借助js解决，通过鼠标移入移出添加动态类名，以此判定。

```vue
data() {
    return{
        cellIndex: null, // 当前所属单元格唯一标志
        isCell: false, // 是否移入标志
    }
},
methods: {
    handleMouse(row, column, cell, event) { // 单元格移入事件
        this.cellIndex = row.ownerWeek; // 记录当前判断可以合并单元格的标志
        this.isCell = true; // 
    },
    handleMouseLeve() { // 单元格移除事件
        this.isCell = false;
    },
    setCellClass({ row, rowIndex }) { // 设置行样式
        // 查看对应rowIndex 是否是第一个向下合并的单元格 还是 被合并的单元格
        const _row = this.spanArr[rowIndex];  
        const _col = _row > 0 ? 1 : 0; 
        // 相当于给第一列（是你需要的那列） 只要鼠标移入了一组单元格中除了第一行的<其他行>
        // 那么第一列(你需要的那列)会一直高亮, return 一个类名
        if (_col &&  row.ownerWeek === this.cellIndex) return 'cellClass';  
    },
}
```

接下来最后一步,在css中添加样式，值得注意的是，这个style不要添加scope，
不然不能覆盖自带的。
```css
<style lang="scss">
.el-table{
    .cellClass,.hover-row{
        td:nth-child(1) {
            background-color: #f5f7fa;
            background: #f5f7fa;
        }
    }
}
<style/>
````