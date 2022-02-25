module.exports = {
  // base: '/docs/',
  base: '/',
  dest: 'docs',
  title:'可爱的许荻荻',
  description:'学习吗？一起呗～',
  head:[
    ['link', { rel: 'icon', href: 'xd.ico' }],
    ['meta', { name: 'theme-color', content: '#3eaf7c' }],
  ],
  theme: 'reco',
  themeConfig: {
    type: 'blog',
    author: '许荻荻的博客',
    authorAvatar: '/img/me.jpeg',
    startYear: '2018',
    noFoundPageByTencent: false,
    color: '#42b983', // 登录页动画球的颜色
    logo: '/img/me.jpeg',
    sidebarDepth: 3,
    navBar: true,
    nav: [
      { text: 'TimeLine', link: '/timeline/', icon: 'reco-date' },
      {
        text: '常规操作',
        items: [
          { text: '必备技能', link: '/share/necessary/necessary-index'},
          { text: 'webpack学习', link: '/share/wepack-pro/webpack-index'},
          { text: '移动端学习', link: '/share/mobile/mobile-index'},
          { text: '英文学习', link: '/share/en/en-index'},
          { text: '必备代码片段', link: '/share/code/code-index'},
          { text: '文档集合', link: '/share/link/doc'},
          { text: '插件使用', link: '/share/plugins/pluginIndex'},
        ]
      },
      {
        text: '技术分类',
          items: [
            {
              text: 'Vue', link: '/vue/base/text'
            },
            {
              text: 'Uni-App', link: '/uni/page/uniIndex'
            },
            { 
                text: 'Element-ui', link: '/share/element-ui/index'
            },
            { 
                text: 'Iview-ui', link: '/share/iview/index'
            },
            { 
                text: 'TypeScript', link: '/share/ts/index'
            },
          ]
      },
      {
        text: '常用网址',
        link: '/url/fe'
      },
      {
        text: 'github',
        link: 'https://github.com/570805869'
      },
    ],
    sidebar: {
      '/share/wepack-pro/': genSidebarConfig('webpack学习', ['webpack-note', 'webpack-deep', 'webpack-pro']),
      '/share/necessary/': genSidebarConfig('必备技能', ['env', 'eslint', 'javascript-basic', 'md', 'opt', 'problem', 'coding', 'lighthouse', 'git']),
      '/share/mobile/': genSidebarConfig('移动端学习', ['wechat', 'mobile-1', 'mobile-2', 'mobile-bug']),
      '/share/en/': genSidebarConfig('英文学习', ['webpack', 'npm', 'skulpt', 'ecma', 'scratch', 'ecma-translate']),
      '/share/desktop/': genSidebarConfig('桌面应用', ['contrast']),
      // '/share/interview/': genSidebarConfig('常备', ['css', 'js', 'vue']),
      '/share/interview/': genSidebarConfig('常备', ['css', 'js', 'vue']),
      '/skulpt/': genSidebarConfig('skulpt', ['links', '1']),
      '/scratch/': genSidebarConfig('深入scratch', ['links', '1', 'sb3']),
      '/share/code/': genSidebarConfig('必备代码片段', ['js', 'style']),
      '/share/plugins/': genSidebarConfig('插件使用', ['pdfjs']),
    //   '/share/element-ui/': genSidebarConfig('常用组件', ['use']),
    //   '/share/iview/': genSidebarConfig('常用组件', ['use', 'apiLoading']),

      // 技术分类
      '/vue/base/': genSidebarConfig('vue学习应用', ['file','vue','clipboard', 'vueCropper', 'html2canvas', 'record', 'text']),
      '/uni/page/': genSidebarConfig('uni-app学习应用', ['testWay', 'ucharts']),
      '/share/element-ui/': genSidebarConfig('ElementUi使用心得', ['tableFixHead', 'tableColspan','select', 'upload']),
      '/share/iview/': genSidebarConfig('IviewUi使用心得', ['use', 'apiLoading']),
      '/share/ts/': genSidebarConfig('IviewUi使用心得', ['learn'])
      // 
    },
    // // 密钥
    // keyPage: {
    //   keys: ['c33367701511b4f6020ec61ded352059'], // 1.3.0 版本后需要设置为密文
    //   color: '#42b983', // 登录页动画球的颜色
    //   lineColor: '#42b983' // 登录页动画线的颜色
    // }
  },
  // 语言
  locales: {
    '/': {
      lang: 'zh-CN'
    }
  },
  plugins: [
    [
      "ribbon", // 背景彩带
      {
        size: 90, // 彩带的宽度，默认为 90
        opacity: 0.3, // 彩带的不透明度，默认为 0.3
        zIndex: 10000 // 彩带的 z-index 属性，默认值为 -1
      }
    ],
    [
      "@vuepress-reco/vuepress-plugin-kan-ban-niang", // 看板娘
      {
        // theme: ["blackCat"], // ['blackCat', 'whiteCat', 'haru1', 'haru2', 'haruto', 'koharu', 'izumi', 'shizuku', 'wanko', 'miku', 'z16']
        theme: ['blackCat', 'whiteCat', 'haru1', 'haru2', 'haruto', 'koharu', 'izumi', 'shizuku', 'wanko', 'miku', 'z16'],
        clean: true,
        messages: {
          welcome: '欢迎你的关注 ',
          home: '心里的花，我想要带你回家。',
          theme: '好吧，希望你能喜欢我的其他小伙伴。',
          close: '再见哦！',
        },
        messageStyle: {
          position: 'absolut',
          height: 'auto',
          padding: '20px 10px',
          right: '28px',
          bottom: '170px',
          fontWeight: 'bold',
          background: 'linear-gradient(270deg,#76ea8c,#0ac497)',
          borderRadius: '10px',
          color: '#fff',
        },
        modelStyle: {
          right: '40px',
          bottom: '-20px',
          opacity: '0.9'
        },
        btnStyle: {
          right: '50px',
          bottom: '40px',
        }
      }
    ],
    [
      "@vuepress-reco/vuepress-plugin-bgm-player", // 音乐播放器
      {
        audios: [
          // 网络文件示例
          {
            name: '用胳膊当枕头',
            artist: '최낙타',
            url: 'https://assets.smallsunnyfox.com/music/3.mp3',
            cover: 'https://assets.smallsunnyfox.com/music/3.jpg'
          },
          {
            name: '강남역 4번 출구',
            artist: 'Plastic / Fallin` Dild',
            url: 'https://assets.smallsunnyfox.com/music/2.mp3',
            cover: 'https://assets.smallsunnyfox.com/music/2.jpg'
          }
        ],
        autoShrink: true, // 是否默认缩小
        shrinkMode: 'mini',
        description: {
          left: '10px',
          bottom: '10px',
          'z-index': '999999'
        }
      }
    ],
    [
      "@vuepress-reco/vuepress-plugin-pagation", // 分页
      {
        perPage: 6
      }
    ],
    ["cursor-effects"], // 鼠标点击效果
  ]
}

function genSidebarConfig (title, children) {
  return [
    { title, children }
  ]
}
