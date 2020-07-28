# random

## randomPosition

> npm install @turf/random  
> 值得注意的是，该目录下的方法均是 random 模块的一部分

接收一个边界框范围，返回在该边界框随机的经纬度坐标

**参数**

| 入参 | 类型  | 描述   |
| ---- | ----- | ------ |
| bbox | Array | 边界框 |

**返回**

Array - 经纬度坐标

**范例**

```javascript
var position = turf.randomPosition([-180, -90, 180, 90]); // [lng, lat]
```

## randomPoint

> npm install @turf/random

接收指定的数量，随机生成 type 为[Point][point_link]的要素集并返回

**参数**

| 入参    | 类型   | 描述           |
| ------- | ------ | -------------- |
| count   | Number | 生成要素的数量 |
| options | Object | 可配置项       |

**options**

| 属性 | 类型  | 默认值            | 描述   |
| ---- | ----- | ----------------- | ------ |
| bbox | Array | [-180,-90,180,90] | 边界框 |

**返回**

[FeatureCollection][featurecollection_link]&lt;[Point][point_link]&gt;

**范例**

```javascript
var points = turf.randomPoint(25, { bbox: [-180, -90, 180, 90] }); // 25个点要素集合
```

## randomLineString

> npm install @turf/random

接收指定的数量，随机生成 type 为[LineString][linestring_link]的要素集并返回

**参数**

| 入参    | 类型   | 描述           |
| ------- | ------ | -------------- |
| count   | Number | 生成要素的数量 |
| options | Object | 可配置项       |

**options**

| 属性         | 类型   | 默认值            | 描述                                                 |
| ------------ | ------ | ----------------- | ---------------------------------------------------- |
| bbox         | Array  | [-180,-90,180,90] | 边界框                                               |
| num_vertices | Number | 10                | 每个要素包含的坐标数量                               |
| max_length   | Number | 0.0001            | 坐标点相对于其前一个坐标点的最大的度数，单位为十进制 |
| max_rotation | Number | Math.PI/8         | 坐标点相对于其前一个坐标点能形成的最大弧度           |

**返回**

[FeatureCollection][featurecollection_link]&lt;[Point][point_link]&gt;

**范例**

```javascript
var lineStrings = turf.randomLineString(25, { bbox: [-180, -90, 180, 90] }); // 25个线要素集合
```

## randomPolygon

> npm install @turf/random

接收指定的数量，随机生成 type 为[Polygon][polygon_link]的要素集并返回

**参数**

| 入参    | 类型   | 描述           |
| ------- | ------ | -------------- |
| count   | Number | 生成要素的数量 |
| options | Object | 可配置项       |

**options**

| 属性              | 类型   | 默认值            | 描述                                                       |
| ----------------- | ------ | ----------------- | ---------------------------------------------------------- |
| bbox              | Array  | [-180,-90,180,90] | 边界框                                                     |
| num_vertices      | Number | 10                | 每个要素包含的坐标数量                                     |
| max_radial_length | Number | 10                | 坐标点相对于该面要素的中心点的最大经度或纬度，单位为十进制 |

**返回**

[FeatureCollection][featurecollection_link]&lt;[Polygon][polygon_link]&gt;

**范例**

```javascript
var polygons = turf.randomPolygon(25, { bbox: [-180, -90, 180, 90] }); // 25个面要素集合
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
