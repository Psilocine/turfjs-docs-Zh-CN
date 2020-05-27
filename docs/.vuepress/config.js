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
        }
      ]
    }
  }
};
