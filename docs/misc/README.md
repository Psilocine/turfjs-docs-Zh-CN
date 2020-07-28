# MISC

## kinks

> npm install @turf/kinks

接收一个 type 为 [LineString][linestring_link]、[MultiLineString][multilinestring_link]、[Polygon][polygon_link]、[MultiPolygon][multipolygon_link] 的要素，计算并返回所有自相交的点要素

**参数**

| 入参      | 类型                                                                                                                                                              | 描述             |
| --------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------- |
| featureIn | [Feature][feature_link]&lt;[LineString][linestring_link]\|[MultiLineString][multilinestring_link]\|[MultiPolygon][multipolygon_link]\|[Polygon][polygon_link]&gt; | 计算自相交的要素 |

**返回**

[FeatureCollection][featurecollection_link]&lt;[Point][point_link]&gt;

**范例**

```javascript
var poly = turf.polygon([
  [
    [-12.034835, 8.901183],
    [-12.060413, 8.899826],
    [-12.03638, 8.873199],
    [-12.059383, 8.871418],
    [-12.034835, 8.901183]
  ]
]);

var kinks = turf.kinks(poly); // 返回要素集
```

## lineArc

> npm install @turf/line-arc

接收一个中心和半径，两个角度，计算出由 bearing1 为起点、bearing2 为终点的指定的圆弧并返回。

> 值得注意的是，角度是与正北方向所形成的角度，顺时针为正值，且两个角度有先后顺序

**参数**

| 入参     | 类型                | 描述                  |
| -------- | ------------------- | --------------------- |
| center   | [Coord][coord_link] | 中心点                |
| radius   | Number              | 圆的半径              |
| bearing1 | Number              | 介于 -180 至 180 之间 |
| bearing2 | Number              | 介于 -180 至 180 之间 |
| options  | Object              | 可配置项              |

**options**

| 属性  | 类型   | 默认值       | 描述                                               |
| ----- | ------ | ------------ | -------------------------------------------------- |
| steps | Number | 64           | 圆弧的平滑度，数值越高越平滑                       |
| units | String | "kilometers" | 单位，可选的有 degrees、radians、miles、kilometers |

**返回**

[Feature][feature_link]&lt;[LineString][linestring_link]&gt;

**范例**

```javascript
var center = turf.point([-75, 40]);
var radius = 5;
var bearing1 = 25;
var bearing2 = 47;

var arc = turf.lineArc(center, radius, bearing1, bearing2);
/*
{
  type: "Feature",
  geometry: {
    type: "LineString",
    coordinates: [
      [-74.97517792609881, 40.04075040571227],
      [-74.97008079359495, 40.038690305118934],
      [-74.96527228827969, 40.03625742190849],
      [-74.96079876149496, 40.03347522459089],
      [-74.95705100267124, 40.03065882615696]
    ]
  },
  properties: {}
}
*/
```

## lineChunk

> npm install @turf/link-chunk

接收一个 type 为 LineString 的线要素，切分成指定长度的线段并返回要素集

> 值得注意的是，如果入参的线段小于要切分的长度，则返回入参的线段

**参数**

| 入参          | 类型                                                                                                                      | 描述           |
| ------------- | ------------------------------------------------------------------------------------------------------------------------- | -------------- |
| geojson       | [FeatureCollection][featurecollection_link]&lt;[LineString][linestring_link]\|[MultiLineString][multilinestring_link]&gt; | 要切分的线要素 |
| segmentLength | Number                                                                                                                    | 每段线段的长度 |
| options       | Object                                                                                                                    | 可配置项       |

**options**

| 属性    | 类型    | 默认值       | 描述                                               |
| ------- | ------- | ------------ | -------------------------------------------------- |
| units   | String  | "kilometers" | 单位，可选的有 degrees、radians、miles、kilometers |
| reverse | Boolean | false        | 反转切分要素的顺序                                 |

**返回**

[FeatureCollection][featurecollection_link]&lt;[LineString][linestring_link]&gt;

**范例**

