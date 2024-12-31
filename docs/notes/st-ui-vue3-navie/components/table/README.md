---
title: StnTable
createTime: 2024/12/31 16:56:23
permalink: /st-ui-vue3-navie/components/table/
---

StnTable 是基于 [Navie UI 数据表格](https://www.naiveui.com/zh-CN/os-theme/components/data-table) 组件封装得到的一个表格组件。

## 组件参数

| 参数名                      | 描述                                                                                                                                          | 类型                                        | 默认值     |
|--------------------------|---------------------------------------------------------------------------------------------------------------------------------------------|-------------------------------------------|---------|
| columns                  | **必填项**，表格的列配置                                                                                                                              | `StnDataTableColumns`                     |         |
| data                     | **必填项**，表格数据                                                                                                                                | `Array<Object>`                           |         |
| title                    | 标题                                                                                                                                          | `string`                                  | `'标题'`  |
| isUseBuiltInSelectColumn | 是否使用内置的勾选列的配置                                                                                                                               | `boolean`                                 | `true`  |
| rowKey                   | 表格数据行唯一标识，如果表格中存在选择列，且表格数据行中不存在 key 字段，则需要传入该组件参数                                                                                           | `(rowData: object) => (number \| string)` |         |
| pagination               | 表格分页配置，PaginationProps 参数对象属性具体说明参考 [Navie Pagination Props](https://www.naiveui.com/zh-CN/os-theme/components/pagination#Pagination-Props) | `PaginationProps \| false`                | `false` |
| loading                  | 表格是否显示 loading 状态                                                                                                                           | `boolean`                                 | `false` |
| scrollX                  | 表格内容的横向宽度，如果列被水平固定了，则需要设定它                                                                                                                  | `number \| string`                        |         |

## 组件双向绑定参数

| 参数名            | 描述                  | 类型                  | 默认值  |
|----------------|---------------------|---------------------|------|
| checkedRowKeys | 表格中勾选的数据行的唯一标识组成的列表 | `DataTableRowKey[]` | `[]` |

## 组件事件

| 事件名               | 描述               | 参数                                        | 返回值             |
|-------------------|------------------|-------------------------------------------|-----------------|
| load-tree-data    | 表格异步展开树形数据事件     | `rowData: object` - 行数据                   | `Promise<void>` |
| col-showed-change | 展示的表格列发生变化时触发的事件 | `columns: StnDataTableColumns` - 展示的表格列配置 | `void`          |

## 组件样式

1. 数据表格容器区域的背景样式可以通过样式类名 `box-bg` 设置

## 表格列配置的预处理

1. 如果通过组件参数 `isUseBuiltInSelectColumn` 启用了组件内置的勾选列的配置，那么将会在表格列配置的最前面插入一个勾选列的配置，组件内置的勾选列的配置如下：
```typescript
const selectableColumn: StnDataTableColumn = {
  type: 'selection',
  className: '',
  title: '勾选列',
  checked: true,
  disableChecked: true,
  draggable: false,
  fixed: 'left',
}
```
2. 对于通过组件参数 `columns` 传入的所有表格列的配置，都会进行以下预处理：
   - 如果原来的列配置中具有 `checked` 属性，且值为 `false`，则该列的 `checked` 属性设置为 `false`，否则设置为 `true`；并将初始状态下的 `checked` 属性值保存到 `originChecked` 属性中，`checked` 属性用于后续动态控制该列是否显示；
   - 如果原来的列配置中具有 `draggable` 属性，且值为 `false`，则该列的 `draggable` 属性设置为 `false`，否则设置为 `true`；
   - 如果原来的列配置中不具有 `align` 属性，则为该列配置添加 `align` 属性并设置属性值为 `'center'`；并将初始状态下的 `align` 属性值保存到 `originAlign` 属性中，`align` 属性用于后续动态控制该列单元格内容的对齐方式；
   - 初始状态下的 `fixed` 属性值保存到 `originFixed` 属性中，`fixed` 属性用于后续动态控制该列是否固定在表格左侧或右侧，==需要注意，只有传入的列配置中包含 `fixed` 属性时，即列配置对象中 `fixed` 属性值不为 `undefined` 时，才能在后续动态控制该列是否固定或取消固定在表格左侧或右侧==；
   - 根据每个列配置对象在列配置列表中的位置，为其添加 `sort` 属性，该属性的值为该列配置在列表中的索引位置，标识初始状态下每个表格列的排序顺序，以此来实现后续表格列位置拖拽后的排序重置；

## 类型定义

### StnDataTableColumn

表格列配置的类型

```typescript
import {DataTableColumn as NDataTableColumn} from 'naive-ui'

export type StnDataTableColumn = NDataTableColumn & {
  // 表格列的标题
  title: string;
  // 表格列是否禁用可以选中展示
  disableChecked?: boolean;
  // 表格列是否可拖拽，提供表格列配置数据时，可以不设置该值，如果没有设置该值，则会自动设置该值为 true
  draggable?: boolean;
  // 表格列是否选中展示，提供表格列配置数据时，可以不设置该值，如果没有设置该值，则会自动设置该值为 true
  checked?: boolean;
  // 表格列初始状态下，是否选中展示，无需设置该值，设置了也不会生效，该属性会自动根据表格列配置数据的 checked 属性设置该值
  originChecked?: boolean;
  // 表格列的排序，提供表格列配置数据时，无需设置该值，设置了也不会生效，会自动根据表格列配置数据的索引设置该值，即按照表格列数组中的顺序排序
  sort?: number;
  // 表格列初始状态下，是否固定列，无需设置该值，设置了也不会生效，该属性会自动根据表格列配置数据的 fixed 属性设置该值
  originFixed?: 'left' | 'right';
  // 表格列初始状态下，表格列的对齐方式，无需设置该值，设置了也不会生效，会自动根据表格列配置数据的 align 属性设置该值
  originAlign?: 'left' | 'center' | 'right';
}
```

### StnDataTableColumns

表格列配置的类型

```typescript
export type StnDataTableColumns = Array<StnDataTableColumn>
```