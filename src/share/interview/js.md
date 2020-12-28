# js部分

## 函数式编程概念
理解为：以函数为单元来处理业务逻辑，也可以作为返回值，不依赖不改变外界状态。

## localStorage,sessionStorage,cookie的设置方式，本质区别

cookis设置
```js
// 创建cookie
document.cookie="username=John Doe";
//可以为cookie添加过期时间（UTC或GMT时间）默认情况下，cookie在浏览器关闭时删除
document.cookie="username=John Doe; expires=Thu, 18 Dec 2043 12:00:00 GMT";
//可以使用path参数设置cookie路径，默认情况下cookie属于当前页面
document.cookie="username=John Doe; expires=Thu, 18 Dec 2043 12:00:00 GMT; path=/";

// 读取cookie
var x=document.cookie;

// 修改cookie
document.cookie="username=John Smith; expires=Thu, 18 Dec 2043 12:00:00 GMT; path=/";

// 删除cookie (只需要设置expires参数为以前时间即可，如Thu ，01 jan 1970 00：00:00GMT)
document.cookie='username=;expires=Thu,01 Jan 1970 00:00:00 GMT'

// 封装方法

function setCookie(cname,cvalue,exdays){
	var d = new Date();
	d.setTime(d.getTime()+(exdays*24*60*60*1000));
	var expires = "expires="+d.toGMTString();
	document.cookie = cname+"="+cvalue+"; "+expires;
}
function getCookie(cname){
	var name = cname + "=";
	var ca = document.cookie.split(';');
	for(var i=0; i<ca.length; i++) {
		var c = ca[i].trim();
		if (c.indexOf(name)==0) { return c.substring(name.length,c.length); }
	}
	return "";
}
function checkCookie(){
	var user=getCookie("username");
	if (user!=""){
		alert("欢迎 " + user + " 再次访问");
	}
	else {
		user = prompt("请输入你的名字:","");
  		if (user!="" && user!=null){
    		setCookie("username",user,30);
    	}
	}
}
```

localStorage设置
```js
/**
 * localStorage
 * @调用：_local.set('access_token', '123456', 5000);
 * @调用：_local.get('access_token');
 */

var _local = {
    //存储,可设置过期时间
    set(key, value, expires) {
        let params = { key, value, expires };
        if (expires) {
            // 记录何时将值存入缓存，毫秒级
            var data = Object.assign(params, { startTime: new Date().getTime() });
            localStorage.setItem(key, JSON.stringify(data));
        } else {
            if (Object.prototype.toString.call(value) == '[object Object]') {
                value = JSON.stringify(value);
            }
            if (Object.prototype.toString.call(value) == '[object Array]') {
                value = JSON.stringify(value);
            }
            localStorage.setItem(key, value);
        }
    },
    //取出
    get(key) {
        let item = localStorage.getItem(key);
        // 先将拿到的试着进行json转为对象的形式
        try {
            item = JSON.parse(item);
        } catch (error) {
            // eslint-disable-next-line no-self-assign
            item = item;
        }
        // 如果有startTime的值，说明设置了失效时间
        if (item && item.startTime) {
            let date = new Date().getTime();
            // 如果大于就是过期了，如果小于或等于就还没过期
            if (date - item.startTime > item.expires) {
                localStorage.removeItem(name);
                return false;
            } else {
                return item.value;
            }
        } else {
            return item;
        }
    },
    // 删除
    remove(key) {
        localStorage.removeItem(key);
    },
    // 清除全部
    clear() {
        localStorage.clear();
    }
}
```

sessionStorage设置
```js
/**
 * sessionStorage
 */
var _session = {
    get: function (key) {
        var data = sessionStorage[key];
        if (!data || data === "null") {
            return null;
        }
        return JSON.parse(data).value;
    },
    set: function (key, value) {
        var data = {
            value: value
        }
        sessionStorage[key] = JSON.stringify(data);
    },
    // 删除
    remove(key) {
        sessionStorage.removeItem(key);
    },
    // 清除全部
    clear() {
        sessionStorage.clear();
    }
}
export { _local, _session }
```
本质区别：<br>
- 1）cookie在浏览器与服务器之间可以传递<br>
sessionStorage和localStorage不会把数据发给服务器，仅在本地保存<br>
- 2）数据有效期不同<br>
cookie只在设置的cookie过期时间之前一直有效，即使窗口或浏览器关闭<br>
sessionStorage：仅在当前浏览器窗口关闭前有效<br>
localStorage 始终有效，长期保存<br>
- 3）cookie数据还有路径的概念，可以限制cookie只属于某个路径下<br>
存储大小也不同，cookie数据不能超过4k，sessionStorage和localStorage 虽然也有存储大小的限制，但比cookie大得多，可以达到5M或更大<br>
- 4）作用域不用<br>
sessionStorage不在不同的浏览器窗口中共享<br>
localStorage在所有同源窗口中都是共享的<br>
cookie也是在所有同源窗口中都是共享的<br>
WebStorage 支持事件通知机制，可以将数据更新的通知发送给监听者。Web Storage 的 api 接口使用更方便<br>

