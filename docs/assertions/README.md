# assertions

## collectionOf

> npm install @turf/invariant  
> 值得注意的是，该目录下的方法均是 invariant 模块的一部分

接收一组要素集合和要素的 type 类型，验证该要素集的要素是否符合传入的 type

> 值得注意的是，该方法没有返回值，没有报错证错证明方法通过，name 属性目前虽没有验证，但是必填字段

**参数**

| 入参              | 类型                                        | 描述           |
| ----------------- | ------------------------------------------- | -------------- |
| featureCollection | [FeatureCollection][featurecollection_link] | 要素集         |
| type              | String                                      | 校验的要素类型 |
| name              | String                                      | 校验的名字     |

**返回**

无

**范例**

```javascript
var pt1 = turf.point([5, 5], { population: 200 });
var pt2 = turf.point([1, 3], { population: 600 });
var pt3 = turf.point([14, 2], { population: 100 });
var pt4 = turf.point([13, 1], { population: 200 });
var pt5 = turf.point([19, 7], { population: 300 });
var pointFC = turf.featureCollection([pt1, pt2, pt3, pt4, pt5]);
var boolean = turf.collectionOf(pointFC, "LineString", "a"); // 报错
var boolean2 = turf.collectionOf(pointFC, "Point", "a"); // 不报错，boolean2 为 undefined
```

## containsNumber

> npm install @turf/invariant

接收一组坐标，判断坐标是否是数字类型。如果是一维数组，判断经纬度是否是数字，如果是多维数组，递归判断第一个子数组是否是数字类型

**参数**

| 入参        | 类型  | 描述 |
| ----------- | ----- | ---- |
| coordinates | Array | 坐标 |

**返回**

Boolean

**范例**

```javascript
var boolean = turf.containsNumber([1, 2]); // true 判断1、2是否是数字

var boolean2 = turf.containsNumber([
  [3, 4],
  [5, 6]
]); // true 相当于是turf.containsNumber([3,4])
```

## geojsonType

> npm install @turf/invariant

接收一个 GeoJSON，校验是否符合传入的 type

> 值得注意的是，该方法没有返回值，没有报错证错证明方法通过，name 属性目前虽没有验证，但是必填字段

**参数**

| 入参  | 类型                    | 描述           |
| ----- | ----------------------- | -------------- |
| value | [GeoJSON][geojson_link] | GeoJSON        |
| type  | String                  | 校验的要素类型 |
| name  | String                  | 校验的名字     |

**返回**

无

**范例**

```javascript
turf.geojsonType(
  {
    type: "Feature"
    geometry:{
      type: "Point",
      coordinates: [5, 5]
    }
  },
  "Feature",
  "a"
); // 没有报错

var pt1 = turf.point([5, 5], { population: 200 });
var pt2 = turf.point([1, 3], { population: 600 });
var pointFC = turf.featureCollection([pt1, pt2]);
var boolean = turf.geojsonType(pointFC, "FeatureCollection", "a"); // 没有报错
```

## featureOf

> npm install @turf/invariant

接收一个要素和要素的 type 类型，验证该要素是否符合传入的 type

> 值得注意的是，该方法没有返回值，没有报错证错证明方法通过，name 属性目前虽没有验证，但是必填字段

**参数**

| 入参    | 类型                    | 描述           |
| ------- | ----------------------- | -------------- |
| feature | [Feature][feature_link] | feature        |
| type    | String                  | 校验的要素类型 |
| name    | String                  | 校验的名字     |

**返回**

无

**范例**

```javascript
turf.geojsonType(
  {
    type: "Feature"
    geometry:{
      type: "Point",
      coordinates: [5, 5]
    }
  },
  "Feature",
  "a"
); // 没有报错
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
