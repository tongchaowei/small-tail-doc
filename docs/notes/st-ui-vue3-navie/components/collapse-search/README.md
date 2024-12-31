---
title: StnCollapseSearch
createTime: 2024/12/31 18:11:42
permalink: /st-ui-vue3-navie/components/collapse-search/
---

StnCollapseSearch 是基于 [Navie 折叠面板](https://www.naiveui.com/zh-CN/os-theme/components/collapse) 组件封装得到的一个折叠搜索组件。

## 组件参数

| 参数名                | 描述                     | 类型                                      | 默认值                 |
|--------------------|------------------------|-----------------------------------------|---------------------|
| title              | 标题                     | `string`                                | `'搜索'`              |
| collapse           | 是否使用折叠面板的形式            | `boolean`                               | `true`              |
| triggerAreas       | 使用折叠面板的形式时，能够触发折叠展开的区域 | `Array<("extra" \| "main" \| "arrow")>` | `['main', 'arrow']` |
| operationsCollapse | 操作按钮是否折叠收缩显示           | `boolean`                               | `false`             |
| resetText          | 重置按钮的文本内容              | `string`                                | `'重置'`              |
| searchText         | 搜索按钮的文本内容              | `string`                                | `'搜索'`              |

## 组件事件

| 事件名    | 描述       | 参数 | 返回值    |
|--------|----------|----|--------|
| search | 搜索按钮点击事件 |    | `void` |
| reset  | 重置按钮点击事件 |    | `void` |

## 组件插槽

| 插槽名         | 描述              | 参数 |
|-------------|-----------------|----|
| default     | 默认插槽，用于放置搜索框等内容 |    |
| arrow       | 折叠面板展开折叠的图标     |    |
| title       | 折叠面板的标题         |    |
| operations  | 操作按钮区域的内容       |    |
| reset       | 重置按钮            |    |
| reset-icon  | 重置按钮的图标         |    |
| search      | 搜索按钮            |    |
| search-icon | 搜搜按钮的图标         |    |