---
title: 数组
createTime: 2024/12/25 16:34:46
permalink: /st-common-core/arr/
---

## 数组转化工具

### 将数组转化为树形结构

`arrConvert2Tree` 工具函数可以将一个数组转化为树形结构

::: note

1. 对于返回的树形结构的新数组，不能算是一个完全新的数组，因为对于原数组元素对象中简单数据类型的属性在转化过程中会进行复制，但是对于==复杂数据类型==(数组、对象等)，则是直接==复制其引用地址==；

2. 在转化后的树形结构的数组中，==子级元素会被添加到父级元素的 children 属性中==，其中 children 属性是一个数组类型；

:::

| 参数名              | 说明                    | 类型       | 默认值 |
|------------------|-----------------------|----------|-----|
| origin           | 要转化为树形结构的原数组          | `any[]`  |     |
| primaryFieldName | 原数组中元素对象的唯一标识字段名      | `string` |     |
| parentFieldName  | 原数组中元素对象用于指向其父级元素的字段名 | `string` |     |

::: code-tabs
@tab 导入

```js
import {arrConvert2Tree} from "st-common-core"
```

:::
