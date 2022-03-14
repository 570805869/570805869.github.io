---
title: Ts-交叉类型
date: 2022-03-07
categories:
 - ts
tags:
 - ts
---

## 交叉类型
> 交叉类型是将多个类型合并为一个类型。 这让我们可以把现有的多种类型叠加到一起成为一种类型，它包含了所需的所有类型的特性，使用&定义交叉类型。

```ts
interface A {
  name: string,
  age: number
}
interface B {
  name: string,
  gender: string
}

let a: A & B = { // OK
    name: "兔兔",
    age: 18,
    gender: "男"
};
```
a既是A类型，同时也是B类型。
注意点：**交叉类型取的多个类型的并集**，但是如果key相同但是类型不同，则该key为never类型。

```ts
type A = string & number // A 为 never 类型

let a: A = (() => {throw new Error()})(); // OK
```