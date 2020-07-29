# interpolation

## interpolate

> npm install @turf/interpolate

接收一组点要素集，通过传入的 properties 参数使用反距离加权法(IDW)估算要素集并返回

**参数**

| 入参     | 类型                                                                   | 描述                 |
| -------- | ---------------------------------------------------------------------- | -------------------- |
| points   | [FeatureCollection][featurecollection_link]&lt;[Point][point_link]&gt; | 传入的要素集         |
| cellSize | Number                                                                 | 每个网格点之间的距离 |
| options  | Object                                                                 | 可配置项             |

**options**

| 属性     | 类型   | 默认值       | 描述                                                                                           |
| -------- | ------ | ------------ | ---------------------------------------------------------------------------------------------- |
| gridType | String | "square"     | 出参要素集的要素类型，可选值有："square"(矩形)、"point"(点)、"hex"(六边形)、"triangle"(三角形) |
| property | String | "elevation"  | 参与计算的属性                                                                                 |
| units    | String | "kilometers" | 单位，可选的有 degrees、radians、miles、kilometers                                             |
| weight   | Number | 1            | 调节距离衰减权重的指数                                                                         |

**返回**

[FeatureCollection][featurecollection_link]&lt;[Point][point_link]\|[Polygon][polygon_link]&gt;

**范例**

```javascript
var points = turf.randomPoint(30, { bbox: [50, 30, 70, 50] });

// add a random property to each point
turf.featureEach(points, function (point) {
  point.properties.solRad = Math.random() * 50;
});
var options = { gridType: "points", property: "solRad", units: "miles" };
var grid = turf.interpolate(points, 100, options);
```

## isobands

> npm install @turf/isobands

接收点要素集，根据参与分级的属性和分级的数组计算出等值面并返回

> 值得注意的是，该方法可能还未实现

**参数**

| 入参      | 类型                                                                   | 描述         |
| --------- | ---------------------------------------------------------------------- | ------------ |
| pointGrid | [FeatureCollection][featurecollection_link]&lt;[Point][point_link]&gt; | 传入的要素集 |
| breaks    | Array                                                                  | 分级的数组   |
| options   | Object                                                                 | 可配置项     |

**options**

| 属性             | 类型   | 默认值      | 描述           |
| ---------------- | ------ | ----------- | -------------- |
| zProperty        | String | "elevation" | 参与分级的属性 |
| commonProperties | Object | {}          | 每个要素的属性 |
| breaksProperties | Array  | []          |                |

**返回**

[Feature][feature_link]&lt;[LineString][linestring_link]&gt;

## isolines

> npm install @turf/isolines

接收点要素集，根据参与分级的属性和分级的数组计算出等值线并返回

**参数**

| 入参    | 类型                                                                   | 描述         |
| ------- | ---------------------------------------------------------------------- | ------------ |
| points  | [FeatureCollection][featurecollection_link]&lt;[Point][point_link]&gt; | 传入的要素集 |
| breaks  | Array                                                                  | 分级的数组   |
| options | Object                                                                 | 可配置项     |

**options**

| 属性             | 类型   | 默认值      | 描述           |
| ---------------- | ------ | ----------- | -------------- |
| zProperty        | String | "elevation" | 参与分级的属性 |
| commonProperties | Object | {}          | 每个要素的属性 |
| breaksProperties | Array  | []          |                |

**返回**

[FeatureCollection][featurecollection_link]&lt;[MultiLineString][multilinestring_link]&gt;

**范例**

```javascript
// create a grid of points with random z-values in their properties
var extent = [0, 30, 20, 50];
var cellWidth = 100;
var pointGrid = turf.pointGrid(extent, cellWidth, { units: "miles" });

for (var i = 0; i < pointGrid.features.length; i++) {
  pointGrid.features[i].properties.temperature = Math.random() * 10;
}
var breaks = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]; // 生成10个type为MutiLineString的要素，范围分别是 0-1、1-2 以此类推

var lines = turf.isolines(pointGrid, breaks, { zProperty: "temperature" });
```

## planepoint

> npm install @turf/planepoint

接收一个 type 为 [Polygon][polygon_link]三角形平面要素，并在该要素内获取一个点要素，计算并返回该点的 z 值。面要素应该包含`a`,`b`,`c`三个属性值

> 值得注意的是，z 值即[标准分数](https://baike.baidu.com/item/%E6%A0%87%E5%87%86%E5%88%86%E6%95%B0/1694868?fr=aladdin)

**参数**

| 入参     | 类型                                                   | 描述                |
| -------- | ------------------------------------------------------ | ------------------- |
| point    | [Coord][coord_link]                                    | 需要被计算 z 值的点 |
| triangle | [Feature][feature_link]&lt;[Polygon][polygon_link]&gt; | 三角形平面要素      |

**返回**

Number - z 值数值

**范例**

```javascript
var point = turf.point([-75.3221, 39.529]);
// "a", "b", and "c" values represent the values of the coordinates in order.
var triangle = turf.polygon(
  [
    [
      [-75.1221, 39.57],
      [-75.58, 39.18],
      [-75.97, 39.86],
      [-75.1221, 39.57]
    ]
  ],
  {
    a: 11,
    b: 122,
    c: 44
  }
);

var zValue = turf.planepoint(point, triangle); // 37.43364475092331
point.properties.zValue = zValue;
```

## tin

> npm install @turf/tin

接收一组点要素集合，创建该集合的 TIN(Triangulated Irregular Network，[不规则三角形格网](https://baike.baidu.com/item/%E4%B8%8D%E8%A7%84%E5%88%99%E4%B8%89%E8%A7%92%E5%BD%A2%E6%A0%BC%E7%BD%91/5246408))并返回

**参数**

| 入参   | 类型                                                                   | 描述                                                |
| ------ | ---------------------------------------------------------------------- | --------------------------------------------------- |
| points | [FeatureCollection][featurecollection_link]&lt;[Point][point_link]&gt; | 三角形平面要素                                      |
| z      | String                                                                 | 可选，如果未给定则不会向出参的面要素添加 properties |

**返回**

[FeatureCollection][featurecollection_link]&lt;[Polygon][polygon_link]&gt;

**范例**

```javascript
// generate some random point data
var points = turf.randomPoint(30, { bbox: [50, 30, 70, 50] });

// add a random property to each point between 0 and 9
for (var i = 0; i < points.features.length; i++) {
  points.features[i].properties.z = ~~(Math.random() * 9);
}
var tin = turf.tin(points, "z");
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
