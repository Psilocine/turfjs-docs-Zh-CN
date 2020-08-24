# meta

## coordAll

> npm install @turf/meta

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

遍历接收的 GeoJSON 对象，功能类似 Array.forEach()

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

接收任意 GeoJSON 对象(包括要素集)，遍历累加操作。功能类似 Array.reduce()

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

## featureEach

> npm install @turf/meta

遍历接收的 GeoJSON 对象，功能类似 Array.forEach()

**参数**

| 入参     | 类型                                                                                            | 描述                                          |
| -------- | ----------------------------------------------------------------------------------------------- | --------------------------------------------- |
| geojson  | [FeatureCollection][featurecollection_link]\|[Feature][feature_link]\|[Geometry][geometry_link] | 任意 GeoJSON 对象                             |
| callback | Function                                                                                        | 回调，参数依次是 currentFeature、featureIndex |

**返回**

undefined

**范例**

```javascript
var features = turf.featureCollection([
  turf.point([26, 37], { foo: "bar" }),
  turf.point([36, 53], { hello: "world" })
]);

turf.featureEach(features, function (currentFeature, featureIndex) {
  //=currentFeature
  //=featureIndex
});
```

## featureReduce

> npm install @turf/meta

接收任意 GeoJSON 对象(包括要素集)，遍历累加操作。功能类似 Array.reduce()

**参数**

| 入参         | 类型                                                                                            | 描述                                                         |
| ------------ | ----------------------------------------------------------------------------------------------- | ------------------------------------------------------------ |
| geojson      | [FeatureCollection][featurecollection_link]\|[Feature][feature_link]\|[Geometry][geometry_link] | 任意 GeoJSON 对象                                            |
| callback     | Function                                                                                        | 回调，参数依次是 previousValue、currentFeature、featureIndex |
| initialValue | (\*)                                                                                            | 初始值                                                       |

**返回**

\*

**范例**

```javascript
var features = turf.featureCollection([
  turf.point([26, 37], { foo: "bar" }),
  turf.point([36, 53], { hello: "world" })
]);

turf.featureReduce(features, function (previousValue, currentFeature, featureIndex) {
  //=previousValue
  //=currentFeature
  //=featureIndex
  return currentFeature;
});
```

## flattenEach

> npm install @turf/meta

遍历接收的任意 GeoJSON 对象(包括要素集)。功能类似 Array.forEach()

> 值得注意的是，如果是多要素集，做扁平处理再遍历，功能类似 Array.flat()

**参数**

| 入参     | 类型                                                                                            | 描述                                                             |
| -------- | ----------------------------------------------------------------------------------------------- | ---------------------------------------------------------------- |
| geojson  | [FeatureCollection][featurecollection_link]\|[Feature][feature_link]\|[Geometry][geometry_link] | 任意 GeoJSON 对象                                                |
| callback | Function                                                                                        | 回调，参数依次是 currentFeature、featureIndex、multiFeatureIndex |

**范例**

```javascript
var features = turf.featureCollection([
  turf.point([26, 37], { foo: "bar" }),
  turf.multiPoint(
    [
      [40, 30],
      [36, 53]
    ],
    { hello: "world" }
  )
]);

turf.flattenEach(features, function (currentFeature, featureIndex, multiFeatureIndex) {
  //=currentFeature
  //=featureIndex
  //=multiFeatureIndex
  console.log(currentFeature);
});
/* 输出三个点要素
{
  type: "Feature",
  geometry: {
    coordinates: [26, 37],
    type: "Point"
  },
  properties: { foo: "bar" }
}
{
  type: "Feature",
  geometry: {
    coordinates: [40, 30],
    type: "Point"
  },
  properties: { hello: "world" }
}
{
  type: "Feature",
  geometry: {
    coordinates: [36, 53],
    type: "Point"
  },
  properties: { hello: "world" }
}
*/
```

## flattenReduce

> npm install @turf/meta

接收任意 GeoJSON 对象(包括要素集)，遍历累加操作。功能类似 Array.reduce()

> 值得注意的是，如果是多要素集，做扁平处理再遍历，功能类似 Array.flat()

**参数**

