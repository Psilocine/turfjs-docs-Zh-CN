# data

## sample

> npm install @turf/sample

接收一个任意的要素集([FeatureCollection][featurecollection_link])，随机挑选出指定数量的要素并以要素集的格式返回

> 值得注意的是，当入参的指定数量大于要素集本身长度，features 有可能会返回 undefined

**参数**

| 入参              | 类型                                        | 描述         |
| ----------------- | ------------------------------------------- | ------------ |
| featurecollection | [FeatureCollection][featurecollection_link] | 可配置项     |
| num               | Number                                      | 要返回的数量 |

**options**

| 属性 | 类型           | 默认值 | 描述   |
| ---- | -------------- | ------ | ------ |
| bbox | Array          |        | 边界框 |
| id   | String\|Number |        | 标识符 |

**返回**

[FeatureCollection][featurecollection_link]

**范例**

```javascript
var points = turf.randomPoint(100, { bbox: [-80, 30, -60, 60] });

var sample = turf.sample(points, 5);

var sample2 = turf.sample(points, 200);
/*
{
  type: "FeatureCollection",
  features: [undefined, {...全部100个点要素}]
}
*/
```

[featurecollection_link]: https://tools.ietf.org/html/rfc7946#section-3.3
