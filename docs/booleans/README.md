# booleans

## booleanClockwise

> npm install @turf/boolean-clockwise

接收一个 type 为 LineString 的线要素，判断该要素是否顺时针走向

**参数**

| 入参 | 类型                                                         | 描述   |
| ---- | ------------------------------------------------------------ | ------ |
| line | [Feature][feature_link]&lt;[LineString][linestring_link]&gt; | 线要素 |

**返回**

Boolean - true/false

**范例**

```javascript
var clockwiseRing = turf.lineString([
  [0, 0],
  [1, 1],
  [1, 0],
  [0, 0]
]);
var counterClockwiseRing = turf.lineString([
  [0, 0],
  [1, 0],
  [1, 1],
  [0, 0]
]);

turf.booleanClockwise(clockwiseRing);
//=true
turf.booleanClockwise(counterClockwiseRing);
//=false
```

## booleanContains

> npm install @turf/boolean-contains

接收两个任意类型的要素，判断第二个要素是否包含于第一个要素，即真子集。返回的值与@turf/boolean-within 是完全相反的结果

**参数**

| 入参     | 类型                                               | 描述         |
| -------- | -------------------------------------------------- | ------------ |
| feature1 | [Geometry][geometry_link]\|[Feature][feature_link] | 外圈 GeoJSON |
| feature2 | [Geometry][geometry_link]\|[Feature][feature_link] | 内圈 GeoJSON |

**返回**

Boolean - true/false

**范例**

```javascript
var line = turf.lineString([
  [1, 1],
  [1, 2],
  [1, 3],
  [1, 4]
]);
var point = turf.point([1, 2]);

turf.booleanContains(line, point);
//=true
```

## booleanCrosses

> npm install @turf/boolean-crosses

接收两个任意类型的要素，判断它们是否有相交点

**参数**

| 入参     | 类型                                               | 描述    |
| -------- | -------------------------------------------------- | ------- |
| feature1 | [Geometry][geometry_link]\|[Feature][feature_link] | GeoJSON |
| feature2 | [Geometry][geometry_link]\|[Feature][feature_link] | GeoJSON |

**返回**

Boolean - true/false

**范例**

```javascript
var line1 = turf.lineString([
  [-2, 2],
  [4, 2]
]);
var line2 = turf.lineString([
  [1, 1],
  [1, 2],
  [1, 3],
  [1, 4]
]);

var cross = turf.booleanCrosses(line1, line2);
//=true
```

## booleanDisjoint

> npm install @turf/boolean-disjoint

接收两个任意类型的要素，判断它们是否不相交，不相交返回 true

**参数**

| 入参     | 类型                                               | 描述    |
| -------- | -------------------------------------------------- | ------- |
| feature1 | [Geometry][geometry_link]\|[Feature][feature_link] | GeoJSON |
| feature2 | [Geometry][geometry_link]\|[Feature][feature_link] | GeoJSON |

**返回**

Boolean - true/false

**范例**

```javascript
var point = turf.point([2, 2]);
var line = turf.lineString([
  [1, 1],
  [1, 2],
  [1, 3],
  [1, 4]
]);

turf.booleanDisjoint(line, point);
//=true
```

## booleanEqual

> npm install @turf/boolean-equal

接收两个任意类型的要素，判断它们的坐标是否相等

> 值得注意的是，坐标的顺序没有影响，只要全部坐标对的对应相等，就认为是相等的坐标

**参数**

| 入参     | 类型                                               | 描述    |
| -------- | -------------------------------------------------- | ------- |
| feature1 | [Geometry][geometry_link]\|[Feature][feature_link] | GeoJSON |
| feature2 | [Geometry][geometry_link]\|[Feature][feature_link] | GeoJSON |

**返回**

Boolean - true/false

**范例**

```javascript
var pt1 = turf.point([0, 0]);
var pt2 = turf.point([0, 0]);
var pt3 = turf.point([1, 1]);

turf.booleanEqual(pt1, pt2);
//= true
turf.booleanEqual(pt2, pt3);
//= false

var pt1 = turf.polygon([
  [
    [114.11207138646921, 40.065237806396226],
    [116.72681748022632, 37.74008299506812],
    [117.2981065427258, 40.28349411053313],
    [114.11207138646921, 40.065237806396226]
  ]
]);
var pt2 = turf.polygon([
  [
    [117.2981065427258, 40.28349411053313],
    [116.72681748022632, 37.74008299506812],
    [114.11207138646921, 40.065237806396226],
    [117.2981065427258, 40.28349411053313]
  ]
]);

var boolean = turf.booleanEqual(pt1, pt2); // true，坐标顺序不影响
```

## booleanOverlap

> npm install @turf/boolean-overlap

接收两个任意类型的要素，判断它们是否有交集重叠

> 值得注意的是，判断的要素必须是同类型的：面要素和面要素、线和线、MultiPoint 和 MultiPoint、MultiLineString 和 MultiLineString、MultiPolygon 和 MultiPolygon

**参数**

| 入参     | 类型                                                                                                                                                                                         | 描述    |
| -------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| feature1 | [Geometry][geometry_link]\|[Feature][feature_link]&lt;[LineString][linestring_link]\|[MultiLineString][multilinestring_link]\|[Polygon][polygon_link]\|[MultiPolygon][multipolygon_link]&gt; | GeoJSON |
| feature2 | [Geometry][geometry_link]\|[Feature][feature_link]&lt;[LineString][linestring_link]\|[MultiLineString][multilinestring_link]\|[Polygon][polygon_link]\|[MultiPolygon][multipolygon_link]&gt; | GeoJSON |