| 入参         | 类型                                                                                            | 描述                                                                            |
| ------------ | ----------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------- |
| geojson      | [FeatureCollection][featurecollection_link]\|[Feature][feature_link]\|[Geometry][geometry_link] | 任意 GeoJSON 对象                                                               |
| callback     | Function                                                                                        | 回调，参数依次是 previousValue、currentFeature、featureIndex、multiFeatureIndex |
| initialValue | (\*)                                                                                            | 初始值                                                                          |

**返回**

\*

**范例**

```javascript
var features = turf.featureCollection([
  turf.point([26, 37], { foo: "bar" }),
  turf.multiPoint(
    [
      [40, 30],
      [36, 53]
    ],
    { hello: "world" }
  )
]);

turf.flattenReduce(features, function (
  previousValue,
  currentFeature,
  featureIndex,
  multiFeatureIndex
) {
  //=previousValue
  //=currentFeature
  //=featureIndex
  //=multiFeatureIndex
  return currentFeature;
});
```

## getCoord

> npm install @turf/invariant

接收类型为 Point 的 GeoJSON，返回该要素的 coordinates 经纬度坐标

> 值得注意的是，如果入参是数组，只能是一维数组，否则抛出异常错误

**参数**

| 入参  | 类型                                                                                                            | 描述               |
| ----- | --------------------------------------------------------------------------------------------------------------- | ------------------ |
| coord | Array\|[Geometry][geometry_link]&lt;[Point][point_link]&gt;\|[Feature][feature_link]&lt;[Point][point_link]&gt; | GeoJSON 或一维数组 |

**返回**

Array - coordinates

**范例**

```javascript
var pt = turf.point([10, 10]);

var coord = turf.getCoord(pt);
//= [10, 10]

var pt2 = turf.getCoord([1, 2, 3, 4, 5]); // [1,2,3,4,5]
```

## getCoords

> npm install @turf/invariant

接收任意类型的 GeoJSON 或 Geometry，返回该要素的 coordinates 经纬度坐标

**参数**

| 入参   | 类型                                                      | 描述              |
| ------ | --------------------------------------------------------- | ----------------- |
| coords | Array\|[Feature][feature_link]\|[Geometry][geometry_link] | 任意 GeoJSON 对象 |

**返回**

Array - coordinates

**范例**

```javascript
var poly = turf.polygon([
  [
    [119.32, -8.7],
    [119.55, -8.69],
    [119.51, -8.54],
    [119.32, -8.7]
  ]
]);

var coords = turf.getCoords(poly);
//= [[[119.32, -8.7], [119.55, -8.69], [119.51, -8.54], [119.32, -8.7]]]

var coords2 = turf.getCoords({
  // 也可以是Geometry
  type: "LineString",
  coordinates: [
    [1, 2],
    [3, 4]
  ]
}); // [[1,2], [3,4]]
```

## getGeom

> npm install @turf/invariant

接收任意类型的 GeoJSON，返回该要素的 Geometry

> 值得注意的是，如果不是 GeoJSON，该方法返回入参本身的值

**参数**

| 入参    | 类型                                               | 描述              |
| ------- | -------------------------------------------------- | ----------------- |
| geojson | [Feature][feature_link]\|[Geometry][geometry_link] | 任意 GeoJSON 对象 |

**返回**

[Geometry][geometry_link]\|AnyValue

**范例**

```javascript
var point = {
  type: "Feature",
  properties: {},
  geometry: {
    type: "Point",
    coordinates: [110, 40]
  }
};
var geom = turf.getGeom(point);
//={"type": "Point", "coordinates": [110, 40]}

turf.getGeom("wrong"); // 'wrong'
```

## getType

> npm install @turf/invariant

接收任意类型的 GeoJSON，返回该要素的类型

> 值得注意的是，如果是要素，返回类型优先是 Geometry 的 type，如果是要素集，返回类型优先是要素集的 type

**参数**

| 入参    | 类型                    | 描述                                   |
| ------- | ----------------------- | -------------------------------------- |
| geojson | [GeoJSON][geojson_link] | 任意 GeoJSON 对象                      |
| name    | String                  | 在报错消息中展示的变量名，目前暂未使用 |

**返回**

string - GeoJSON type

**范例**

