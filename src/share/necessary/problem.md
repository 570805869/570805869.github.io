# 日常问题

## 1.cookie的域

> 目的：需要两个不同的域 共享cookie。（xdd.qwer.vip 和 ugg.xdd.qwer.vip 类似这样的）<br>
> 背景：我在 xdd.qwer.vip 这个域下，获取并设置token，通过 location.href 跳转到 ugg.xdd.qwer.vip <br>
> 发现 在之前域下设置的cookie竟然死活都获取不到， 通过搜索 发现问题是：<br>

cookie的域是用来限制哪些域名能来访问cookie的, 解决同一个主域下的访问问题<br>

项目中我设置cookie的方式是，通过 ‘js-cookie插件’ 实现的。<br>

安装：
```js
npm install js-cookie --save
```

引用：
```js
import Cookies from 'js-cookie'
```

### 一般用法：

- 设置：
```js
// Create a cookie, valid across the entire site:
Cookies.set('name', 'value');

// Create a cookie that expires 7 days from now, valid across the entire site:
Cookies.set('name', 'value', { expires: 7 });

// Create an expiring cookie, valid to the path of the current page:
Cookies.set('name', 'value', { expires: 7, path: '' }); 
```

- 获取：
```js
// Read cookie:
Cookies.get('name'); // => 'value'
Cookies.get('nothing'); // => undefined

// Read all visible cookies:
Cookies.get(); // => { name: 'value' }
```

- 删除：

```js
// Delete cookie:
Cookies.remove('name');

// Delete a cookie valid to the path of the current page:
Cookies.set('name', 'value', { path: '' });
Cookies.remove('name'); // fail!
Cookies.remove('name', { path: '' }); // removed!
```

### 特殊用法：
跟一般使用不同的是，从Cookie中取出的时候，要从字符串转换成json格式：
```js
const user = {
  name: 'lia',
  age: 18
}
Cookies.set('user', user)
const liaUser = JSON.parse(Cookies.get('user'))
```

在项目中我使用的设置及删除方法是：
```js
Cookies.set( name, value);  // name 及 value均为动态
Cookies.remove('name'); 
```
> 发现不同域不能共享cookie的时候，做出以下修改

```js
  return Cookies.set(key, value, { domain: 'qwer.vip' });
  return Cookies.remove(key, { path: '', domain: 'qwer.vip' });
```

## 2.本地写入cookie，chrom调试无反应

> 今天在项目中写入cookie时，一直没反应.原生js和插件都尝试了，可还是没有反应
> 结果发现！！！ ，不要直接是file://这种格式的打开文件

<img src="../../imgs/pro/1.png" style="width: 80%;"><br>

这种就是不对的，将文件放到服务器上运行！<br>
当然还有另一种方法，本地的话chrome不行，用其他浏览器调试吧。我用了火狐，一切ok，最后推测，chorm也ok。
