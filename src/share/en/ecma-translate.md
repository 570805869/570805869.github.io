# ECMAScript® 2019 学习

### Introduction
>介绍

This Ecma Standard defines the ECMAScript 2019 Language. 
> 此Ecma标准 定义了ECMAScript 2019语言。

It is the tenth edition of the ECMAScript Language Specification.
> 它是ECMAScript语言规范的第十版。

 Since publication of the first edition in 1997, ECMAScript has grown to be one of the world's most widely used general-purpose programming languages.
> 自1997年第一版发布以来，ECMAScript已经成为世界上使用最广泛的通用编程语言之一。

It is best known as the language embedded in web browsers but has also been widely adopted for server and embedded applications.
> 它是最著名的嵌入在web浏览器中的语言，也被广泛用于服务器和嵌入式应用程序。

ECMAScript is based on several originating technologies, the most well-known being JavaScript (Netscape) and JScript (Microsoft). 
> ECMAScript基于几种最初的技术，最著名的是JavaScript (Netscape)和JScript (Microsoft)。

The language was invented by Brendan Eich at Netscape and first appeared in that company's Navigator 2.0 browser. 
> 这种语言是由网景公司的布兰登·艾奇发明的，并首次出现在该公司的Navigator 2.0浏览器中。

 It has appeared in all subsequent browsers from Netscape and in all browsers from Microsoft starting with Internet Explorer 3.0.
 > 它出现在所有Netscape的后续浏览器中，也出现在从Internet Explorer 3.0开始的所有Microsoft浏览器中。

 The development of the ECMAScript Language Specification started in November 1996. The first edition of this Ecma Standard was adopted by the Ecma General Assembly of June 1997.
 > ECMAScript语言规范的开发始于1996年11月。本Ecma标准的第一版于1997年6月由Ecma大会通过。

 ...

 ## 1.Scope 范围
 
 This Standard defines the ECMAScript 2019 general-purpose programming language.
> 本标准定义了ECMAScript 2019通用编程语言。

## 2.Conformance 一致性

A conforming implementation of ECMAScript must provide and support all the types, values, objects, properties, functions, and program syntax and semantics described in this specification.
> 符合ECMAScript的实现必须提供并支持本规范中描述的所有类型、值、对象、属性、函数、程序语法和语义。

A conforming implementation of ECMAScript must interpret source text input in conformance with the latest version of the Unicode Standard and ISO/IEC 10646.
> 符合ECMAScript标准的实现必须按照最新版本的Unicode标准和ISO/IEC 10646解释源文本输入。

A conforming implementation of ECMAScript that provides an application programming interface (API) that supports programs that need to adapt to the linguistic and cultural conventions used by different human languages and countries must implement the interface defined by the most recent edition of ECMA-402 that is compatible with this specification.
> ECMAScript的符合标准的实现提供了一个应用程序编程接口(API),它支持需要适应的程序所使用的语言和文化传统不同的人类语言和国家必须实现该接口定义的最新版的ecma - 402与本规范兼容。

A conforming implementation of ECMAScript may provide additional types, values, objects, properties, and functions beyond those described in this specification. 
> 符合规范的ECMAScript实现可以提供超出本规范描述的类型、值、对象、属性和函数。

In particular, a conforming implementation of ECMAScript may provide properties not described in this specification, and values for those properties, for objects that are described in this specification.
> 特别是，符合规范的ECMAScript可以提供规范中未描述的属性，以及这些属性和规范中描述的对象的值。

A conforming implementation of ECMAScript may support program and regular expression syntax not described in this specification.
> 符合ECMAScript的实现可能支持本规范中未描述的程序和正则表达式语法。

In particular, a conforming implementation of ECMAScript may support program syntax that makes use of the “future reserved words” listed in subclause 11.6.2.2 of this specification.
> 特别是，符合ECMAScript的实现可能支持使用本规范第11.6.2.2小节中列出的“未来保留字”的程序语法。

A conforming implementation of ECMAScript must not implement any extension that is listed as a Forbidden Extension in subclause 16.2.
>一个符合ECMAScript实现的拓展不能是在第16.2款中被列为禁止的。