# HELPER

## featureCollection

> npm install @turf/helpers  
> 值得注意的是，该目录下的方法均是 helpers 模块的一部分

接收一个或多个要素([Feature][feature_link])，创建他们的要素集([FeatureCollection][featurecollection_link])并返回

**参数**

| 入参     | 类型                                 | 描述             |
| -------- | ------------------------------------ | ---------------- |
| features | Array&lt;[Feature][feature_link]&gt; | 要组成的要素数组 |
| options  | Object                               | 可配置项         |

**options**

| 属性 | 类型           | 默认值 | 描述   |
| ---- | -------------- | ------ | ------ |
| bbox | Array          |        | 边界框 |
| id   | String\|Number |        | 标识符 |

**返回**

[FeatureCollection][featurecollection_link]

**范例**

```javascript
var locationA = turf.point([-75.343, 39.984], { name: "Location A" });
var locationB = turf.point([-75.833, 39.284], { name: "Location B" });
var locationC = turf.point([-75.534, 39.123], { name: "Location C" });

var collection = turf.featureCollection([locationA, locationB, locationC], {
  bbox: [1, 2, 3, 4],
  id: "id"
});
/*
{
  type: "FeatureCollection",
  features: [{...},{...},{...}],
  bbox: [1, 2, 3, 4] // 同级
  id: "id" // 同级
}
*/
```

## feature

> npm install @turf/helpers

接收[Geometry][geometry_link]，创建一个 GeoJSON 要素[Feature][feature_link]

**参数**

| 入参       | 类型                      | 描述                            |
| ---------- | ------------------------- | ------------------------------- |
| geometry   | [Geometry][geometry_link] | 入参 Geometry                   |
| properties | Object                    | 出参 GeoJSON 的 properties 属性 |
| options    | Object                    | 可配置项                        |

**options**

| 属性 | 类型           | 默认值 | 描述   |
| ---- | -------------- | ------ | ------ |
| bbox | Array          |        | 边界框 |
| id   | String\|Number |        | 标识符 |

**返回**

[Feature][feature_link]

**范例**

```javascript
var geometry = {
  type: "Point",
  coordinates: [110, 50]
};

var feature = turf.feature(
  geometry,
  {
    id: "inner"
  },
  {
    id: "outter"
  }
);
/*
{
  type: "Feature",
  geometry: {
    type: "Point",
    coordinates: [110, 50]
  },
  properties: {
    id: "inner" // 在properties里
  },
  id: "outter"
}
*/
```

## geometryCollection

> npm install @turf/helpers

接收任意的[Geometry][geometry_link]数组，创建 type 为[GeometryCollection][geometrycollection_link]的集合

**参数**

| 入参       | 类型                                   | 描述                   |
| ---------- | -------------------------------------- | ---------------------- |
| geometries | Array&lt;[Geometry][geometry_link]&gt; | 入参 Geometry 的数组   |
| properties | Object                                 | 出参的 properties 属性 |
| options    | Object                                 | 可配置项               |

**options**

| 属性 | 类型           | 默认值 | 描述   |
| ---- | -------------- | ------ | ------ |
| bbox | Array          |        | 边界框 |
| id   | String\|Number |        | 标识符 |

**返回**

[Feature][feature_link]&lt;[GeometryCollection][geometrycollection_link]&gt;

**范例**

```javascript
var pt = {
  type: "Point",
  coordinates: [100, 0]
};
var line = {
  type: "LineString",
  coordinates: [
    [101, 0],
    [102, 1]
  ]
};
var collection = turf.geometryCollection(
  [pt, line],
  {
    id: "inner"
  },
  {
    id: "outter"
  }
);
/*
{
  type: "Feature",
  geometry: {
    type: "GeometryCollection",
    geometries: [
      {
        type: "Point",
        coordinates: [100, 0]
      },
      {
        type: "LineString",
        coordinates: [
          [101, 0],
          [102, 1]
        ]
      }
    ]
  },
  properties: {
    id: 'inner',
  },
  id: "outter"
}
*/
```

## lineString

> npm install @turf/helpers

接收数组坐标，创建 type 为[LineString][linestring_link]的线要素

**参数**

| 入参        | 类型   | 描述                                    |
| ----------- | ------ | --------------------------------------- |
| coordinates | Array  | 任意二维数组坐标，坐标对长度应大于 1 组 |
| properties  | Object | 出参的 properties 属性                  |
| options     | Object | 可配置项                                |

**options**

| 属性 | 类型           | 默认值 | 描述   |
| ---- | -------------- | ------ | ------ |
| bbox | Array          |        | 边界框 |
| id   | String\|Number |        | 标识符 |

**返回**

[Feature][feature_link]&lt;[LineString][linestring_link]&gt;

**范例**

```javascript
var linestring1 = turf.lineString(
  [
    [-24, 63],
    [-23, 60],
    [-25, 65],
    [-20, 69]
  ],
  { name: "line 1" }
);
var linestring2 = turf.lineString(
  [
    [-14, 43],
    [-13, 40],
    [-15, 45],
    [-10, 49]
  ],
  { id: "inner" }, // properties
  { id: "outter" }
);
/*
{
  type: "Feature",
  geometry: {
    type: "LineString",
    coordinates: [
      [-14, 43],
      [-13, 40],
      [-15, 45],
      [-10, 49]
    ]
  },
  properties: {
    id: "inner"
  },
  id: "outter"
}
*/
```

## multiLineString

> npm install @turf/helpers

接收三维数组坐标，创建 type 为[MultiLineString][multilinestring_link]的多线要素

