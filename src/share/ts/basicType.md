---
title: Ts-基础类型
date: 2022-02-25
categories:
 - ts
tags:
 - ts
---

## 基础类型


| 数据类型 | 关键字 | 描述 |
| --- | --- | --- |
| 任意类型 | any |  <img src="./img/any.png" style="width: 80%;"> |
| 数字类型 | number | <img src="./img/number.png" style="width: 80%;"> |
| 字符串类型 | string | <img src="./img/string.png" style="width: 80%;"> |
| 布尔类型 | boolean | <img src="./img/boolean.png" style="width: 80%;"> |
| 数组类型 | 无 | <img src="./img/array.png" style="width: 80%;"> |
| 元组 | 无 | <img src="./img/tupple.png" style="width: 80%;"> |
| 枚举 | enum | <img src="./img/enum.png" style="width: 80%;"> |
| void | void | <img src="./img/void.png" style="width: 80%;"> |
| null | null | <img src="./img/null.png" style="width: 80%;"> |
| undefined | undefined | <img src="./img/undefined.png" style="width: 80%;"> |
| never | never | never 是其它类型（包括 null 和 undefined）的子类型，代表从不会出现的值。 |

## 变量声明

变量是一种使用方便的占位符，用于引用计算机内存地址。我们可以把变量看做存储数据的容器。

命名规则：
- 变量名称可以包含数字和字母。
- 除了下划线 _ 和美元 $ 符号外，不能包含其他特殊字符，包括空格。
- 变量名不能以数字开头。

```ts
// 声明变量的类型及初始值：  var [变量名] : [类型] = 值;
var uname:string = "Runoob";

// 声明变量的类型，但没有初始值，变量值会设置为 undefined： var [变量名] : [类型];
var uname:string;

// 声明变量并初始值，但不设置类型，该变量可以是任意类型： var [变量名] = 值;
var uname = "Runoob";

// 声明变量没有设置类型和初始值，类型可以是任意类型，默认初始值为 undefined：var [变量名];
var uname;

// TypeScript 遵循强类型，如果将不同的类型赋值给变量会编译错误，如下实例：
var num:number = "hello"     // 这个代码会编译错误

```