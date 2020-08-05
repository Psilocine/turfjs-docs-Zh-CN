# meta

## coordAll

> npm install @turf/meta  
> 值得注意的是，该目录下的方法均是 meta 模块的一部分

接收任意的 GeoJSON 对象(包括要素集)，以二维数组的形式返回它们的坐标

**参数**

| 入参    | 类型                                                                                            | 描述              |
| ------- | ----------------------------------------------------------------------------------------------- | ----------------- |
| geojson | [FeatureCollection][featurecollection_link]\|[Feature][feature_link]\|[Geometry][geometry_link] | 任意 GeoJSON 对象 |

**返回**

Array

**范例**

```javascript
var features = turf.featureCollection([
  turf.point([26, 37], { foo: "bar" }),
  turf.point([36, 53], { hello: "world" })
]);

var coords = turf.coordAll(features);
//= [[26, 37], [36, 53]]

var coords = turf.coordAll(turf.point([26, 37], { foo: "bar" }));
//= [[26, 37]] 虽然只有一个要素，还是以二维数组的形式返回
```

## coordEach

> npm install @turf/meta

遍历 GeoJSON 对象，功能类似 Array.forEach()

**参数**

| 入参             | 类型                                                                                            | 描述                                                                           |
| ---------------- | ----------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------ |
| geojson          | [FeatureCollection][featurecollection_link]\|[Feature][feature_link]\|[Geometry][geometry_link] | 任意 GeoJSON 对象                                                              |
| callback         | Function                                                                                        | 回调，参数依次是 currentCoord、coordIndex、featureIndex、multiFeatureIndex     |
| excludeWrapCoord | Boolean                                                                                         | 是否包含最后一个坐标对(针对闭环线、面要素等坐标是首位闭合的情况)，默认为 false |

**返回**

undefined

**范例**

```javascript
var features = turf.featureCollection([
  turf.point([26, 37], { foo: "bar" }),
  turf.point([36, 53], { hello: "world" })
]);

turf.coordEach(features, function (
  currentCoord,
  coordIndex,
  featureIndex,
  multiFeatureIndex,
  geometryIndex
) {
  //=currentCoord
  //=coordIndex
  //=featureIndex
  //=multiFeatureIndex
  //=geometryIndex
});
```

## coordReduce

> npm install @turf/meta

接收任意 GeoJSON 对象(包括要素集)，遍历累加操作。相当于 Array.reduce()

**参数**

| 入参             | 类型                                                                                            | 描述                                                                                                     |
| ---------------- | ----------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- |
| geojson          | [FeatureCollection][featurecollection_link]\|[Feature][feature_link]\|[Geometry][geometry_link] | 任意 GeoJSON 对象                                                                                        |
| callback         | Function                                                                                        | 回调，参数依次是 previousValue、currentCoord、coordIndex、featureIndex、multiFeatureIndex、geometryIndex |
| initial          | (\*)                                                                                            | 初始值                                                                                                   |
| excludeWrapCoord | Boolean                                                                                         | 是否包含最后一个坐标对(针对闭环线、面要素等坐标是首位闭合的情况)，默认为 false                           |

**返回**

\*

**范例**

```javascript
var features = turf.featureCollection([
  turf.point([26, 37], { foo: "bar" }),
  turf.point([36, 53], { hello: "world" })
]);

turf.coordReduce(features, function (
  previousValue,
  currentCoord,
  coordIndex,
  featureIndex,
  multiFeatureIndex,
  geometryIndex
) {
  //=previousValue
  //=currentCoord
  //=coordIndex
  //=featureIndex
  //=multiFeatureIndex
  //=geometryIndex
  return currentCoord;
});
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
