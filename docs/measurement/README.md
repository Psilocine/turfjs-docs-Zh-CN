# measurement

## along

> npm install @turf/along

接收入参的线段上指定距离的点。

> 值得注意的是，距离是从起点开始计算的，如果距离超过线段的长度，会返回终点的 GeoJSON

**参数**

| 入参     | 类型                                               | 描述     |
| -------- | -------------------------------------------------- | -------- |
| line     | [Feature][feature_link]&lt;[Point][point_link]&gt; | 线段     |
| distance | Number                                             | 沿线距离 |
| options  | Object                                             | 可配置项 |

**options**

| 属性  | 类型   | 默认值       | 描述                                                         |
| ----- | ------ | ------------ | ------------------------------------------------------------ |
| units | String | "kilometers" | 沿线距离的单位，可选的有 degrees、radians、miles、kilometers |

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

> npm install @turf/area

接收入参的要素([Feature][feature_link])或多要素([FeatureCollection][featurecollection_link])，计算并返回它们的面积

> 值得注意的是，该方法应该是传入 polygon 类型的 GeoJSON，即 Point 点类型和 LineString 线段类型均为 0

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

> npm install @turf/bbox

接收入参要素，返回它的边界框(bbox)

> 边界框是由右上角的坐标和左下角的坐标组成的一位数组

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

> npm install @turf/bbox-polygon

接收一个入参 bbox(边界框)，返回它的的等效 GeoJSON

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

[Feature][feature_link]&lt;[Polygon][polygon_link]&gt;

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

## bearing

> npm install @turf/bearing

接收两个点类型的 GeoJSON，计算获取二者之间的地理方位，并与正北方向所形成的角度

> 即以起始点为参照物，终止点的偏移角度

**参数**

| 入参    | 类型                                           | 描述                     |
| ------- | ---------------------------------------------- | ------------------------ |
| start   | [Coord][coord_link] \| [GeoJSON][geojson_link] | 起始点，即作为参照物的点 |
| end     | [Coord][coord_link] \| [GeoJSON][geojson_link] | 终止点，即要对比计算的点 |
| options | Object                                         | 可配置项                 |

**options**

| 属性  | 类型    | 默认值 | 描述                                                   |
| ----- | ------- | ------ | ------------------------------------------------------ |
| final | Boolean | false  | 为 true 只计算最终轴承，即返回的数值介于 0 至 360 之间 |

**返回**

Number - 返回的数值介于 -180 至 180 之间，顺时针为正值

**范例**

```javascript
var point1 = turf.point([-75.343, 39.984]);
var point2 = turf.point([-75.534, 39.123]);

var bearing = turf.bearing(point1, point2); // -170.2330491349224
var bearing = turf.bearing(point1, point2, { final: true }); // 189.6453188611693

// 也可以用经纬度坐标
var bearing = turf.bearing([-75.343, 39.984], [-75.534, 39.123]); // -170.2330491349224
```

## center

> npm install @turf/center

接收入参要素([Feature][feature_link])或多要素([FeatureCollection][featurecollection_link])，计算并返回它们的绝对中心点

**参数**

| 入参    | 类型                    | 描述       |
| ------- | ----------------------- | ---------- |
| geojson | [GeoJSON][geojson_link] | 一个或多个 |
| center  | Object                  | 可配置项   |

**options**

| 属性       | 类型   | 默认值 | 描述                                             |
| ---------- | ------ | ------ | ------------------------------------------------ |
| properties | Object | {}     | 出参 type 为 Point 的 GeoJSON 的 properties 属性 |

**返回**

[Feature][feature_link]&lt;[Point][point_link]&gt; - 绝对中心

**范例**

```javascript
var features = turf.featureCollection([
  turf.point([-97.522259, 35.4691]),
  turf.point([-97.502754, 35.463455]),
  turf.point([-97.508269, 35.463245])
]);

var center = turf.center(features);
/*
{
  type: "Feature",
  geometry: {
    coordinates: [-97.5125065, 35.4661725],
    type: "point"
  },
  properties: {}
}
*/

// 单一要素
var center = turf.center(
  turf.polygon([
    [
      [-97.522259, 35.4691],
      [-97.502754, 35.463455],
      [-97.508269, 35.463245],
      [-97.522259, 35.4691]
    ]
  ]),
  {
    properties: {
      desc: "center point"
    }
  }
);
/*
{
  type: "Feature",
  geometry: {
    coordinates: [-97.5125065, 35.4661725],
    type: "point"
  },
  properties: {
    desc: "center point"
  }
}
*/
```

