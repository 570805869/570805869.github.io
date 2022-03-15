---
title: Ts-类型推论/断言
date: 2022-02-27
sidebar: auto
collapsable: true
categories:
 - ts
tags:
 - ts
---

## 类型推论

如果没有明确的指定类型，那么 TypeScript 会依照类型推论（Type Inference）的规则推断出一个类型。                  
以下代码虽然没有指定类型，但是会在编译的时候报错：
```ts
let myFavoriteNumber = 'seven';
myFavoriteNumber = 7;

// index.ts(2,1): error TS2322: Type 'number' is not assignable to type 'string'.
```
事实上，它等价于：

```ts
let myFavoriteNumber: string = 'seven';
myFavoriteNumber = 7;

// index.ts(2,1): error TS2322: Type 'number' is not assignable to type 'string'.
```
TypeScript 会在没有明确的指定类型的时候推测出一个类型，这就是类型推论。
如果定义的时候没有赋值，不管之后有没有赋值，都会被推断成 any 类型而完全不被类型检查：

```ts
let myFavoriteNumber;
myFavoriteNumber = 'seven';
myFavoriteNumber = 7;
```

## 类型断言

可以用来手动指定一个值的类型。
语法：
```ts

值 as 类型

<类型>值
//在 tsx 语法（React 的 jsx 语法的 ts 版）中必须使用前者，即 值 as 类型。

```

<font color="green" size="12" bold>类型断言的用途</font>

- 将一个联合类型断言为其中一个类型
> 之前提到过，当 TypeScript 不确定一个联合类型的变量到底是哪个类型的时候，我们只能访问**此联合类型的所有类型中共有的属性或方法**：

```ts
interface Cat {
    name: string;
    run(): void;
}
interface Fish {
    name: string;
    swim(): void;
}

function getName(animal: Cat | Fish) {
    return animal.name;
}
```

而有时候，我们确实需要在还不确定类型的时候就访问其中一个类型特有的属性或方法，比如：

```ts
interface Cat {
    name: string;
    run(): void;
}
interface Fish {
    name: string;
    swim(): void;
}

function isFish(animal: Cat | Fish) {
    if (typeof animal.swim === 'function') {
        return true;
    }
    return false;
}

// index.ts:11:23 - error TS2339: Property 'swim' does not exist on type 'Cat | Fish'.
//   Property 'swim' does not exist on type 'Cat'.
```

上面的例子中，获取 animal.swim 的时候会报错。
此时可以使用类型断言，将 animal 断言成 Fish：

```ts
interface Cat {
    name: string;
    run(): void;
}
interface Fish {
    name: string;
    swim(): void;
}

function isFish(animal: Cat | Fish) {
    if (typeof (animal as Fish).swim === 'function') {
        return true;
    }
    return false;
}
```
这样就可以解决访问 animal.swim 时报错的问题了。
需要注意的是，类型断言只能够「欺骗」TypeScript 编译器，无法避免运行时的错误，反而滥用类型断言可能会导致运行时错误：

```ts
interface Cat {
    name: string;
    run(): void;
}
interface Fish {
    name: string;
    swim(): void;
}

function swim(animal: Cat | Fish) {
    (animal as Fish).swim();
}

const tom: Cat = {
    name: 'Tom',
    run() { console.log('run') }
};
swim(tom);
// Uncaught TypeError: animal.swim is not a function`
```

上面的例子编译时不会报错，但在运行时会报错：

```ts
Uncaught TypeError: animal.swim is not a function`
```

原因是 **(animal as Fish).swim()** 这段代码隐藏了 **animal** 可能为 **Cat** 的情况，将 **animal** 直接断言为 **Fish** 了，而 TypeScript 编译器信任了我们的断言，故在调用 **swim()** 时没有编译错误。
可是 **swim** 函数接受的参数是 **Cat | Fish**，一旦传入的参数是 **Cat** 类型的变量，由于 **Cat** 上没有 **swim** 方法，就会导致运行时错误了。<br>
总之，使用类型断言时一定要格外小心，尽量避免断言后调用方法或引用深层属性，以减少不必要的运行时错误。

- 将任何一个类型断言为 any

当我们引用一个在此类型上不存在的属性或方法时，就会报错：

```ts
const foo: number = 1;
foo.length = 1;

// index.ts:2:5 - error TS2339: Property 'length' does not exist on type 'number'.
```
上面的例子中，数字类型的变量 foo 上是没有 length 属性的，故 TypeScript 给出了相应的错误提示。<br>
这种错误提示显然是非常有用的。<br>
但有的时候，我们非常确定这段代码不会出错，比如下面这个例子：<br>

```ts
window.foo = 1;

// index.ts:1:8 - error TS2339: Property 'foo' does not exist on type 'Window & typeof globalThis'.
```
上面的例子中，我们需要将 window 上添加一个属性 foo，但 TypeScript 编译时会报错，提示我们 window 上不存在 foo 属性。<br>
此时我们可以使用 as any 临时将 window 断言为 any 类型：
```ts
(window as any).foo = 1;
```

在 <font color="green">any</font> 类型的变量上，访问任何属性都是允许的。<br>
需要注意的是，将一个变量断言为 <font color="green">any</font> 可以说是解决 TypeScript 中类型问题的最后一个手段。<br>
**它极有可能掩盖了真正的类型错误，所以如果不是非常确定，就不要使用 as any**。<br>
上面的例子中，我们也可以通过扩展 window 的类型解决这个错误，不过如果只是临时的增加 **foo** 属性，**as any** 会更加方便。<br>
总之，一方面不能滥用 as any，另一方面也不要完全否定它的作用，我们需要在类型的严格性和开发的便利性之间掌握平衡<br>
（这也是TypeScript 的设计理念之一），才能发挥出 TypeScript 最大的价值。