```javascript
var point = {
  type: "Feature",
  properties: {},
  geometry: {
    type: "Point",
    coordinates: [110, 40]
  }
};
var geom = turf.getType(point);
//="Point"

turf.getType({
  type: "FeatureCollection",
  faetures: [
    {
      type: "Feature",
      geometry: {
        type: "Point",
        coordinates: [1, 2]
      }
    },
    {
      type: "Feature",
      geometry: {
        type: "LineString",
        coordinates: [
          [1, 2],
          [3, 4]
        ]
      }
    }
  ]
}); // "FeatureCollection"
```

## geomEach

> npm install @turf/meta

接收任意类型的 GeoJSON，遍历它的每个 Geometry。功能类似 Array.forEach()

**参数**

| 入参     | 类型                                                                                            | 描述                                                                                      |
| -------- | ----------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------- |
| geojson  | [FeatureCollection][featurecollection_link]\|[Feature][feature_link]\|[Geometry][geometry_link] | 任意 GeoJSON 对象                                                                         |
| callback | Function                                                                                        | 回调，参数依次是 currentGeometry、featureIndex、featureProperties、featureBBox、featureId |

**返回**

undefined

**范例**

```javascript
var features = turf.featureCollection([
  turf.point([26, 37], { foo: "bar" }),
  turf.point([36, 53], { hello: "world" })
]);

turf.geomEach(features, function (
  currentGeometry,
  featureIndex,
  featureProperties,
  featureBBox,
  featureId
) {
  //=currentGeometry
  //=featureIndex
  //=featureProperties
  //=featureBBox
  //=featureId
});
```

## geomReduce

> npm install @turf/meta

接收任意 GeoJSON 对象(包括要素集)，遍历它的每个 Geometry 并累加操作。功能类似 Array.reduce()

**参数**

| 入参         | 类型                                                                                            | 描述                                                                                                     |
| ------------ | ----------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- |
| geojson      | [FeatureCollection][featurecollection_link]\|[Feature][feature_link]\|[Geometry][geometry_link] | 任意 GeoJSON 对象                                                                                        |
| callback     | Function                                                                                        | 回调，参数依次是 previousValue、currentGeometry、featureIndex、featureProperties、featureBBox、featureId |
| initialValue | (\*)                                                                                            | 初始值                                                                                                   |

**返回**

\* - reduce 产生的值

**范例**

```javascript
var features = turf.featureCollection([
  turf.point([26, 37], { foo: "bar" }),
  turf.point([36, 53], { hello: "world" })
]);

turf.geomReduce(features, function (
  previousValue,
  currentGeometry,
  featureIndex,
  featureProperties,
  featureBBox,
  featureId
) {
  //=previousValue
  //=currentGeometry
  //=featureIndex
  //=featureProperties
  //=featureBBox
  //=featureId
  return currentGeometry;
});
```

## propEach

> npm install @turf/meta

接收任意类型的 GeoJSON，遍历它的每个要素的 properties。功能类似 Array.forEach()

**参数**

| 入参     | 类型                                                                 | 描述                                             |
| -------- | -------------------------------------------------------------------- | ------------------------------------------------ |
| geojson  | [FeatureCollection][featurecollection_link]\|[Feature][feature_link] | 任意 GeoJSON 对象                                |
| callback | Function                                                             | 回调，参数依次是 currentProperties、featureIndex |

**返回**

undefined

**范例**

```javascript
var features = turf.featureCollection([
  turf.point([26, 37], { foo: "bar" }),
  turf.point([36, 53], { hello: "world" })
]);

turf.propEach(features, function (currentProperties, featureIndex) {
  //=currentProperties
  //=featureIndex
});
```

## propReduce

> npm install @turf/meta

接收任意类型的 GeoJSON，遍历它的每个要素的 properties 并累加操作。功能类似 Array.reduce()

**参数**

| 入参         | 类型                                                                 | 描述                                                            |
| ------------ | -------------------------------------------------------------------- | --------------------------------------------------------------- |
| geojson      | [FeatureCollection][featurecollection_link]\|[Feature][feature_link] | 任意 GeoJSON 对象                                               |
| callback     | Function                                                             | 回调，参数依次是 previousValue、currentProperties、featureIndex |
| initialValue | (\*)                                                                 | 初始值                                                          |

