# 快速入门

Turf 的有多种引用方法，下述将一一列举

### 通过 CDN 引入

```html
<!-- 也可以使用国内镜像或 BootCDN 等-->
<script src="https://unpkg.com/@turf/turf/turf.min.js"></script>
<script>
  var bbox = turf.bbox(features);
</script>
```

> 值得注意的是：Turf 的完整版大小约 500kb，这是相当大的一笔资源开销。如果只想使用个别的方法，不推荐使用此方法。

### 在 Node 使用 或和构建工具（webpack、browserify 等）一起使用

```javascript
// Import your module of interest
var collect = require("@turf/collect");
// or in ES6
import collect from "@turf/collect";
// And then use it
collect(points, polys, "population", "populationValues");
// Alternatively you can import the whole lot using
import * as turf from "@turf/turf";
```

### 打包创建自定义版本

1. 在一个文件夹里 npm 安装需要用到的 Turf 方法

```javascript
$ npm install @turf/collect @turf/buffer
```

2. 在该文件夹的根目录创建 main.js，将安装的模块都包含在 modules.exports 中

```javascript
module.exports = {
  collect: require("@turf/collect"),
  buffer: require("@turf/buffer")
};
```

3. browserify 打包

```javascript
$ browserify main.js -s turf > outTurf.js
```

4. 大功告成，你可以像使用 Turf 一样使用 ourTurf.js 文件。例如通过 script 标签加载，并使用 turf 作为全局变量调用
