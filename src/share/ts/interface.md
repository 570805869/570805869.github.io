---
title: Ts-接口
date: 2022-03-02
sidebar: auto
collapsable: true
categories:
 - ts
tags:
 - ts
---

## 接口

一般**后台定义接口**就是**前端调用的接口，定义一些参数等** <br>
**TS**里的接口类似，也可以理解为定义一些参数，
规定**变量**里面有什么参数，参数是什么类型，使用时就必须有这些对应类型的参数，
少或者多参数、参数类型不对都会报错。
更简单的，你可以理解为这就是在**定义一个较为详细的对象类型**。

<font color="green">接口是一系列抽象方法的声明，是一些方法特征的集合</font>，这些方法都应该是抽象的，需要由具体的类去实现，<br>
然后第三方就可以通过这组抽象方法调用，让具体的类（classes）去实现（implement）。

```ts
// TypeScript 接口定义如下：
interface interface_name { }

// eg
interface Person {
    name: string;
    age: number;
}

let tom: Person = {
    name: 'Tom',
    age: 25
};
```
上面的例子中，我们定义了一个接口 <font color="green">Person</font>，接着定义了一个变量 <font color="green">tom</font>，它的类型是 <font color="green">Person</font>。<br>
这样，我们就约束了 tom 的形状必须和接口 Person 一致。<br>

接口一般首字母大写。定义的变量比接口少了一些属性是不允许的：
```ts
interface Person {
    name: string;
    age: number;
}

let tom: Person = {
    name: 'Tom'
};

// index.ts(6,5): error TS2322: Type '{ name: string; }' is not assignable to type 'Person'.
//   Property 'age' is missing in type '{ name: string; }'.
```

多一些属性也是不允许的：
```ts
interface Person {
    name: string;
    age: number;
}

let tom: Person = {
    name: 'Tom',
    age: 25,
    gender: 'male'
};

// index.ts(9,5): error TS2322: Type '{ name: string; age: number; gender: string; }' is not assignable to type 'Person'.
//   Object literal may only specify known properties, and 'gender' does not exist in type 'Person'.
```
可见，**赋值的时候，变量的形状必须和接口的形状保持一致**。

### 可选属性

有时我们希望不要完全匹配一个形状，那么可以用可选属性：

```ts
interface Person {
    name: string;
    age?: number;
}

let tom: Person = {
    name: 'Tom'
};
```

```ts
interface Person {
    name: string;
    age?: number;
}

let tom: Person = {
    name: 'Tom',
    age: 25
};
```

可选属性的含义是该属性可以不存在。
这时**仍然不允许添加未定义的属性**：

```ts
interface Person {
    name: string;
    age?: number;
}

let tom: Person = {
    name: 'Tom',
    age: 25,
    gender: 'male'
};

// examples/playground/index.ts(9,5): error TS2322: Type '{ name: string; age: number; gender: string; }' is not assignable to type 'Person'.
//   Object literal may only specify known properties, and 'gender' does not exist in type 'Person'.
```

### 任意属性
有时候我们希望一个接口允许有任意的属性，可以使用如下方式：
```ts
interface Person {
    name: string;
    age?: number;
    [propName: string]: any;
}

let tom: Person = {
    name: 'Tom',
    gender: 'male'
};
```
使用 **[propName: string]** 定义了任意属性取 **string** 类型的值。
需要注意的是，**一旦定义了任意属性，那么确定属性和可选属性的类型都必须是它的类型的子集**：
```ts
interface Person {
    name: string;
    age?: number;
    [propName: string]: string;
}

let tom: Person = {
    name: 'Tom',
    age: 25,
    gender: 'male'
};

// index.ts(3,5): error TS2411: Property 'age' of type 'number' is not assignable to string index type 'string'.
// index.ts(7,5): error TS2322: Type '{ [x: string]: string | number; name: string; age: number; gender: string; }' is not assignable to type 'Person'.
//   Index signatures are incompatible.
//     Type 'string | number' is not assignable to type 'string'.
//       Type 'number' is not assignable to type 'string'.
```

上例中，任意属性的值允许是 string，但是可选属性 age 的值却是 number，number 不是 string 的子属性，所以报错了。<br>
另外，在报错信息中可以看出，此时 { name: 'Tom', age: 25, gender: 'male' } 的类型被推断成了<br>
 { [x: string]: string | number; name: string; age: number; gender: string; }，这是联合类型和接口的结合。

### TypeScript 支持两种索引签名：字符串和数字
```ts
interface Person {
    name: boolean; // Error
    age?: number; // Error
    sex: string; // OK
    girl: undefined; // OK
    [propName: string]: string;
}
```
一个接口中只能定义一个任意属性。如果接口中有多个类型的属性，则可以在任意属性中使用联合类型：
```ts
interface Person {
    name: string;
    age?: number;
    [propName: string]: string | number;
}

let tom: Person = {
    name: 'Tom',
    age: 25,
    gender: 'male'
};
```
### 只读属性
有时候我们希望对象中的一些字段只能在创建的时候被赋值，那么可以用 readonly 定义只读属性

```ts
interface Person {
    readonly id: number;
    name: string;
    age?: number;
    [propName: string]: any;
}

let tom: Person = {
    id: 89757,
    name: 'Tom',
    gender: 'male'
};

tom.id = 9527;

// index.ts(14,5): error TS2540: Cannot assign to 'id' because it is a constant or a read-only property.
```
上例中，使用 readonly 定义的属性 id 初始化后，又被赋值了，所以报错了。
