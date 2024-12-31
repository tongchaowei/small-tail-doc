---
title: Iconify 工具函数
createTime: 2024/12/30 23:53:05
permalink: /st-common-ui-vue3/utils/iconify/
---

Iconify 工具函数提供了对 [Iconify Queries API](https://iconify.design/docs/api/queries.html) 和 [Iconify for Vue Functions](https://iconify.design/docs/icon-components/vue/icon-exists.html) 进行封装的一系列和 Iconify 图标处理相关的工具函数。

## 导入示例

```js
import {getIconifySetIcons} from 'st-common-ui-vue3'
```

## Iconify Queries API

::: tip 提示
对 [Iconify Queries API](https://iconify.design/docs/api/queries.html) 封装的工具函数，都是采用 fetch 向 [https://api.iconify.design](https://api.iconify.design) 发送相应的请求。
:::

### getIconifyIconSvg

获取 Iconify 指定图标集指定图标的 SVG 代码字符串

::: note Iconify 文档：[https://iconify.design/docs/api/svg.html](https://iconify.design/docs/api/svg.html)
:::

参数列表

| 参数名    | 描述                          | 类型       | 必填 |
|--------|-----------------------------|----------|----|
| prefix | 图标集前缀，用于指定要获取 SVG 的图标所在的图标集 | `string` | 是  |
| name   | 图标名称，用于指定要获取图标 SVG 的图标名称    | `string` | 是  |

返回值

| 类型                | 描述                           |
|-------------------|------------------------------|
| `Promise<string>` | Iconify 指定图标集指定图标的 SVG 代码字符串 |

### getIconifyIconCSS

获取 Iconify 指定图标集指定图标的 CSS 代码字符串

::: note Iconify 文档：[https://iconify.design/docs/api/css.html](https://iconify.design/docs/api/css.html)
:::

参数列表

| 参数名    | 描述                          | 类型         | 必填 |
|--------|-----------------------------|------------|----|
| prefix | 图标集前缀，用于指定要获取 CSS 的图标所在的图标集 | `string`   | 是  |
| icons  | 图标名称列表，用于指定要获取 CSS 的图标名称列表  | `string[]` | 是  |

返回值

| 类型                | 描述                           |
|-------------------|------------------------------|
| `Promise<string>` | Iconify 指定图标集指定图标的 CSS 代码字符串 |

### getIconifyIconData

获取 Iconify 指定图标集中的指定图标数据

::: note Iconify 文档：[https://iconify.design/docs/api/icon-data.html](https://iconify.design/docs/api/icon-data.html)
:::

参数列表

| 参数名    | 描述                        | 类型         | 必填 |
|--------|---------------------------|------------|----|
| prefix | 图标集前缀，用于指定要获取的图标数据所在的图标集  | `string`   | 是  |
| icons  | 图标名称列表，用于指定要获取图标数据的图标名称列表 | `string[]` | 是  |

返回值

| 类型                     | 描述                                                                             |
|------------------------|--------------------------------------------------------------------------------|
| `Promise<IconifyJSON>` | Iconify 指定图标集指定图标数据对象，要获取的图标数据以对象形式存放在返回对象的 icons 属性中，其中，图标名称为 key，图标数据为 value |

### getIconifyIconDataParse

获取 Iconify 指定图标集中的指定图标数据，并将获取到的每个图标数据解析为 IconifyIcon 对象，以数组形式返回

参数列表

| 参数名    | 描述                        | 类型         | 必填 |
|--------|---------------------------|------------|----|
| prefix | 图标集前缀，用于指定要获取的图标数据所在的图标集  | `string`   | 是  |
| icons  | 图标名称列表，用于指定要获取图标数据的图标名称列表 | `string[]` | 是  |

返回值

| 类型                       | 描述                                                                                            |
|--------------------------|-----------------------------------------------------------------------------------------------|
| `Promise<IconifyIcon[]>` | IconifyIcon 对象数组，每个 IconifyIcon 对象代表一个图标，包含 body、height、width、left、top、rotate、hFlip、vFlip 等属性 |

### getIconifyIconSets

获取 Iconify 图标集信息对象

::: note Iconify 文档：[https://iconify.design/docs/api/collections.html](https://iconify.design/docs/api/collections.html)
:::

参数列表

| 参数名      | 描述                    | 类型         | 必填 |
|----------|-----------------------|------------|----|
| prefixes | 图标集前缀列表，用于指定要获取信息的图标集 | `string[]` | 是  |

返回值

| 类型                                     | 描述                                         |
|----------------------------------------|--------------------------------------------|
| `Promise<Record<string, IconifyInfo>>` | Iconify 图标集信息对象，每个图标集的名称为 key，图标集信息为 value |

### getIconifySetIcons

获取 Iconify 指定图标集中的图标列表

::: note Iconify 文档：[https://iconify.design/docs/api/collection.html](https://iconify.design/docs/api/collection.html)
:::

参数列表

| 参数名           | 描述                    | 类型        | 必填 | 默认值     |
|---------------|-----------------------|-----------|----|---------|
| prefix        | 图标集前缀，用于指定要获取的图标集     | `string`  | 是  | -       |
| info          | 在获取到的响应数据中是否包含图标集的信息  | `boolean` | 否  | `false` |
| uncategorized | 在返回的对象中是否包含未分类的图标名称列表 | `boolean` | 否  | `false` |

返回值

| 类型                         | 描述                    |
|----------------------------|-----------------------|
| `Promise<IconifySetIcons>` | Iconify 指定图标集图标列表信息对象 |

### searchIconifyIcons

搜索 Iconify 图标

::: note Iconify 文档：[https://iconify.design/docs/api/search.html](https://iconify.design/docs/api/search.html)
如果搜索字符串 query 中包含特殊关键字，官方文档相关说明：[https://iconify.design/docs/api/search.html#keywords](https://iconify.design/docs/api/search.html#keywords)
:::

参数列表

| 参数名      | 描述                                 | 类型         | 必填 | 默认值  |
|----------|------------------------------------|------------|----|------|
| query    | 图标搜索字符串                            | `string`   | 是  | -    |
| limit    | 搜索结果数量限制，默认为 64，最小值为 32，最大值为 999   | `number`   | 否  | `64` |
| start    | 返回搜索结果的起始索引                        | `number`   | 否  | `0`  |
| prefixes | 图标集前缀列表，用于将搜索结果限制在指定图标集中，默认为全部图标集  | `string[]` | 否  | `[]` |
| category | 图标集的类别，用于将搜索结果限制在指定类别的图标集中，默认为全部类别 | `string`   | 否  | `''` |

返回值

| 类型                                  | 描述               |
|-------------------------------------|------------------|
| `Promise<SearchIconifyIconsResult>` | Iconify 图标搜索结果对象 |

## Iconify for Vue Functions

::: tip 提示
对 [Iconify for Vue Functions](https://iconify.design/docs/icon-components/vue/icon-exists.html) 封装的工具函数，都仅是对 Iconify for Vue Function 的一层简单的包裹，主要是为了用户在安装了当前组件库后无需另外安装 `@iconify/vue`。
:::

### iconifyIconExists

检查图标数据是否可用于渲染

参数列表

| 参数名  | 描述   | 类型       | 必填 |
|------|------|----------|----|
| name | 图标名称 | `string` | 是  |

返回值

| 类型        | 描述                                       |
|-----------|------------------------------------------|
| `boolean` | 是否可用于渲染，如果图标可用，则返回true；如果图标不可用，则返回false。 |

### getIconifyIcon

从本地存储图标数据中获取指定的图标数据

参数列表

| 参数名  | 描述   | 类型       | 必填 |
|------|------|----------|----|
| name | 图标名称 | `string` | 是  |

返回值

| 类型                    | 描述                                |
|-----------------------|-----------------------------------|
| `IconifyIcon \| null` | IconifyIcon 对象，如果图标数据不存在，则返回 null |

### addIconifyIcon

将图标数据添加到本地存储图标数据中

参数列表

| 参数名  | 描述   | 类型            | 必填 |
|------|------|---------------|----|
| name | 图标名称 | `string`      | 是  |
| data | 图标数据 | `IconifyIcon` | 是  |

返回值

| 类型        | 描述                                       |
|-----------|------------------------------------------|
| `boolean` | 是否添加成功，如果添加成功，则返回 true；如果添加失败，则返回 false。 |

### addIconifyCollection

将图标集中所有图标数据添加到本地存储图标数据中

参数列表

| 参数名      | 描述          | 类型            | 必填 |
|----------|-------------|---------------|----|
| data     | 图标集数据       | `IconifyJSON` | 是  |
| provider | API 提供程序 ID | `string`      | 否  |

返回值

| 类型        | 描述                                       |
|-----------|------------------------------------------|
| `boolean` | 是否添加成功，如果添加成功，则返回 true；如果添加失败，则返回 false。 |

### loadIconifyIcon

使用 Iconify API 检索获取图标数据

参数列表

| 参数名  | 描述   | 类型                          | 必填 |
|------|------|-----------------------------|----|
| icon | 图标名称 | `string \| IconifyIconName` | 是  |

返回值

| 类型                               | 描述   |
|----------------------------------|------|
| `Promise<Required<IconifyIcon>>` | 图标数据 |

### loadIconifyIcons

使用 Iconify API 检索获取多个图标数据

::: note 详细使用方法请参考：[https://iconify.design/docs/icon-components/vue/load-icons.html](https://iconify.design/docs/icon-components/vue/load-icons.html)
:::

参数列表

| 参数名      | 描述                               | 类型                              | 必填 |
|----------|----------------------------------|---------------------------------|----|
| icon     | 图标名称列表                           | `(string \| IconifyIconName)[]` | 是  |
| callback | 从 Iconify API 检索获取到图标数据时会调用的回调函数 | `IconifyIconLoaderCallback`     | 否  |

返回值

| 类型                       | 描述                                                                                |
|--------------------------|-----------------------------------------------------------------------------------|
| `IconifyIconLoaderAbort` | 返回一个函数，可以用它来停止加载图标。例如，当正在加载自定义组件中的图标时，但组件的生命周期在图标加载之前就结束了，因此需要调用返回的函数停止加载图标，删除回调。 |

### enableIconifyCache

在 localStorage 和 sessionStorage 中启用 Iconify 的缓存，默认情况下，localStorage 处于启用状态，sessionStorage 处于禁用状态，当组件从 API 检索新图标时，图标数据已经存储在浏览器存储中，组件可以从缓存中检索图标，而不是发送 API 查询。

参数列表

| 参数名     | 描述                                                                                                                                                            | 类型                              | 必填 |
|---------|---------------------------------------------------------------------------------------------------------------------------------------------------------------|---------------------------------|----|
| storage | “local“ 表示 localStorage；“session” 表示 sessionStorage；“all” 表示同时启用 localStorage 和 sessionStorage，当同时启用 localStorage 和 sessionStorage 时，图标数据仅缓存在 localStorage 中。 | `'local' \| 'session' \| 'all'` | 是  |

返回值

| 类型     | 描述   |
|--------|------|
| `void` | 无返回值 |

### disableIconifyCache

禁用 localStorage 和 sessionStorage 中 Iconify 的缓存，默认情况下，localStorage 处于启用状态，sessionStorage 处于禁用状态。

参数列表

| 参数名 | 描述                                                                                             | 类型 | 必填 |
|--------|------------------------------------------------------------------------------------------------|------|------|
| storage | “local“ 表示 localStorage；“session” 表示 sessionStorage；“all” 表示同时禁用 localStorage 和 sessionStorage | `'local' \| 'session' \| 'all'` | 是 |

返回值

| 类型 | 描述 |
|------|------|
| `void` | 无返回值 |

## 类型定义

::: tip 提示
以下的类型定义为当前组件库中的自定义类型，并非 Iconify 官方提供的类型定义，当然代码来源于 Iconify 官方文档。
:::

### IconifySetIcons

获取 Iconify 指定图标集中图标列表时返回的结果对象类型

```typescript
import {IconifyInfo, IconifyJSON} from "@iconify/types"

export interface IconifySetIcons {
  // Icon set prefix
  prefix: string;
  // Number of icons (duplicate of info?.total)
  total: number;
  // Icon set title, if available (duplicate of info?.name)
  title?: string;
  // Icon set info
  info?: IconifyInfo;
  // List of icons without categories
  uncategorized?: string[];
  // List of icons, sorted by category
  categories?: Record<string, string[]>;
  // List of hidden icons
  hidden?: string[];
  // List of aliases, key = alias, value = parent icon
  aliases?: Record<string, string>;
  // Characters, key = character, value = icon name
  chars?: Record<string, string>;
  // Themes
  themes?: IconifyJSON['themes'];
  prefixes?: IconifyJSON['prefixes'];
  suffixes?: IconifyJSON['suffixes'];
}
```

### SearchIconifyIconsParams

搜索 Iconify 图标时的请求参数类型

```typescript
export interface SearchIconifyIconsParams {
  query: string;
  limit?: number;
  start?: number;
  prefixes?: string[];
  category?: string;
}
```

### SearchIconifyIconsResult

搜索 Iconify 图标时返回的结果对象类型

```typescript
import {IconifyInfo} from "@iconify/types"

export interface SearchIconifyIconsResult {
  // List of icons, including prefixes
  icons: string[];
  // Number of results. If same as `limit`, more results are available
  total: number;
  // Number of results shown
  limit: number;
  // Index of first result
  start: number;
  // Info about icon sets
  collections: Record<string, IconifyInfo>;
  // Copy of request, values are string
  request: Record<keyof SearchIconifyIconsParams, string>;
}
```
















