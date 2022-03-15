---
title: EcmaScript学习
date: 2022-02-25
sidebar: auto
collapsable: true
categories:
 - EcmaScript
tags:
 - EcmaScript
---

## export
> 规定模块的对外接口
一个模块就是一个独立的文件。该文件内部的所有变量，外部无法获取。如果你希望外部能够读取模块内部的某个变量，就必须使用export关键字输出该变量。下面是一个 JS 文件，里面使用export命令输出变量。

```js
// profile.js 第一种写法
export var firstName = 'Michael';
export var lastName = 'Jackson';
export var year = 1958;

// export命令对外部输出了三个变量。

// profile.js 第二种写法
var firstName = 'Michael';
var lastName = 'Jackson';
var year = 1958;
export function multiply(x, y) {  // 还可以抛出函数
  return x * y;
};

export {firstName, lastName, year};
```
上面代码在export命令后面，使用大括号指定所要输出的一组变量。<br>
它与前一种写法（直接放置在var语句前）是等价的，但是应该优先考虑使用这种写法。<br>
因为这样就可以在脚本尾部，一眼看清楚输出了哪些变量。<br>

**在其他文件的引用方式：**<br>
import命令接受一对大括号，里面指定要从其他模块导入的变量名。大括号里面的变量名，必须与被导入模块（profile.js）对外接口的名称相同。<br>
如果想为输入的变量重新取一个名字，**import命令要使用as关键字，将输入的变量重命名**。<br>

```js
import { lastName as surname } from './profile.js';
```

## export default
> 为模块指定默认输出

背景：使用import命令的时候，用户需要知道所要加载的变量名或函数名，否则无法加载。但是，用户肯定希望快速上手，未必愿意阅读文档，去了解模块有哪些属性和方法。<br>
为了给用户提供方便，让他们不用阅读文档就能加载模块，就要用到export default命令，为模块指定默认输出。
```js
// export-default.js
export default function () {
  console.log('foo');
}
```
面代码是一个模块文件export-default.js，它的默认输出是一个函数。<br>
与export命令的区别：**其他模块加载该模块时，import命令可以为该匿名函数指定任意名字**。

```ts
// import-default.js
import customName from './export-default';
customName(); // 'foo'
```

上面代码的import命令，可以用任意名称指向export-default.js输出的方法，这时就不需要知道原模块输出的函数名。需要注意的是，**这时import命令后面，不使用大括号**。<br>
本质上，export default就是输出一个叫做default的变量或方法，然后系统允许你为它取任意名字。所以，下面的写法是有效的。<br>

```js
// modules.js
function add(x, y) {
  return x * y;
}
export {add as default};
// 等同于
// export default add;

// app.js
import { default as foo } from 'modules';
// 等同于
// import foo from 'modules';

正是因为export default命令其实只是输出一个叫做default的变量，所以它后面不能跟变量声明语句。
```

export default命令用于指定模块的默认输出。显然，一个模块只能有一个默认输出，因此**export default命令只能使用一次**。<br>
所以，import命令后面才不用加大括号，因为只可能**唯一**对应export default命令。<br>

## 总结
- export命令对外接口是有名称的且import命令从模块导入的变量名与被导入模块对外接口的名称相同
- export default命令对外输出的变量名可以是任意的，这时import命令后面，不使用大括号。

1.在一个文件或模块中，export、import可以有多个，通过export方式导出，在导入时要加{ }<br>
2.export default仅有一个,export default则不需要 {}

```js
// 1.export文件 a.js
export const str = "blablabla~";
export function log(sth) { 
  return sth;
}

// 对应的导入方式 b.js
import { str, log } from 'a'; //也可以分开写两次，导入的时候带花括号

// 2.export default  a.js
const str = "blablabla~";
export default str;
// 对应的导入方式：  b.js
import str from 'a'; //导入的时候没有花括号
```