**返回**

Boolean - true/false

**范例**

```javascript
var poly1 = turf.polygon([
  [
    [0, 0],
    [0, 5],
    [5, 5],
    [5, 0],
    [0, 0]
  ]
]);
var poly2 = turf.polygon([
  [
    [1, 1],
    [1, 6],
    [6, 6],
    [6, 1],
    [1, 1]
  ]
]);
var poly3 = turf.polygon([
  [
    [10, 10],
    [10, 15],
    [15, 15],
    [15, 10],
    [10, 10]
  ]
]);

turf.booleanOverlap(poly1, poly2);
//=true
turf.booleanOverlap(poly2, poly3);
//=false
```

## booleanParallel

> npm install @turf/boolean-parallel

接收两个线要素，判断它们是否平行

**参数**

| 入参  | 类型                                                                                    | 描述   |
| ----- | --------------------------------------------------------------------------------------- | ------ |
| line1 | [Geometry][geometry_link]\|[Feature][feature_link]&lt;[LineString][linestring_link]&gt; | 线要素 |
| line2 | [Geometry][geometry_link]\|[Feature][feature_link]&lt;[LineString][linestring_link]&gt; | 线要素 |

**返回**

Boolean - true/false

**范例**

```javascript
var line1 = turf.lineString([
  [0, 0],
  [0, 1]
]);
var line2 = turf.lineString([
  [1, 0],
  [1, 1]
]);

turf.booleanParallel(line1, line2);
//=true
```

## booleanPointInPolygon

> npm install @turf/boolean-point-in-polygon

接收一个点要素和一个面要素，判断点要素是否在面要素内

**参数**

| 入参    | 类型                                                                                      | 描述     |
| ------- | ----------------------------------------------------------------------------------------- | -------- |
| point   | [Coord][coord_link]                                                                       | 点要素   |
| polygon | [Feature][feature_link]&lt;[Polygon][polygon_link]\|[MultiPolygon][multipolygon_link]&gt; | 面要素   |
| options | Object                                                                                    | 可配置项 |

**options**

| 属性           | 类型    | 默认值 | 描述                                                            |
| -------------- | ------- | ------ | --------------------------------------------------------------- |
| ignoreBoundary | Boolean | false  | 是否忽略面要素的边界，false 则点在边界上也算在边界内，true 反之 |

**返回**

Boolean - true/false

**范例**

```javascript
var pt = turf.point([-72, 41]);
var poly = turf.polygon([
  [
    [-81, 41],
    [-81, 47],
    [-72, 47],
    [-72, 41],
    [-81, 41]
  ]
]);

var boolean = turf.booleanPointInPolygon(pt, poly, {
  ignoreBoundary: false
});
//= true

var boolean2 = turf.booleanPointInPolygon(pt, poly, {
  ignoreBoundary: true
});
//= false 忽略边界，点不在面要素内
```

## booleanPointOnLine

> npm install @turf/boolean-point-on-line

接收一个点要素和一个线要素，判断点要素是否在线要素上

**参数**

| 入参    | 类型                                                         | 描述     |
| ------- | ------------------------------------------------------------ | -------- |
| point   | [Coord][coord_link]                                          | 点要素   |
| polygon | [Feature][feature_link]&lt;[LineString][linestring_link]&gt; | 线要素   |
| options | Object                                                       | 可配置项 |

**options**

| 属性              | 类型    | 默认值 | 描述                                                                |
| ----------------- | ------- | ------ | ------------------------------------------------------------------- |
| ignoreEndVertices | Boolean | false  | 是否忽略线要素的起点和终点，false 则点在两点上也算在线上，true 反之 |

**返回**

Boolean - true/false

**范例**

```javascript
var pt = turf.point([0, 0]);
var line = turf.lineString([
  [-1, -1],
  [1, 1],
  [1.5, 2.2]
]);
var isPointOnLine = turf.booleanPointOnLine(pt, line);
//=true

var pt = turf.point([-1, -1]);
var line = turf.lineString([
  [-1, -1],
  [1, 1],
  [1.5, 2.2]
]);
var isPointOnLine = turf.booleanPointOnLine(pt, line, {
  ignoreEndVertices: true
});
//=false
```

## booleanWithin

> npm install @turf/boolean-within

接收两个任意类型的要素，判断第一个要素是否包含于第二个要素，即真子集。返回的值与@turf/boolean-contains 是完全相反的结果

**参数**

| 入参     | 类型                                               | 描述         |
| -------- | -------------------------------------------------- | ------------ |
| feature1 | [Geometry][geometry_link]\|[Feature][feature_link] | 内圈 GeoJSON |
| feature2 | [Geometry][geometry_link]\|[Feature][feature_link] | 外圈 GeoJSON |

**返回**

Boolean - true/false

**范例**

```javascript
var line = turf.lineString([
  [1, 1],
  [1, 2],
  [1, 3],
  [1, 4]
]);
var point = turf.point([1, 2]);

turf.booleanWithin(point, line);
//=true
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
