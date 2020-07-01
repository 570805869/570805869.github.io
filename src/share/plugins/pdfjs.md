---
title: Pdf.js插件的使用
date: 2020-05-01
categories:
 - 插件
tags:
 - 插件
---

目的：使用Pdf.js预览pdf并隐藏下载，打印，注视ctrl+s下载功能，及设置默认页面显示内容尺寸。
+ [现成demo](https://github.com/570805869/pdfJs) <br>
+ [Pdf.js官网](https://mozilla.github.io/pdf.js/getting_started/#download) <br>

<img src="../../imgs/plugins/1.png" style="width: 80%;"><br>

- 做的时候，遇到一个问题，直接用了/static/pdf/web/viewer.html?file= 这个路径的时候页面一直再报错，<br>
报错内容为： Uncaught SyntaxError: Unexpected token < 
<img src="../../imgs/plugins/2.jpg" style="width: 80%;"><br>
类似这样的，针对于我的问题来说，就是 我pdf这个文件放的位置不对。<br>

- 项目当时用的是webpack 3.0搭建的，在根目录下面没有static文件，只有public文件，<br>
报错时，我是在根目录上直接新建了一个static文件，但是这样是不对的<br>

<img src="../../imgs/plugins/3.png" style="width: 40%;"><br>

- 后来，尝试在public文件中新建了一个static文件，再把pdf文件放入其中，才好。

<img src="../../imgs/plugins/4.png" style="width: 40%;"><br>

### 隐藏下载功能

- 找到‘/static/pdf/web/viewer.html’ 中的按钮设置style="display:none"
值得注意的是页面中大概有两个按钮，都表示 打印和下载 按钮，我改的大概是190行左右，达到目的，截图为110行，仅供参考。

<img src="../../imgs/plugins/5.png" style="width: 100%;"><br>

- 找到‘/static/pdf/web/viewer.js 注释打印 和 下载的事件"
我在大概1745行找到

<img src="../../imgs/plugins/6.png" style="width: 100%;"><br>

-  找到‘/static/pdf/web/viewer.js 注释快捷键ctrl+s 下载事件"
我大概在2375行找到

<img src="../../imgs/plugins/7.png" style="width: 100%;"><br>

这样大功告成

### 设置默认显示宽度：适合页宽

- 默认第一次用户进入是 自动缩放，而需求是第一次进入时默认为 适合页宽

<img src="../../imgs/plugins/8.png" style="width: 40%;"><br>

效果展示：<br>

<img src="../../imgs/plugins/9.png" style="width: 70%;"> 自动缩放
<img src="../../imgs/plugins/10.png" style="width: 70%;"> 适合页宽<br>
也就是白色的部分大了很多,修改如下<br>

- 首先在viewer.html 中找到 id = scaleSelectContainer,设置他的selected

<img src="../../imgs/plugins/11.png" style="width: 100%;">Page Width<br>

- 在viewer.js 中找到 DEFAULT_SCALE_VALUE 设置为Page Width

<img src="../../imgs/plugins/12.png" style="width: 100%;">Page Width<br>

这个pdf.js非常具有人性化的功能，它能够记住用户的行为习惯，存储在localStorage中，同一个项目引了两个也不怕，
就很神奇，很nice！
记录完毕
