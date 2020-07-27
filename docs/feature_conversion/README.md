# feature conversion

## combine

> npm install @turf/combine

接收一个 type 为 [Point][point_link]、[LineString][linestring_link]、[Polygon][polygon_link] 的要素集([FeatureCollection][featurecollection_link])，组合成 type 为 [MultiPoint][multipoint_link]、[MultiLineString][multilinestring_link]、[MultiPolygon][multipolygon_link]的单一要素并返回

> 值得注意的是，当入参要素集存在不同类型的要素时，返回的要素不是单一要素，而是进行同要素归类。例如，入参两个 Point，两个 LineString，出参一个 MultiPoint，一个 MultiLineString

**参数**

| 入参 | 类型                                                                                                                           | 描述             |
| ---- | ------------------------------------------------------------------------------------------------------------------------------ | ---------------- |
| fc   | [FeatureCollection][featurecollection_link]&lt;[Point][point_link]\|[LineString][linestring_link]\|[Polygon][polygon_link]&gt; | 任意类型的要素集 |

**返回**

[FeatureCollection][featurecollection_link]&lt;[MultiPoint][multipoint_link]\|[MultiLineString][multilinestring_link]\|[MultiPolygon][multipolygon_link]&gt;

**范例**

```javascript
var fc = turf.featureCollection([
  turf.point([19.026432, 47.49134]),
  turf.point([19.074497, 47.509548])
]);

var combined = turf.combine(fc);
/*
{
  type: "FeatureCollection",
  features: [{
    type: "Feature",
    geometry: {
      type: "MultiPoint",
      coordinates: [
        [19.026432, 47.49134],
        [19.074497, 47.509548]
      ]
    }
  }]
}
*/
```

## explode

> npm install @turf/explode

接收任意要素([Feature][feature_link])或要素集([FeatureCollection][featurecollection_link])，返回所有要素的顶点

**参数**

| 入参    | 类型                    | 描述         |
| ------- | ----------------------- | ------------ |
| geojson | [GeoJSON][geojson_link] | 要素或要素集 |

**返回**

[FeatureCollection][featurecollection_link]&lt;[Point][point_link]&gt;

**范例**

```javascript
var polygon = turf.polygon([
  [
    [-81, 41],
    [-88, 36],
    [-84, 31],
    [-80, 33],
    [-77, 39],
    [-81, 41]
  ]
]);

var explode = turf.explode(polygon); // 返回六个顶点的要素集
```

## flatten

> npm install @turf/flatten

接收一个 type 为 [MultiPoint][multipoint_link]、[MultiLineString][multilinestring_link]、[MultiPolygon][multipolygon_link]的要素，返回 type 为 [Point][point_link]、[LineString][linestring_link]、[Polygon][polygon_link] 的要素集([FeatureCollection][featurecollection_link])的要素集

**参数**

| 入参    | 类型                    | 描述          |
| ------- | ----------------------- | ------------- |
| geojson | [GeoJSON][geojson_link] | Multi\*的要素 |

**返回**

[FeatureCollection][featurecollection_link] - 摊平的要素集

**范例**

```javascript
var multiGeometry = turf.multiPolygon([
  [
    [
      [102.0, 2.0],
      [103.0, 2.0],
      [103.0, 3.0],
      [102.0, 3.0],
      [102.0, 2.0]
    ]
  ],
  [
    [
      [100.0, 0.0],
      [101.0, 0.0],
      [101.0, 1.0],
      [100.0, 1.0],
      [100.0, 0.0]
    ],
    [
      [100.2, 0.2],
      [100.8, 0.2],
      [100.8, 0.8],
      [100.2, 0.8],
      [100.2, 0.2]
    ]
  ]
]); // type 为 MultiPolygon

var flatten = turf.flatten(multiGeometry); // type 为 Polygon 的多个要素
```

## lineToPolygon

> npm install @turf/line-to-polygon

接收 type 为 [LineString][linestring_link] 或 [MultiLineString][multilinestring_link] 的线要素，转换成 type 为 [Polygon][polygon_link] 或 [MultiPolygon][multipolygon_link] 的面要素

> 值得注意的是，入参只能接收线要素，否则报错

**参数**

| 入参    | 类型                                                                                                                      | 描述           |
| ------- | ------------------------------------------------------------------------------------------------------------------------- | -------------- |
| lines   | [FeatureCollection][featurecollection_link]&lt;[LineString][linestring_link]\|[MultiLineString][multilinestring_link]&gt; | 需转换的线要素 |
| options | Object                                                                                                                    | 可配置项       |

**options**

