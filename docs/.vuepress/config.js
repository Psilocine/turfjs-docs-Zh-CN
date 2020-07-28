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
      { text: "Github", link: "https://github.com/Psilocine/turfjs-docs-Zh-CN" },
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
          title: "测量类",
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
        }
        // {
        //   title: "关系判断类",
        //   path: "/booleans/"
        // },
        // {
        //   title: "单位换算类",
        //   path: "/unit_conversion/"
        // }
      ]
    }
  }
};
