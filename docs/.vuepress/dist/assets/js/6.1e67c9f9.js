(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{413:function(t,s,a){"use strict";a.r(s);var n=a(33),r=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"aggregation"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#aggregation"}},[t._v("#")]),t._v(" aggregation")]),t._v(" "),a("h2",{attrs:{id:"collect"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#collect"}},[t._v("#")]),t._v(" collect")]),t._v(" "),a("blockquote",[a("p",[t._v("npm install @turf/collect")])]),t._v(" "),a("p",[t._v("接收一组面要素集，一组点要素集，如果某个点要素在某个面要素内，便会将该点的指定属性转移到该面的指定属性里，如果有多个点的话，则属性为数组")]),t._v(" "),a("p",[a("strong",[t._v("参数")])]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("入参")]),t._v(" "),a("th",[t._v("类型")]),t._v(" "),a("th",[t._v("描述")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("polygons")]),t._v(" "),a("td",[a("a",{attrs:{href:"https://tools.ietf.org/html/rfc7946#section-3.3",target:"_blank",rel:"noopener noreferrer"}},[t._v("FeatureCollection"),a("OutboundLink")],1),t._v("<"),a("a",{attrs:{href:"https://tools.ietf.org/html/rfc7946#section-3.1.6",target:"_blank",rel:"noopener noreferrer"}},[t._v("Polygon"),a("OutboundLink")],1),t._v(">")]),t._v(" "),a("td",[t._v("面要素集")])]),t._v(" "),a("tr",[a("td",[t._v("points")]),t._v(" "),a("td",[a("a",{attrs:{href:"https://tools.ietf.org/html/rfc7946#section-3.3",target:"_blank",rel:"noopener noreferrer"}},[t._v("FeatureCollection"),a("OutboundLink")],1),t._v("<"),a("a",{attrs:{href:"https://tools.ietf.org/html/rfc7946#section-3.1.2",target:"_blank",rel:"noopener noreferrer"}},[t._v("Point"),a("OutboundLink")],1),t._v(">")]),t._v(" "),a("td",[t._v("点要素集")])]),t._v(" "),a("tr",[a("td",[t._v("inProperty")]),t._v(" "),a("td",[t._v("String")]),t._v(" "),a("td",[t._v("点要素的要被转移的属性")])]),t._v(" "),a("tr",[a("td",[t._v("outProperty")]),t._v(" "),a("td",[t._v("String")]),t._v(" "),a("td",[t._v("面要素转移属性的重命名")])])])]),t._v(" "),a("p",[a("strong",[t._v("返回")])]),t._v(" "),a("p",[a("a",{attrs:{href:"https://tools.ietf.org/html/rfc7946#section-3.3",target:"_blank",rel:"noopener noreferrer"}},[t._v("FeatureCollection"),a("OutboundLink")],1),t._v("<"),a("a",{attrs:{href:"https://tools.ietf.org/html/rfc7946#section-3.1.6",target:"_blank",rel:"noopener noreferrer"}},[t._v("Polygon"),a("OutboundLink")],1),t._v(">")]),t._v(" "),a("p",[a("strong",[t._v("范例")])]),t._v(" "),a("div",{staticClass:"language-javascript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" poly1 "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" turf"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("polygon")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("10")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("10")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("10")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("10")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" poly2 "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" turf"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("polygon")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("10")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("20")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("10")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("20")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("20")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("20")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("10")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" polyFC "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" turf"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("featureCollection")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("poly1"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" poly2"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" pt1 "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" turf"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("point")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("5")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("5")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" population"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("200")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" pt2 "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" turf"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("point")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" population"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("600")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" pt3 "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" turf"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("point")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("14")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" population"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("100")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" pt4 "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" turf"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("point")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("13")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" population"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("200")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" pt5 "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" turf"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("point")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("19")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("7")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" population"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("300")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" pointFC "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" turf"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("featureCollection")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("pt1"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" pt2"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" pt3"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" pt4"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" pt5"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" collected "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" turf"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("collect")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("polyFC"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" pointFC"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"population"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"values"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" values "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" collected"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("features"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("properties"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("values"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//=values => [200, 600] pt1、pt2这两个点在第一个面要素里，所有把population的值转移给了第一个面要素的values")]),t._v("\n")])])]),a("h2",{attrs:{id:"clustersdbscan"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#clustersdbscan"}},[t._v("#")]),t._v(" clustersDbscan")]),t._v(" "),a("blockquote",[a("p",[t._v("npm install @turf/clusters-dbscan")])]),t._v(" "),a("p",[t._v("接收一组点要素，根据聚类算法"),a("a",{attrs:{href:"https://baike.baidu.com/item/DBSCAN/4864716?fr=aladdin",target:"_blank",rel:"noopener noreferrer"}},[t._v("DBSCAN"),a("OutboundLink")],1),t._v("，返回计算后的点要素集")]),t._v(" "),a("blockquote",[a("p",[t._v("DBSCAN 算法以密度为本。给定某空间里的一个点集合，这算法能把附近的点分成一组（有很多相邻点的点），并标记出位于低密度区域的局外点（最接近它的点也十分远）")])]),t._v(" "),a("p",[a("strong",[t._v("参数")])]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("入参")]),t._v(" "),a("th",[t._v("类型")]),t._v(" "),a("th",[t._v("描述")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("points")]),t._v(" "),a("td",[a("a",{attrs:{href:"https://tools.ietf.org/html/rfc7946#section-3.3",target:"_blank",rel:"noopener noreferrer"}},[t._v("FeatureCollection"),a("OutboundLink")],1),t._v("<"),a("a",{attrs:{href:"https://tools.ietf.org/html/rfc7946#section-3.1.2",target:"_blank",rel:"noopener noreferrer"}},[t._v("Point"),a("OutboundLink")],1),t._v(">")]),t._v(" "),a("td",[t._v("点要素集")])]),t._v(" "),a("tr",[a("td",[t._v("maxDistance")]),t._v(" "),a("td",[t._v("Number")]),t._v(" "),a("td",[t._v("生成集群中任何点之间的最大距离，单位为千米")])]),t._v(" "),a("tr",[a("td",[t._v("options")]),t._v(" "),a("td",[t._v("Object")]),t._v(" "),a("td",[t._v("可配置项")])])])]),t._v(" "),a("p",[a("strong",[t._v("options")])]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("属性")]),t._v(" "),a("th",[t._v("类型")]),t._v(" "),a("th",[t._v("默认值")]),t._v(" "),a("th",[t._v("描述")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("units")]),t._v(" "),a("td",[t._v("String")]),t._v(" "),a("td",[t._v('"kilometers"')]),t._v(" "),a("td",[t._v("单位，可选的有 kilometers")])]),t._v(" "),a("tr",[a("td",[t._v("mutate")]),t._v(" "),a("td",[t._v("Boolean")]),t._v(" "),a("td",[t._v("false")]),t._v(" "),a("td",[t._v("是否返回入参的 GeoJSON，为 true 性能能显著提高")])]),t._v(" "),a("tr",[a("td",[t._v("minPoints")]),t._v(" "),a("td",[t._v("Number")]),t._v(" "),a("td",[t._v("3")]),t._v(" "),a("td",[t._v("生成单个集群的最小点要素数量，不满足的点要素将被分类成噪声点("),a("code",[t._v("noise")]),t._v(")")])])])]),t._v(" "),a("p",[a("strong",[t._v("返回")])]),t._v(" "),a("p",[a("a",{attrs:{href:"https://tools.ietf.org/html/rfc7946#section-3.3",target:"_blank",rel:"noopener noreferrer"}},[t._v("FeatureCollection"),a("OutboundLink")],1),t._v("<"),a("a",{attrs:{href:"https://tools.ietf.org/html/rfc7946#section-3.1.2",target:"_blank",rel:"noopener noreferrer"}},[t._v("Point"),a("OutboundLink")],1),t._v(">")]),t._v(" "),a("p",[a("strong",[t._v("范例")])]),t._v(" "),a("div",{staticClass:"language-javascript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// create random points with random z-values in their properties")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" points "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" turf"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("randomPoint")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("100")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" bbox"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("30")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("20")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("50")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" maxDistance "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("100")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" clustered "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" turf"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("clustersDbscan")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("points"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" maxDistance"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("h2",{attrs:{id:"clusterskmeans"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#clusterskmeans"}},[t._v("#")]),t._v(" clustersKmeans")]),t._v(" "),a("blockquote",[a("p",[t._v("npm install @turf/clusters-kmeans")])]),t._v(" "),a("p",[t._v("接收一组点要素集合，根据聚类算法"),a("a",{attrs:{href:"https://baike.baidu.com/item/K%E5%9D%87%E5%80%BC%E8%81%9A%E7%B1%BB%E7%AE%97%E6%B3%95",target:"_blank",rel:"noopener noreferrer"}},[t._v("k-means"),a("OutboundLink")],1),t._v("，返回计算后的点要素集")]),t._v(" "),a("blockquote",[a("p",[t._v("k-means 把 n 个点（可以是样本的一次观察或一个实例）划分到 k 个聚类中，使得每个点都属于离他最近的均值（此即聚类中心）对应的聚类，以之作为聚类的标准")])]),t._v(" "),a("p",[a("strong",[t._v("参数")])]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("入参")]),t._v(" "),a("th",[t._v("类型")]),t._v(" "),a("th",[t._v("描述")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("points")]),t._v(" "),a("td",[a("a",{attrs:{href:"https://tools.ietf.org/html/rfc7946#section-3.3",target:"_blank",rel:"noopener noreferrer"}},[t._v("FeatureCollection"),a("OutboundLink")],1),t._v("<"),a("a",{attrs:{href:"https://tools.ietf.org/html/rfc7946#section-3.1.2",target:"_blank",rel:"noopener noreferrer"}},[t._v("Point"),a("OutboundLink")],1),t._v(">")]),t._v(" "),a("td",[t._v("点要素集")])]),t._v(" "),a("tr",[a("td",[t._v("options")]),t._v(" "),a("td",[t._v("Object")]),t._v(" "),a("td",[t._v("可配置项")])])])]),t._v(" "),a("p",[a("strong",[t._v("options")])]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("属性")]),t._v(" "),a("th",[t._v("类型")]),t._v(" "),a("th",[t._v("默认值")]),t._v(" "),a("th",[t._v("描述")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("numberOfClusters")]),t._v(" "),a("td",[t._v("Number")]),t._v(" "),a("td",[t._v("Math.sqrt(numberOfPoints/2)")]),t._v(" "),a("td",[t._v("集群数量")])]),t._v(" "),a("tr",[a("td",[t._v("mutate")]),t._v(" "),a("td",[t._v("Boolean")]),t._v(" "),a("td",[t._v("false")]),t._v(" "),a("td",[t._v("是否返回入参的 GeoJSON，为 true 性能能显著提高")])])])]),t._v(" "),a("p",[a("strong",[t._v("返回")])]),t._v(" "),a("p",[a("a",{attrs:{href:"https://tools.ietf.org/html/rfc7946#section-3.3",target:"_blank",rel:"noopener noreferrer"}},[t._v("FeatureCollection"),a("OutboundLink")],1),t._v("<"),a("a",{attrs:{href:"https://tools.ietf.org/html/rfc7946#section-3.1.2",target:"_blank",rel:"noopener noreferrer"}},[t._v("Point"),a("OutboundLink")],1),t._v(">")]),t._v(" "),a("p",[a("strong",[t._v("范例")])]),t._v(" "),a("div",{staticClass:"language-javascript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// create random points with random z-values in their properties")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" points "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" turf"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("randomPoint")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("100")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" bbox"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("30")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("20")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("50")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" options "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" numberOfClusters"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("7")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" clustered "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" turf"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("clustersKmeans")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("points"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" options"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])])])}),[],!1,null,null,null);s.default=r.exports}}]);