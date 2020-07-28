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

接收一个 type 为 [MultiPoint][multipoint_link]、[MultiLineString][multilinestring_link]、[MultiPolygon][multipolygon_link]的要素，返回 type 为 [Point][point_link]、[LineString][linestring_link]、[Polygon][polygon_link] 的要素集([FeatureCollection][featurecollection_link])

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
| orderCoords  | Boolean | true   | 外圈的线优先放置在坐标组的前面                     |

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

> 值得注意的是，lineToPolygon 方法返回要素，该方法返回要素集，且不能传入 options 的属性

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
