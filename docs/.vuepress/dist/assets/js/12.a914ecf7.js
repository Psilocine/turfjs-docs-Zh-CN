(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{424:function(t,s,r){"use strict";r.r(s);var a=r(33),n=Object(a.a)({},(function(){var t=this,s=t.$createElement,r=t._self._c||s;return r("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[r("h1",{attrs:{id:"grids"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#grids"}},[t._v("#")]),t._v(" grids")]),t._v(" "),r("h2",{attrs:{id:"hexgrid"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#hexgrid"}},[t._v("#")]),t._v(" hexGrid")]),t._v(" "),r("blockquote",[r("p",[t._v("npm install @turf/hex-grid")])]),t._v(" "),r("p",[t._v("接收一个边界框和要生成的单元格的直径，计算并返回平顶六边形或三角形要素集")]),t._v(" "),r("blockquote",[r("p",[t._v("入参 options 的 triangles 为 true 的这个方法和 triangleGrid 方法的区别：这个方法是基于基于六边形内部切分三角形，另一个是矩形内部切分三角形")])]),t._v(" "),r("p",[r("strong",[t._v("参数")])]),t._v(" "),r("table",[r("thead",[r("tr",[r("th",[t._v("入参")]),t._v(" "),r("th",[t._v("类型")]),t._v(" "),r("th",[t._v("描述")])])]),t._v(" "),r("tbody",[r("tr",[r("td",[t._v("bbox")]),t._v(" "),r("td",[r("a",{attrs:{href:"https://tools.ietf.org/html/rfc7946#section-5",target:"_blank",rel:"noopener noreferrer"}},[t._v("BBox"),r("OutboundLink")],1)]),t._v(" "),r("td",[t._v("以 minX、minY、maxX、maxY 的顺序排列")])]),t._v(" "),r("tr",[r("td",[t._v("cellSide")]),t._v(" "),r("td",[t._v("Number")]),t._v(" "),r("td",[t._v("三角形或六边形的边长，与六边形的外接圆半径重合")])]),t._v(" "),r("tr",[r("td",[t._v("options")]),t._v(" "),r("td",[t._v("Object")]),t._v(" "),r("td",[t._v("可配置项")])])])]),t._v(" "),r("p",[r("strong",[t._v("options")])]),t._v(" "),r("table",[r("thead",[r("tr",[r("th",[t._v("属性")]),t._v(" "),r("th",[t._v("类型")]),t._v(" "),r("th",[t._v("默认值")]),t._v(" "),r("th",[t._v("描述")])])]),t._v(" "),r("tbody",[r("tr",[r("td",[t._v("units")]),t._v(" "),r("td",[t._v("String")]),t._v(" "),r("td",[t._v('"kilometers"')]),t._v(" "),r("td",[t._v("单位，可选的有 degrees、radians、miles、kilometers")])]),t._v(" "),r("tr",[r("td",[t._v("properties")]),t._v(" "),r("td",[t._v("Object")]),t._v(" "),r("td",[t._v("{}")]),t._v(" "),r("td",[t._v("出参 type 为 Polygon 的 GeoJSON 的 properties 属性")])]),t._v(" "),r("tr",[r("td",[t._v("mask")]),t._v(" "),r("td",[r("a",{attrs:{href:"https://tools.ietf.org/html/rfc7946#section-3.2",target:"_blank",rel:"noopener noreferrer"}},[t._v("Feature"),r("OutboundLink")],1),t._v("<"),r("a",{attrs:{href:"https://tools.ietf.org/html/rfc7946#section-3.1.6",target:"_blank",rel:"noopener noreferrer"}},[t._v("Polygon"),r("OutboundLink")],1),t._v("|"),r("a",{attrs:{href:"https://tools.ietf.org/html/rfc7946#section-3.1.7",target:"_blank",rel:"noopener noreferrer"}},[t._v("MultiPolygon"),r("OutboundLink")],1),t._v(">")]),t._v(" "),r("td"),t._v(" "),r("td",[t._v("如果传递了 Polygon 或 MultiPollygon，则仅在传入的 mask 面要素内创建，如果范围大于 bbox，则相当于不传")])]),t._v(" "),r("tr",[r("td",[t._v("triangles")]),t._v(" "),r("td",[t._v("Boolean")]),t._v(" "),r("td",[t._v("false")]),t._v(" "),r("td",[t._v("是否返回三角形而不是六边形")])])])]),t._v(" "),r("p",[r("strong",[t._v("返回")])]),t._v(" "),r("p",[r("a",{attrs:{href:"https://tools.ietf.org/html/rfc7946#section-3.3",target:"_blank",rel:"noopener noreferrer"}},[t._v("FeatureCollection"),r("OutboundLink")],1),t._v("<"),r("a",{attrs:{href:"https://tools.ietf.org/html/rfc7946#section-3.1.6",target:"_blank",rel:"noopener noreferrer"}},[t._v("Polygon"),r("OutboundLink")],1),t._v(">")]),t._v(" "),r("p",[r("strong",[t._v("范例")])]),t._v(" "),r("div",{staticClass:"language-javascript extra-class"},[r("pre",{pre:!0,attrs:{class:"language-javascript"}},[r("code",[r("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" bbox "),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),r("span",{pre:!0,attrs:{class:"token number"}},[t._v("96")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token number"}},[t._v("31")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),r("span",{pre:!0,attrs:{class:"token number"}},[t._v("84")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token number"}},[t._v("40")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),r("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" cellSide "),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token number"}},[t._v("50")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),r("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" options "),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" units"),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token string"}},[t._v('"miles"')]),t._v(" "),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),r("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" hexgrid "),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" turf"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),r("span",{pre:!0,attrs:{class:"token function"}},[t._v("hexGrid")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("bbox"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" cellSide"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" options"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 正六边形的要素集")]),t._v("\n"),r("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" hexgrid2 "),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" turf"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),r("span",{pre:!0,attrs:{class:"token function"}},[t._v("hexGrid")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("bbox"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" cellSide"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("...")]),t._v("options"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  triangles"),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  mask"),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" turf"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),r("span",{pre:!0,attrs:{class:"token function"}},[t._v("polygon")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n    "),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n      "),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),r("span",{pre:!0,attrs:{class:"token number"}},[t._v("91.63")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token number"}},[t._v("37.48")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),r("span",{pre:!0,attrs:{class:"token number"}},[t._v("87.75")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token number"}},[t._v("37.52")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),r("span",{pre:!0,attrs:{class:"token number"}},[t._v("87.77")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token number"}},[t._v("34.29")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),r("span",{pre:!0,attrs:{class:"token number"}},[t._v("92.04")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token number"}},[t._v("34.15")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),r("span",{pre:!0,attrs:{class:"token number"}},[t._v("91.63")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token number"}},[t._v("37.48")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n    "),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n  "),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 仅在mask的坐标范围内生成三角形要素集")]),t._v("\n")])])]),r("h2",{attrs:{id:"pointgrid"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#pointgrid"}},[t._v("#")]),t._v(" pointGrid")]),t._v(" "),r("blockquote",[r("p",[t._v("npm install @turf/point-grid")])]),t._v(" "),r("p",[t._v("接收边界框，返回指定距离排列的点要素集")]),t._v(" "),r("p",[r("strong",[t._v("参数")])]),t._v(" "),r("table",[r("thead",[r("tr",[r("th",[t._v("入参")]),t._v(" "),r("th",[t._v("类型")]),t._v(" "),r("th",[t._v("描述")])])]),t._v(" "),r("tbody",[r("tr",[r("td",[t._v("bbox")]),t._v(" "),r("td",[r("a",{attrs:{href:"https://tools.ietf.org/html/rfc7946#section-5",target:"_blank",rel:"noopener noreferrer"}},[t._v("BBox"),r("OutboundLink")],1)]),t._v(" "),r("td",[t._v("以 minX、minY、maxX、maxY 的顺序排列")])]),t._v(" "),r("tr",[r("td",[t._v("cellSide")]),t._v(" "),r("td",[t._v("Number")]),t._v(" "),r("td",[t._v("点要素之间的距离")])]),t._v(" "),r("tr",[r("td",[t._v("options")]),t._v(" "),r("td",[t._v("Object")]),t._v(" "),r("td",[t._v("可配置项")])])])]),t._v(" "),r("p",[r("strong",[t._v("options")])]),t._v(" "),r("table",[r("thead",[r("tr",[r("th",[t._v("属性")]),t._v(" "),r("th",[t._v("类型")]),t._v(" "),r("th",[t._v("默认值")]),t._v(" "),r("th",[t._v("描述")])])]),t._v(" "),r("tbody",[r("tr",[r("td",[t._v("units")]),t._v(" "),r("td",[t._v("String")]),t._v(" "),r("td",[t._v('"kilometers"')]),t._v(" "),r("td",[t._v("单位，可选的有 degrees、radians、miles、kilometers")])]),t._v(" "),r("tr",[r("td",[t._v("mask")]),t._v(" "),r("td",[r("a",{attrs:{href:"https://tools.ietf.org/html/rfc7946#section-3.2",target:"_blank",rel:"noopener noreferrer"}},[t._v("Feature"),r("OutboundLink")],1),t._v("<"),r("a",{attrs:{href:"https://tools.ietf.org/html/rfc7946#section-3.1.6",target:"_blank",rel:"noopener noreferrer"}},[t._v("Polygon"),r("OutboundLink")],1),t._v("|"),r("a",{attrs:{href:"https://tools.ietf.org/html/rfc7946#section-3.1.7",target:"_blank",rel:"noopener noreferrer"}},[t._v("MultiPolygon"),r("OutboundLink")],1),t._v(">")]),t._v(" "),r("td"),t._v(" "),r("td",[t._v("如果传递了 Polygon 或 MultiPollygon，则仅在传入的 mask 面要素内创建，如果范围大于 bbox，则相当于不传")])]),t._v(" "),r("tr",[r("td",[t._v("properties")]),t._v(" "),r("td",[t._v("Object")]),t._v(" "),r("td",[t._v("{}")]),t._v(" "),r("td",[t._v("出参 type 为 Point 的 GeoJSON 的 properties 属性")])])])]),t._v(" "),r("p",[r("strong",[t._v("返回")])]),t._v(" "),r("p",[r("a",{attrs:{href:"https://tools.ietf.org/html/rfc7946#section-3.3",target:"_blank",rel:"noopener noreferrer"}},[t._v("FeatureCollection"),r("OutboundLink")],1),t._v("<"),r("a",{attrs:{href:"https://tools.ietf.org/html/rfc7946#section-3.1.2",target:"_blank",rel:"noopener noreferrer"}},[t._v("Point"),r("OutboundLink")],1),t._v(">")]),t._v(" "),r("p",[r("strong",[t._v("范例")])]),t._v(" "),r("div",{staticClass:"language-javascript extra-class"},[r("pre",{pre:!0,attrs:{class:"language-javascript"}},[r("code",[r("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" extent "),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),r("span",{pre:!0,attrs:{class:"token number"}},[t._v("70.823364")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),r("span",{pre:!0,attrs:{class:"token number"}},[t._v("33.553984")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),r("span",{pre:!0,attrs:{class:"token number"}},[t._v("70.473175")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),r("span",{pre:!0,attrs:{class:"token number"}},[t._v("33.302986")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),r("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" cellSide "),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),r("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" options "),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" units"),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token string"}},[t._v('"miles"')]),t._v(" "),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),r("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" grid "),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" turf"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),r("span",{pre:!0,attrs:{class:"token function"}},[t._v("pointGrid")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("extent"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" cellSide"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" options"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 返回点要素集，点与点之间距离三英里")]),t._v("\n")])])]),r("h2",{attrs:{id:"squaregrid"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#squaregrid"}},[t._v("#")]),t._v(" squareGrid")]),t._v(" "),r("blockquote",[r("p",[t._v("npm install @turf/square-grid")])]),t._v(" "),r("p",[t._v("接收边界框，返回指定边长长度的相邻排列的面要素集")]),t._v(" "),r("p",[r("strong",[t._v("参数")])]),t._v(" "),r("table",[r("thead",[r("tr",[r("th",[t._v("入参")]),t._v(" "),r("th",[t._v("类型")]),t._v(" "),r("th",[t._v("描述")])])]),t._v(" "),r("tbody",[r("tr",[r("td",[t._v("bbox")]),t._v(" "),r("td",[r("a",{attrs:{href:"https://tools.ietf.org/html/rfc7946#section-5",target:"_blank",rel:"noopener noreferrer"}},[t._v("BBox"),r("OutboundLink")],1)]),t._v(" "),r("td",[t._v("以 minX、minY、maxX、maxY 的顺序排列")])]),t._v(" "),r("tr",[r("td",[t._v("cellSide")]),t._v(" "),r("td",[t._v("Number")]),t._v(" "),r("td",[t._v("面要素的边长")])]),t._v(" "),r("tr",[r("td",[t._v("options")]),t._v(" "),r("td",[t._v("Object")]),t._v(" "),r("td",[t._v("可配置项")])])])]),t._v(" "),r("p",[r("strong",[t._v("options")])]),t._v(" "),r("table",[r("thead",[r("tr",[r("th",[t._v("属性")]),t._v(" "),r("th",[t._v("类型")]),t._v(" "),r("th",[t._v("默认值")]),t._v(" "),r("th",[t._v("描述")])])]),t._v(" "),r("tbody",[r("tr",[r("td",[t._v("units")]),t._v(" "),r("td",[t._v("String")]),t._v(" "),r("td",[t._v('"kilometers"')]),t._v(" "),r("td",[t._v("单位，可选的有 degrees、radians、miles、kilometers")])]),t._v(" "),r("tr",[r("td",[t._v("mask")]),t._v(" "),r("td",[r("a",{attrs:{href:"https://tools.ietf.org/html/rfc7946#section-3.2",target:"_blank",rel:"noopener noreferrer"}},[t._v("Feature"),r("OutboundLink")],1),t._v("<"),r("a",{attrs:{href:"https://tools.ietf.org/html/rfc7946#section-3.1.6",target:"_blank",rel:"noopener noreferrer"}},[t._v("Polygon"),r("OutboundLink")],1),t._v("|"),r("a",{attrs:{href:"https://tools.ietf.org/html/rfc7946#section-3.1.7",target:"_blank",rel:"noopener noreferrer"}},[t._v("MultiPolygon"),r("OutboundLink")],1),t._v(">")]),t._v(" "),r("td"),t._v(" "),r("td",[t._v("如果传递了 Polygon 或 MultiPollygon，则仅在传入的 mask 面要素内创建，如果范围大于 bbox，则相当于不传")])]),t._v(" "),r("tr",[r("td",[t._v("properties")]),t._v(" "),r("td",[t._v("Object")]),t._v(" "),r("td",[t._v("{}")]),t._v(" "),r("td",[t._v("出参 type 为 Point 的 GeoJSON 的 properties 属性")])])])]),t._v(" "),r("p",[r("strong",[t._v("返回")])]),t._v(" "),r("p",[r("a",{attrs:{href:"https://tools.ietf.org/html/rfc7946#section-3.3",target:"_blank",rel:"noopener noreferrer"}},[t._v("FeatureCollection"),r("OutboundLink")],1),t._v("<"),r("a",{attrs:{href:"https://tools.ietf.org/html/rfc7946#section-3.1.6",target:"_blank",rel:"noopener noreferrer"}},[t._v("Polygon"),r("OutboundLink")],1),t._v(">")]),t._v(" "),r("p",[r("strong",[t._v("范例")])]),t._v(" "),r("div",{staticClass:"language-javascript extra-class"},[r("pre",{pre:!0,attrs:{class:"language-javascript"}},[r("code",[r("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" bbox "),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),r("span",{pre:!0,attrs:{class:"token number"}},[t._v("95")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token number"}},[t._v("30")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),r("span",{pre:!0,attrs:{class:"token number"}},[t._v("85")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token number"}},[t._v("40")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),r("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" cellSide "),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token number"}},[t._v("50")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),r("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" options "),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" units"),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token string"}},[t._v('"miles"')]),t._v(" "),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),r("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" squareGrid "),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" turf"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),r("span",{pre:!0,attrs:{class:"token function"}},[t._v("squareGrid")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("bbox"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" cellSide"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" options"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),r("h2",{attrs:{id:"trianglegrid"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#trianglegrid"}},[t._v("#")]),t._v(" triangleGrid")]),t._v(" "),r("blockquote",[r("p",[t._v("npm install @turf/triangle-grid")])]),t._v(" "),r("p",[t._v("接收边界框，返回指定长度(直角边)的相邻排列的三角形面要素集")]),t._v(" "),r("blockquote",[r("p",[t._v("这个方法和 triangles 为 true 的 hexGrid 方法的区别：这个方法是基于矩形内部切分三角形，另一个是基于六边形内部切分")])]),t._v(" "),r("p",[r("strong",[t._v("参数")])]),t._v(" "),r("table",[r("thead",[r("tr",[r("th",[t._v("入参")]),t._v(" "),r("th",[t._v("类型")]),t._v(" "),r("th",[t._v("描述")])])]),t._v(" "),r("tbody",[r("tr",[r("td",[t._v("bbox")]),t._v(" "),r("td",[r("a",{attrs:{href:"https://tools.ietf.org/html/rfc7946#section-5",target:"_blank",rel:"noopener noreferrer"}},[t._v("BBox"),r("OutboundLink")],1)]),t._v(" "),r("td",[t._v("以 minX、minY、maxX、maxY 的顺序排列")])]),t._v(" "),r("tr",[r("td",[t._v("cellSide")]),t._v(" "),r("td",[t._v("Number")]),t._v(" "),r("td",[t._v("三角形面要素的直角边边长")])]),t._v(" "),r("tr",[r("td",[t._v("options")]),t._v(" "),r("td",[t._v("Object")]),t._v(" "),r("td",[t._v("可配置项")])])])]),t._v(" "),r("p",[r("strong",[t._v("options")])]),t._v(" "),r("table",[r("thead",[r("tr",[r("th",[t._v("属性")]),t._v(" "),r("th",[t._v("类型")]),t._v(" "),r("th",[t._v("默认值")]),t._v(" "),r("th",[t._v("描述")])])]),t._v(" "),r("tbody",[r("tr",[r("td",[t._v("units")]),t._v(" "),r("td",[t._v("String")]),t._v(" "),r("td",[t._v('"kilometers"')]),t._v(" "),r("td",[t._v("单位，可选的有 degrees、radians、miles、kilometers")])]),t._v(" "),r("tr",[r("td",[t._v("mask")]),t._v(" "),r("td",[r("a",{attrs:{href:"https://tools.ietf.org/html/rfc7946#section-3.2",target:"_blank",rel:"noopener noreferrer"}},[t._v("Feature"),r("OutboundLink")],1),t._v("<"),r("a",{attrs:{href:"https://tools.ietf.org/html/rfc7946#section-3.1.6",target:"_blank",rel:"noopener noreferrer"}},[t._v("Polygon"),r("OutboundLink")],1),t._v("|"),r("a",{attrs:{href:"https://tools.ietf.org/html/rfc7946#section-3.1.7",target:"_blank",rel:"noopener noreferrer"}},[t._v("MultiPolygon"),r("OutboundLink")],1),t._v(">")]),t._v(" "),r("td"),t._v(" "),r("td",[t._v("如果传递了 Polygon 或 MultiPollygon，则仅在传入的 mask 面要素内创建，如果范围大于 bbox，则相当于不传")])]),t._v(" "),r("tr",[r("td",[t._v("properties")]),t._v(" "),r("td",[t._v("Object")]),t._v(" "),r("td",[t._v("{}")]),t._v(" "),r("td",[t._v("出参 type 为 Point 的 GeoJSON 的 properties 属性")])])])]),t._v(" "),r("p",[r("strong",[t._v("返回")])]),t._v(" "),r("p",[r("a",{attrs:{href:"https://tools.ietf.org/html/rfc7946#section-3.3",target:"_blank",rel:"noopener noreferrer"}},[t._v("FeatureCollection"),r("OutboundLink")],1),t._v("<"),r("a",{attrs:{href:"https://tools.ietf.org/html/rfc7946#section-3.1.6",target:"_blank",rel:"noopener noreferrer"}},[t._v("Polygon"),r("OutboundLink")],1),t._v(">")]),t._v(" "),r("p",[r("strong",[t._v("范例")])]),t._v(" "),r("div",{staticClass:"language-javascript extra-class"},[r("pre",{pre:!0,attrs:{class:"language-javascript"}},[r("code",[r("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" bbox "),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),r("span",{pre:!0,attrs:{class:"token number"}},[t._v("95")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token number"}},[t._v("30")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),r("span",{pre:!0,attrs:{class:"token number"}},[t._v("85")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token number"}},[t._v("40")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),r("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" cellSide "),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token number"}},[t._v("50")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),r("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" options "),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" units"),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token string"}},[t._v('"miles"')]),t._v(" "),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),r("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" triangleGrid "),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" turf"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),r("span",{pre:!0,attrs:{class:"token function"}},[t._v("triangleGrid")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("bbox"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" cellSide"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" options"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])])])}),[],!1,null,null,null);s.default=n.exports}}]);