## centerOfMass

> npm install @turf/center-of-mass

接收入参要素([Feature][feature_link])或多要素([FeatureCollection][featurecollection_link])，计算并返回它们的质心

**参数**

| 入参       | 类型                    | 描述                            |
| ---------- | ----------------------- | ------------------------------- |
| geojson    | [GeoJSON][geojson_link] | 一个或多个                      |
| properties | Object                  | 出参 GeoJSON 的 properties 属性 |

**返回**

[Feature][feature_link]&lt;[Point][point_link]&gt; - 质心

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

var center = turf.centerOfMass(polygon, {
  desc: "center of mass"
});
/*
{
  type: "Feature",
  geometry: {
    type: "Point",
    coordinates: [-82.3109243697479, 36.134453781512605]
  },
  properties: {
    desc: "center of mass"
  }
}
*/
```

## centroid

> npm install @turf/centroid

接收入参要素([Feature][feature_link])或多要素([FeatureCollection][featurecollection_link])，计算并返回它们的矩心

**参数**

| 入参       | 类型                    | 描述                            |
| ---------- | ----------------------- | ------------------------------- |
| geojson    | [GeoJSON][geojson_link] | 一个或多个                      |
| properties | Object                  | 出参 GeoJSON 的 properties 属性 |

**返回**

[Feature][feature_link]&lt;[Point][point_link]&gt; - 矩心

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

var centroid = turf.centroid(polygon, {
  desc: "centroid"
});
/*
{
  type: "Feature",
  geometry: {
    type: "Point",
    coordinates: [-82, 36]
  },
  properties: {
    desc: "centroid"
  }
}
*/
```

## destination

> npm install @turf/destination

接收入参的点作为参照物，通过指定单位的距离计算出目标点的位置

> 若以 degress 为单位，将使用 Haversine 公式说明整体曲率

**参数**

| 入参     | 类型                                           | 描述                  |
| -------- | ---------------------------------------------- | --------------------- |
| origin   | [Coord][coord_link] \| [GeoJSON][geojson_link] | 起始点，即参照物      |
| distance | Number                                         | 和起始点的距离        |
| bearing  | Number                                         | 介于 -180 至 180 之间 |
| options  | Object                                         | 可配置项              |

**options**

| 属性       | 类型   | 默认值       | 描述                                               |
| ---------- | ------ | ------------ | -------------------------------------------------- |
| units      | String | "kilometers" | 单位，可选的有 degrees、radians、miles、kilometers |
| properties | Object | {}           | 出参 type 为 Point 的 GeoJSON 的 properties 属性   |

**返回**

[Feature][feature_link]&lt;[Point][point_link]&gt; - 目标点

**范例**

```javascript
var point = turf.point([-75.343, 39.984]);
var distance = 50;
var bearing = 90;
var options = { units: "miles" };

var destination = turf.destination(point, distance, bearing, options);
/*
{
  type: "Feature",
  geometry: {
    type: "Point",
    coordinates: [-74.39858826442095, 39.98016766669771]
  },
  properties: {}
}
*/
```

## distance

> npm install @turf/distance

计算两点之间的距离

> 若以 degress 为单位，将使用 Haversine 公式说明整体曲率

**参数**

| 入参    | 类型                | 描述     |
| ------- | ------------------- | -------- |
| from    | [Coord][coord_link] | 起始点   |
| to      | [Coord][coord_link] | 目标点   |
| options | Object              | 可配置项 |

**options**

| 属性  | 类型   | 默认值       | 描述                                               |
| ----- | ------ | ------------ | -------------------------------------------------- |
| units | String | "kilometers" | 单位，可选的有 degrees、radians、miles、kilometers |

**返回**

Number - 两点的距离

**范例**

```javascript
var from = turf.point([-75.343, 39.984]);
var to = turf.point([-75.534, 39.123]);
var options = { units: "miles" };

var distance = turf.distance(from, to, options); // 60.35329997171415
```

## envelope

> npm install @turf/envelope

接收任意要素([Feature][feature_link])或多要素([FeatureCollection][featurecollection_link])，返回包含所有顶点的 type 为 Polygon 的矩形 GeoJSON

> 值得注意的是，矩形是正四边形，所以会去包含更靠外的要素顶点，从而保证所有的要素都在矩形内

