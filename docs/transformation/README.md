# transformation

## bboxClip

> npm install @turf/bbox-clip

接收一个要素和 bbox(边界框)，裁剪超出 bbox 的范围并返回新的要素

> 类型为 Polygon 的要素可能会导致边缘退化

**参数**

| 入参    | 类型                                                                                                                                                              | 描述                                 |
| ------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------ |
| feature | [Feature][feature_link]&lt;[LineString][linestring_link]\|[MultiLineString][multilinestring_link]\|[Polygon][polygon_link]\|[MultiPolygon][multipolygon_link]&gt; | 需要与 bbox 裁剪的要素               |
| bbox    | [BBox][bbox_link]                                                                                                                                                 | 以 minX、minY、maxX、maxY 的顺序排列 |

**options**

| 属性   | 类型    | 默认值 | 描述                          |
| ------ | ------- | ------ | ----------------------------- |
| mutate | Boolean | false  | 入参的 GeoJSON 是否一起作修改 |

**返回**

[Feature][feature_link]&lt;[LineString][linestring_link]\|[MultiLineString][multilinestring_link]\|[Polygon][polygon_link]\|[MultiPolygon][multipolygon_link]&gt;

**范例**

```javascript
var bbox = [0, 0, 10, 10];
var poly = turf.polygon([
  [
    [2, 2],
    [8, 4],
    [12, 8],
    [3, 7],
    [2, 2]
  ]
]);

var clipped = turf.bboxClip(poly, bbox);
/*
{
  type: "Feature",
  geometry: {
    type: "Polygon",
    coordinates: [
      [
        [2, 2],
        [8, 4],
        [10,6],
        [10, 7.777777777777778],
        [3, 7],
        [2, 2]
      ]
    ]
  },
  properties: {}
}
*/
```

## bezierSpline

> npm install @turf/bezier-spline

接收一条线段，通过贝塞尔曲线算法返回新线段

**参数**

| 入参    | 类型                                                         | 描述                         |
| ------- | ------------------------------------------------------------ | ---------------------------- |
| line    | [Feature][feature_link]&lt;[LineString][linestring_link]&gt; | 类型为 LineString 的 GeoJSON |
| options | Object                                                       | 可配置项                     |

**options**

| 属性       | 类型   | 默认值 | 描述                                             |
| ---------- | ------ | ------ | ------------------------------------------------ |
| resolution | Number | 10000  | 点与点之间的时间(单位为毫秒)                     |
| sharpness  | Number | 0.85   | 线段的弯曲程度，介于 0 和 1 之间，数值越大越平滑 |

**返回**

[Feature][feature_link]&lt;[LineString][linestring_link]&gt;

**范例**

```javascript
var line = turf.lineString([
  [-76.091308, 18.427501],
  [-76.695556, 18.729501],
  [-76.552734, 19.40443],
  [-74.61914, 19.134789],
  [-73.652343, 20.07657],
  [-73.157958, 20.210656]
]);

var curved = turf.bezierSpline(line);
```

## buffer

> npm install @turf/buffer

接收任意要素，计算并返回该要素的缓冲区 GeoJSON

**参数**

| 入参    | 类型                                                                                            | 描述                       |
| ------- | ----------------------------------------------------------------------------------------------- | -------------------------- |
| geojson | [Feature][feature_link]\|[Geometry][geometry_link]\|[FeatureCollection][featurecollection_link] | 任意类型 的 GeoJSON        |
| radius  | Number                                                                                          | 绘制缓冲区的距离(允许负值) |
| options | Object                                                                                          | 可配置项                   |

**options**

| 属性  | 类型   | 默认值       | 描述                                               |
| ----- | ------ | ------------ | -------------------------------------------------- |
| units | String | "kilometers" | 单位，可选的有 degrees、radians、miles、kilometers |
| steps | Number | 64           | 步数                                               |

**返回**

[FeatureCollection][featurecollection_link]\|[Feature][feature_link]&lt;([Polygon][polygon_link]\|[MultiPolygon][multipolygon_link])&gt;\|undefined

**范例**

```javascript
var point = turf.point([-90.54863, 14.616599]);
var buffered = turf.buffer(point, 500, { units: "miles" });
```

## circle

> npm install @turf/circle

接收一个点要素并以它做圆心，给定单位的半径和相邻的精确度画圆

**参数**

| 入参    | 类型                                                      | 描述     |
| ------- | --------------------------------------------------------- | -------- |
| center  | [Feature][feature_link]&lt;[Point][point_link]&gt;\|Array | 圆心     |
| radius  | Number                                                    | 半径     |
| options | Object                                                    | 可配置项 |

**options**

| 属性       | 类型   | 默认值       | 描述                                               |
| ---------- | ------ | ------------ | -------------------------------------------------- |
| steps      | Number | 64           | 圆弧的平滑度，数值越高越平滑                       |
| units      | String | "kilometers" | 单位，可选的有 degrees、radians、miles、kilometers |
| properties | Object | {}           | 出参 type 为 Polygon 的 GeoJSON 的 properties 属性 |

