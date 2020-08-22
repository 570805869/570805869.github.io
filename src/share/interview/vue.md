# vue部分

## vuex中state的理解
- vuex是专门为vue.js存在的一个状态管理模式。采用集中式存储管理应用的所有组件的状态，并咦相应的规则保证状态以一种可预测的方式发生变化。<br>
- state：全局响应式的数据，注册store后，vue组件会从store中读取数据，理解为一种全局变量（全局代表整个项目）。<br>
避免了不用再去使用父子组件传参，或者接口请求的方式去拿全局变量。而是通过监听的形式，随时观察数据的更改。<br>
```js
// 在js中：this.$store.state.属性名来获取
// 在元素标签中使用{{$store.state.属性名}}来获取
```


## vue-router 跳转方式

```js
跳转路由的几种方式：
 
  1、声明式： 1) 根据路由路径（/home/sort/detail）跳转 <router-link :to="{path: '/home/sort/detail', query:{id: 'abc'}}">点击查看子页面</router-link>
             2) 根据路由名称（detail）跳转 <router-link :to="{name: 'detail', params:{id: 'abc'}}">点击查看子页面</router-link>
                :to=""  可以实现绑定动态的 路由 和 参数
 
  2、编程式： 1） this.$router.push({path: '/home/sort/detail',query:{id: 'abc'}})
             2） this.$router.push({name: 'detail',params:{id: 'abc'}})
 
    备注： params 和 query 传参的区别：
            1、params传参时  参数不会出现在url的路径上面， 但是刷新页面时param里面的数据会消失
            2、query传参时   参数出现在url的路径上面， 刷新页面时query里面的数据不变
```
## vue的自定义指令


## vue与react的区别
- 1.Vue和React设计理念上有区别：<br>
Vue使用的是可变数据，而React更强调数据的不可变<br>
- 2.监听数据变化的实现原理不同：<br>
Vue通过 getter/setter以及一些函数的劫持，能精确知道数据变化。<br>
React默认是通过比较引用的方式（diff）进行的（如果不优化可能导致大量不必要的VDOM的重新渲染）<br>
- 3.数据流的不同<br>
vue 2.x版本父向子组件传递，单向数据主流。组件与dom通过v-model实现双向绑定。<br>
React一直不支持双向绑定，提倡的是单向数据流，称之为onChange/setState()模式<br>
- 4.组件通信的区别<br>
vue中：<br>
    a.父组件通过props向子组件传递数据或者回调，虽然可以传递回调，但是我们一般只传数据<br>
    b.子组件通过事件向父组件发送消息<br>
    c.provide/inject来实现父组件向子组件注入数据，可以跨越多个层级<br>
react中：<br>
    a.父组件通过props可以向子组件传递数据或者回调<br>
    b.context 进行跨层级的通信<br>

Vue中子组件向父组件传递消息有两种方式：事件和回调函数，但Vue更倾向于使用事件。<br>
在React中我们都是使用回调函数的，这可能是他们二者最大的区别。<br>
- 5.模版渲染方式不同<br>
vue在和组件js代码分离的单独的模板中，通过指令实现。（v-if）<br>
react通过js实现模版中常见于法（插值，条件，循环）<br>
（react中render函数支持闭包特性，import的组件在render中可直接调用；vue里模版中使用的数据都必须挂在this上进行一次中转，需要在components下再次声明）<br>
- 6.渲染过程不同<br>
vue计算虚拟dom差异（渲染过程中，跟踪每一个组件依赖关系）<br>
react应用的状态改变时，全部子组件重新渲染<br>
- 7.框架本质<br>
vue是mvvm框架，mvc发展而来<br>
react前端组件化框架，后端组件化发展而来<br>

## vuex和redux区别
- vuex中：$store被直接注入到组件实例中，可以灵活使用：dispatch和commit提交更新，通过mapState或者this.$store来读取数据。组件中既可以dispatch action，也可以commit updates。<br>
- redux中：每一个组件都需要显示的用connect把需要的props和dispatch连接起来。只能进行dispatch，不能直接调用reducer进行修改。<br>