**参数**

| 入参    | 类型                    | 描述       |
| ------- | ----------------------- | ---------- |
| geojson | [GeoJSON][geojson_link] | 一个或多个 |

**返回**

[Feature][feature_link]&lt;[Polygon][polygon_link]&gt; - 包含所有入参要素顶点的 GeoJSON

**范例**

```javascript
var features = turf.featureCollection([
  turf.point([-75.343, 39.984], { name: "Location A" }),
  turf.point([-75.833, 39.284], { name: "Location B" }),
  turf.point([-75.534, 39.123], { name: "Location C" })
]);

var enveloped = turf.envelope(features);
/*
{
  type: "Feature",
  geometry: {
    type: "Polygon",
    coordinates: [
      [
        [-75.833, 39.123],
        [-75.343, 39.123],
        [-75.343, 39.984],
        [-75.833, 39.984],
        [-75.833, 39.123]
      ]
    ]
  },
  properties: {}
}
*/

// 包含更靠外的要素，第四个点[-75.12, 38.4]比第三个点[-75.534, 39.123]有更小的维度，所以第三个点不在矩形的边上
var features = turf.featureCollection([
  turf.point([-75.343, 39.984], { name: "Location A" }),
  turf.point([-75.833, 39.284], { name: "Location B" }),
  turf.point([-75.534, 39.123], { name: "Location C" }),
  turf.point([-75.12, 38.4], { name: "Location D" })
]);
var enveloped = turf.envelope(features);
```

## length

> npm install @turf/length

接收入参 GeoJSON 的长度，通过特定的单位计算长度

> type 为(Multi)Point 的 GeoJSON 长度为 0

**参数**

| 入参    | 类型                    | 描述               |
| ------- | ----------------------- | ------------------ |
| geojson | [GeoJSON][geojson_link] | 需要测量的 GeoJSON |
| options | Object                  | 可配置项           |

**options**

| 属性  | 类型   | 默认值       | 描述                                               |
| ----- | ------ | ------------ | -------------------------------------------------- |
| units | String | "kilometers" | 单位，可选的有 degrees、radians、miles、kilometers |

**返回**

Number - 长度

**范例**

```javascript
var line = turf.lineString([
  [115, -32],
  [131, -22],
  [143, -25],
  [150, -34]
]);
var length = turf.length(line, { units: "miles" }); // 2738.9663893575207
```

## midpoint

> npm install @turf/midpoint

接收两个点，通过地球的曲率计算出中点，并返回该中点

**参数**

| 入参   | 类型                                           | 描述     |
| ------ | ---------------------------------------------- | -------- |
| point1 | [Coord][coord_link] \| [GeoJSON][geojson_link] | 第一个点 |
| point2 | [Coord][coord_link] \| [GeoJSON][geojson_link] | 第二个点 |

**返回**

[Feature][feature_link]&lt;[Point][point_link]&gt;

**范例**

```javascript
var point1 = turf.point([144.834823, -37.771257]);
var point2 = turf.point([145.14244, -37.830937]);

var midpoint = turf.midpoint(point1, point2);
/*
{
  type: "Feature",
  geometry: {
    type: "Point",
    coordinates: [144.98856936202512, -37.801196981553204]
  },
  properties: {}
}
*/
```

## pointOnFeature

> npm install @turf/point-on-feature

接收入参的要素([Feature][feature_link])或多要素([FeatureCollection][featurecollection_link])，返回一个保证在要素表面的 type 为 Point 的 GeoJSON

> 值得注意的是，返回的点要素是固定的，并非随机

**参数**

| 入参    | 类型                    | 描述       |
| ------- | ----------------------- | ---------- |
| geojson | [GeoJSON][geojson_link] | 一个或多个 |

**返回**

[Feature][feature_link]&lt;[Point][point_link]&gt;

**范例**

```javascript
var polygon = turf.polygon([
  [
    [116, -36],
    [131, -32],
    [146, -43],
    [155, -25],
    [133, -9],
    [111, -22],
    [116, -36]
  ]
]);

var pointOnPolygon = turf.pointOnFeature(polygon);

/*
{
  type: "Feature",
  geometry: {
    type: "Point",
    coordinates: [133, -26]
  },
  properties: {}
}
*/
```

## polygonTangents

> npm install @turf/polygon-tangents

