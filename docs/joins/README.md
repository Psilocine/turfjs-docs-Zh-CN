# joins

## pointsWithinPolygon

> npm install @turf/points-within-polygon

接收一个面要素和点要素(集合)，计算并返回在该面要素内部的点

**参数**

| 入参     | 类型                                                                                                                                                              | 描述           |
| -------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------- |
| points   | [Feature][feature_link]\|[FeatureCollection][featurecollection_link]&lt;[Point][point_link]&gt;                                                                   | 要计算的点要素 |
| polygons | [FeatureCollection][featurecollection_link]\|[Geometry][geometry_link]\|[Feature][feature_link]&lt;[Polygon][polygon_link]\|[MultiPolygon][multipolygon_link]&gt; | 面要素         |

**返回**

[FeatureCollection][featurecollection_link]&lt;[Point][point_link]&gt;

**范例**

```javascript
var points = turf.points([
  [-46.6318, -23.5523],
  [-46.6246, -23.5325],
  [-46.6062, -23.5513],
  [-46.663, -23.554],
  [-46.643, -23.557]
]);

var searchWithin = turf.polygon([
  [
    [-46.653, -23.543],
    [-46.634, -23.5346],
    [-46.613, -23.543],
    [-46.614, -23.559],
    [-46.631, -23.567],
    [-46.653, -23.56],
    [-46.653, -23.543]
  ]
]);

var ptsWithin = turf.pointsWithinPolygon(points, searchWithin); // [-46.6318, -23.5523]、[-46.643, -23.557]
```

## tag

> npm install @turf/tag

接收一组点要素集合和一组面要素集合，面要素内的点要素进行空间连接和属性继承

**参数**

| 入参     | 类型                                                                       | 描述                   |
| -------- | -------------------------------------------------------------------------- | ---------------------- |
| points   | [FeatureCollection][featurecollection_link]&lt;[Point][point_link]&gt;     | 点要素集合             |
| polygons | [FeatureCollection][featurecollection_link]&lt;[Polygon][polygon_link]&gt; | 面要素集合             |
| field    | String                                                                     | 面要素的要被继承的属性 |
| outField | String                                                                     | 点要素继承属性的重命名 |

**返回**

[FeatureCollection][featurecollection_link]&lt;[Point][point_link]&gt;

**范例**

```javascript
var pt1 = turf.point([-77, 44]);
var pt2 = turf.point([-77, 38]);
var poly1 = turf.polygon(
  [
    [
      [-81, 41],
      [-81, 47],
      [-72, 47],
      [-72, 41],
      [-81, 41]
    ]
  ],
  { pop: 3000 }
);
var poly2 = turf.polygon(
  [
    [
      [-81, 35],
      [-81, 41],
      [-72, 41],
      [-72, 35],
      [-81, 35]
    ]
  ],
  { pop: 1000 }
);

var points = turf.featureCollection([pt1, pt2]);
var polygons = turf.featureCollection([poly1, poly2]);

var tagged = turf.tag(points, polygons, "pop", "population");
/*
{
  type: "FeatureCollection",
  faetures: [
    {
      type: "Feature",
      geometry: {
        type: "Point",
        coordinates: [-77, 44]
      },
      properties: {
        population: 3000 // pop属性重命名为population
      }
    },
    {
      type: "Feature",
      geometry: {
        type: "Point",
        coordinates: [-77, 38]
      },
      properties: {
        population: 1000
      }
    }
  ]
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