```javascript
var line = turf.lineString([
  [-95, 40],
  [-93, 45],
  [-85, 50]
]);

var chunk = turf.lineChunk(line, 15, { units: "miles" }); // 间隔15英里切分一段线段
```

## lineIntersect

> npm install @turf/line-intersect

接收两个任意的 type 为 [LineString][linestring_link] 或 [Polygon][polygon_link] 的 [GeoJSON][geojson_link]，并返回所有的相交点

**参数**

| 入参  | 类型                                                                                                                                                                                                                                      | 描述               |
| ----- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------ |
| line1 | [Geometry][geometry_link]\|[FeatureCollection][featurecollection_link]\|[Feature][feature_link]&lt;[LineString][linestring_link]\|[MultiLineString][multilinestring_link]\|[Polygon][polygon_link]\|[MultiPolygon][multipolygon_link]&gt; | 任意线要素或面要素 |
| line2 | [Geometry][geometry_link]\|[FeatureCollection][featurecollection_link]\|[Feature][feature_link]&lt;[LineString][linestring_link]\|[MultiLineString][multilinestring_link]\|[Polygon][polygon_link]\|[MultiPolygon][multipolygon_link]&gt; | 任意线要素或面要素 |

**返回**

[FeatureCollection][featurecollection_link]&lt;[Point][point_link]&gt;

**范例**

```javascript
var line1 = turf.lineString([
  [126, -11],
  [129, -21]
]);
var line2 = turf.lineString([
  [123, -18],
  [131, -14]
]);
var intersects = turf.lineIntersect(line1, line2);
/*
{
  type: "FeatureCollection",
  features: [
    {
      type: "Feature",
      geometry: {
        type: "Point",
        coordinates: [127.43478260869566, -15.782608695652174]
      },
      properties: {}
    }
  ]
}
*/
```

## lineOverlap

> npm install @turf/line-overlap

接收两个任意的 type 为 [LineString][linestring_link] 或 [Polygon][polygon_link] 的 [GeoJSON][geojson_link]，并返回它们的重叠线

> 值得注意的是，重叠线可能有多条

**参数**

| 入参    | 类型                                                                                                                                                                                                                                      | 描述               |
| ------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------ |
| line1   | [Geometry][geometry_link]\|[FeatureCollection][featurecollection_link]\|[Feature][feature_link]&lt;[LineString][linestring_link]\|[MultiLineString][multilinestring_link]\|[Polygon][polygon_link]\|[MultiPolygon][multipolygon_link]&gt; | 任意线要素或面要素 |
| line2   | [Geometry][geometry_link]\|[FeatureCollection][featurecollection_link]\|[Feature][feature_link]&lt;[LineString][linestring_link]\|[MultiLineString][multilinestring_link]\|[Polygon][polygon_link]\|[MultiPolygon][multipolygon_link]&gt; | 任意线要素或面要素 |
| options | Object                                                                                                                                                                                                                                    | 可配置项           |

**options**

| 属性      | 类型   | 默认值 | 描述                                 |
| --------- | ------ | ------ | ------------------------------------ |
| tolerance | Number | 0      | 匹配重叠线段的公差距离，以公里为单位 |

**返回**

[FeatureCollection][featurecollection_link]&lt;[LineString][linestring_link]&gt;

**范例**

```javascript
var line1 = turf.lineString([
  [115, -35],
  [125, -30],
  [135, -30],
  [145, -35]
]);
var line2 = turf.lineString([
  [115, -25],
  [125, -30],
  [135, -30],
  [145, -25]
]);

var overlapping = turf.lineOverlap(line1, line2); // [125, -30], [135, -30] 线段重叠
```

## lineSegment

> npm install @turf/line-segment

接收一个线要素或面要素，创建 2-vertex 的线段要素集合

**参数**

| 入参    | 类型                                                                                                                                                                                                                                     | 描述       |
| ------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------- |
| geojson | [Geometry][geometry_link]\|[FeatureCollection][featurecollection_link]\|[Feature][feature_link]&lt;[LineString][linestring_link]\|[MultiLineString][multilinestring_link]\|[Polygon][polygon_link]\|[MultiPolygon][multipolygon_link]&gt | 传入的要素 |

