---
title: StnTableColSetting
createTime: 2024/12/31 21:26:10
permalink: /st-ui-vue3-navie/components/table-col-setting/
---

StnTableColSetting 是一个用于动态设置 [StnTable 表格组件](/st-ui-vue3-navie/components/table/) 表格列是否显示、表格列显示顺序、表格列是否固定于表格的左侧或右侧、表格列单元格对齐方式的组件。

## 组件参数

| 参数名                   | 描述                  | 类型                 | 默认值       |
|-----------------------|---------------------|--------------------|-----------|
| btnCollapse           | 触发列设置弹框的按钮是否折叠收缩显示  | `boolean`          | `false`   |
| btnText               | 触发列设置弹框的按钮的文本内容     | `string`           | `'列设置'`   |
| colSettingPopZIndex   | 列设置弹框的 `z-index` 层级 | `number`           | `4`       |
| colSettingPopMaxWidth | 列设置弹框的最大宽度          | `string \| number` | `'200px'` |
| listMaxHeight         | 列设置列表的最大高度          | `string \| number` | `'300px'` |
| colShowTabName        | 列展示 tab 的名称         | `string`           | `'列展示'`   |
| colFixTabName         | 列固定 tab 的名称         | `string`           | `'列固定'`   |
| colAlignTabName       | 列对齐 tab 的名称         | `string`           | `'列对齐'`   |
| allText               | 全选按钮的文本内容           | `string`           | `'全选'`    |
| resetText             | 重置按钮的文本内容           | `string`           | `'重置'`    |
| leftText              | 左对齐按钮的文本内容          | `string`           | `'左'`     |
| centerText            | 居中对齐按钮的文本内容         | `string`           | `'居中'`    |
| rightText             | 右对齐按钮的文本内容          | `string`           | `'右'`     |

## 组件插槽

| 插槽名       | 描述                 | 参数                                               |
|-----------|--------------------|--------------------------------------------------|
| btn       | 触发列设置弹框的按钮         |                                                  |
| btn-icon  | 触发列设置弹框的按钮的图标      |                                                  |
| drag-icon | 表格列拖拽排序的图标         |                                                  |
| tab-extra | 拓展自定义表格列设置 tab 的区域 | `columns: Array<StnDataTableColumn>` - 表格列配置对象列表 |


## 组件样式

1. 列设置弹框的背景样式可以通过样式类名 `box-bg` 设置； 
2. 列设置弹框的盒子阴影样式可以通过样式类名 `box-shadow` 设置； 
