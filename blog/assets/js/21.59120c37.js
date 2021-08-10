(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{538:function(t,a,s){t.exports=s.p+"assets/img/1.bc05bb94.png"},539:function(t,a,s){t.exports=s.p+"assets/img/2.3dc64329.png"},620:function(t,a,s){"use strict";s.r(a);var e=s(2),n=Object(e.a)({},(function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"与vue有关的日子"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#与vue有关的日子"}},[t._v("#")]),t._v(" 与vue有关的日子")]),t._v(" "),e("h2",{attrs:{id:"问题"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#问题"}},[t._v("#")]),t._v(" 问题")]),t._v(" "),e("h3",{attrs:{id:"_1-vue项目兼容ie浏览器"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_1-vue项目兼容ie浏览器"}},[t._v("#")]),t._v(" 1.vue项目兼容IE浏览器")]),t._v(" "),e("p",[e("img",{staticStyle:{width:"80%"},attrs:{src:s(538)}}),e("br"),t._v("\n官方意思：vue项目可以在ie8以上的ie版本中运行，"),e("br"),t._v("\n事实上vue-cli构建的项目并不能在ie8【ie9,ie10,ie11】以上的版本中运行"),e("br"),t._v("\n下面就来讲vue如何在ie8以上ie版本中运行")]),t._v(" "),e("h4",{attrs:{id:"（1）针对vue-cli-3-几版本-兼容问题"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#（1）针对vue-cli-3-几版本-兼容问题"}},[t._v("#")]),t._v(" （1）针对vue-cli 3.几版本 兼容问题")]),t._v(" "),e("ul",[e("li",[t._v("安装babel-polyfill")])]),t._v(" "),e("div",{staticClass:"language-js extra-class"},[e("pre",{pre:!0,attrs:{class:"language-js"}},[e("code",[t._v("npm install babel"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("polyfill "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("--")]),t._v("save\n")])])]),e("ul",[e("li",[t._v("修改 vue.config.js webpack 配置")])]),t._v(" "),e("div",{staticClass:"language-js extra-class"},[e("pre",{pre:!0,attrs:{class:"language-js"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("chainWebpack")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("config")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  config"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("entry")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'main'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("add")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'babel-polyfill'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// main是入口js文件")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),e("ul",[e("li",[t._v("重启")])]),t._v(" "),e("blockquote",[e("p",[t._v("如果还没有解决问题，在入口文件main.js，可能在你的项目中是index.js中引入babel-polyfill")])]),t._v(" "),e("div",{staticClass:"language-js extra-class"},[e("pre",{pre:!0,attrs:{class:"language-js"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'babel-polyfill'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),e("h4",{attrs:{id:"（2）报错只能引用一个babel-polyfill"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#（2）报错只能引用一个babel-polyfill"}},[t._v("#")]),t._v(" （2）报错只能引用一个babel-polyfill")]),t._v(" "),e("ul",[e("li",[t._v("报错:Uncaught Error: only one instance of babel-polyfill is allowed"),e("br")]),t._v(" "),e("li",[t._v("解决方法:"),e("br"),t._v("\n项目中只能引入一次babel-polyfill,我在main.js和vue.config.js中都引入了，"),e("br"),t._v("\n删除main.js中的相关代码后,可以正常运行了."),e("br")])]),t._v(" "),e("h4",{attrs:{id:"（3）使用iview按需引入时-ie下提示无效字符"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#（3）使用iview按需引入时-ie下提示无效字符"}},[t._v("#")]),t._v(" （3）使用iview按需引入时 IE下提示无效字符")]),t._v(" "),e("p",[t._v("ie报错:SCRIPT1014无效字符和SCRIPT5022"),e("br")]),t._v(" "),e("p",[t._v("不使用iView提供的项目构建程序 使用Vue-Cli3构建项目 采用按需引入的方式使用iView"),e("br"),t._v("\n在IE中运行 会报如下错误 win10 IE11都不行 如下图："),e("br"),t._v(" "),e("img",{staticStyle:{width:"80%"},attrs:{src:s(539)}}),e("br")]),t._v(" "),e("blockquote",[e("p",[t._v("解决办法： (适用于基于Vue-Cli3构建的项目)")])]),t._v(" "),e("div",{staticClass:"language-js extra-class"},[e("pre",{pre:!0,attrs:{class:"language-js"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 在项目根目录创建vue.config.js 写入如下配置")]),t._v("\nmodule"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("exports "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("chainWebpack")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("  "),e("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("config")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// ie报错无效字符 添加该配置项 解决该问题")]),t._v("\n    config"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("module\n      "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("rule")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'iview'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n      "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("test")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token regex"}},[t._v("/iview.src.*?js$/")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n      "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("use")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'babel'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("loader")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'babel-loader'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("end")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),e("p",[t._v("读不懂可以去 "),e("a",{attrs:{href:"https://github.com/neutrinojs/webpack-chain",target:"_blank",rel:"noopener noreferrer"}},[t._v("webpack-chain"),e("OutboundLink")],1),t._v(" 查阅该插件文档")]),t._v(" "),e("h4",{attrs:{id:"（4）针对vue-cli-2-几版本-兼容问题"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#（4）针对vue-cli-2-几版本-兼容问题"}},[t._v("#")]),t._v(" （4）针对vue-cli 2.几版本 兼容问题")]),t._v(" "),e("p",[t._v("按照步骤新建一个vue项目做测试\n"),e("a",{attrs:{href:"https://blog.csdn.net/James_liPeng/article/details/85329677",target:"_blank",rel:"noopener noreferrer"}},[t._v("vue2.0项目搭建步骤"),e("OutboundLink")],1),t._v(" 查阅该插件文档")]),t._v(" "),e("ul",[e("li",[t._v("1.安装 babel-polyfill")])]),t._v(" "),e("div",{staticClass:"language-js extra-class"},[e("pre",{pre:!0,attrs:{class:"language-js"}},[e("code",[t._v("cnpm install babel"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("polyfill "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("--")]),t._v("save"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("dev\n")])])]),e("ul",[e("li",[t._v("2.在项目入口文件，如本项目中的main.js文件中 引用babel-polyfill")])]),t._v(" "),e("div",{staticClass:"language-js extra-class"},[e("pre",{pre:!0,attrs:{class:"language-js"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'babel-polyfill'")]),t._v("\n")])])]),e("ul",[e("li",[t._v("3.修改webpack配置文件")])]),t._v(" "),e("div",{staticClass:"language-js extra-class"},[e("pre",{pre:!0,attrs:{class:"language-js"}},[e("code",[t._v("module"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("exports "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  entry"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    app"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'babel-polyfill'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'./src/main.js'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("...")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 到此 编译项目npm run build之后 该项目就可以成功在ie8以上的浏览器中打开了")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// flex布局不兼容ie9及其一下")]),t._v("\n")])])]),e("h4",{attrs:{id:"（5）安装babel-polyfill，打开ie依旧空白一片"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#（5）安装babel-polyfill，打开ie依旧空白一片"}},[t._v("#")]),t._v(" （5）安装babel-polyfill，打开IE依旧空白一片")]),t._v(" "),e("p",[t._v("有可能是因为static下的js文件中用了ES6语法，但是默认没有配置的babel-loader来处理static下的文件，所以导致IE前端报错，页面无法加载。"),e("br"),t._v(" "),e("a",{attrs:{href:"https://github.com/neutrinojs/webpack-chain",target:"_blank",rel:"noopener noreferrer"}},[t._v("安装babel-polyfill，打开IE依旧空白解决方案"),e("OutboundLink")],1),t._v(" 查阅该文档")]),t._v(" "),e("h4",{attrs:{id:"（6）vue项目-ie-360浏览器兼容模式下打开空白的问题"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#（6）vue项目-ie-360浏览器兼容模式下打开空白的问题"}},[t._v("#")]),t._v(" （6）Vue项目 IE/360浏览器兼容模式下打开空白的问题")]),t._v(" "),e("p",[e("a",{attrs:{href:"https://juejin.im/post/5cad8c5ef265da0371298361",target:"_blank",rel:"noopener noreferrer"}},[t._v("解决方案"),e("OutboundLink")],1),t._v(" 查阅该文档")]),t._v(" "),e("h4",{attrs:{id:"（7）vue-cli3-0和2-0的区别"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#（7）vue-cli3-0和2-0的区别"}},[t._v("#")]),t._v(" （7）vue-cli3.0和2.0的区别")]),t._v(" "),e("p",[e("a",{attrs:{href:"https://juejin.im/post/5cad8c5ef265da0371298361",target:"_blank",rel:"noopener noreferrer"}},[t._v("解决方案"),e("OutboundLink")],1),t._v(" 查阅该文档")])])}),[],!1,null,null,null);a.default=n.exports}}]);