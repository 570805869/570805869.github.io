---
title: Ts-枚举/常数枚举
date: 2022-02-26
categories:
 - ts
tags:
 - ts
---

## 枚举

枚举（Enum）类型用于取值被限定在一定范围内的场景，比如一周只能有七天，颜色限定为红绿蓝

```ts
enum Days {Sun, Mon, Tue, Wed, Thu, Fri, Sat};
```

枚举成员会被赋值为从 0 开始递增的数字，同时也会对枚举值到枚举名进行反向映射：
```ts
enum Days {Sun, Mon, Tue, Wed, Thu, Fri, Sat};

console.log(Days["Sun"] === 0); // true
console.log(Days["Mon"] === 1); // true
console.log(Days["Tue"] === 2); // true
console.log(Days["Sat"] === 6); // true

console.log(Days[0] === "Sun"); // true
console.log(Days[1] === "Mon"); // true
console.log(Days[2] === "Tue"); // true
console.log(Days[6] === "Sat"); // true
```

事实上，上面的例子会被编译为：

```ts
var Days;
(function (Days) {
    Days[Days["Sun"] = 0] = "Sun";
    Days[Days["Mon"] = 1] = "Mon";
    Days[Days["Tue"] = 2] = "Tue";
    Days[Days["Wed"] = 3] = "Wed";
    Days[Days["Thu"] = 4] = "Thu";
    Days[Days["Fri"] = 5] = "Fri";
    Days[Days["Sat"] = 6] = "Sat";
})(Days || (Days = {}));
```

## 常数枚举
常数枚举是使用 const enum 定义的枚举类型：

```ts
const enum Directions {
    Up,
    Down,
    Left,
    Right
}

let directions = [Directions.Up, Directions.Down, Directions.Left, Directions.Right];

```

常数枚举与普通枚举的区别是，它会在编译阶段被删除，并且不能包含计算成员。
上例的编译结果是：

```js
var directions = [0 /* Up */, 1 /* Down */, 2 /* Left */, 3 /* Right */];

```
假如包含了计算成员，则会在编译阶段报错：
```ts
const enum Color {Red, Green, Blue = "blue".length};

// index.ts(1,38): error TS2474: In 'const' enum declarations member initializer must be constant expres
```

















