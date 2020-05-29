## along

获取入参的线段上指定距离的点。

> 值得注意的是，距离是从起点开始计算的，如果距离超过线段的长度，会返回终点的 GeoJSON

**参数**

| 入参     | 类型                                               | 描述     |
| -------- | -------------------------------------------------- | -------- |
| line     | [Feature][feature_link]&lt;[Point][point_link]&gt; | 线段     |
| distance | Number                                             | 沿线距离 |
| options  | Object                                             | 可配置项 |

**options**

| 属性  | 类型   | 默认值       | 描述                                                       |
| ----- | ------ | ------------ | ---------------------------------------------------------- |
| units | String | "kilometers" | 沿线距离的单位，可以是 degrees、radians、miles、kilometers |

**返回**

[Feature][feature_link]&lt;[Point][point_link]&gt;

**范例**

```javascript
var line = turf.lineString([
  [-83, 30],
  [-84, 36],
  [-78, 41]
]);
var options = { units: "miles" };

var along = turf.along(line, 200, options);
/*
{
  type: "Feature",
  geometry: {
    coordinates: [-83.4608648621918, 32.8678095806294],
    type: "Point"
  },
  properties: {}
}
*/
```

## area

获取入参的要素或多要素的面积

> 值得注意的是，该方法应该是传入 polygon 类型的 GeoJSON，如点和线段均为 0

**参数**

| 入参    | 类型                    | 描述       |
| ------- | ----------------------- | ---------- |
| geojson | [GeoJSON][geojson_link] | 一个或多个 |

**返回**

Number - 面积大小

**范例**

```javascript
var polygon = turf.polygon([
  [
    [125, -15],
    [113, -22],
    [154, -27],
    [144, -15],
    [125, -15]
  ]
]);

var area = turf.area(polygon); // 3339946239196.927

// 多要素
var area = turf.area({
  type: "FeatureCollection",
  features: [
    turf.polygon([
      [
        [125, -15],
        [113, -22],
        [154, -27],
        [144, -15],
        [125, -15]
      ]
    ]),
    turf.polygon([
      [
        [225, -15],
        [213, -22],
        [254, -27],
        [244, -15],
        [225, -15]
      ]
    ])
  ]
}); // 6679892478393.854
```

## bbox

获取入参要素的边界框

**参数**

| 入参    | 类型                    | 描述                   |
| ------- | ----------------------- | ---------------------- |
| geojson | [GeoJSON][geojson_link] | 一个任意类型的 GeoJSON |

**返回**

[BBox][bbox_link] - 以 minX、minY、maxX、maxY 的顺序排列

**范例**

```javascript
var line = turf.lineString([
  [-74, 40],
  [-78, 42],
  [-82, 35]
]);
var bbox = turf.bbox(line); // [-82, 35, -74, 42]
var bboxPolygon = turf.bboxPolygon(bbox);
```

## bboxPolygon

获取入参 bbox 的等效 GeoJSON

**参数**

| 入参    | 类型              | 描述                                 |
| ------- | ----------------- | ------------------------------------ |
| bbox    | [BBox][bbox_link] | 以 minX、minY、maxX、maxY 的顺序排列 |
| options | Object            | 可配置项                             |

**options**

| 属性       | 类型             | 默认值 | 描述                                |
| ---------- | ---------------- | ------ | ----------------------------------- |
| properties | Properties       | {}     | 出参 GeoJSON 的 properties 属性对象 |
| id         | String \| Number | {}     | 出参 GeoJSON 的 id                  |

**返回**

[Feature][feature_link]&lt;[Polygon][polygon_link]&gt; - 以 minX、minY、maxX、maxY 的顺序排列

**范例**

```javascript
var bbox = [0, 0, 10, 10];

var poly = turf.bboxPolygon(bbox);
/*
{
  type: "Feature",
  geometry: {
    type: "Polygon",
    coordinates: [
      [0, 0], [10, 0], [10, 10], [0, 10], [0, 0]
    ]
  },
  properties: {}
}
*/
```

[geojson_link]: https://tools.ietf.org/html/rfc7946#section-3
[feature_link]: https://tools.ietf.org/html/rfc7946#section-3.2
[point_link]: https://tools.ietf.org/html/rfc7946#section-3.1.2
[polygon_link]: https://tools.ietf.org/html/rfc7946#section-3.1.6
[bbox_link]: https://tools.ietf.org/html/rfc7946#section-5
