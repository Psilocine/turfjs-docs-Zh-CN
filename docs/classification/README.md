# classification

## nearestPoint

> npm install @turf/nearest-point

接收一组点要素集和一个参照物点要素，返回该点要素集里最接近参照物点的点要素，包括两个属性：在要素集里的 index、和参照物的距离(英里)

**参数**

| 入参        | 类型                                                                   | 描述         |
| ----------- | ---------------------------------------------------------------------- | ------------ |
| targetPoint | [Coord][coord_link]                                                    | 参照物点要素 |
| points      | [FeatureCollection][featurecollection_link]&lt;[Point][point_link]&gt; | 点要素集     |

**返回**

[Feature][feature_link]&lt;[Point][point_link]&gt;

**范例**

```javascript
var targetPoint = turf.point([28.965797, 41.010086], { "marker-color": "#0F0" });
var points = turf.featureCollection([
  turf.point([28.973865, 41.011122]),
  turf.point([28.948459, 41.024204]),
  turf.point([28.938674, 41.013324])
]);

var nearest = turf.nearestPoint(targetPoint, points);
/*
{
  type: "Feature",
  geometry: {
    type: "Point",
    coordinates: [28.973865, 41.011122]
  },
  properties: {
    featureIndex: 0,
    distanceToPoint: 0.6866892586431127
  }
}
*/
```

[feature_link]: https://tools.ietf.org/html/rfc7946#section-3.2
[featurecollection_link]: https://tools.ietf.org/html/rfc7946#section-3.3
[point_link]: https://tools.ietf.org/html/rfc7946#section-3.1.2
[coord_link]: https://tools.ietf.org/html/rfc7946#section-3.1.1
