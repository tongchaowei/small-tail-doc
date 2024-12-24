# Small Tail Doc

Small Tail 文档站点项目，该项目基于 [vuepress](https://vuepress.vuejs.org/) 和 [vuepress-theme-plume](https://github.com/pengzhanbo/vuepress-theme-plume) 搭建。

Small Tail 文档站点，包含所有 Small Tail 前端库使用说明文档，包括：
- st-common-ui-vue3：Small Tail 通用 Vue3 UI 组件库
- st-ui-vue3-navie：基于 Naive UI 封装的 Small Tail Vue3 UI 组件库
- st-common-ui-styles：Small Tail 通用 UI 样式库
- st-common-core：Small Tail 通用核心库
- st-common-encrypt：Small Tail 通用加密库
- st-common-req：Small Tail 通用请求库

## 克隆项目

```bash
git clone https://gitee.com/tongchaowei/small-tail-doc.git
```

## 安装依赖

```bash
pnpm i
```

## 运行项目

```sh
# 开发环境下运行项目
pnpm docs:dev
# 为生产环境构建项目
pnpm docs:build
# 本地预览构建后的项目
pnpm docs:preview
# 更新 vuepress 和 theme
pnpm vp-update
```

## 相关文档

- [vuepress](https://vuepress.vuejs.org/)
- [vuepress-theme-plume](https://theme-plume.vuejs.press/)
