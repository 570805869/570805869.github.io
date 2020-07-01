---
title: CSS 部分常用代码
date: 2020-05-01
categories:
 - 基础
tags:
 - 基础
---

## 修改滚动条样式

```css
// 其中的 .cont 和 .work都是例子 可替换为*
.cont::-webkit-scrollbar {/*滚动条整体样式*/
    width: 4px;     /*高宽分别对应横竖滚动条的尺寸*/
    height: 4px;
}
.cont::-webkit-scrollbar-thumb {/*滚动条里面小方块*/
    border-radius: 5px;
    -webkit-box-shadow: inset 0 0 5px rgba(0,0,0,0.2);
    background: rgba(0,0,0,0.2);
}
.cont::-webkit-scrollbar-track {/*滚动条里面轨道*/
    -webkit-box-shadow: inset 0 0 5px rgba(0,0,0,0.2);
    border-radius: 0;
    background: rgba(0,0,0,0.1);
}
  .works::-webkit-scrollbar {/*滚动条整体样式*/
    width: 4px;     /*高宽分别对应横竖滚动条的尺寸*/
    height: 4px;
}
.works::-webkit-scrollbar-thumb {/*滚动条里面小方块*/
    border-radius: 5px;
    -webkit-box-shadow: inset 0 0 5px rgba(0,0,0,0.2);
    background: rgba(0,0,0,0.2);
}
.works::-webkit-scrollbar-track {/*滚动条里面轨道*/
    -webkit-box-shadow: inset 0 0 5px rgba(0,0,0,0.2);
    border-radius: 0;
    background: rgba(0,0,0,0.1);
}
```

## 多行省略
```css
 .much-line{
     width: 1.34rem;
    font-size: 0.12rem;
    color:#84868B; 
    overflow: hidden;
    text-overflow: ellipsis;
    -webkit-line-clamp: 2;
    word-break: break-all;
    display: -webkit-box;
    /*! autoprefixer: off */
    -webkit-box-orient: vertical;
    /* autoprefixer: on */
    line-height: 0.18rem;
 }
 // autoprefixer: off 和 autoprefixer: on 兼容火狐浏览器显示多行省略
```

## 谷歌强制12x 字体大小
```css
  .style{
    -webkit-transform: scale(0.75);        /* 解决谷歌强制12px */
  }
```
## 模糊层 

```css
.blur{
  overflow:hidden;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 0;
  background: url('./imgs/online/bg.png') no-repeat center;
  background-size: 100% 100%;
  -webkit-filter: blur(3px);
  -moz-filter: blur(5px);
  -ms-filter: blur(5px);
  filter:progid:DXImageTransform.Microsoft.Blur(PixelRadius='1'); /*针对IE进行设置*/
}
```



