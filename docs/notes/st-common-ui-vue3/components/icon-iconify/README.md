---
title: StIconIconify 与 StIconIconifyOffline
createTime: 2024/12/30 17:17:40
permalink: /st-common-ui-vue3/components/icon-iconify/
---

StIconIconify 是基于 [Iconify](https://iconify.design/) 封装的图标组件

::: tip 提示

目前 StIconIconify 组件已被拆分成 StIconIconify 和 StIconIconifyOffline 两个组件，两个组件用法一致，区别在于：

- StIconIconify 组件加载渲染图标时，==以网络请求获取图标数据（图标的 SVG 数据）为主==，该组件默认情况下使用 Iconify Vue 组件的图标渲染机制（第一次渲染图标时会发送请求获取图标数据，之后使用缓存中的图标数据直接渲染），我在此基础上添加了：
  - 如果用户传入的图标为图标名称字符串，那么会先尝试从缓存中根据图标名称获取图标数据，如果缓存中存在该图标数据，则直接用其渲染；如果缓存中没有该图标数据，则使用 Iconify Vue 组件的图标渲染机制；
    - 但是现在看来，这好像与 Iconify Vue 组件的图标渲染机制重复，有点多此一举了，但好像影响不大就留着吧；
  - 如果用户传入的图标为图标数据，则直接用其渲染；
- StIconIconifyOffline 组件加载渲染图标时，==以使用缓存中的图标数据为主==：
  - 如果用户传入的图标为图标名称字符串，则会先尝试从缓存中根据图标名称获取图标数据，如果缓存中存在该图标数据，则直接用其渲染，如果缓存中没有该图标数据，则会发送请求获取图标数据：
    - 如果网络请求获取图标数据成功，则缓存该图标数据并使用其渲染；
    - 如果网络请求获取图标数据失败，则会渲染内置的 404 图标；
  - 如果用户传入的图标为图标数据，则直接用其渲染；

:::

## 组件参数

| 参数名    | 描述                         | 类型                                       | 默认值         |
|--------|----------------------------|------------------------------------------|-------------|
| icon   | **必填项**，图标名称(包含图标集前缀)或图标数据 | `string \| IconifyIcon`                  |             |
| width  | 图标宽度                       | `number \| string`                       | `'1em'`     |
| height | 图标高度                       | `number \| string`                       | `'1em'`     |
| color  | 图标颜色                       | `string`                                 | `undefined` |
| style  | 图标样式                       | `Partial<CSSStyleDeclaration> \| string` | `undefined` |