**参数**

| 入参        | 类型   | 描述                   |
| ----------- | ------ | ---------------------- |
| coordinates | Array  | 任意三维数组坐标       |
| properties  | Object | 出参的 properties 属性 |
| options     | Object | 可配置项               |

**options**

| 属性 | 类型           | 默认值 | 描述   |
| ---- | -------------- | ------ | ------ |
| bbox | Array          |        | 边界框 |
| id   | String\|Number |        | 标识符 |

**返回**

[Feature][feature_link]&lt;[MultiLineString][multilinestring_link]&gt;

**范例**

```javascript
var multiLine = turf.multiLineString(
  [
    [
      [0, 0],
      [10, 10]
    ]
  ],
  {
    id: "inner"
  },
  {
    id: "outter"
  }
);
/*
{
  type: "Feature",
  geometry: {
    type: "MultiLineString",
    coordinates: [...]
  },
  properties: {
    id: "inner"
  },
  id: "outter"
}
*/
```

## multiPoint

> npm install @turf/helpers

接收二维数组坐标，创建 type 为[MultiPoint][multipoint_link]的多点要素

**参数**

| 入参        | 类型   | 描述                   |
| ----------- | ------ | ---------------------- |
| coordinates | Array  | 任意三维数组坐标       |
| properties  | Object | 出参的 properties 属性 |
| options     | Object | 可配置项               |

**options**

| 属性 | 类型           | 默认值 | 描述   |
| ---- | -------------- | ------ | ------ |
| bbox | Array          |        | 边界框 |
| id   | String\|Number |        | 标识符 |

**返回**

[Feature][feature_link]&lt;[MultiPoint][multipoint_link]&gt;

**范例**

```javascript
var multiPt = turf.multiPoint(
  [
    [0, 0],
    [10, 10]
  ],
  {
    id: "inner"
  },
  {
    id: "outter"
  }
);
/*
{
  type: "Feature",
  geometry: {
    type: "MultiPoint",
    coordinates: [...]
  },
  properties: {
    id: "inner"
  },
  id: "outter"
}
*/
```

## multiPolygon

> npm install @turf/helpers

接收四维数组坐标，创建 type 为[MultiPolygon][multipolygon_link]的多面要素

**参数**

| 入参        | 类型   | 描述                   |
| ----------- | ------ | ---------------------- |
| coordinates | Array  | 任意四维数组坐标       |
| properties  | Object | 出参的 properties 属性 |
| options     | Object | 可配置项               |

**options**

| 属性 | 类型           | 默认值 | 描述   |
| ---- | -------------- | ------ | ------ |
| bbox | Array          |        | 边界框 |
| id   | String\|Number |        | 标识符 |

**返回**

[Feature][feature_link]&lt;[LineString][linestring_link]&gt;

**范例**

```javascript
var multiPoly = turf.multiPolygon(
  [
    [
      [
        [0, 0],
        [0, 10],
        [10, 10],
        [10, 0],
        [0, 0]
      ]
    ]
  ],
  {
    id: "inner"
  },
  {
    id: "outter"
  }
);
/*
{
  type: "Feature",
  geometry: {
    type: "MultiPolygon",
    coordinates: [...]
  },
  properties: {
    id: "inner"
  },
  id: "outter"
}
*/
```

## point

> npm install @turf/helpers

接收一个一维数组坐标，创建一个 type 为[Point][point_link]的要素

**参数**

| 入参        | 类型   | 描述                   |
| ----------- | ------ | ---------------------- |
| coordinates | Array  | 任意四维数组坐标       |
| properties  | Object | 出参的 properties 属性 |
| options     | Object | 可配置项               |

**options**

| 属性 | 类型           | 默认值 | 描述   |
| ---- | -------------- | ------ | ------ |
| bbox | Array          |        | 边界框 |
| id   | String\|Number |        | 标识符 |

**返回**

[Feature][feature_link]&lt;[Point][point_link]&gt;

**范例**

```javascript
var point = turf.point([-75.343, 39.984], {
  id: ""
});
/*
{
  type: "Feature",
  geometry: {
    type: "Point",
    coordinates: [-75.343, 39.984]
  },
  properties: {
    id: ""
  }
}
*/
```

## polygon

> npm install @turf/helpers

接收二维数组坐标，创建 type 为 [Polygon][polygon_link] 的面要素

**参数**

| 入参        | 类型   | 描述                   |
| ----------- | ------ | ---------------------- |
| coordinates | Array  | 任意四维数组坐标       |
| properties  | Object | 出参的 properties 属性 |
| options     | Object | 可配置项               |

**options**

| 属性 | 类型           | 默认值 | 描述   |
| ---- | -------------- | ------ | ------ |
| bbox | Array          |        | 边界框 |
| id   | String\|Number |        | 标识符 |

**返回**

[Feature][feature_link]&lt;[LineString][linestring_link]&gt;

**范例**

```javascript
var polygon = turf.polygon(
  [
    [
      [-5, 52],
      [-4, 56],
      [-2, 51],
      [-7, 54],
      [-5, 52]
    ]
  ],
  { id: "poly1" }, // properties
  { id: "poly2" }
);
/*
{
  type: "Feature",
  geometry: {
    type: "Polygon",
    coordinates: [
      [
        [-5, 52],
        [-4, 56],
        [-2, 51],
        [-7, 54],
        [-5, 52]
      ]
    ]
  },
  properties: {
    id: "poly1"
  },
  id: "poly2"
}
*/
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
[geometrycollection_link]: https://tools.ietf.org/html/rfc7946#section-3.1.8