**返回**

[FeatureCollection][featurecollection_link]&lt;[LineString][linestring_link]&gt;

**范例**

```javascript
var polygon = turf.polygon([
  [
    [-50, 5],
    [-40, -10],
    [-50, -10],
    [-40, 5],
    [-50, 5]
  ]
]);
var segments = turf.lineSegment(polygon);
```

## lineSlice

> npm install @turf/line-slice

接收一条线要素、起点、终点，裁切起终点之间的在该线的线段并返回

> 值得注意的是，起点终点不需要在线上，会计算出点到线最近的点

**参数**

| 入参    | 类型                                                         | 描述         |
| ------- | ------------------------------------------------------------ | ------------ |
| startPt | [Coord][coord_link]                                          | 起点         |
| stopPt  | [Coord][coord_link]                                          | 终点         |
| line    | [Feature][feature_link]&lt;[LineString][linestring_link]&gt; | 要裁切的线段 |

**返回**

[Feature][feature_link]&lt;[LineString][linestring_link]&gt;

**范例**

```javascript
var line = turf.lineString([
  [-77.031669, 38.878605],
  [-77.029609, 38.881946],
  [-77.020339, 38.884084],
  [-77.025661, 38.885821],
  [-77.021884, 38.889563],
  [-77.019824, 38.892368]
]);
var start = turf.point([-77.029609, 38.881946]);
var stop = turf.point([-77.021884, 38.889563]);

var sliced = turf.lineSlice(start, stop, line); // 返回裁切的线段GeoJSON
```

## lineSliceAlong

> npm install @turf/line-slice-along

接收一条线要素、起点距离、终点距离，计算出沿起点在线上的指定距离、沿终点在线上的指定距离，裁切这两点之间的该线的线段并返回

> 值得注意的是，起点距离的点超过终点距离的点也没关系，只是坐标顺序相反而已

**参数**

| 入参      | 类型                                                         | 描述                   |
| --------- | ------------------------------------------------------------ | ---------------------- |
| line      | [Feature][feature_link]&lt;[LineString][linestring_link]&gt; | 要裁切的线段           |
| startDist | Number                                                       | 沿起点在线上的指定距离 |
| stopDist  | Number                                                       | 沿终点在线上的指定距离 |
| options   | Object                                                       | 可配置项               |

**options**

| 属性  | 类型   | 默认值       | 描述                                                         |
| ----- | ------ | ------------ | ------------------------------------------------------------ |
| units | String | "kilometers" | 沿线距离的单位，可选的有 degrees、radians、miles、kilometers |

**返回**

[Feature][feature_link]&lt;[LineString][linestring_link]&gt;

**范例**

```javascript
var line = turf.lineString([
  [7, 45],
  [9, 45],
  [14, 40],
  [14, 41]
]);
var start = 12.5;
var stop = 25;
var sliced = turf.lineSliceAlong(line, start, stop, { units: "miles" });
/*
{
  type: "Feature",
  geometry: {
    type: "LineString",
    coordinates: [
      [7.25584134370955, 45.00194719009643],
      [7.511697527558178, 45.003323144337116]
    ]
  }
}
*/
```

## lineSplit

> npm install @turf/line-split

接收一个线要素，一个用于裁切的任意要素，计算并返回裁切后的线要素集

**参数**

| 入参     | 类型                                                         | 描述               |
| -------- | ------------------------------------------------------------ | ------------------ |
| line     | [Feature][feature_link]&lt;[LineString][linestring_link]&gt; | 需要裁切的线要素   |
| splitter | [Feature][feature_link]                                      | 充当切分工具的要素 |

**返回**

[FeatureCollection][featurecollection_link]&lt;[LineString][linestring_link]&gt;

**范例**

