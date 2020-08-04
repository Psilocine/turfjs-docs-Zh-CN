# coordinate mutation

## cleanCoords

> npm install @turf/clean-coords

接收任意 GeoJSON，删除冗余坐标并返回

**参数**

| 入参    | 类型                                               | 描述                |
| ------- | -------------------------------------------------- | ------------------- |
| line    | [Geometry][geometry_link]\|[Feature][feature_link] | Geometry 或 Feature |
| options | Object                                             | 可配置项            |

**options**

| 属性   | 类型    | 默认值 | 描述                   |
| ------ | ------- | ------ | ---------------------- |
| mutate | Boolean | false  | 是否返回入参的 GeoJSON |

**返回**

[Geometry][geometry_link]\|[Feature][feature_link]

**范例**

```javascript
var line = turf.lineString([
  [0, 0],
  [0, 2],
  [0, 5],
  [0, 8],
  [0, 8],
  [0, 10]
]);
var multiPoint = turf.multiPoint([
  [0, 0],
  [0, 0],
  [2, 2]
]);

turf.cleanCoords(line).geometry.coordinates;
//= [[0, 0], [0, 10]]

turf.cleanCoords(multiPoint).geometry.coordinates;
//= [[0, 0], [2, 2]]

// 也可以使用 Geometry 对象
var geometry = {
  type: "LineString",
  coordinates: [
    [0, 0],
    [0, 0],
    [2, 2]
  ]
};
var result = turf.cleanCoords(geometry, { mutate: true });

/*
geometry、result均为
{
  coordinates: [[0, 0], [2, 2]],
  type: "LineString"
}
*/
```

## flip

> npm install @turf/flip

接收入参要素并将其所有坐标从[x，y]翻转为[y，x]

**参数**

| 入参    | 类型                    | 描述                   |
| ------- | ----------------------- | ---------------------- |
| geojson | [GeoJSON][geojson_link] | 一个任意类型的 GeoJSON |
| options | Object                  | 可配置项               |

**options**

| 属性   | 类型    | 默认值 | 描述                                           |
| ------ | ------- | ------ | ---------------------------------------------- |
| mutate | Boolean | false  | 是否返回入参的 GeoJSON，为 true 性能能显著提高 |

**返回**

[GeoJSON][geojson_link]

**范例**

```javascript
var serbia = turf.point([20.566406, 43.421008]);

var saudiArabia = turf.flip(serbia);
/*
{
  type: "Feature",
  geometry: {
    type: "Point",
    coordinates: [43.421008, 20.566406]
  },
  properties: {}
}
*/
```

## rewind

> npm install @turf/rewind

接收[(Multi)LineString][multilinestring_link]或[(Multi)Polygon][multipolygon_link]，将坐标的顺序修改为顺时针，内圈顺序修改为逆时针

**参数**

| 入参    | 类型                    | 描述                      |
| ------- | ----------------------- | ------------------------- |
| geojson | [GeoJSON][geojson_link] | 类型为 Polygon 的 GeoJSON |
| options | Object                  | 可配置项                  |

**options**

| 属性    | 类型    | 默认值 | 描述                                           |
| ------- | ------- | ------ | ---------------------------------------------- |
| reverse | Boolean | false  | 启用反向绕组，即坐标组使用 reverse 方法        |
| mutate  | Boolean | false  | 是否返回入参的 GeoJSON，为 true 性能能显著提高 |

**返回**

[GeoJSON][geojson_link]

**范例**

```javascript
var polygon = turf.polygon([
  [
    [121, -29],
    [138, -29],
    [138, -18],
    [121, -18],
    [121, -29]
  ]
]);

var rewind = turf.rewind(polygon);
/*
本来就是顺时针顺序，所以坐标顺序未发生变化
{
  type: "Feature",
  geometry: {
    type: "Polygon",
    coordinates: [
      [
        [121, -29],
        [138, -29],
        [138, -18],
        [121, -18],
        [121, -29]
      ]
    ]
  },
  properties: {}
}
*/
```

## round

> npm install @turf/helpers  
> 值得注意的是，round 是 helpers 模块的一部分

接收入参的数字和精确度数，返回四舍五入后的数字

**参数**

| 入参      | 类型   | 描述                               |
| --------- | ------ | ---------------------------------- |
| num       | Number | 需要四舍五入的数字                 |
| precision | Number | 坐标的小数点精确位数，不传则不保留 |

**返回**

Number

**范例**

```javascript
turf.round(120.4321);
//=120

turf.round(120.4321, 2);
//=120.43
```

## truncate

> npm install @turf/truncate

接收入参要素([Feature][feature_link])或要素集([FeatureCollection][featurecollection_link])，返回精确后的要素

**参数**

| 入参    | 类型                    | 描述                  |
| ------- | ----------------------- | --------------------- |
| geojson | [GeoJSON][geojson_link] | 一个 GeoJSON 或要素集 |
| options | Object                  | 可配置项              |

**options**

| 属性        | 类型    | 默认值 | 描述                                           |
| ----------- | ------- | ------ | ---------------------------------------------- |
| precision   | Number  | 6      | 坐标的小数点精确位数                           |
| coordinates | Number  | 3      | 最大坐标数(主要用于删除 z 坐标)                |
| mutate      | Boolean | false  | 是否返回入参的 GeoJSON，为 true 性能能显著提高 |

**返回**

[GeoJSON][geojson_link]

**范例**

```javascript
var point = turf.point([70.46923055566859, 58.11088890802906, 1508]);
var options = { precision: 3, coordinates: 2 };
var truncated = turf.truncate(point, options);
//=truncated.geometry.coordinates => [70.469, 58.111]
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