**返回**

[Feature][feature_link]&lt;[Polygon][polygon_link]&gt;

**范例**

```javascript
var center = [-75.343, 39.984];
var radius = 5;
var options = { steps: 10, units: "kilometers", properties: { foo: "bar" } };
var circle = turf.circle(center, radius, options);
/* steps 为 10，所以更像是一个十边形
{
  type: "Feature",
  geometry: {
    coordinates: [
      [
        [-75.343, 40.02896601818623],
        [-75.37751268579942, 40.020373156514275],
        [-75.39882430740063, 39.99788187546377],
        [-75.39880160476812, 39.97009135591055],
        [-75.37747595213794, 39.94761661877482],
        [-75.343, 39.93903398181377],
        [-75.30852404786205, 39.94761661877482],
        [-75.28719839523187, 39.97009135591055],
        [-75.28717569259938, 39.99788187546377],
        [-75.30848731420058, 40.020373156514275],
        [-75.343, 40.02896601818623]
      ]
    ],
    type: "Polygon"
  },
  properties: { foo: "bar" }
}
*/
```

## clone

> npm install @turf/clone

接收任意要素([Feature][feature_link])或多要素([FeatureCollection][featurecollection_link])，返回该要素的深拷贝对象，包括可能的 Foreign Members(即拷贝不是 GeoJSON 必须属性的属性)。且比常见的 JSON.parse + JSON.stringify 组合方法快约 3-5 倍

**参数**

| 入参    | 类型                    | 描述             |
| ------- | ----------------------- | ---------------- |
| GeoJSON | [GeoJSON][geojson_link] | 需要深拷贝的要素 |

**返回**

[GeoJSON][geojson_link]

**范例**

```javascript
var line = turf.lineString(
  [
    [-74, 40],
    [-78, 42],
    [-82, 35]
  ],
  { color: "red" }
);

var lineCloned = turf.clone(line);

line.randomAttr = "Turf";
var lineCloned2 = turf.clone(line);
/*
{
  ...line,
  randomAttr: "Turf" // 多了个(Foreign Members)属性
}
*/
```

## concave

> npm install @turf/concave

接收若干点要素，返回以接收的点要素为顶点的 type 为 Polygon 或 MultiPolygon 的凹型要素

> 值得注意的是，少于等于两个点要素都会返回 null，数量和 maxEdge 都会影响

**参数**

| 入参    | 类型                                                                   | 描述       |
| ------- | ---------------------------------------------------------------------- | ---------- |
| points  | [FeatureCollection][featurecollection_link]&lt;[Point][point_link]&gt; | 若干点要素 |
| options | Object                                                                 | 可配置项   |

**options**

| 属性    | 类型   | 默认值       | 描述                                               |
| ------- | ------ | ------------ | -------------------------------------------------- |
| maxEdge | Number | Infinity     | 以 units 为单位的多边形边缘的长度                  |
| units   | String | "kilometers" | 单位，可选的有 degrees、radians、miles、kilometers |

**返回**

[Feature][feature_link]&lt;([Polygon][polygon_link]\|[MultiPolygon][multipolygon_link])&gt;\| null - 凹型多边形，若无法计算则返回 null

**范例**

```javascript
var points = turf.featureCollection([
  turf.point([-63.601226, 44.642643]),
  turf.point([-63.591442, 44.651436]),
  turf.point([-63.580799, 44.648749]),
  turf.point([-63.573589, 44.641788]),
  turf.point([-63.587665, 44.64533]),
  turf.point([-63.595218, 44.64765])
]);
var options = { units: "miles", maxEdge: 1 };

var hull = turf.concave(points, options);
/*
{
  type: "Feature",
  geometry: {
    type: "Polygon",
    coordinates: [
      [
        [-63.591442, 44.651436],
        [-63.580799, 44.648749],
        [-63.573589, 44.641788],
        [-63.587665, 44.64533],
        [-63.601226, 44.642643],
        [-63.591442, 44.651436]
      ]
    ]
  },
  properties: {}
}
*/
```

## convex

> npm install @turf/convex

接收要素([Feature][feature_link])或多要素([FeatureCollection][featurecollection_link])，返回以接收的要素为顶点的 type 为 Polygon 的凸型要素

**参数**

| 入参    | 类型                    | 描述           |
| ------- | ----------------------- | -------------- |
| geojson | [GeoJSON][geojson_link] | 要素或要素集合 |
| options | Object                  | 可配置项       |

**options**

| 属性      | 类型   | 默认值   | 描述                                        |
| --------- | ------ | -------- | ------------------------------------------- |
| concavity | Number | Infinity | 1 趋向为扁平型要素，Infinity 趋向为凸型要素 |

**返回**

[Feature][feature_link]&lt;[Polygon][polygon_link]&gt;

**范例**