| 属性         | 类型    | 默认值 | 描述                                               |
| ------------ | ------- | ------ | -------------------------------------------------- |
| properties   | Object  | {}     | 出参 type 为 Polygon 的 GeoJSON 的 properties 属性 |
| autoComplete | Boolean | true   | 匹配首尾坐标来自动完成面的规则                     |
| orderCoords  | Boolean | true   | 外圈的线放置在坐标组的第一位置                     |

**返回**

[Feature][feature_link]&lt;[Polygon][polygon_link]\|[MultiPolygon][multipolygon_link]&gt;

**范例**

```javascript
var line = turf.lineString([
  [125, -30],
  [145, -30],
  [145, -20],
  [125, -20],
  [125, -30]
]);

var polygon = turf.lineToPolygon(line); // type 为 Polygon 的面要素
```

## polygonize

> npm install @turf/polygonize

接收一个 type 为 [LineString][linestring_link] 或 [MultiLineString][multilintstring_link] 的要素，转换成 type 为 [Polygon][polygon_link] 的面要素集合

> 值得注意的是，lineToPolygon 方法返回要素，该方法返回要素集，且不能传入 properties 属性

**参数**

| 入参    | 类型                                                                                                                      | 描述           |
| ------- | ------------------------------------------------------------------------------------------------------------------------- | -------------- |
| geojson | [FeatureCollection][featurecollection_link]&lt;[LineString][linestring_link]\|[MultiLineString][multilintstring_link]&gt; | 需转换的线要素 |

**返回**

[FeatureCollection][featurecollection_link]&lt;[Polygon][polygon_link]&gt;

**范例**

```javascript
var line = turf.lineString([
  [125, -30],
  [145, -30],
  [145, -20],
  [125, -20],
  [125, -30]
]);

var polygon = turf.polygonize(line); // type 为 Polygon 的面要素
```

## polygonToLine

> npm install @turf/polygon-to-line

接收 type 为 [Polygon][polygon_link] 或 [MultiPolygon][multipolygon_link] 的面要素，转换成 type 为 [LineString][linestring_link] 的线要素 或 [MultiLineString][multilinestring_link] 的要素集[FeatureCollection][featurecollection_link]

**参数**

| 入参    | 类型                                                                                                          | 描述         |
| ------- | ------------------------------------------------------------------------------------------------------------- | ------------ |
| polygon | [FeatureCollection][featurecollection_link]&lt;[Polygon][polygon_link]\|[MultiPolygon][multipolygon_link]&gt; | 需转换的要素 |
| options | Object                                                                                                        | 可配置项     |

**options**

| 属性       | 类型   | 默认值 | 描述                                               |
| ---------- | ------ | ------ | -------------------------------------------------- |
| properties | Object | {}     | 出参 type 为 Polygon 的 GeoJSON 的 properties 属性 |

**返回**

[FeatureCollection][featurecollection_link]&lt;[LineString][linestring_link]\|[MultiLineString][multilinestring_link]&gt;

**范例**

```javascript
var poly = turf.polygon([
  [
    [125, -30],
    [145, -30],
    [145, -20],
    [125, -20],
    [125, -30]
  ]
]);

var line = turf.polygonToLine(poly); // type 为 LineString 的要素
```

## kinks

> npm install @turf/kinks

接收一个 type 为 [LineString][linestring_link]、[MultiLineString][multilinestring_link]、[Polygon][polygon_link]、[MultiPolygon][multipolygon_link] 的要素，计算并返回所有自相交的点要素

**参数**

| 入参      | 类型                                                                                                                                                              | 描述   |
| --------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------ |
| featureIn | [Feature][feature_link]&lt;[LineString][linestring_link]\|[MultiLineString][multilinestring_link]\|[MultiPolygon][multipolygon_link]\|[Polygon][polygon_link]&gt; | 要素集 |

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

接收一个中心和半径，两个角度，计算出指定的圆弧并返回。

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

| 入参  | 类型                                                                                                                                                                                                                                      | 描述               |
| ----- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------ |
| line1 | [Geometry][geometry_link]\|[FeatureCollection][featurecollection_link]\|[Feature][feature_link]&lt;[LineString][linestring_link]\|[MultiLineString][multilinestring_link]\|[Polygon][polygon_link]\|[MultiPolygon][multipolygon_link]&gt; | 任意线要素或面要素 |
| line2 | [Geometry][geometry_link]\|[FeatureCollection][featurecollection_link]\|[Feature][feature_link]&lt;[LineString][linestring_link]\|[MultiLineString][multilinestring_link]\|[Polygon][polygon_link]\|[MultiPolygon][multipolygon_link]&gt; | 任意线要素或面要素 |

| options | Object | 可配置项 |

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
