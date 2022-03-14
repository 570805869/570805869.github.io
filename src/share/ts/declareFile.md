---
title: Ts-声明文件
date: 2022-03-11
categories:
 - ts
tags:
 - ts
---

## 声明文件
> 当使用第三方库时，我们需要引用它的声明文件，才能获得对应的代码补全、接口提示等功能

- declare var 声明全局变量
- declare function 声明全局方法
- declare class 声明全局类
- declare enum 声明全局枚举类型
- declare namespace 声明（含有子属性的）全局对象
- interface 和 type 声明全局类型
- export 导出变量
- export namespace 导出（含有子属性的）对象
- export default ES6 默认导出
- export = commonjs 导出模块
- export as namespace UMD 库声明全局变量
- declare global 扩展全局变量
- declare module 扩展模块
- 三斜线指令 <reference path="Validation.ts" />

```ts
// declare var
declare const jQuery: (selector: string) => any;
 
// declare function
declare function jQuery(selector: string): any;
declare function jQuery(domReadyCallback: () => any): any; //函数重载
 
// declare class
declare class Animal { // src/Animal.d.ts
    name: string;
    constructor(name: string);
    sayHi(): string;
}
let cat = new Animal('Tom'); // src/index.ts
 
// declare enum
declare enum Directions {
    Up,
    Down,
}
let directions = [Directions.Up, Directions.Down];
 
// declare namespace 不推荐使用
 
// interface 和 type   interface和type类似
interface AjaxSettings { // src/jQuery.d.ts
    method?: 'GET' | 'POST'
    data?: any;
}
declare namespace jQuery {
    function ajax(url: string, settings?: AjaxSettings): void;
}
let settings: AjaxSettings = {  //src/index.ts
    method: 'POST',
    data: {
        name: 'foo'
    }
};
jQuery.ajax('/api/post_something', settings);

/// <reference path="Validation.ts" />

```

示例，把声明语句放到一个单独的文件（jQuery.d.ts）中。

```ts
declare var jQuery: (selector: string) => any;
 
jQuery('#foo');
```
[搜索声明](https://www.typescriptlang.org/dt/search?search=) (该网址搜索你需要的声明文件，找不到则没有)<br>
当在 TypeScript 项目中使用第三方库时，我们需要引用它的声明文件，才能获得对应的代码补全、接口提示等功能。<br>
针对多数第三方库，社区已经帮我们定义好了它们的声明文件，我们可以直接下载下来使用。<br>
一般推荐使用 @types 统一管理第三方库的声明文件，@types 的使用方式很简单，直接用 npm 或 yarn 安装对应的声明模块即可。以 lodash 为例：<br>

```ts
npm install @types/lodash --save-dev
```