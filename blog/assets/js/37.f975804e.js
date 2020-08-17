(window.webpackJsonp=window.webpackJsonp||[]).push([[37],{565:function(t,e,a){"use strict";a.r(e);var s=a(2),r=Object(s.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h2",{attrs:{id:"vuex中state的理解"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#vuex中state的理解"}},[t._v("#")]),t._v(" vuex中state的理解")]),t._v(" "),a("ul",[a("li",[t._v("vuex是专门为vue.js存在的一个状态管理模式。采用集中式存储管理应用的所有组件的状态，并咦相应的规则保证状态以一种可预测的方式发生变化。"),a("br")]),t._v(" "),a("li",[t._v("state：全局响应式的数据，注册store后，vue组件会从store中读取数据，理解为一种全局变量（全局代表整个项目）。"),a("br"),t._v("\n避免了不用再去使用父子组件传参，或者接口请求的方式去拿全局变量。而是通过监听的形式，随时观察数据的更改。"),a("br")])]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 在js中：this.$store.state.属性名来获取")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 在元素标签中使用{{$store.state.属性名}}来获取")]),t._v("\n")])])]),a("h2",{attrs:{id:"vue-router-跳转方式"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#vue-router-跳转方式"}},[t._v("#")]),t._v(" vue-router 跳转方式")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v("跳转路由的几种方式：\n \n  "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v("、声明式： "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" 根据路由路径（"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("home"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("sort"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("detail）跳转 "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("router"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("link "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("to"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("\"{path: '/home/sort/detail', query:{id: 'abc'}}\"")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("点击查看子页面"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("router"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("link"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n             "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" 根据路由名称（detail）跳转 "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("router"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("link "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("to"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("\"{name: 'detail', params:{id: 'abc'}}\"")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("点击查看子页面"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("router"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("link"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n                "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("to"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('""')]),t._v("  可以实现绑定动态的 路由 和 参数\n \n  "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),t._v("、编程式： "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v("） "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("$router"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("push")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("path"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'/home/sort/detail'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("query"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("id"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'abc'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n             "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),t._v("） "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("$router"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("push")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("name"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'detail'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("params"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("id"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'abc'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n \n    备注： params 和 query 传参的区别：\n            "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v("、params传参时  参数不会出现在url的路径上面， 但是刷新页面时param里面的数据会消失\n            "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),t._v("、query传参时   参数出现在url的路径上面， 刷新页面时query里面的数据不变\n")])])]),a("h2",{attrs:{id:"vue的自定义指令"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#vue的自定义指令"}},[t._v("#")]),t._v(" vue的自定义指令")]),t._v(" "),a("h2",{attrs:{id:"vue与react的区别"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#vue与react的区别"}},[t._v("#")]),t._v(" vue与react的区别")]),t._v(" "),a("ul",[a("li",[t._v("1.Vue和React设计理念上有区别："),a("br"),t._v("\nVue使用的是可变数据，而React更强调数据的不可变"),a("br")]),t._v(" "),a("li",[t._v("2.监听数据变化的实现原理不同："),a("br"),t._v("\nVue通过 getter/setter以及一些函数的劫持，能精确知道数据变化。"),a("br"),t._v("\nReact默认是通过比较引用的方式（diff）进行的（如果不优化可能导致大量不必要的VDOM的重新渲染）"),a("br")]),t._v(" "),a("li",[t._v("3.数据流的不同"),a("br"),t._v("\nvue 2.x版本父向子组件传递，单向数据主流。组件与dom通过v-model实现双向绑定。"),a("br"),t._v("\nReact一直不支持双向绑定，提倡的是单向数据流，称之为onChange/setState()模式"),a("br")]),t._v(" "),a("li",[t._v("4.组件通信的区别"),a("br"),t._v("\nvue中："),a("br"),t._v("\na.父组件通过props向子组件传递数据或者回调，虽然可以传递回调，但是我们一般只传数据"),a("br"),t._v("\nb.子组件通过事件向父组件发送消息"),a("br"),t._v("\nc.provide/inject来实现父组件向子组件注入数据，可以跨越多个层级"),a("br"),t._v("\nreact中："),a("br"),t._v("\na.父组件通过props可以向子组件传递数据或者回调"),a("br"),t._v("\nb.context 进行跨层级的通信"),a("br")])]),t._v(" "),a("p",[t._v("Vue中子组件向父组件传递消息有两种方式：事件和回调函数，但Vue更倾向于使用事件。"),a("br"),t._v("\n在React中我们都是使用回调函数的，这可能是他们二者最大的区别。"),a("br")]),t._v(" "),a("ul",[a("li",[t._v("5.模版渲染方式不同"),a("br"),t._v("\nvue在和组件js代码分离的单独的模板中，通过指令实现。（v-if）"),a("br"),t._v("\nreact通过js实现模版中常见于法（插值，条件，循环）"),a("br"),t._v("\n（react中render函数支持闭包特性，import的组件在render中可直接调用；vue里模版中使用的数据都必须挂在this上进行一次中转，需要在components下再次声明）"),a("br")]),t._v(" "),a("li",[t._v("6.渲染过程不同"),a("br"),t._v("\nvue计算虚拟dom差异（渲染过程中，跟踪每一个组件依赖关系）"),a("br"),t._v("\nreact应用的状态改变时，全部子组件重新渲染"),a("br")]),t._v(" "),a("li",[t._v("7.框架本质"),a("br"),t._v("\nvue是mvvm框架，mvc发展而来"),a("br"),t._v("\nreact前端组件化框架，后端组件化发展而来"),a("br")])]),t._v(" "),a("h2",{attrs:{id:"vuex和redux区别"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#vuex和redux区别"}},[t._v("#")]),t._v(" vuex和redux区别")]),t._v(" "),a("ul",[a("li",[t._v("vuex中：$store被直接注入到组件实例中，可以灵活使用：dispatch和commit提交更新，通过mapState或者this.$store来读取数据。组件中既可以dispatch action，也可以commit updates。"),a("br")]),t._v(" "),a("li",[t._v("redux中：每一个组件都需要显示的用connect把需要的props和dispatch连接起来。只能进行dispatch，不能直接调用reducer进行修改。"),a("br")])]),t._v(" "),a("p",[t._v("最大区别：Redux使用的是不可变数据，而Vuex的数据是可变的，因此，Redux每次都是用新state替换旧state，而Vuex是直接修改。Redux在检测数据变化的时候，是通过diff的方式比较差异的，而Vuex其实和Vue的原理一样，是通过getter/setter来比较的，这两点的区别，也是因为React和Vue的设计理念不同。React更偏向于构建稳定大型的应用，非常的科班化。相比之下，Vue更偏向于简单迅速的解决问题，更灵活，不那么严格遵循条条框框。因此也会给人一种大型项目用React，小型项目用Vue的感觉。")]),t._v(" "),a("h2",{attrs:{id:"vue组件中-create和mount区别"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#vue组件中-create和mount区别"}},[t._v("#")]),t._v(" vue组件中 create和mount区别")]),t._v(" "),a("ul",[a("li",[t._v("created ：是在页面渲染之前发生的 ，如果想要获取数据渲染到html之后元素的宽高 这些事拿不到的。"),a("br")]),t._v(" "),a("li",[t._v("mounted：是在渲染data里面的数据到页面上之后 发生的 所以这时候去元素的具体信息是可以拿到的。"),a("br")])]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("生命周期")]),t._v(" "),a("th",{staticStyle:{"text-align":"center"}},[t._v("是否获取DOM节点")]),t._v(" "),a("th",{staticStyle:{"text-align":"center"}},[t._v("是否可以获取data")]),t._v(" "),a("th",{staticStyle:{"text-align":"right"}},[t._v("是否获取methods")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("beforeCreate")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("0")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("0")]),t._v(" "),a("td",{staticStyle:{"text-align":"right"}},[t._v("0")])]),t._v(" "),a("tr",[a("td",[t._v("create")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("0")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("1")]),t._v(" "),a("td",{staticStyle:{"text-align":"right"}},[t._v("1")])]),t._v(" "),a("tr",[a("td",[t._v("beforeMount")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("0")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("1")]),t._v(" "),a("td",{staticStyle:{"text-align":"right"}},[t._v("1")])]),t._v(" "),a("tr",[a("td",[t._v("mounted")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("1")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("1")]),t._v(" "),a("td",{staticStyle:{"text-align":"right"}},[t._v("1")])])])]),t._v(" "),a("h2",{attrs:{id:"如何获取dom"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#如何获取dom"}},[t._v("#")]),t._v(" 如何获取dom")]),t._v(" "),a("ul",[a("li",[t._v("1.vue1.*版本中"),a("br"),t._v("\n在标签中加上el='dom'，然后在代码中this.$els.dom这样就拿到了页面元素"),a("br"),t._v("\n< div class='box'  v-el: myBox>你好</ div >"),a("br"),t._v("\n让你好的颜色显示为红色：this.$els.my-box.style.color = 'red'"),a("br")]),t._v(" "),a("li",[t._v("2.vue2.*版本中"),a("br"),t._v("\n在标签中加上ref='dom'，然后在代码中this.$refs.dom这样就拿到了页面元素"),a("br"),t._v("\n例如：< div class='box' ref='myBox'>你好< /div>"),a("br"),t._v("\n让你好的颜色显示为红色：this.$refs.myBox.style.color = 'red"),a("br")])]),t._v(" "),a("h2",{attrs:{id:"updated更新理解"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#updated更新理解"}},[t._v("#")]),t._v(" updated更新理解")]),t._v(" "),a("p",[t._v("在页面上 改变元数据data中数据,并且导致页面重新渲染时,才会进入update周期"),a("br")]),t._v(" "),a("h2",{attrs:{id:"vue-router两种模式-hash-和-history"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#vue-router两种模式-hash-和-history"}},[t._v("#")]),t._v(" vue-router两种模式 hash 和 history")]),t._v(" "),a("ul",[a("li",[t._v("1：(hash) - 即地址栏URL中的 # 符号（此hash不是密码学里的散列运算）"),a("br"),t._v("\n比如这个URL：http：//www.abc.com/#/hello,hash的值为#/hello.它的特点在于：hash虽然出现在URL中，但不会被包括在HTTP请求中，对后端完全没有影响，因此改变hash不会重新加载页面。"),a("br")]),t._v(" "),a("li",[t._v("2：history - 利用了HTML5 History Interface中新增的pushState()和replaceState（）方法。"),a("br")])]),t._v(" "),a("h2",{attrs:{id:"v-if和v-show区别"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#v-if和v-show区别"}},[t._v("#")]),t._v(" v-if和v-show区别")]),t._v(" "),a("ul",[a("li",[t._v("v-if的原理是根据判断条件来动态的进行增删DOM元素"),a("br")]),t._v(" "),a("li",[t._v("v-show是根据判断条件来动态的进行显示和隐藏元素。"),a("br"),t._v("\n频繁的进行增删DOM操作会影响页面加载速度和性能"),a("br")])]),t._v(" "),a("h2",{attrs:{id:"vue组件局部刷新"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#vue组件局部刷新"}},[t._v("#")]),t._v(" vue组件局部刷新")]),t._v(" "),a("p",[t._v("通过（provide/inject）实现 "),a("br")]),t._v(" "),a("ul",[a("li",[t._v("第一步 : 在 app.vue 中定义全局方法:如下"),a("br")])]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v('<template>\n  <div id="app">\n    <router-view v-if="isRouterAlive"/>    //通过v-if来控制容器的出现与消失\n  </div>\n</template>\n\n<script>\nexport default {\n  name: \'App\',\n  provide(){\n    return {\n      reload:this.reload\n    }\n  },\n  data(){\n    return{\n      isRouterAlive: true\n    }\n  },\n  methods: {\n   reload () {\n     this.isRouterAlive = false\n     this.$nextTick(() => (this.isRouterAlive = true))\n   }   \n }\n}\n<\/script>\n')])])]),a("ul",[a("li",[t._v("第二步:在全局中定义了刷新的方法, 接下来就是要引入到需要刷新的组件中:"),a("br")])]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v('<script>\nimport axios from "axios";\nexport default {\n  inject:["reload"],\n  name: "StoreServiceProjectManagement",\n  mounted() {\n    this.reload();\n  }\n};\n<\/script>\n')])])])])}),[],!1,null,null,null);e.default=r.exports}}]);