---
title: 开始使用
createTime: 2024/12/24 04:25:27
permalink: /st-common-ui-vue3/start/
---

## 安装

::: npm-to
```bash
npm install st-common-ui-vue3
```
:::

## 使用

### 自动按需引入

#### 安装自动加载组件的插件

::: npm-to
```bash
npm install unplugin-vue-components -D
```
:::

#### 配置组件自动按需引入

::: code-tabs
@tab vite.config.ts | vite.config.js
```ts
import {defineConfig} from 'vite'
import vue from '@vitejs/plugin-vue'
// 自动加载组件的 Vite 插件 // [!code ++]
import Components from 'unplugin-vue-components/vite' // [!code ++]
// 按需自动加载 st-common-ui-vue3 组件的解析器，用于帮助 unplugin-vue-components 自动按需加载 st-common-ui-vue3 组件 // [!code ++]
import {StCommonUIVue3Resolver} from "st-common-ui-vue3" // [!code ++]

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    // 配置自动加载组件的 Vite 插件 // [!code ++]
    Components({ // [!code ++]
      // 配置解析器，用于帮助 unplugin-vue-components 解析并按需加载组件 // [!code ++]
      resolvers: [ // [!code ++]
        StCommonUIVue3Resolver() // [!code ++]
      ], // [!code ++]
    }) // [!code ++]
  ],
})
```
:::

#### 配置 TypeScript 代码提示

如果在你的项目中有使用 TypeScript，为了保证自动按需引入的组件能够被 TypeScript 正确识别，并且有相应的代码提示，那么我们需要在 TypeScript 配置文件中添加 unplugin-vue-components 自动生成的包含自动按需引入的组件的类型声明的文件 components.d.ts。

::: note
components.d.ts 文件是在项目启动时由 unplugin-vue-components 自动生成，同时需要在项目中使用过至少一次组件并且启动运行项目后，相应的 st-common-ui-vue3 组件才会有相应的代码提示。
:::

::: code-tabs
@tab tsconfig.app.json
```json
{
  "compilerOptions": {
    ...
  },
  "include": [
    "src/**/*.ts",
    "src/**/*.tsx",
    "src/**/*.vue",
    "components.d.ts" // [!code ++]
  ]
}
```
:::

#### 使用组件



### 手动按需引入

### 全局注册

#### 全局注册所有组件

#### 全局注册指定组件