## cookie和session的区别
- 1）cookie数据存放在客户的浏览器上，session数据放在服务器上<br>
- 2）cookie不是很安全，别人可以分析存放在本地的cookie并进行cookie欺骗，考虑到安全应当使用session<br>
- 3）session会在一定时间内保存在服务器上，当访问增多，会比较占用你服务器的性能，考虑到减轻服务器性能方面，应当使用cookie<br>
- 4）单个cookie保存的数*据不能超过4K，很多浏览器都限制一个站点最多保存20个cookie<br>
- 5）建议将登录信息等重要信息存放为session，其他信息如果需要保留，可以放在cookie中<br>
- 6）session保存在服务器，客户端不知道其中的信心；cookie保存在客户端，服务器能够知道其中的信息<br>
- 7）session中保存的是对象，cookie中保存的是字符串<br>
- 8）session不能区分路径，同一个用户在访问一个网站期间，所有的session在任何一个地方都可以访问到，而cookie中如果设置了路径参数，那么同一个网站中不同路径下的cookie互相是访问不到的<br>

## sessionStorage与页面js数据对象的区别
- 1）页面中一般的js对象的生存期仅在当前页面有效，因此刷新页面或转到另一页面这样的重新加载页面的情况，数据就不存在了<br>
- 2）sessionStorage只要同源的同窗口中，刷新页面或进入同源的不同页面，数据始终存在，也就是说只要浏览器不关闭，数据仍然存在<br>

## sessionStorage 和 vuex 区别，可不可以用前者代替后者
vuex存储数据改变会实时跟新，sessionStorage读取要比vuex慢<br>
- 1.对于表单页面，需要校验表单数据的填写，数据存储在sessionStorage，不会实时更新，校验较为繁琐， 就可以使用vuex的set 和get进行校验<br>
- 2.填完表单数据之后未提交,跳转到其他页面，需要把已经填写的数据保存，以便修改之后再次提交<br>
这种情况下，使用vuex进行存储数据，在需要回显的页面获取实时跟新的数据即可<br>
但如果使用sessionStorage，则需要在离开页面时候存储表单。<br>
vuex存储的数据只在生命周期内有效，关闭页面数据会自动清空，但sessionstorage如果在app同一个webview下数据不会自动清空，需要调用clear<br>


## webpack基础配置，插件
配置：<br>
- 1.html-loader : 将 HTML 文件导出编译为字符串，可供 js 识别的其中一个模块<br>
- 2.css-loader : 解析 css 文件中代码<br>
- 3.style-loader : 将 css 模块作为样式导出到 DOM 中<br>
- 4.less-loader : 加载和转义 less 文件<br>
- 5.sass-loader : 加载和转义 sass/scss 文件<br>
- 6.url-loader : 多数用于加载图片资源,超过文件大小显示则返回 data URL。内置了 file-loader，建议使用这个加载器用来加载一些静态文件，例如图片、字体文件等等<br>
- 7.babel-loader : 加载 ES6+ 代码后使用 Babel 转义为 ES5 后浏览器才能解析<br>
- 8.typescript-loader : 加载 Typescript 脚本文件<br>
- 9.vue-loader : 加载和转义 vue 组件<br>

插件：<br>
- HtmlWebpackPlugin：是依据一个简单的模板，帮助生成最终的 Html5 文件，这个文件中自动引用了打包后的 JS 文件<br>
- CopyWebpackPlugin: 在 webpack 中拷贝文件和文件夹，一般用于将不需要打包的静态文件 copy 到我们最终打包的文件目录下<br>
- clean-webpack-plugin: 在为生产环境编译文件的时候，先把 build或dist (就是放生产环境用的文件) 目录里的文件先清除干净，再生成新的。<br>

## http和https的区别
- 1.https协议需要到ca申请证书，一般免费证书较少，因而需要一定费用。<br>
- 2.http是超文本传输协议，信息是明文传输，https则是具有安全性的ssl加密传输协议。<br>
- 3.http和https使用的是完全不同的连接方式，用的端口也不一样，前者是80，后者是443。<br>
- 4.http的连接很简单，是无状态的；HTTPS协议是由SSL+HTTP协议构建的可进行加密传输、身份认证的网络协议，比http协议安全。<br>

## url渲染（首屏加载白屏做过什么优化）
- 1.浏览器根据url去查找对应的IP<br>
- 2.进行TCP连接，HTTP包的传输是依靠TCP传输，建立三次握手，建立TCP连接<br>
    a.客户端发起请求到服务器，等到服务器响应，第一次握手<br>
    b.服务器接收到客户端信息，发送结果至客户端，第二次握手<br>
    c.客户端，接收到结果，并发送服务器确认，第三次握手<br>
