---
title: Ts-类
date: 2022-03-03
categories:
 - ts
tags:
 - ts
---

## 类
> 类描述了所创建的对象共同的属性和方法。(TypeScript 支持面向对象的所有特性，比如 类、接口等。)

```ts
// 定义
class class_name { 
    // 类作用域
}
```

定义类的关键字为 class，后面紧跟类名，类可以包含以下几个模块（类的数据成员）：<br>
- **字段** − 字段是类里面声明的变量。字段表示对象的有关数据。
- **构造函数** − 类实例化时调用，可以为类的对象分配内存。
- **方法** − 方法为对象要执行的操作。
使用 **class** 定义类，使用 **constructor** 定义构造函数。<br>
通过 **new** 生成新实例的时候，会自动调用构造函数。<br>

### 创建实例化对象

```ts
// 我们使用 new 关键字来实例化类的对象，语法格式如下：
var object_name = new class_name([ arguments ])

// 类实例化时会调用构造函数，例如：
var obj = new Car("Engine 1")

// 类中的字段属性和方法可以使用 . 号来访问：
// 访问属性
obj.field_name 

// 访问方法
obj.function_name()
```

### 类的继承
TypeScript 支持继承类，即我们可以在创建类的时候继承一个已存在的类，这个已存在的类称为父类，继承它的类称为子类。<br>
类继承使用关键字 extends，子类除了不能继承父类的私有成员(方法和属性)和构造函数，其他的都可以继承。<br>
TypeScript 一次只能继承一个类，不支持继承多个类，但 TypeScript 支持多重继承（A 继承 B，B 继承 C）<br>

```ts
class child_class_name extends parent_class_name
```

使用 extends 关键字实现继承，子类中使用 super 关键字来调用父类的构造函数和方法
```ts
class Animal {
    public name;
    constructor(name) {
        this.name = name;
    }
    sayHi() {
        return `My name is ${this.name}`;
    }
}
let a = new Animal('Jack');
console.log(a.sayHi()); // My name is Jack

 class Cat extends Animal {
  constructor(name) {
    super(name); // 调用父类的 constructor(name)
    console.log(this.name);
  }
  sayHi() {
    return 'Meow, ' + super.sayHi(); // 调用父类的 sayHi()
  }
}

let c = new Cat('Tom'); // Tom
console.log(c.sayHi()); // Meow, My name is Tom
```

### 类实现接口
实现（implements）是面向对象中的一个重要概念。一般来讲，一个类只能继承自另一个类，有时候不同类之间可以有一些共有的特性，<br>
这时候就可以把特性提取成接口（interfaces），用 implements 关键字来实现。这个特性大大提高了面向对象的灵活性。<br>
举例来说，门是一个类，防盗门是门的子类。如果防盗门有一个报警器的功能，我们可以简单的给防盗门添加一个报警方法。<br>
这时候如果有另一个类，车，也有报警器的功能，就可以考虑把报警器提取出来，作为一个接口，防盗门和车都去实现它：

```ts
interface Alarm {
    alert(): void;
}

class Door {
}

class SecurityDoor extends Door implements Alarm {
    alert() {
        console.log('SecurityDoor alert');
    }
}

class Car implements Alarm {
    alert() {
        console.log('Car alert');
    }
}
```

一个类可以实现多个接口：
```ts
interface Alarm {
    alert(): void;
}

interface Light {
    lightOn(): void;
    lightOff(): void;
}

class Car implements Alarm, Light {
    alert() {
        console.log('Car alert');
    }
    lightOn() {
        console.log('Car light on');
    }
    lightOff() {
        console.log('Car light off');
    }
}
```
上例中，Car 实现了 Alarm 和 Light 接口，既能报警，也能开关车灯

### 接口继承接口
接口与接口之间可以是继承关系：
```ts
interface Alarm {
    alert(): void;
}

interface LightableAlarm extends Alarm {
    lightOn(): void;
    lightOff(): void;
}
```
这很好理解，LightableAlarm 继承了 Alarm，除了拥有 alert 方法之外，还拥有两个新方法 lightOn 和 lightOff。