最大区别：Redux使用的是不可变数据，而Vuex的数据是可变的，因此，Redux每次都是用新state替换旧state，而Vuex是直接修改。Redux在检测数据变化的时候，是通过diff的方式比较差异的，而Vuex其实和Vue的原理一样，是通过getter/setter来比较的，这两点的区别，也是因为React和Vue的设计理念不同。React更偏向于构建稳定大型的应用，非常的科班化。相比之下，Vue更偏向于简单迅速的解决问题，更灵活，不那么严格遵循条条框框。因此也会给人一种大型项目用React，小型项目用Vue的感觉。

## vue组件中 create和mount区别
- created ：是在页面渲染之前发生的 ，如果想要获取数据渲染到html之后元素的宽高 这些事拿不到的。<br>
- mounted：是在渲染data里面的数据到页面上之后 发生的 所以这时候去元素的具体信息是可以拿到的。<br>

生命周期|是否获取DOM节点|是否可以获取data|是否获取methods
--|:--:|:-------------:|--:
beforeCreate|0|0|0
create|0|1|1
beforeMount|0|1|1
mounted|1|1|1


## 如何获取dom
- 1.vue1.*版本中<br>
在标签中加上el='dom'，然后在代码中this.$els.dom这样就拿到了页面元素<br>
< div class='box'  v-el: myBox>你好</ div ><br>
让你好的颜色显示为红色：this.$els.my-box.style.color = 'red'<br>
- 2.vue2.*版本中<br>
在标签中加上ref='dom'，然后在代码中this.$refs.dom这样就拿到了页面元素<br>
例如：< div class='box' ref='myBox'>你好< /div><br>
让你好的颜色显示为红色：this.$refs.myBox.style.color = 'red<br>

## updated更新理解
在页面上 改变元数据data中数据,并且导致页面重新渲染时,才会进入update周期<br>

## vue-router两种模式 hash 和 history 和 abstract
- 1：(hash) - 即地址栏URL中的 # 符号（此hash不是密码学里的散列运算）<br>
比如这个URL：http：//www.abc.com/#/hello,hash的值为#/hello.它的特点在于：hash虽然出现在URL中，但不会被包括在HTTP请求中，对后端完全没有影响，因此改变hash不会重新加载页面。<br>
- 2：history - 利用了HTML5 History Interface中新增的pushState()和replaceState（）方法。<br>
- 3: abstract: 支持所有 JavaScript 运行环境，如 Node.js 服务器端。如果发现没有浏览器的 API，路由会自动强制进入这个模式。

## vue-router的 base
应用的基路径。例如，如果整个单页应用服务在 /app/ 下，然后 base 就应该设为 "/app/"（所有的路由path前面url会添加一个基路径）

## v-if和v-show区别
- v-if的原理是根据判断条件来动态的进行增删DOM元素<br>
- v-show是根据判断条件来动态的进行显示和隐藏元素。<br>
频繁的进行增删DOM操作会影响页面加载速度和性能<br>

## vue组件局部刷新
通过（provide/inject）实现 <br>
- 第一步 : 在 app.vue 中定义全局方法:如下<br>
```
<template>
  <div id="app">
    <router-view v-if="isRouterAlive"/>    //通过v-if来控制容器的出现与消失
  </div>
</template>

<script>
export default {
  name: 'App',
  provide(){
    return {
      reload:this.reload
    }
  },
  data(){
    return{
      isRouterAlive: true
    }
  },
  methods: {
   reload () {
     this.isRouterAlive = false
     this.$nextTick(() => (this.isRouterAlive = true))
   }   
 }
}
</script>
```

- 第二步:在全局中定义了刷新的方法, 接下来就是要引入到需要刷新的组件中:<br>
```
<script>
import axios from "axios";
export default {
  inject:["reload"],
  name: "StoreServiceProjectManagement",
  mounted() {
    this.reload();
  }
};
</script>
```