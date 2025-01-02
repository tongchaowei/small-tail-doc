---
title: StnTableOperations
createTime: 2024/12/31 21:26:10
permalink: /st-ui-vue3-navie/components/table-operations/
---

StnTableOperations 是封装了对 [StnTable 表格组件](/st-ui-vue3-navie/components/table/) 操作的一个组件，内置了新增、批量删除、刷新等功能按钮，同时该组件也实现了响应式布局，除此之外还允许用户通过插槽的方式将自定义按钮插入到组件中。

## 组件参数

| 参数名          | 描述          | 类型       | 默认值      |
|--------------|-------------|----------|----------|
| addText      | 新增按钮的文本内容   | `string` | `'新增'`   |
| batchDelText | 批量删除按钮的文本内容 | `string` | `'批量删除'` |
| refreshText  | 刷新按钮的文本内容   | `string` | `'刷新'`   |

## 组件事件

| 事件名      | 描述         | 参数 | 返回值    |
|----------|------------|----|--------|
| add      | 新增按钮点击事件   |    | `void` |
| batchDel | 批量删除按钮点击事件 |    | `void` |
| refresh  | 刷新按钮点击事件   |    | `void` |

## 组件插槽

| 插槽名            | 描述          | 参数                              |
|----------------|-------------|---------------------------------|
| add            | 新增按钮        |                                 |
| add-icon       | 新增按钮的图标     |                                 |
| batch-del      | 批量删除按钮      |                                 |
| batch-del-icon | 批量删除按钮的图标   |                                 |
| refresh        | 刷新按钮        |                                 |
| refresh-icon   | 刷新按钮的图标     |                                 |
| affix          | 自定义操作按钮的区域  | `isCollapse: boolean` - 是否要折叠按钮 |
| dropdown-icon  | 触发下拉弹框显示的图标 |                                 |