```javascript
var points = turf.featureCollection([
  turf.point([10.195312, 43.755225]),
  turf.point([10.404052, 43.8424511]),
  turf.point([10.579833, 43.659924]),
  turf.point([10.360107, 43.516688]),
  turf.point([10.14038, 43.588348]),
  turf.point([10.195312, 43.755225])
]);

var hull = turf.convex(points);
/*
{
  type: "Feature",
  geometry: {
    coordinates: [
      [
        [10.360107, 43.516688],
        [10.14038, 43.588348],
        [10.195312, 43.755225],
        [10.404052, 43.8424511],
        [10.579833, 43.659924],
        [10.360107, 43.516688]
      ]
    ],
    type: "Polygon"
  },
  properties: {}
}
*/
```

## difference

> npm install @turf/difference

接收两个 type 为 Polygon 的多边形要素，返回第一个多边形裁剪第二个多边形后得到的要素

> 值得注意的是，裁剪得到的要素的 properties 与第一个要素的相同

**参数**

| 入参     | 类型                                                                                      | 描述         |
| -------- | ----------------------------------------------------------------------------------------- | ------------ |
| polygon1 | [Feature][feature_link]&lt;[Polygon][polygon_link]\|[MultiPolygon][multipolygon_link]&gt; | 要素         |
| polygon2 | [Feature][feature_link]&lt;[Polygon][polygon_link]\|[MultiPolygon][multipolygon_link]&gt; | 被裁剪的要素 |

**返回**

[Feature][feature_link]&lt;[Polygon][polygon_link]\|[MultiPolygon][multipolygon_link]&gt;\| null - 两个多边形没有交集则返回 null

**范例**

```javascript
var polygon1 = turf.polygon(
  [
    [
      [128, -26],
      [141, -26],
      [141, -21],
      [128, -21],
      [128, -26]
    ]
  ],
  {
    fill: "#F00",
    "fill-opacity": 0.1
  }
);
var polygon2 = turf.polygon(
  [
    [
      [126, -28],
      [140, -28],
      [140, -20],
      [126, -20],
      [126, -28]
    ]
  ],
  {
    fill: "#00F",
    "fill-opacity": 0.1
  }
);

var difference = turf.difference(polygon1, polygon2);
/*
{
  type: "Feature",
  geometry: {
    type: "polygon",
    coordinates: [
      [
        [140, -21],
        [141, -21],
        [141, -26],
        [140, -26],
        [140, -21]
      ]
    ]
  },
  properties: {
    "fill": "#F00", // 第一个多边形的属性
    "fill-opacity": 0.1
  }
}
*/
```

## dissolve

> npm install @turf/dissolve

接收一个多边形的要素集合[FeatureCollection][featurecollection_link]，通过 properties 的某个属性进行分解，但是不支持 type 为 MultiPolygon 的多边形

> 值得注意的是，不传属性的时候返回原来的要素集合，不会进行分解

**参数**

| 入参              | 类型                                                                       | 描述                 |
| ----------------- | -------------------------------------------------------------------------- | -------------------- |
| featureCollection | [FeatureCollection][featurecollection_link]&lt;[Polygon][polygon_link]&gt; | 需要被分解的要素集合 |
| options           | Object                                                                     | 可配置项             |

**options**

| 属性         | 类型   | 默认值 | 描述                      |
| ------------ | ------ | ------ | ------------------------- |
| propertyName | String |        | properties 对象的某个属性 |

**返回**

[FeatureCollection][featurecollection_link]&lt;[Polygon][polygon_link]&gt;

**范例**

```javascript
var features = turf.featureCollection([
  turf.polygon(
    [
      [
        [0, 0],
        [0, 1],
        [1, 1],
        [1, 0],
        [0, 0]
      ]
    ],
    { combine: "yes" }
  ),
  turf.polygon(
    [
      [
        [0, -1],
        [0, 0],
        [1, 0],
        [1, -1],
        [0, -1]
      ]
    ],
    { combine: "yes" }
  ),
  turf.polygon(
    [
      [
        [1, -1],
        [1, 0],
        [2, 0],
        [2, -1],
        [1, -1]
      ]
    ],
    { combine: "no" }
  )
]);

var dissolved = turf.dissolve(features, { propertyName: "combine" }); // 返回两个面要素
```

[geometry_link]: https://tools.ietf.org/html/rfc7946#section-3.1
[geojson_link]: https://tools.ietf.org/html/rfc7946#section-3
[feature_link]: https://tools.ietf.org/html/rfc7946#section-3.2
[featurecollection_link]: https://tools.ietf.org/html/rfc7946#section-3.3
[point_link]: https://tools.ietf.org/html/rfc7946#section-3.1.2
[polygon_link]: https://tools.ietf.org/html/rfc7946#section-3.1.6
[bbox_link]: https://tools.ietf.org/html/rfc7946#section-5
[coord_link]: https://tools.ietf.org/html/rfc7946#section-3.1.1
[multilinestring_link]: https://tools.ietf.org/html/rfc7946#section-3.1.4
[multipolygon_link]: https://tools.ietf.org/html/rfc7946#section-3.1.7
[linestring_link]: https://tools.ietf.org/html/rfc7946#section-3.1.4
