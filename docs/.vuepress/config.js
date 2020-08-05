module.exports = {
  title: "Turf.js 文档",
  description: "Turfjs Zh CN",
  head: [["link", { rel: "icon", href: "/images/favicon.ico" }]],
  base: "/turfjs-docs-Zh-CN/",
  markdown: {
    lineNumbers: false // 代码块显示行号
  },
  themeConfig: {
    lastUpdated: "Last Updated",
    nav: [
      { text: "Home", link: "/" },
      {
        text: "Github",
        link: "https://github.com/Psilocine/turfjs-docs-Zh-CN"
      },
      { text: "官方文档", link: "http://turfjs.org/" }
    ],
    sidebar: {
      "/": [
        {
          title: "简介",
          path: "/intro"
        },
        {
          title: "快速上手",
          path: "/start"
        },
        {
          title: "测量函数",
          path: "/measurement/"
        },
        {
          title: "坐标变换",
          path: "/coordinate_mutation/"
        },
        {
          title: "要素变换",
          path: "/transformation/"
        },
        {
          title: "特征变换",
          path: "/feature_conversion/"
        },
        {
          title: "MISC",
          path: "/misc/"
        },
        {
          title: "辅助函数",
          path: "/helper/"
        },
        {
          title: "随机函数",
          path: "/random/"
        },
        {
          title: "数据函数",
          path: "/data/"
        },
        {
          title: "插值函数",
          path: "/interpolation/"
        },
        {
          title: "JOINS",
          path: "/joins/"
        },
        {
          title: "网格辅助",
          path: "/grids/"
        },
        {
          title: "CLASSIFICATION",
          path: "/classification/"
        },
        {
          title: "聚合函数",
          path: "/aggregation/"
        },
        {
          title: "META",
          path: "/meta/"
        },
        {
          title: "ASSERTIONS",
          path: "/assertions/"
        },
        {
          title: "关系判断",
          path: "/booleans/"
        },
        {
          title: "单位换算",
          path: "/unit_conversion/"
        }
      ]
    }
  },
  plugins: [
    [
      "vuepress-plugin-helper-live2d",
      {
        live2d: {
          // 是否启用(关闭请设置为false)(default: true)
          enable: true,
          // 模型名称(default: hibiki)>>>取值请参考：
          // https://github.com/JoeyBling/hexo-theme-yilia-plus/wiki/live2d%E6%A8%A1%E5%9E%8B%E5%8C%85%E5%B1%95%E7%A4%BA
          model: "hijiki",
          display: {
            position: "right", // 显示位置：left/right(default: 'right')
            width: 180, // 模型的长度(default: 135)
            height: 300, // 模型的高度(default: 300)
            hOffset: 35, //  水平偏移(default: 65)
            vOffset: 0 //  垂直偏移(default: 0)
          },
          mobile: {
            show: false // 是否在移动设备上显示(default: false)
          },
          react: {
            opacity: 0.8 // 模型透明度(default: 0.8)
          }
        }
      }
    ]
  ]
};