**返回**

\* - reduce 产生的值

**范例**

```javascript
var features = turf.featureCollection([
  turf.point([26, 37], { foo: "bar" }),
  turf.point([36, 53], { hello: "world" })
]);

turf.propReduce(features, function (previousValue, currentProperties, featureIndex) {
  //=previousValue
  console.log(currentProperties);
  //=featureIndex
  return currentProperties;
});
/*
  { foo: "bar" }
  { hello: "world" }
*/
```

## segmentEach

> npm install @turf/meta

接收任意类型的 GeoJSON，遍历它的 2-vertex 线段。功能类似 Array.forEach()

> 值得注意的是，(Multi)Point 的要素不包含线段，不进行操作

**参数**

| 入参     | 类型                                                                                            | 描述                                                                                          |
| -------- | ----------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| geojson  | [FeatureCollection][featurecollection_link]\|[Feature][feature_link]\|[Geometry][geometry_link] | 任意 GeoJSON 对象                                                                             |
| callback | Function                                                                                        | 回调，参数依次是 currentSegment、featureIndex、multiFeatureIndex、geometryIndex、segmentIndex |

**返回**

undefined

**范例**

```javascript
var polygon = turf.polygon([
  [
    [-50, 5],
    [-40, -10],
    [-50, -10],
    [-40, 5],
    [-50, 5]
  ]
]);

// Iterate over GeoJSON by 2-vertex segments
turf.segmentEach(polygon, function (
  currentSegment,
  featureIndex,
  multiFeatureIndex,
  geometryIndex,
  segmentIndex
) {
  //=currentSegment
  //=featureIndex
  //=multiFeatureIndex
  //=geometryIndex
  //=segmentIndex
});

// Calculate the total number of segments
var total = 0;
turf.segmentEach(polygon, function () {
  total++;
});
```

## segmentReduce

> npm install @turf/meta

接收任意类型的 GeoJSON，遍历它的 2-vertex 线段并累加操作。功能类似 Array.reduce()

**参数**

| 入参         | 类型                                                                                            | 描述                                                            |
| ------------ | ----------------------------------------------------------------------------------------------- | --------------------------------------------------------------- |
| geojson      | [FeatureCollection][featurecollection_link]\|[Feature][feature_link]\|[Geometry][geometry_link] | 任意 GeoJSON 对象                                               |
| callback     | Function                                                                                        | 回调，参数依次是 previousValue、currentProperties、featureIndex |
| initialValue | (\*)                                                                                            | 初始值                                                          |

**返回**

undefined

**范例**

```javascript
var polygon = turf.polygon([
  [
    [-50, 5],
    [-40, -10],
    [-50, -10],
    [-40, 5],
    [-50, 5]
  ]
]);

// Iterate over GeoJSON by 2-vertex segments
turf.segmentReduce(polygon, function (
  previousSegment,
  currentSegment,
  featureIndex,
  multiFeatureIndex,
  geometryIndex,
  segmentIndex
) {
  //= previousSegment
  //= currentSegment
  //= featureIndex
  //= multiFeatureIndex
  //= geometryIndex
  //= segmentInex
  return currentSegment;
});

// Calculate the total number of segments
var initialValue = 0;
var total = turf.segmentReduce(
  polygon,
  function (previousValue) {
    previousValue++;
    return previousValue;
  },
  initialValue
);
```

## getCluster

> npm install @turf/clusters

接收要素集[FeatureCollection][featurecollection_link]，过滤指定属性的要素并返回要素集

**参数**

| 入参    | 类型                                        | 描述           |
| ------- | ------------------------------------------- | -------------- |
| geojson | [FeatureCollection][featurecollection_link] | GeoJSON 要素集 |
| filter  | (\*)                                        | 初始值         |

**返回**

[FeatureCollection][featurecollection_link] - 过滤后的要素集

**范例**