```javascript
var line = turf.lineString([
  [120, -25],
  [145, -25]
]);
var splitter = turf.lineString([
  [130, -15],
  [130, -35]
]);

var split = turf.lineSplit(line, splitter); // 两个线要素的要素集
```

## mask

> npm install @turf/mask

接收一个 type 为 polygon 或 MultiPolygon 的面要素，作为内圈。返回一个挖孔的面要素作为遮罩

**参数**

| 入参    | 类型                                                                                                                                   | 描述                                           |
| ------- | -------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------- |
| polygon | [FeatureCollection][featurecollection_link]\|[Feature][feature_link]&lt;[Polygon][polygon_link]\|[MultiPolygon][multipolygon_link]&gt; | 面要素，作为遮罩内圈                           |
| mask    | [Feature][feature_link]&lt;[Polygon][polygon_link]&gt;                                                                                 | 可选项，作为遮罩外圈，不传则以世界范围作为外圈 |

**返回**

[Feature][feature_link]&lt;[Polygon][polygon_link]&gt;

**范例**

```javascript
var polygon = turf.polygon([
  [
    [112, -21],
    [116, -36],
    [146, -39],
    [153, -24],
    [133, -10],
    [112, -21]
  ]
]);
var mask = turf.polygon([
  [
    [90, -55],
    [170, -55],
    [170, 10],
    [90, 10],
    [90, -55]
  ]
]);

var masked = turf.mask(polygon, mask);
```

## nearestPointOnLine

> npm install @turf/nearest-point-on-line

接收一个点要素和一个线要素，计算出该点在该线上最近的点要素并返回

> 值得注意的是，返回的点要素的 properties 包括三个值：index：在第 n 个直线上找到的点；dist：pt 和该点要素之间的距离；location：沿着起点到该点要素的线的距离

**参数**

| 入参    | 类型                                                                                                                             | 描述           |
| ------- | -------------------------------------------------------------------------------------------------------------------------------- | -------------- |
| lines   | [Geometry][geometry_link]\|[Feature][feature_link]&lt;[LineString][linestring_link]\|[MultiLineString][multilinestring_link]&gt; | 参照物的线要素 |
| pt      | [Geometry][geometry_link]\|[Feature][feature_link]&lt;[Point][point_link]&gt;\|Array                                             | 需计算的点要素 |
| options | Object                                                                                                                           | 可配置项       |

**options**

| 属性  | 类型   | 默认值       | 描述                                               |
| ----- | ------ | ------------ | -------------------------------------------------- |
| units | String | "kilometers" | 单位，可选的有 degrees、radians、miles、kilometers |

**返回**

[Feature][feature_link]&lt;[Point][point_link]&gt;

**范例**

```javascript
var line = turf.lineString([
  [-77.031669, 38.878605],
  [-77.029609, 38.881946],
  [-77.020339, 38.884084],
  [-77.025661, 38.885821],
  [-77.021884, 38.889563],
  [-77.019824, 38.892368]
]);
var pt = turf.point([-77.037076, 38.884017]);

var snapped = turf.nearestPointOnLine(line, pt, { units: "miles" }); // [-77.02996941477018, 38.881361463229524]的点要素
```

## sector

> npm install @turf/sector

接收一系列参数(具体看下述列表)，计算出 type 为 [polygon][polygon_link] 的扇形区域并返回

> 值得注意的是，角度是与正北方向所形成的角度，顺时针为正值，且两个角度有先后顺序

**参数**

| 入参     | 类型                | 描述                  |
| -------- | ------------------- | --------------------- |
| center   | [Coord][coord_link] | 中心点                |
| radius   | Number              | 圆的半径              |
| bearing1 | Number              | 介于 -180 至 180 之间 |
| bearing2 | Number              | 介于 -180 至 180 之间 |
| options  | Object              | 可配置项              |

**options**

| 属性       | 类型   | 默认值       | 描述                                               |
| ---------- | ------ | ------------ | -------------------------------------------------- |
| units      | String | "kilometers" | 单位，可选的有 degrees、radians、miles、kilometers |
| steps      | Number | 64           | 圆弧的平滑度，数值越高越平滑                       |
| properties | Object | {}           | 出参 type 为 Polygon 的 GeoJSON 的 properties 属性 |

