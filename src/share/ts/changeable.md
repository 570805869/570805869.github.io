---
title: Ts-内置对象
date: 2022-02-28
sidebar: auto
collapsable: true
categories:
 - ts
tags:
 - ts
---

## 内置对象

> 内置对象是指根据标准在全局作用域（Global）上存在的对象。这里的标准是指 ECMAScript 和其他环境（比如 DOM）的标准。

### ECMAScript 的内置对象
```ts
let s: String = new String('兔神');
let n: Number = new Number(123);
let b: Boolean = new Boolean(1);
let e: Error = new Error('Error occurred');
let d: Date = new Date();
let r: RegExp = /[a-z]/;
```
### DOM 和 BOM 的内置对象
```ts
let body: HTMLElement = document.body;
let allDiv: NodeList = document.querySelectorAll('div');
document.addEventListener('click', function(e: MouseEvent) {
  // Do something
});
```

### 类数组对象IArguments
```ts
function sum() {
    let args: IArguments = arguments;
}
```

IArguments 实际上就是：
```ts
interface IArguments {
    [index: number]: any;
    length: number;
    callee: Function;
}
```