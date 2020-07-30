# aggregation

## collect

> npm install @turf/collect

接收一组面要素集，一组点要素集，如果某个点要素在某个面要素内，便会将该点的指定属性转移到该面的指定属性里，如果有多个点的话，则属性为数组

**参数**

| 入参        | 类型                                                                       | 描述                   |
| ----------- | -------------------------------------------------------------------------- | ---------------------- |
| polygons    | [FeatureCollection][featurecollection_link]&lt;[Polygon][polygon_link]&gt; | 面要素集               |
| points      | [FeatureCollection][featurecollection_link]&lt;[Point][point_link]&gt;     | 点要素集               |
| inProperty  | String                                                                     | 点要素的要被转移的属性 |
| outProperty | String                                                                     | 面要素转移属性的重命名 |

**返回**

[FeatureCollection][featurecollection_link]&lt;[Polygon][polygon_link]&gt;

**范例**

```javascript
var poly1 = turf.polygon([
  [
    [0, 0],
    [10, 0],
    [10, 10],
    [0, 10],
    [0, 0]
  ]
]);
var poly2 = turf.polygon([
  [
    [10, 0],
    [20, 10],
    [20, 20],
    [20, 0],
    [10, 0]
  ]
]);
var polyFC = turf.featureCollection([poly1, poly2]);
var pt1 = turf.point([5, 5], { population: 200 });
var pt2 = turf.point([1, 3], { population: 600 });
var pt3 = turf.point([14, 2], { population: 100 });
var pt4 = turf.point([13, 1], { population: 200 });
var pt5 = turf.point([19, 7], { population: 300 });
var pointFC = turf.featureCollection([pt1, pt2, pt3, pt4, pt5]);
var collected = turf.collect(polyFC, pointFC, "population", "values");
var values = collected.features[0].properties.values;
//=values => [200, 600] pt1、pt2这两个点在第一个面要素里，所有把population的值转移给了第一个面要素的values
```

## clustersDbscan

> npm install @turf/clusters-dbscan

接收一组点要素，根据聚类算法[DBSCAN](https://baike.baidu.com/item/DBSCAN/4864716?fr=aladdin)，返回计算后的点要素集

> DBSCAN 算法以密度为本。给定某空间里的一个点集合，这算法能把附近的点分成一组（有很多相邻点的点），并标记出位于低密度区域的局外点（最接近它的点也十分远）

**参数**

| 入参        | 类型                                                                   | 描述                                       |
| ----------- | ---------------------------------------------------------------------- | ------------------------------------------ |
| points      | [FeatureCollection][featurecollection_link]&lt;[Point][point_link]&gt; | 点要素集                                   |
| maxDistance | Number                                                                 | 生成集群中任何点之间的最大距离，单位为千米 |
| options     | Object                                                                 | 可配置项                                   |

**options**

| 属性      | 类型    | 默认值       | 描述                                                                  |
| --------- | ------- | ------------ | --------------------------------------------------------------------- |
| units     | String  | "kilometers" | 单位，可选的有 kilometers                                             |
| mutate    | Boolean | false        | 是否返回入参的 GeoJSON，为 true 性能能显著提高                        |
| minPoints | Number  | 3            | 生成单个集群的最小点要素数量，不满足的点要素将被分类成噪声点(`noise`) |

**返回**

[FeatureCollection][featurecollection_link]&lt;[Point][point_link]&gt;

**范例**

```javascript
// create random points with random z-values in their properties
var points = turf.randomPoint(100, { bbox: [0, 30, 20, 50] });
var maxDistance = 100;
var clustered = turf.clustersDbscan(points, maxDistance);
```

## clustersKmeans

> npm install @turf/clusters-kmeans

接收一组点要素集合，根据聚类算法[k-means](https://baike.baidu.com/item/K%E5%9D%87%E5%80%BC%E8%81%9A%E7%B1%BB%E7%AE%97%E6%B3%95)，返回计算后的点要素集

> k-means 把 n 个点（可以是样本的一次观察或一个实例）划分到 k 个聚类中，使得每个点都属于离他最近的均值（此即聚类中心）对应的聚类，以之作为聚类的标准

**参数**

| 入参    | 类型                                                                   | 描述     |
| ------- | ---------------------------------------------------------------------- | -------- |
| points  | [FeatureCollection][featurecollection_link]&lt;[Point][point_link]&gt; | 点要素集 |
| options | Object                                                                 | 可配置项 |

**options**

| 属性             | 类型    | 默认值                      | 描述                                           |
| ---------------- | ------- | --------------------------- | ---------------------------------------------- |
| numberOfClusters | Number  | Math.sqrt(numberOfPoints/2) | 集群数量                                       |
| mutate           | Boolean | false                       | 是否返回入参的 GeoJSON，为 true 性能能显著提高 |

**返回**

[FeatureCollection][featurecollection_link]&lt;[Point][point_link]&gt;

**范例**

```javascript
// create random points with random z-values in their properties
var points = turf.randomPoint(100, { bbox: [0, 30, 20, 50] });
var options = { numberOfClusters: 7 };
var clustered = turf.clustersKmeans(points, options);
```

[featurecollection_link]: https://tools.ietf.org/html/rfc7946#section-3.3
[point_link]: https://tools.ietf.org/html/rfc7946#section-3.1.2
[polygon_link]: https://tools.ietf.org/html/rfc7946#section-3.1.6