**返回**

[Feature][feature_link]&lt;[Polygon][polygon_link]&gt;

**范例**

```javascript
var center = turf.point([-75, 40]);
var radius = 5;
var bearing1 = 25;
var bearing2 = 45;

var sector = turf.sector(center, radius, bearing1, bearing2); // type 为 Polygon 的扇形面要素
```

## shortestPath

> npm install @turf/shortest-path

接收两个点，返回这两个点的最短距离路径，且不与传入的障碍物碰撞

**参数**

| 入参    | 类型                | 描述     |
| ------- | ------------------- | -------- |
| start   | [Coord][coord_link] | 起点     |
| end     | [Coord][coord_link] | 终点     |
| options | Object              | 可配置项 |

**options**

| 属性        | 类型                                                                                                                           | 默认值       | 描述                                               |
| ----------- | ------------------------------------------------------------------------------------------------------------------------------ | ------------ | -------------------------------------------------- |
| obstacles   | [Geometry][geometry_link]\|[Feature][feature_link]\|[FeatureCollection][featurecollection_link]&lt;[Polygon][polygon_link]&gt; |              | 路径无法通过的区域                                 |
| minDistance | Number                                                                                                                         |              | 路径与障碍物之间的最小距离(v5.1.6 暂不支持)        |
| units       | String                                                                                                                         | "kilometers" | 单位，可选的有 degrees、radians、miles、kilometers |
| resolution  | Number                                                                                                                         | 100          | 路径与障碍物之间的可以容忍的阈值距离               |

**返回**

[FeatureCollection][featurecollection_link]&lt;[LineString][linestring_link]&gt;

**范例**

```javascript
var start = [-5, -6];
var end = [9, -6];
var options = {
  obstacles: turf.polygon([
    [
      [0, -7],
      [5, -7],
      [5, -3],
      [0, -3],
      [0, -7]
    ]
  ])
};

var path = turf.shortestPath(start, end, options);
```

## unkinkPolygon

> npm install @turf/unkink-polygon

接收一个有自相交的面要素，计算并返回没有自相交的面要素集合，如果入参没有自相交，则返回入参数据的要素集

**参数**

| 入参    | 类型                                                                                                                                   | 描述    |
| ------- | -------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| geojson | [FeatureCollection][featurecollection_link]\|[Feature][feature_link]&lt;[Polygon][polygon_link]\|[MultiPolygon][multipolygon_link]&gt; | GeoJSON |

**返回**

[FeatureCollection][featurecollection_link]&lt;[Polygon][polygon_link]&gt;

**范例**

```javascript
var poly = turf.polygon([
  [
    [0, 0],
    [2, 0],
    [0, 2],
    [2, 2],
    [0, 0]
  ]
]);

var result = turf.unkinkPolygon(poly);
```

[geometry_link]: https://tools.ietf.org/html/rfc7946#section-3.1
[geojson_link]: https://tools.ietf.org/html/rfc7946#section-3
[feature_link]: https://tools.ietf.org/html/rfc7946#section-3.2
[featurecollection_link]: https://tools.ietf.org/html/rfc7946#section-3.3
[point_link]: https://tools.ietf.org/html/rfc7946#section-3.1.2
[polygon_link]: https://tools.ietf.org/html/rfc7946#section-3.1.6
[bbox_link]: https://tools.ietf.org/html/rfc7946#section-5
[coord_link]: https://tools.ietf.org/html/rfc7946#section-3.1.1
[multipoint_link]: https://tools.ietf.org/html/rfc7946#section-3.1.3
[multilinestring_link]: https://tools.ietf.org/html/rfc7946#section-3.1.4
[multipolygon_link]: https://tools.ietf.org/html/rfc7946#section-3.1.7
[linestring_link]: https://tools.ietf.org/html/rfc7946#section-3.1.4
