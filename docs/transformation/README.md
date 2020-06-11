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