- 3.浏览器向IP的服务器，发送http请求<br>
- 4.服务器收到请求，可客户机发送HTTP相应报文<br>
- 5.浏览器解析渲染页面<br>

## html加载顺序（css，js文件）
从上到下运行，先解析head标签中的代码：<br>
- （1）head标签中会包含一些引用外部文件的代码，从开始运行就会下载这些被引用的外部文件<br>
    当遇到script标签的时候<br>
    浏览器暂停解析（不是暂停下载），将控制权交给JavaScript引擎（解释器）<br>
    如果< script >标签引用了外部脚本，就下载该脚本，否则就直接执行，执行完毕后将控制权交给浏览器渲染引擎<br>
- （2）当head中代码解析完毕，会开始解析body中的代码<br>
    如果此时head中引用的外部文件没有下载完，将会继续下载<br>
    浏览器解析body代码中的元素，会按照head中声明一部分样式去解析<br>
    如果此时遇到body标签中的< script >，同样会将控制权交给JavaScript引擎来解析JavaScript<br>
    解析完毕后将控制权交还给浏览器渲染引擎。<br>
    当body中的代码全部执行完毕、并且整个页面的css样式加载完毕后，css会重新渲染整个页面的html元素。<br>
- （3）按照之前的描述，< script >写到body标签内靠后比较好，<br>
    因为JavaScript 会操作html元素， 如果在body加载完之前写JavaScript 会造成JavaScript 找不到页面元素<br>
    但是我们经常将< script >写到head中，body中不会有大量的js代码，body中的html代码结构会比较清晰<br>
    window.onload： 等待页面中的所有内容加载完毕之后才会执行<br>
    $(document).ready()： 页面中所有DOM结构绘制完毕之后就能够执行<br>
    可以这样理解：window.onload 和 $(document).ready()/$(function(){}); 相当于  写在body 内  最靠后的< script >代码段<br>

## linux简单命令有哪些
```js

mkdir test                创建一个文件夹
mkdir test/test1/test2 -p 在创建test1时候，继续创建test2目录，一起创建
mv test test1             修改文件名称
mv test /位置             复制文件到指定位置
cat test                  查看文件内容
unzip 解压包              解压当前文件
unzip 解压包 -d /位置     解压压缩包到指定位置
rm test                   删除一个文件
rm -rf test		  删除一个带文件或者文件夹的 文件目录
cp test test1             复制一个文件
cp -r test test1	  复制一个文件夹(包含文件夹下的文件)

```
## 阻止事件冒泡方式
事件冒泡：<br>
有层级关系的一连串的盒子都添加了事件,触发子盒子的事件是,该子盒子的父级及以上的元素的事件也会被触发;<br>
解决方法：
- 1.在要要触发的点击事件函数中 写 window.event.cancelBubble = true  这种方法  IE 和谷歌 支持,而火狐不支持
- 2.在事件处理函数中传入一个对象参数,  在函数中添加  对象参数.stopPropagation; (e.stopPropagation();)

## 改变this指向方式有哪些


## 是否遇到闭包，使用场景

## promise的三个状态

## promise.all是否用过

## 数组都有哪些方法（js,es6）

## 异步如何处理

## '==' 和'==='区别

## 正则匹配手机号，'*'代表什么

## 回调地狱怎么解决

## api形式（restful）

## 请使用JavaScript实现对字符串 s ，查找出出现次数最多的字符，并统计次数。如：let s = "ABCDAAAA"; 打印出“A 5”

```js
function setNumber(str) {
    let targetObj = {};
    for (let i=0; i < str.length; i++) {
        let chars = str.charAt(i);
        if (targetObj[chars]) {
            targetObj[chars] ++;
        } else {
            targetObj[chars] = 1
        }
    }
    let maxNumber = 0;
    let maxChar = '';
    for (let value in targetObj) {
        if (targetObj[value] > maxNumber) {
            maxNumber = targetObj[value];
            maxChar = value
        }
    }
    console.log(`${maxChar}   ${maxNumber}`)
}
```

## 原生js优点和缺点
优点：<br>
- 性能：由于JavaScript运行在客户端，节省了web服务器的请求时间和带宽
- 轻量级的脚本语言，比较容易学习
- 运行在用户机器上，运行结果和处理相对比较快。
- 可以使用第三方附加组件来检查代码片段。

缺点：<br>
- 安全问题：由于JavaScript在客户端运行，可能被用于黑客目的。
- 渲染问题：在不同浏览器中的处理结果可能不同。

# ES6

## es6中 let 和 const的区别

- 不存在变量提升
- 暂时性死区，先声明在使用
```js
var tmp = 123;
 
if (true) {
  tmp = 'abc'; // ReferenceError
  let tmp;
}
```
上面代码中，存在全局变量tmp，但是块级作用域内let又声明了一个局部变量tmp，导致后者绑定这个块级作用域，所以在let声明变量前，对tmp赋值报错，先声明再使用。<br >
- 不允许重复声明
- 块级作用域


