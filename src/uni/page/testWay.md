---
title: 真机调试
date: 2021-08-20
categories:
 - Uni-App
tags:
 - Uni-App
---

## ios真机调试方法
mac电脑可下载imazing
应用，点开链接手机

用hbuilderx 运行 手机模拟器 下载真机调试插件

插件下载好之后，点击运行手机模拟器，找到链接的手机（下载至手机后-设置-通用-描述文件-信任插件）

等待，手机出现hbuild

## 微信小程序配置
首先打开微信这开发工具，倒入项目 ，项目地址位于uni-app中

/uni-app项目/unpackage/dist/dev/mp-weixin

生成一个测试appid（注：用这个测试appid可以进行真机调试，如果直接运行hbuilder的运行打开的小程序项目真机调试时会提示你没有权限）

然后回到hbuilder中打开项目的manifest，找到微信小程序配置 把刚才生成的appid 复制进去（注：这里是配置hbuilder运行时可以直接打开小程序）

## 安卓真机调试
USB连接手机，出现弹窗时，选择传输文件
如果没弹，打开手机设置，版本号位置连点3次，显示开启开发者模式

设置，找到开发者选项后 勾选开发者选项，USB调试

打开hbuild，运行，基本可以显示当前连接的安卓手机

## mac电脑上安卓模拟器调试
下载网易mumu模拟器 https://mumu.163.com/mac/index.html
终端输入命令 cd /Applications/NemuPlayer.app/Contents/MacOS

连接模拟器的端口 ./adb kill-server && ./adb server && ./adb shell

打开huilder，看运行里面，会有模拟器

注意：碰到过先链接ios真机再链接安卓模拟器时，是搜索不到安卓模拟器的设备。这时可以先断开ios真机调试，然后等待。（不确定具体原因，临时解决方法）
（未完待续……）
