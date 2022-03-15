---
title: Ts-命名空间
date: 2022-02-12
sidebar: auto
collapsable: true
categories:
 - ts
tags:
 - ts
---

## 命名空间
> 解决重名问题

示例，未用命名空间的ts文件
将上面的例子进行修改
```ts
interface Animal {
    name: string;
    eat(): void;
}

class Dog implements Animal {
    name: string;
    constructor(theName: string) {
        this.name = theName;
    }
    eat() {
        console.log(`${this.name} 吃狗粮。`);
    }
}

class Cat implements Animal {
    name: string;
    constructor(theName: string) {
        this.name = theName;
    }
    eat() {
        console.log(`${this.name} 吃猫粮。`);
    }
}
```
#### 命名空间的声明

同Java的包、.Net的命名空间一样，TypeScript的命名空间可以将代码包裹起来，只对外暴露需要在外部访问的对象。命名空间内的对象通过export关键字对外暴露。


```ts
namespace Biology {
    export interface Animal {
        name: string;
        eat(): void;
    }

    export class Dog implements Animal {
        name: string;
        constructor(theName: string) {
            this.name = theName;
        }

        eat() {
            console.log(`${this.name} 吃狗粮。`);
        }
    }

    export class Cat implements Animal {
        name: string;
        constructor(theName: string) {
            this.name = theName;
        }

        eat() {
            console.log(`${this.name} 吃猫粮。`);
        }
    }
}


let dog: Biology.Animal;
dog = new Biology.Dog('狗狗');
dog.eat();
```
通过namespace关键字声明命名空间，通过export导出需要在外部使用的对象。在命名空间外部需要通过“完全限定名”访问这些对象。

#### 命名空间的引用
通常情况下，声明的命名空间代码和调用的代码不在同一个文件里

biology.ts

```ts
 namespace Biology {
     export interface Animal {
         name: string;
         eat(): void;
     }
 
     export class Dog implements Animal {
         name: string;
         constructor(theName: string) {
            this.name = theName;
         }

        eat() {
             console.log(`${this.name} 吃狗粮。`);
         }
     }

     export class Cat implements Animal {
         name: string;
         constructor(theName: string) {
             this.name = theName;
         }
 
        eat() {
             console.log(`${this.name} 吃猫粮。`);
         }
     }
 }

```
app.ts

```ts
 /// <reference path="biology.ts" />
 
 let dog: Biology.Animal;
 dog = new Biology.Dog('狗狗');
 dog.eat();
```

通过reference注释引用命名空间，即可通过“完全限定名”进行访问。
更有甚者，相同的命名空间会声明在不同的文件中

```ts
namespace Biology {
     export interface Animal {
         name: string;
         eat(): void;
     }
}
```

dog.ts
```ts
 /// <reference path="biology.ts" />
 
 namespace Biology {
     export class Dog implements Animal {
         name: string;
         constructor(theName: string) {
             this.name = theName;
         }
  
         eat() {
             console.log(`${this.name} 吃狗粮。`);
         }
     }
}
```

cat.ts
```ts
 /// <reference path="biology.ts" />
 
 namespace Biology {
     export class Cat implements Animal {
         name: string;
         constructor(theName: string) {
             this.name = theName;
         }
 
         eat() {
             console.log(`${this.name} 吃猫粮。`);
         }
     }
 }

```

app.ts
```ts
/// <reference path="biology.ts" />
/// <reference path="cat.ts" />
/// <reference path="dog.ts" />


let dog: Biology.Animal;
dog = new Biology.Dog('狗狗');
dog.eat();

let cat: Biology.Animal;
cat = new Biology.Cat('喵星人');
cat.eat();
```

编译之后，每一个文件都将编译成对应的一个JavaScript文件，使用时需要将这些文件都引用进来。通过如下命令，可以将有相同命名空间的文件编译到一个JavaScript文件中，这样在引用时只需要一个文件即可。

```ts
tsc --outFile js\biology.js ts\biology.ts ts\dog.ts ts\cat.ts
```

将biology.ts、dog.ts、cat.ts编辑到一个JavaScript文件biology.js文件内，编译后的文件内容如下

```ts
/// <reference path="biology.ts" />
var Biology;
(function (Biology) {
    var Dog = (function () {
        function Dog(theName) {
            this.name = theName;
        }
        Dog.prototype.eat = function () {
            console.log(this.name + " \u5403\u72D7\u7CAE\u3002");
        };
        return Dog;
    }());
    Biology.Dog = Dog;
})(Biology || (Biology = {}));
/// <reference path="biology.ts" />
var Biology;
(function (Biology) {
    var Cat = (function () {
        function Cat(theName) {
            this.name = theName;
        }
        Cat.prototype.eat = function () {
            console.log(this.name + " \u5403\u732B\u7CAE\u3002");
        };
        return Cat;
    }());
    Biology.Cat = Cat;
})(Biology || (Biology = {}));
```

#### 命名空间的别名

在引用命名空间时，可以通过import关键字起一个别名

```ts
// app.ts

/// <reference path="biology.ts" />
/// <reference path="cat.ts" />
/// <reference path="dog.ts" />

import bio_other = Biology;     // 别名

let dog: bio_other.Animal;
dog = new bio_other.Dog('狗狗');
dog.eat();

let cat: bio_other.Animal;
cat = new bio_other.Cat('喵星人');
cat.eat();
```

#### 命名空间与模块

命名空间：代码层面的归类和管理。将有相似功能的代码都归一到同一个空间下进行管理，方便其他代码引用。更多的是侧重代码的复用。<br>
模块：一个完整功能的封装，对外提供的是一个具有完整功能的功能包，需要显式引用。一个模块里可能会有多个命名空间。

> 命名空间 中内容引用自 [星辰.Lee的园子个人博客](https://www.cnblogs.com/niklai/p/5837899.html)
