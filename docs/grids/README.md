# grids

## hexGrid

> npm install @turf/hex-grid

接收一个边界框和要生成的单元格的直径，计算并返回平顶六边形或三角形要素集

> 入参 options 的 triangles 为 true 的这个方法和 triangleGrid 方法的区别：这个方法是基于基于六边形内部切分三角形，另一个是矩形内部切分三角形

**参数**

| 入参     | 类型              | 描述                                           |
| -------- | ----------------- | ---------------------------------------------- |
| bbox     | [BBox][bbox_link] | 以 minX、minY、maxX、maxY 的顺序排列           |
| cellSide | Number            | 三角形或六边形的边长，与六边形的外接圆半径重合 |
| options  | Object            | 可配置项                                       |

**options**

| 属性       | 类型                                                                                      | 默认值       | 描述                                                                                                 |
| ---------- | ----------------------------------------------------------------------------------------- | ------------ | ---------------------------------------------------------------------------------------------------- |
| units      | String                                                                                    | "kilometers" | 单位，可选的有 degrees、radians、miles、kilometers                                                   |
| properties | Object                                                                                    | {}           | 出参 type 为 Polygon 的 GeoJSON 的 properties 属性                                                   |
| mask       | [Feature][feature_link]&lt;[Polygon][polygon_link]\|[MultiPolygon][multipolygon_link]&gt; |              | 如果传递了 Polygon 或 MultiPollygon，则仅在传入的 mask 面要素内创建，如果范围大于 bbox，则相当于不传 |
| triangles  | Boolean                                                                                   | false        | 是否返回三角形而不是六边形                                                                           |

**返回**

[FeatureCollection][featurecollection_link]&lt;[Polygon][polygon_link]&gt;

**范例**

```javascript
var bbox = [-96, 31, -84, 40];
var cellSide = 50;
var options = { units: "miles" };

var hexgrid = turf.hexGrid(bbox, cellSide, options); // 正六边形的要素集
var hexgrid2 = turf.hexGrid(bbox, cellSide, {
  ...options,
  triangles: true,
  mask: turf.polygon([
    [
      [-91.63, 37.48],
      [-87.75, 37.52],
      [-87.77, 34.29],
      [-92.04, 34.15],
      [-91.63, 37.48]
    ]
  ])
}); // 仅在mask的坐标范围内生成三角形要素集
```

## pointGrid

> npm install @turf/point-grid

接收边界框，返回指定距离排列的点要素集

**参数**

| 入参     | 类型              | 描述                                 |
| -------- | ----------------- | ------------------------------------ |
| bbox     | [BBox][bbox_link] | 以 minX、minY、maxX、maxY 的顺序排列 |
| cellSide | Number            | 点要素之间的距离                     |
| options  | Object            | 可配置项                             |

**options**

| 属性       | 类型                                                                                      | 默认值       | 描述                                                                                                 |
| ---------- | ----------------------------------------------------------------------------------------- | ------------ | ---------------------------------------------------------------------------------------------------- |
| units      | String                                                                                    | "kilometers" | 单位，可选的有 degrees、radians、miles、kilometers                                                   |
| mask       | [Feature][feature_link]&lt;[Polygon][polygon_link]\|[MultiPolygon][multipolygon_link]&gt; |              | 如果传递了 Polygon 或 MultiPollygon，则仅在传入的 mask 面要素内创建，如果范围大于 bbox，则相当于不传 |
| properties | Object                                                                                    | {}           | 出参 type 为 Point 的 GeoJSON 的 properties 属性                                                     |

**返回**

[FeatureCollection][featurecollection_link]&lt;[Point][point_link]&gt;

**范例**

```javascript
var extent = [-70.823364, -33.553984, -70.473175, -33.302986];
var cellSide = 3;
var options = { units: "miles" };

var grid = turf.pointGrid(extent, cellSide, options); // 返回点要素集，点与点之间距离三英里
```

## squareGrid

> npm install @turf/square-grid

接收边界框，返回指定边长长度的相邻排列的面要素集

**参数**

| 入参     | 类型              | 描述                                 |
| -------- | ----------------- | ------------------------------------ |
| bbox     | [BBox][bbox_link] | 以 minX、minY、maxX、maxY 的顺序排列 |
| cellSide | Number            | 面要素的边长                         |
| options  | Object            | 可配置项                             |

**options**

| 属性       | 类型                                                                                      | 默认值       | 描述                                                                                                 |
| ---------- | ----------------------------------------------------------------------------------------- | ------------ | ---------------------------------------------------------------------------------------------------- |
| units      | String                                                                                    | "kilometers" | 单位，可选的有 degrees、radians、miles、kilometers                                                   |
| mask       | [Feature][feature_link]&lt;[Polygon][polygon_link]\|[MultiPolygon][multipolygon_link]&gt; |              | 如果传递了 Polygon 或 MultiPollygon，则仅在传入的 mask 面要素内创建，如果范围大于 bbox，则相当于不传 |
| properties | Object                                                                                    | {}           | 出参 type 为 Point 的 GeoJSON 的 properties 属性                                                     |

**返回**

[FeatureCollection][featurecollection_link]&lt;[Polygon][polygon_link]&gt;

**范例**

```javascript
var bbox = [-95, 30, -85, 40];
var cellSide = 50;
var options = { units: "miles" };

var squareGrid = turf.squareGrid(bbox, cellSide, options);
```

## triangleGrid

> npm install @turf/triangle-grid

接收边界框，返回指定长度(直角边)的相邻排列的三角形面要素集

> 这个方法和 triangles 为 true 的 hexGrid 方法的区别：这个方法是基于矩形内部切分三角形，另一个是基于六边形内部切分

**参数**

| 入参     | 类型              | 描述                                 |
| -------- | ----------------- | ------------------------------------ |
| bbox     | [BBox][bbox_link] | 以 minX、minY、maxX、maxY 的顺序排列 |
| cellSide | Number            | 三角形面要素的直角边边长             |
| options  | Object            | 可配置项                             |

**options**

| 属性       | 类型                                                                                      | 默认值       | 描述                                                                                                 |
| ---------- | ----------------------------------------------------------------------------------------- | ------------ | ---------------------------------------------------------------------------------------------------- |
| units      | String                                                                                    | "kilometers" | 单位，可选的有 degrees、radians、miles、kilometers                                                   |
| mask       | [Feature][feature_link]&lt;[Polygon][polygon_link]\|[MultiPolygon][multipolygon_link]&gt; |              | 如果传递了 Polygon 或 MultiPollygon，则仅在传入的 mask 面要素内创建，如果范围大于 bbox，则相当于不传 |
| properties | Object                                                                                    | {}           | 出参 type 为 Point 的 GeoJSON 的 properties 属性                                                     |

**返回**

[FeatureCollection][featurecollection_link]&lt;[Polygon][polygon_link]&gt;

**范例**

```javascript
var bbox = [-95, 30, -85, 40];
var cellSide = 50;
var options = { units: "miles" };

var triangleGrid = turf.triangleGrid(bbox, cellSide, options);
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