```javascript
var geojson = turf.featureCollection([
  turf.point([0, 0], { "marker-symbol": "circle" }),
  turf.point([2, 4], { "marker-symbol": "star" }),
  turf.point([3, 6], { "marker-symbol": "star" }),
  turf.point([5, 1], { "marker-symbol": "square" }),
  turf.point([4, 2], { "marker-symbol": "circle" })
]);

// Create a cluster using K-Means (adds `cluster` to GeoJSON properties)
var clustered = turf.clustersKmeans(geojson);

// Retrieve first cluster (0)
var cluster = turf.getCluster(clustered, { cluster: 0 });
//= cluster

// Retrieve cluster based on custom properties
turf.getCluster(clustered, { "marker-symbol": "circle" }).length;
//= 2
turf.getCluster(clustered, { "marker-symbol": "square" }).length;
//= 1
```

## clusterEach

> npm install @turf/clusters

接收要素集[FeatureCollection][featurecollection_link]，遍历通过指定属性过滤后的要素集集群

**参数**

| 入参     | 类型                                        | 描述                                                            |
| -------- | ------------------------------------------- | --------------------------------------------------------------- |
| geojson  | [FeatureCollection][featurecollection_link] | GeoJSON 要素集                                                  |
| property | String\|Number                              | 用于过滤、区分要素集的属性值                                    |
| callback | Function                                    | 回调，参数依次是 previousValue、currentProperties、featureIndex |

**返回**

undefined

**范例**

```javascript
var geojson = turf.featureCollection([
  turf.point([0, 0]),
  turf.point([2, 4]),
  turf.point([3, 6]),
  turf.point([5, 1]),
  turf.point([4, 2])
]);

// Create a cluster using K-Means (adds `cluster` to GeoJSON properties)
var clustered = turf.clustersKmeans(geojson); // cluster为0有1个要素，cluster为1有4个要素

// Iterate over each cluster
turf.clusterEach(clustered, "cluster", function (cluster, clusterValue, currentIndex) {
  //= cluster
  //= clusterValue
  //= currentIndex
  console.log("cluster: ", cluster, clusterValue);
});
/*
  cluster: { type: "FeatureCollection", features: Array(1) }, "0"
  cluster: { type: "FeatureCollection", features: Array(4) }, "1"
*/

// Calculate the total number of clusters
var total = 0;
turf.clusterEach(clustered, "cluster", function () {
  total++;
});

// Create an Array of all the values retrieved from the 'cluster' property
var values = [];
turf.clusterEach(clustered, "cluster", function (cluster, clusterValue) {
  values.push(clusterValue);
});
```

## clusterReduce

> npm install @turf/meta

接收要素集[FeatureCollection][featurecollection_link]，遍历通过指定属性过滤后的要素集集群并累加操作

**参数**

| 入参         | 类型                                        | 描述                                                                |
| ------------ | ------------------------------------------- | ------------------------------------------------------------------- |
| geojson      | [FeatureCollection][featurecollection_link] | GeoJSON 要素集                                                      |
| property     | String\|Number                              | 用于过滤、区分要素集的属性值                                        |
| callback     | Function                                    | 回调，参数依次是 previousValue、cluster、clusterValue、currentIndex |
| initialValue | (\*)                                        | 初始值                                                              |

**返回**

\* - reduce 产生的值

**范例**

```javascript
var geojson = turf.featureCollection([
  turf.point([0, 0]),
  turf.point([2, 4]),
  turf.point([3, 6]),
  turf.point([5, 1]),
  turf.point([4, 2])
]);

// Create a cluster using K-Means (adds `cluster` to GeoJSON properties)
var clustered = turf.clustersKmeans(geojson);

// Iterate over each cluster and perform a calculation
var initialValue = 0;
turf.clusterReduce(
  clustered,
  "cluster",
  function (previousValue, cluster, clusterValue, currentIndex) {
    //=previousValue
    //=cluster
    //=clusterValue
    //=currentIndex
    return previousValue++;
  },
  initialValue
);

// Calculate the total number of clusters
var total = turf.clusterReduce(
  clustered,
  "cluster",
  function (previousValue) {
    return previousValue++;
  },
  0
);

// Create an Array of all the values retrieved from the 'cluster' property
var values = turf.clusterReduce(
  clustered,
  "cluster",
  function (previousValue, cluster, clusterValue) {
    return previousValue.concat(clusterValue);
  },
  []
);
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
