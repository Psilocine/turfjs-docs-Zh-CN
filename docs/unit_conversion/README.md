# unit conversion

## bearingToAzimuth

> npm install @turf/helpers

接收与正北方向所形成的角度(介于 -180 至 180 之间)，返回正值(介于 0 至 360 之间)

**参数**

| 入参    | 类型   | 描述                  |
| ------- | ------ | --------------------- |
| bearing | Number | 介于 -180 至 180 之间 |

**返回**

Number - 介于 0 至 360 之间的角度

**范例**

```javascript
turf.bearingToAzimuth(-50); // 310

turf.bearingToAzimuth(50); // 50
```

## convertArea

> npm install @turf/helpers

接收一个面积数值，返回其指定单位的面积数值。单位有 kilometers(千米), kilometres(千米), meters(米), metres(米), centimetres(厘米), millimeters(毫米), acres(英亩), miles(英里), yards(码), feet(英尺), inches(英寸)

**参数**

| 入参         | 类型   | 描述               |
| ------------ | ------ | ------------------ |
| area         | Number | 要被转换的面积数值 |
| originalUnit | String | 初始单位           |
| finalUnit    | String | 转换后的指定单位   |

**返回**

Number

**范例**

```javascript
turf.convertArea(1, "kilometers", "meters"); // 1000000，面积公式Math.pow(1000, 2)
```

## convertLength

> npm install @turf/helpers

接收一个长度数值，返回其指定单位的长度数值。单位有 kilometers(千米), nauticalmiles(海里), meters(米), metres(米), centimeters(厘米), miles(英里), yards(码), feet(英尺), inches(英寸)

**参数**

| 入参         | 类型   | 描述               |
| ------------ | ------ | ------------------ |
| area         | Number | 要被转换的面积数值 |
| originalUnit | String | 初始单位           |
| finalUnit    | String | 转换后的指定单位   |

**返回**

Number

**范例**

```javascript
turf.convertLength(100, "centimeters", "meters"); // 1
```

## degreesToRadians

> npm install @turf/helpers

接收一个角度数值，返回弧度数值

**参数**

| 入参    | 类型   | 描述                     |
| ------- | ------ | ------------------------ |
| degrees | Number | 角度，介于 0 至 360 之间 |

**返回**

Number - 弧度

## lengthToRadians

> npm install @turf/helpers

接收一个真实单位的距离测量数值(假设是球形地球)，返回其指定单位的数值。单位有 miles(英里), nauticalmiles(海里), inches(英寸), yards(码), meters(米), metres(米), kilometers(千米), centimeters(厘米), feet(英尺)

**参数**

| 入参     | 类型   | 描述         |
| -------- | ------ | ------------ |
| distance | Number | 测量数值     |
| units    | String | 转换后的单位 |

**返回**

Number - 弧度

## lengthToDegrees

> npm install @turf/helpers

接收一个真实单位的距离测量数值(假设是球形地球)，返回其指定单位的数值。单位有 miles(英里), nauticalmiles(海里), inches(英寸), yards(码), meters(米), metres(米), kilometers(千米), centimeters(厘米), feet(英尺)

**参数**

| 入参     | 类型   | 描述         |
| -------- | ------ | ------------ |
| distance | Number | 测量数值     |
| units    | String | 转换后的单位 |

**返回**

Number - 角度

**范例**

## radiansToLength

> npm install @turf/helpers

接收一个弧度数值，返回其指定单位的数值。单位有 miles(英里), nauticalmiles(海里), inches(英寸), yards(码), meters(米), metres(米), kilometers(千米), centimeters(厘米), feet(英尺)

**参数**

| 入参    | 类型   | 描述         |
| ------- | ------ | ------------ |
| radians | Number | 跨球面的弧度 |
| units   | String | 转换后的单位 |

**返回**

Number - 长度

## radiansToDegrees

> npm install @turf/helpers

接收一个弧度数值，返回其对应的角度数值

**参数**

| 入参    | 类型   | 描述       |
| ------- | ------ | ---------- |
| radians | Number | 角度的弧度 |

**返回**

Number - 介于 0 至 360 之间

**范例**

```javascript
turf.radiansToDegrees(Math.PI); // 180
```

## toMercator

> npm install @turf/projection

接收 WGS84 坐标系 的 GeoJSON 对象，转换为墨卡托(EPSG:900913，等效 EPSG:3857)坐标投影

**参数**

| 入参    | 类型                              | 描述                  |
| ------- | --------------------------------- | --------------------- |
| geojson | [GeoJSON][geojson_link]\|Position | WGS-84 坐标系 GeoJSON |
| options | Object                            | 可配置项              |

**options**

| 属性   | 类型    | 默认值 | 描述                                           |
| ------ | ------- | ------ | ---------------------------------------------- |
| mutate | Boolean | false  | 是否返回入参的 GeoJSON，为 true 性能能显著提高 |

**返回**

[GeoJSON][geojson_link]

**范例**

```javascript
var pt = turf.point([-71, 41]);
var converted = turf.toMercator(pt);
/*
{
  type: "FeatureCollection",
  geometry: {
    type: "Point"
    coordinates: [-7903683.846322424, 5012341.663847514]
  },
  properties: {}
}
*/
```

## toWgs84

> npm install @turf/projection

接收 墨卡托(EPSG:900913，等效 EPSG:3857)坐标系 的 GeoJSON 对象，转换为 WGS84 坐标投影

**参数**

| 入参    | 类型                              | 描述                     |
| ------- | --------------------------------- | ------------------------ |
| geojson | [GeoJSON][geojson_link]\|Position | EPSG:3857 坐标系 GeoJSON |
| options | Object                            | 可配置项                 |

**options**

| 属性   | 类型    | 默认值 | 描述                                           |
| ------ | ------- | ------ | ---------------------------------------------- |
| mutate | Boolean | false  | 是否返回入参的 GeoJSON，为 true 性能能显著提高 |

**返回**

[GeoJSON][geojson_link]

**范例**

```javascript
var pt = turf.point([-7903683.846322424, 5012341.663847514]);
var converted = turf.toWgs84(pt);
/*
{
  type: "FeatureCollection",
  geometry: {
    type: "Point"
    coordinates: [-71, 41]
  },
  properties: {}
}
*/
```

[geojson_link]: https://tools.ietf.org/html/rfc7946#section-3
