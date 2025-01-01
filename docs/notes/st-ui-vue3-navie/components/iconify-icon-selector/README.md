---
title: StnIconifyIconSelector
createTime: 2024/12/31 22:46:20
permalink: /st-ui-vue3-navie/components/iconify-icon-selector/
---

StnIconifyIconSelector 是一个 Iconify 图标选择器组件。该组件主要是基于 Navie [Tabs 标签页](https://www.naiveui.com/zh-CN/os-theme/components/tabs)、 [Grid 栅格](https://www.naiveui.com/zh-CN/os-theme/components/grid)、[Pagination 分页](https://www.naiveui.com/zh-CN/os-theme/components/pagination) 等组件封装而成。

## 组件参数

| 参数名                      | 描述                                                                                                                                   | 类型                                       | 默认值                                |
|--------------------------|--------------------------------------------------------------------------------------------------------------------------------------|------------------------------------------|------------------------------------|
| setPrefixes              | **必填项**，图标集前缀名称列表，用于指定选择器中可选的 Iconify 图标集                                                                                            | `string[]`                               |                                    |
| iconSize                 | 图标选择器中图标的大小                                                                                                                          | `number`                                 | `24`                               |
| iconSelectedColor        | 图标选中后的颜色                                                                                                                             | `string`                                 | `'#18a058'`                        |
| size                     | 整个图标选择器组件的大小                                                                                                                         | `'small' \| 'medium' \| 'large'`         | `'small'`                          |
| search                   | 是否开启搜索图标功能                                                                                                                           | `boolean`                                | `true`                             |
| setSearchIpt             | 搜索图标功能开启后，是否开启可以指定搜索图标的图标集                                                                                                           | `boolean`                                | `true`                             |
| searchResultLimit        | 搜索出来的图标结果的数量限制，默认为 64，最小值为 32，最大值为 999                                                                                               | `number`                                 | `64`                               |
| searchIconNameNotIptTip  | 搜索图标时，图标名称未输入提示信息                                                                                                                    | `string`                                 | `'请输入图标名称'`                        |
| setIptPlaceholder        | 搜索图标功能中，图标集输入框 placeholder                                                                                                           | `string`                                 | `'图标集名称'`                          |
| iconNamePlaceholder      | 搜索图标功能中，图标名称输入框 placeholder                                                                                                          | `string`                                 | `'图标名称'`                           |
| setIptFlex               | 搜索图标功能中，图标集输入框 flex 比例                                                                                                               | `number`                                 | `2`                                |
| iconNameIptFlex          | 搜索图标功能中，图标名称输入框 flex 比例                                                                                                              | `number`                                 | `3`                                |
| searchNotFoundTip        | 没有找到指定名称的图标时的提示信息                                                                                                                    | `string`                                 | `'没有找到相关图标'`                       |
| iconSetNullTip           | 图标集为空时的提示信息                                                                                                                          | `string`                                 | `'没有图标呢...'`                       |
| searchTabName            | 搜索 tab 名称                                                                                                                            | `string`                                 | `'搜索'`                             |
| iconListHeight           | 图标列表的高度                                                                                                                              | `number \| string`                       | `'130px'`                          |
| iconListMaxHeight        | 图标列表的最大高度                                                                                                                            | `number \| string`                       | `'130px'`                          |
| iconListScrollbarTrigger | 图标列表滚动条的显示时机，'none' 表示一直显示                                                                                                           | `'hover' \| 'none'`                      | `'hover'`                          |
| cols                     | 图标显示的列数，具体设置可以参考 [Navie Grid 栅格](https://www.naiveui.com/zh-CN/os-theme/components/grid)                                             | `number \| string`                       | `'5 375:10 600:15 800:20 1200:30'` |
| responsive               | 图标列表的响应式布局方式，'self' 根据自身宽度进行响应式布局，'screen' 根据屏幕断点进行响应式布局                                                                             | `'self' \| 'screen`                      | `'self'`                           |
| itemResponsive           | 图标元素是否可具有响应式宽度                                                                                                                       | `boolean`                                | `false`                            |
| tabsPadding              | 图标集全部 tabs 最左和最右 tab 的 padding                                                                                                       | `number`                                 | `0`                                |
| tabTrigger               | 图标集 tab 切换的触发方式                                                                                                                      | `'click' \| 'hover'`                     | `'click'`                          |
| tabPlacement             | 图标集 tabs 的位置                                                                                                                         | `'left' \| 'right' \| 'top' \| 'bottom'` | `'top'`                            |
| tabType                  | 图标集 tab 的样式类型                                                                                                                        | `'bar' \| 'line' \| 'card' \| 'segment'` | `'bar'`                            |
| pageSizeDefault          | 图标分页中每页显示的图标数量的默认值                                                                                                                   | `number`                                 | `30`                               |
| pageSizes                | 图标分页中每页显示的图标数量的可选值列表                                                                                                                 | `number[]`                               | `[]`                               |
| pageSlot                 | 图标分页中页码显示的个数                                                                                                                         | `number`                                 | `8`                                |
| showQuickJumper          | 图标分页中是否显示快速跳转                                                                                                                        | `boolean`                                | `false`                            |
| goto                     | 图标分页中快速跳转的文本内容                                                                                                                       | `() => VNodeChild`                       | `() => '跳至'`                       |
| paginationSelectProps    | 图标分页中每页显示的图标数量的下拉框选择器组件配置参数，具体配置参数说明可以参考 [Navie Select Props](https://www.naiveui.com/zh-CN/os-theme/components/select#Select-Props) | `SelectProps`                            |                                    |

## 组件双向绑定参数

| 参数名   | 描述                 | 类型       | 默认值  |
|-------|--------------------|----------|------|
| value | 选中图标的完整名称（包括图标集前缀） | `string` | `''` |
