---
title: StnTableEditorDelBtnGroup
createTime: 2024/12/31 21:26:10
permalink: /st-ui-vue3-navie/components/table-editor-del-btn-group/
---

StnTableEditorDelBtnGroup 是一个表格行数据编辑和表格行数据删除操作的按钮组组件，主要用于 [StnTable 表格组件](/st-ui-vue3-navie/components/table/) 中的表格操作列。

## 组件参数

| 参数名      | 描述        | 类型       | 默认值    |
|----------|-----------|----------|--------|
| editText | 编辑按钮的文本内容 | `string` | `'编辑'` |
| delText  | 删除按钮的文本内容 | `string` | `'删除'` |

## 组件事件

| 事件名  | 描述       | 参数 | 返回值    |
|------|----------|----|--------|
| edit | 编辑按钮点击事件 |    | `void` |
| del  | 删除按钮点击事件 |    | `void` |

## 组件插槽

| 插槽名       | 描述      | 参数 |
|-----------|---------|----|
| edit      | 编辑按钮    |    |
| edit-icon | 编辑按钮的图标 |    |
| del       | 删除按钮    |    |
| del-icon  | 删除按钮的图标 |    |