接收一个点和一个[(Multi)Polygon][multipolygon_link]，计算二者的切线，返回切线在[(Multi)Polygon][multipolygon_link] 上的点

**参数**

| 入参    | 类型                                                                                      | 描述             |
| ------- | ----------------------------------------------------------------------------------------- | ---------------- |
| pt      | [Coord][coord_link] \| [GeoJSON][geojson_link]                                            | 参与计算的点     |
| polygon | [Feature][feature_link]&lt;[Polygon][polygon_link]\|[MultiPolygon][multipolygon_link]&gt; | 参与计算的多边形 |

**返回**

[Feature][feature_link]&lt;[Point][point_link]&gt; - 包含两个切点的要素集合

**范例**

```javascript
var polygon = turf.polygon([
  [
    [11, 0],
    [22, 4],
    [31, 0],
    [31, 11],
    [21, 15],
    [11, 11],
    [11, 0]
  ]
]);
var point = turf.point([61, 5]);

var tangents = turf.polygonTangents(point, polygon);
/*
{
  type: "FeatureCollection",
  features: [
    {
      type: "Feature",
      geometry: {
        type: "point",
        coordinates: [21, 15]
      },
      properties: {}
    },
    {
      type: "Feature",
      geometry: {
        type: "point",
        coordinates: [31, 0]
      },
      properties: {}
    }
  ]
}
*/
```

## pointToLineDistance

> npm install @turf/point-to-line-distance

接收一个点和一条线段，获取二者之间的最小距离

**参数**

| 入参    | 类型                                                         | 描述           |
| ------- | ------------------------------------------------------------ | -------------- |
| pt      | [Coord][coord_link] \| [GeoJSON][geojson_link]               | 参与计算的点   |
| line    | [Feature][feature_link]&lt;[LineString][linestring_link]&gt; | 参与计算的线段 |
| options | Object                                                       | 可配置项       |

**options**

| 属性     | 类型    | 默认值       | 描述                                               |
| -------- | ------- | ------------ | -------------------------------------------------- |
| units    | String  | "kilometers" | 单位，可选的有 degrees、radians、miles、kilometers |
| mercator | Boolean | false        | 是否要以墨卡托投影或 WGS84 投影计算                |

**返回**

Number - 距离

**范例**

```javascript
var pt = turf.point([0, 0]);
var line = turf.lineString([
  [1, 1],
  [-1, 1]
]);

var distance = turf.pointToLineDistance(pt, line, { units: "miles" }); // 69.11854715938406
```

## rhumbBearing

> npm install @turf/rhumb-bearing

接收两个点，获取二者沿 Rhumb line 与正北方向所形成的角度

