/**
 * 提示：如您想使用JS版本的配置文件可参考：https://github.com/xugaoyi/vuepress-theme-vdoing/tree/a2f03e993dd2f2a3afdc57cf72adfc6f1b6b0c32/docs/.vuepress
 */
import { resolve } from 'path'
import { defineConfig4CustomTheme, UserPlugins } from 'vuepress/config'
import { VdoingThemeConfig } from 'vuepress-theme-vdoing/types'
import dayjs from 'dayjs'
import baiduCode from './config/baiduCode' // 百度统计hm码
import htmlModules from './config/htmlModules' // 自定义插入的html块
import { readFileList, readTotalFileWords, readEachFileWords } from './webSiteInfo/readFile';


const DOMAIN_NAME = 'www.yugongcoding.com' // 域名 (不带https)
const WEB_SITE = `https://${DOMAIN_NAME}` // 网址

export default <VdoingThemeConfig>({
  theme: 'vdoing', // 使用npm主题包
  // theme: resolve(__dirname, '../../vdoing'), // 使用本地主题包
  locales: {
    '/': {
      lang: 'zh-CN',
      title: "YuGong",
      description: '全栈技术技术博客,专注于编程技术开发。python,java,JavaScript,js,ES6,TypeScript,vue,React,python,css3,html5,Node,git,github等技术文章。',
    }
  },
  // 站点配置（首页 & 文章页）

  // base: '/', // 默认'/'。如果你想将你的网站部署到如 https://foo.github.io/bar/，那么 base 应该被设置成 "/bar/",（否则页面将失去样式等文件）

  // 主题配置
  themeConfig: {
    blogInfo: {
      blogCreate: "2023-11-19", // 博客创建时间
      indexView: true, // 开启首页的访问量和排名统计，默认 true（开启）
      pageView: true, // 开启文章页的浏览量统计，默认 true（开启）
      readingTime: true, // 开启文章页的预计阅读时间，条件：开启 eachFileWords，默认 true（开启）。可在 eachFileWords 的 readEachFileWords 的第二个和第三个参数自定义，默认 1 分钟 300 中文、160 英文
      eachFileWords: readEachFileWords([""], 300, 160), // 开启每个文章页的字数。readEachFileWords(['xx']) 关闭 xx 目录（可多个，可不传参数）下的文章页字数和阅读时长，后面两个参数分别是 1 分钟里能阅读的中文字数和英文字数。无默认值。readEachFileWords() 方法默认排除了 article 为 false 的文章
      mdFileCountType: "archives", // 开启文档数。1. archives 获取归档的文档数（默认）。2. 数组 readFileList(['xx']) 排除 xx 目录（可多个，可不传参数），获取其他目录的文档数。提示：readFileList() 获取 docs 下所有的 md 文档（除了 `.vuepress` 和 `@pages` 目录下的文档）
      totalWords: "archives", // 开启本站文档总字数。1. archives 获取归档的文档数（使用 archives 条件：传入 eachFileWords，否则报错）。2. readTotalFileWords(['xx']) 排除 xx 目录（可多个，可不传参数），获取其他目录的文章字数。无默认值
      moutedEvent: ".categories-wrapper", // 首页的站点模块挂载在某个元素后面（支持多种选择器），指的是挂载在哪个兄弟元素的后面，默认是热门标签 '.tags-wrapper' 下面，提示：'.categories-wrapper' 会挂载在文章分类下面。'.blogger-wrapper' 会挂载在博客头像模块下面
      // 下面两个选项：第一次获取访问量失败后的迭代时间
      indexIteration: 2500, // 如果首页获取访问量失败，则每隔多少时间后获取一次访问量，直到获取成功或获取 5 次后。默认 3 秒。注意：设置时间太低，可能导致访问量 + 2、+ 3 ......
      pageIteration: 2500, // 如果文章页获取访问量失败，则每隔多少时间后获取一次访问量，直到获取成功或获取 5 次后。默认 3 秒。注意：设置时间太低，可能导致访问量 + 2、+ 3 ......
      // 说明：成功获取一次访问量，访问量 + 1，所以第一次获取失败后，设置的每个隔段重新获取时间，将会影响访问量的次数。如 100 可能每次获取访问量 + 3
    },
    searchPlaceholder: "按下 𝑺 搜索", // 可选：搜索栏占位文本
    smoothScroll: true,
    activeHeaderLinks: true,
    // 导航配置
    nav: [
      {
        text: '首页',
        link: '/'
      },
      // 计算机基础
      {
        text: '计算机基础',
        items: [
            {
              text: '计算机网络',
              link: '/computer/basic/network/'
            },{
              text: '操作系统',
              link: '/computer/basic/os/'
            },{
              text: '计算机组成原理',
              link: '/computer/basic/composition/'
            },{
              text: '编译原理',
              link: '/computer/basic/compile/'
            }
        ]
      },
      // 计算机编程
      {
        text: '计算机编程',
        items: [
          {
            text: '前端',
            items: [{
              text: 'javascript编程',
              link: '/computer/coding/javascript/'
            }]
          },
          {
            text: '后端',
            items: [{
              text: 'python编程',
              link: '/computer/coding/python/'
            },
            {
              text: 'java编程',
              link: '/computer/coding/java/'
            },
            {
              text: 'node编程',
              link: '/computer/coding/node/',
              // 该元素在当前路由路径是 /foo/ 开头时激活
              // 支持正则表达式

            },
            {
              text: 'go编程',
              link: '/computer/coding/go/',
              // 该元素在当前路由路径是 /foo/ 开头时激活
              // 支持正则表达式

            }]
          }

        ],
      },
      // 数据库
      {
        text: '数据库学习',
        items: [
          {
            text: 'MySQL',
            link: '/database/mysql/',
            // 该元素将一直处于激活状态

          },
          {
            text: 'Redis',
            link: '/database/redis/',
            // 该元素在当前路由路径是 /foo/ 开头时激活
            // 支持正则表达式

          },
          {
            text: 'MongoDB',
            link: '/database/mongodb/',
            // 该元素在当前路由路径是 /foo/ 开头时激活
            // 支持正则表达式

          },
          {
            text: 'SQLite',
            link: '/database/sqlite/',
            // 该元素在当前路由路径是 /foo/ 开头时激活
            // 支持正则表达式

          }
        ],
      },
      // 大数据
      {
        text: '大数据学习',
        items: [
          {
            text: 'Kafka',
            link: '/bigdata/kafka/',
            // 该元素将一直处于激活状态

          },
          {
            text: 'Spark',
            link: '/bigdata/spark/',
            // 该元素在当前路由路径是 /foo/ 开头时激活
            // 支持正则表达式

          },
          {
            text: 'Handoop',
            link: '/bigdata/handoop/',
            // 该元素在当前路由路径是 /foo/ 开头时激活
            // 支持正则表达式

          }
        ],
      },
      // 运维学习
      {
        text: '运维学习',
        items: [
          {
            text: 'Docker',
            link: '/operation/docker/'
          },
          {
            text: 'Nginx',
            link: '/operation/nginx/'
          }
        ],
      },
      {
        text: '更多',
        items: [
          // 网站动态
          {
            text: '网站动态',
            link: '/other/weblog.md'
          },
          {
            text: '关于我们',
            link: '/other/about.md'
          },
          {
            text: '快速了解',
            link: '/other/introduce.md'
          },
          {
            text: '网站地图',
            link: '/other/web_map/'
          },
          {
            text: '实用工具',
            link: '/other/usefule_tools/'
          }
        ]
      },

    ],
    sidebarDepth: 2, // 侧边栏显示深度，默认1，最大2（显示到h3标题）
    logo: '/img/logo.png', // 导航栏logo
    repo: 'https://github.com/yugongcoding/yugongcoding', // 导航栏右侧生成Github链接
    searchMaxSuggestions: 20, // 搜索结果显示最大数
    lastUpdated: '上次更新', // 开启更新时间，并配置前缀文字   string | boolean (取值为git提交时间)
    docsDir: 'docs', // 编辑的文件夹
    // docsBranch: 'master', // 编辑的文件所在分支，默认master。 注意：如果你的分支是main则修改为main
     // 以下为可选的编辑链接选项
    // 假如你的文档仓库和项目本身不在一个仓库：
    docsRepo: 'https://github.com/yugongcoding/yugongcoding',
    // 假如文档不是放在仓库的根目录下：
    // 假如文档放在一个特定的分支下：
    docsBranch: 'main',
    // 默认是 false, 设置为 true 来启用
    editLinks: true,
    // 默认为 "Edit this page"
    editLinkText: '编辑此页',

    //*** 以下是Vdoing主题相关配置，文档：https://doc.xugaoyi.com/pages/a20ce8/ ***//

    // category: false, // 是否打开分类功能，默认true
    // tag: false, // 是否打开标签功能，默认true
    // archive: false, // 是否打开归档功能，默认true
    categoryText: '随笔', // 碎片化文章（_posts文件夹的文章）预设生成的分类值，默认'随笔'

    // pageStyle: 'line', // 页面风格，可选值：'card'卡片 | 'line' 线（未设置bodyBgImg时才生效）， 默认'card'。 说明：card时背景显示灰色衬托出卡片样式，line时背景显示纯色，并且部分模块带线条边框

    // bodyBgImg: [
    //   'https://jsd.cdn.zzko.cn/gh/xugaoyi/image_store/blog/20200507175828.jpeg',
    //   'https://jsd.cdn.zzko.cn/gh/xugaoyi/image_store/blog/20200507175845.jpeg',
    //   'https://jsd.cdn.zzko.cn/gh/xugaoyi/image_store/blog/20200507175846.jpeg'
    // ], // body背景大图，默认无。 单张图片 String | 多张图片 Array, 多张图片时隔bodyBgImgInterval切换一张。
    // bodyBgImgOpacity: 0.5, // body背景图透明度，选值 0.1~1.0, 默认0.5
    // bodyBgImgInterval: 15, // body多张背景图时的切换间隔, 默认15，单位s
    // titleBadge: false, // 文章标题前的图标是否显示，默认true
    // titleBadgeIcons: [ // 文章标题前图标的地址，默认主题内置图标
    //   '图标地址1',
    //   '图标地址2'
    // ],
    // contentBgStyle: 1, // 文章内容块的背景风格，默认无. 1 方格 | 2 横线 | 3 竖线 | 4 左斜线 | 5 右斜线 | 6 点状

    // updateBar: { // 最近更新栏
    //   showToArticle: true, // 显示到文章页底部，默认true
    //   moreArticle: '/archives' // “更多文章”跳转的页面，默认'/archives'
    // },
    // rightMenuBar: false, // 是否显示右侧文章大纲栏，默认true (屏宽小于1300px下无论如何都不显示)
    // sidebarOpen: false, // 初始状态是否打开左侧边栏，默认true
    // pageButton: false, // 是否显示快捷翻页按钮，默认true

    // 默认外观模式（用户未在页面手动修改过模式时才生效，否则以用户设置的模式为准），可选：'auto' | 'light' | 'dark' | 'read'，默认'auto'。
    defaultMode: 'dark',

    // 侧边栏  'structuring' | { mode: 'structuring', collapsable: Boolean} | 'auto' | <自定义>    温馨提示：目录页数据依赖于结构化的侧边栏数据，如果你不设置为'structuring',将无法使用目录页
    // sidebar: 'structuring',
    sidebar: {
      '/other/usefule_tools/': [
        'friendship_links',
        'technical_learning'
      ],
      '/other/web_map/': [
        'python_learn',
        'java_learn'
      ],
      '/computer/coding/python/': [
        {
            title: 'Python3简介',
            sidebarDepth: 0,
            path: '/computer/coding/python/',
            children: [
            ]
        },
        {
          title: 'Python3基础',
          sidebarDepth: 0,
          path: '/computer/coding/python/basic/',
          children: [
            {title: 'Python3环境安装', path: '/computer/coding/python/basic/python_env', sidebarDepth: 0},
            {title: 'Python3开发工具', path: '/computer/coding/python/basic/python_tool', sidebarDepth: 0},
            {title: 'Python3基础语法', path: '/computer/coding/python/basic/python_syntax', sidebarDepth: 0},
            {title: 'Python3数据类型', path: '/computer/coding/python/basic/python_datatype', sidebarDepth: 0}
          ]
      },
      {
        title: 'Python3进阶',
        sidebarDepth: 0,
        path: '/computer/coding/python/advanced/',
        children: [
          {title: 'Python3装饰器', path: '/computer/coding/python/advanced/python_decorator', sidebarDepth: 1},
        ]
    }
    ]
    },

    // 文章默认的作者信息，(可在md文件中单独配置此信息) string | {name: string, link?: string}
    author: {
      name: 'YuGong', // 必需
      link: 'https://github.com/yugongcoding', // 可选的
    },

    // 博主信息 (显示在首页侧边栏)
    blogger: {
      avatar: '/img/logo.png',
      name: 'YuGong',
      slogan: '知其然，知其所以然，知其所以必然',
    },

    // 社交图标 (显示于博主信息栏和页脚栏。内置图标：https://doc.xugaoyi.com/pages/a20ce8/#social)
    social: {
      // iconfontCssFile: '//at.alicdn.com/t/xxx.css', // 可选，阿里图标库在线css文件地址，对于主题没有的图标可自己添加。阿里图片库：https://www.iconfont.cn/
      icons: [
        {
          iconClass: 'icon-youjian',
          title: '发邮件',
          link: 'mailto:1710695204@qq.com',
        },
        {
          iconClass: 'icon-github',
          title: 'GitHub',
          link: 'https://github.com/yugongcoding',
        },
        {
          iconClass: 'icon-erji',
          title: '听音乐',
          link: 'https://music.163.com/#/playlist?id=755597173',
        },
      ],
    },

    // 页脚信息
    footer: {
      createYear: 2023, // 博客创建年份
      copyrightInfo:
        'YuGong | <a href="https://github.com/yugongcoding/yugongcoding/blob/main/LICENSE" target="_blank">MIT License</a>', // 博客版权信息、备案信息等，支持a标签或换行标签</br>
    },

    // 扩展自动生成frontmatter。（当md文件的frontmatter不存在相应的字段时将自动添加。不会覆盖已有的数据。）
    extendFrontmatter: {
      author: {
        name: 'YuGong',
        link: 'https://github.com/yugongcoding'
      }
    },

    // 自定义hmtl(广告)模块
    htmlModules
  },

  // 注入到页面<head>中的标签，格式[tagName, { attrName: attrValue }, innerHTML?]
  head: [
    ['link', { rel: 'icon', href: '/img/logo.png', sizes: '16x16' }], //favicons，资源放在public文件夹
    ['link', { rel: 'stylesheet', href: '//at.alicdn.com/t/font_3114978_qe0b39no76.css' }], // 阿里在线矢量库
    [
      'meta',
      {
        name: 'keywords',
        content: '全栈技术技术博客,专注于编程技术开发。python,java,JavaScript,js,ES6,TypeScript,vue,React,python,css3,html5,Node,git,github等技术文章。',
      },
    ],
    ['meta', { name: 'baidu-site-verification', content: '7F55weZDDc' }], // 百度统计的站长验证（你可以去掉）
    ['meta', { name: 'theme-color', content: '#11a8cd' }], // 移动浏览器主题颜色
    ['meta', { name: 'referrer', content: 'no-referrer-when-downgrade' }],
    // [
    //   'script',
    //   {
    //     'data-ad-client': 'ca-pub-7828333725993554',
    //     async: 'async',
    //     src: 'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js',
    //   },
    // ], // 网站关联Google AdSense 与 html格式广告支持（你可以去掉）
  ],


  // 插件配置
  plugins: <UserPlugins>[
    // 自定义插件，即本地插件
  [
    {
      name: 'custom-plugins',
      // , "BlockToggle", "GlobalTip", "Aplayer", "Card"
      globalUIComponents: ["PageInfo", "BlockToggle"] // 2.x 版本 globalUIComponents 改名为 clientAppRootComponentFiles
    }
  ],

    // 可以添加第三方搜索链接的搜索框（继承原官方搜索框的配置参数）
    // [
    //   'thirdparty-search',
    //   {
    //     thirdparty: [
    //       {
    //         title: '在MDN中搜索',
    //         frontUrl: 'https://developer.mozilla.org/zh-CN/search?q=', // 搜索链接的前面部分
    //         behindUrl: '', // 搜索链接的后面部分，可选，默认 ''
    //       },
    //       {
    //         title: '在Runoob中搜索',
    //         frontUrl: 'https://www.runoob.com/?s=',
    //       },
    //       {
    //         title: '在Vue API中搜索',
    //         frontUrl: 'https://cn.vuejs.org/v2/api/#',
    //       },
    //       {
    //         title: '在Bing中搜索',
    //         frontUrl: 'https://cn.bing.com/search?q=',
    //       },
    //       {
    //         title: '通过百度搜索本站的',
    //         frontUrl: `https://www.baidu.com/s?wd=site%3A${DOMAIN_NAME}%20`,
    //       },
    //     ],
    //   }
    // ],
    // 全文搜索。 ⚠️注意：此插件会在打开网站时多加载部分js文件用于搜索，导致初次访问网站变慢。如在意初次访问速度的话可以不使用此插件！（推荐：vuepress-plugin-thirdparty-search）
    'fulltext-search',
    // ['flexsearch-pro'],
    [
      "sitemap", // 网站地图
      {
        hostname: WEB_SITE,
      },
    ],

    ['vuepress-plugin-baidu-autopush'], // 百度自动推送

    [
      'vuepress-plugin-baidu-tongji', // 百度统计
      {
        hm: baiduCode,
      },
    ],

    [
      'one-click-copy', // 代码块复制按钮
      {
        copySelector: ['div[class*="language-"] pre', 'div[class*="aside-code"] aside'], // String or Array
        copyMessage: '复制成功', // default is 'Copy successfully and then paste it for use.'
        duration: 1000, // prompt message display time.
        showInMobile: false, // whether to display on the mobile side, default: false.
      },
    ],

    // [
    //   'demo-block', // demo演示模块 https://github.com/xiguaxigua/vuepress-plugin-demo-block
    //   {
    //     settings: {
    //       // jsLib: ['http://xxx'], // 在线示例(jsfiddle, codepen)中的js依赖
    //       // cssLib: ['http://xxx'], // 在线示例中的css依赖
    //       // vue: 'https://jsd.cdn.zzko.cn/npm/vue/dist/vue.min.js', // 在线示例中的vue依赖
    //       jsfiddle: false, // 是否显示 jsfiddle 链接
    //       codepen: true, // 是否显示 codepen 链接
    //       horizontal: false, // 是否展示为横向样式
    //     },
    //   },
    // ],
    [
      'vuepress-plugin-zooming', // 放大图片
      {
        selector: '.theme-vdoing-content img:not(.no-zoom)', // 排除class是no-zoom的图片
        options: {
          bgColor: 'rgba(0,0,0,0.6)',
        },
      },
    ],
    [
      'vuepress-plugin-comment', // 评论
      {
        choosen: 'gitalk',
        options: {
          clientID: '4b6e3c673decc749f9e0',
          clientSecret: '98b52e433790b726bb917f252d34f4943abbad26',
          repo: 'yugongcoding', // GitHub 仓库
          owner: 'yugongcoding', // GitHub仓库所有者
          admin: ['yugongcoding'], // 对仓库有写权限的人
          // distractionFreeMode: true,
          pagerDirection: 'last', // 'first'正序 | 'last'倒序
          id: '<%- (frontmatter.permalink || frontmatter.to.path).slice(-16) %>', //  页面的唯一标识,长度不能超过50
          title: '「评论」<%- frontmatter.title %>', // GitHub issue 的标题
          labels: ['Gitalk', 'Comment'], // GitHub issue 的标签
          body:
            '页面：<%- window.location.origin + (frontmatter.to.path || window.location.pathname) %>', // GitHub issue 的内容
        },
      },
    ],
    [
      '@vuepress/last-updated', // "上次更新"时间格式
      {
        transformer: (timestamp, lang) => {
          return dayjs(timestamp).format('YYYY/MM/DD, HH:mm:ss')
        },
      },
    ],
    [
      'reading-progress'
    ],
    [
      'cursor-effects',
      {
        size: 2, // 粒子的大小，默认值：2
        shape: 'star', // 粒子的形状，star：星形，circle：圆形。默认值：star
        zIndex: 999999999, // 页面的索引属性，默认值：99999999，
      },
    ],
    ['tabs']
  ],

  markdown: {
    lineNumbers: true,
    extractHeaders: ['h2', 'h3', 'h4', 'h5', 'h6'], // 提取标题到侧边栏的级别，默认['h2', 'h3']
  },

  // 监听文件变化并重新构建
  extraWatchFiles: [
    '.vuepress/config.ts',
    '.vuepress/config/htmlModules.ts',
  ]
})