> 什么是[rhumb line](https://www.maritimeprofessional.com/blogs/post/rhumb-line-13315)

**参数**

| 入参    | 类型                                           | 描述     |
| ------- | ---------------------------------------------- | -------- |
| start   | [Coord][coord_link] \| [GeoJSON][geojson_link] | 起始点   |
| end     | [Coord][coord_link] \| [GeoJSON][geojson_link] | 终止点   |
| options | Object                                         | 可配置项 |

**options**

| 属性  | 类型    | 默认值 | 描述                                                   |
| ----- | ------- | ------ | ------------------------------------------------------ |
| final | Boolean | false  | 为 true 只计算最终轴承，即返回的数值介于 0 至 360 之间 |

**返回**

Number - 返回的数值介于 -180 至 180 之间，顺时针为正值

**范例**

```javascript
var point1 = turf.point([-75.343, 39.984], { "marker-color": "#F00" });
var point2 = turf.point([-75.534, 39.123], { "marker-color": "#00F" });

var bearing = turf.rhumbBearing(point1, point2); // -170.29417535572546
var bearing = turf.rhumbBearing(point1, point2, { final: true }); // 9.705824644274514
```

## rhumbDestination

> npm install @turf/rhumb-destination

获取以入参的点为参照物，通过指定单位的距离计算出沿 rhumb line 的目标点的位置

> 什么是[rhumb line](https://www.maritimeprofessional.com/blogs/post/rhumb-line-13315)

**参数**

| 入参     | 类型                                           | 描述                  |
| -------- | ---------------------------------------------- | --------------------- |
| origin   | [Coord][coord_link] \| [GeoJSON][geojson_link] | 参与计算的点          |
| distance | Number                                         | 参与计算的线段        |
| bearing  | Number                                         | 介于 -180 至 180 之间 |
| options  | Object                                         | 可配置项              |

**options**

| 属性       | 类型   | 默认值       | 描述                                               |
| ---------- | ------ | ------------ | -------------------------------------------------- |
| units      | String | "kilometers" | 单位，可选的有 degrees、radians、miles、kilometers |
| properties | Object | {}           | 出参 type 为 Point 的 GeoJSON 的 properties 属性   |

**返回**

Number - 目标点

**范例**

```javascript
var pt = turf.point([-75.343, 39.984], { "marker-color": "F00" });
var distance = 50;
var bearing = 90;
var options = { units: "miles" };

var destination = turf.rhumbDestination(pt, distance, bearing, options);
/*
{
  type: "Feature",
  geometry: {
    type: "Point",
    coordinates: [-74.3985529486182, 39.984]
  },
  properties: {}
}
*/
```

## rhumbDistance

> npm install @turf/rhumb-distance

接收两个点，计算二者沿 rhumb line 的距离

> 什么是[rhumb line](https://www.maritimeprofessional.com/blogs/post/rhumb-line-13315)

**参数**

| 入参    | 类型                                           | 描述     |
| ------- | ---------------------------------------------- | -------- |
| from    | [Coord][coord_link] \| [GeoJSON][geojson_link] | 起始点   |
| to      | [Coord][coord_link] \| [GeoJSON][geojson_link] | 目标点   |
| options | Object                                         | 可配置项 |

**options**

| 属性  | 类型   | 默认值       | 描述                                               |
| ----- | ------ | ------------ | -------------------------------------------------- |
| units | String | "kilometers" | 单位，可选的有 degrees、radians、miles、kilometers |

**返回**

Number - 距离

**范例**

```javascript
var from = turf.point([-75.343, 39.984]);
var to = turf.point([-75.534, 39.123]);
var options = { units: "miles" };

var distance = turf.rhumbDistance(from, to, options); // 60.35331130430885
```

## square

> npm install @turf/square

接收 bbox(边界框) 计算包含入参的最小正方形边界

**参数**

| 入参 | 类型              | 描述                                 |
| ---- | ----------------- | ------------------------------------ |
| bbox | [BBox][bbox_link] | 以 minX、minY、maxX、maxY 的顺序排列 |

**返回**

[BBox][bbox_link]

**范例**

```javascript
var bbox = [-20, -20, -15, 0];
var squared = turf.square(bbox); // [-27.5, -20, -7.5, 0]
```

## greatCircle

> npm install @turf/great-circle

接收两个点，计算二者的大圆路线，返回 type 为 LineString 的大圆线 GeoJSON

**参数**

| 入参    | 类型                                           | 描述     |
| ------- | ---------------------------------------------- | -------- |
| start   | [Coord][coord_link] \| [GeoJSON][geojson_link] | 起始点   |
| end     | [Coord][coord_link] \| [GeoJSON][geojson_link] | 目标点   |
| options | Object                                         | 可配置项 |

**options**

| 属性       | 类型   | 默认值 | 描述                                           |
| ---------- | ------ | ------ | ---------------------------------------------- |
| properties | Object | {}     | 出参 GeoJSON 的 properties 属性                |
| npoints    | Number | 100    | 大圆弧的点的数量                               |
| offset     | Number | 10     | 控制行与日期线交叉的可能性，数值越高可能性越高 |

**返回**

[Feature][feature_link]&lt;[LineString][linestring_link]&gt; - 大圆线

**范例**

```javascript
var start = turf.point([-122, 48]);
var end = turf.point([-77, 39]);

var greatCircle = turf.greatCircle(start, end, { name: "Seattle to DC" });
```

[geojson_link]: https://tools.ietf.org/html/rfc7946#section-3
[feature_link]: https://tools.ietf.org/html/rfc7946#section-3.2
[featurecollection_link]: https://tools.ietf.org/html/rfc7946#section-3.3
[point_link]: https://tools.ietf.org/html/rfc7946#section-3.1.2
[polygon_link]: https://tools.ietf.org/html/rfc7946#section-3.1.6
[bbox_link]: https://tools.ietf.org/html/rfc7946#section-5
[coord_link]: https://tools.ietf.org/html/rfc7946#section-3.1.1
[multipolygon_link]: https://tools.ietf.org/html/rfc7946#section-3.1.7
[linestring_link]: https://tools.ietf.org/html/rfc7946#section-3.1.4
