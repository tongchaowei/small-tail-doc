---
title: 开始使用
createTime: 2024/12/31 17:16:46
permalink: /st-ui-vue3-navie/start/
---

## 安装 Naive UI 组件库并配置组件自动按需引入

### 安装 Naive UI 组件库

::: npm-to
```bash
npm i -D naive-ui
```
:::

### 配置 Naive UI 组件自动按需引入

:::: steps

1. 安装自动导入 API 和按需自动加载组件的插件
::: npm-to
```bash
npm i -D unplugin-auto-import  unplugin-vue-components
```
:::

2. 使用插件，配置 Navie UI API 自动导入和组件自动按需引入
::: code-tabs
@tab vite.config.js | vite.config.ts
```typescript
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
// 自动引入 API 的插件 // [!code ++]
import AutoImport from 'unplugin-auto-import/vite' // [!code ++]
// 按需自动加载组件的插件 // [!code ++]
import Components from 'unplugin-vue-components/vite' // [!code ++]
// 按需自动加载 Naive UI 组件的解析器，用于帮助按需自动加载组件的插件自动按需加载 Navie UI 组件 // [!code ++]
import { NaiveUiResolver } from 'unplugin-vue-components/resolvers' // [!code ++]

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    // 自动引入 API 的插件 // [!code ++]
    AutoImport({ // [!code ++]
      // 自动引入 Vue 和 Navie UI 中的 API // [!code ++]
      imports: [ // [!code ++]
        'vue', // [!code ++]
        { // [!code ++]
          'naive-ui': ['useDialog', 'useMessage', 'useNotification', 'useLoadingBar'], // [!code ++]
        }, // [!code ++]
      ], // [!code ++]
    }), // [!code ++]
    // 按需自动加载组件的插件 // [!code ++]
    Components({ // [!code ++]
      resolvers: [NaiveUiResolver()], // [!code ++]
    }), // [!code ++]
  ],
})
```
:::

::::

## 安装 Small Tail UI Vue3 Naive 组件库

::: npm-to
```bash
npm install st-ui-vue3-navie
```
:::

## 使用

### 手动按需引入

#### 全局引入组件库完整样式后手动按需引入使用组件

:::: steps

1. 在项目入口文件中全局引入组件库的完整样式文件

::: code-tabs
@tab main.js | main.ts
```js
import 'st-ui-vue3-navie/es/st-ui-vue3-navie.css' // [!code ++]
import { createApp } from 'vue'
import App from './App.vue'
```
:::

2. 按需手动引入组件后使用组件

> 这里以 StnIconifyIconSelector 组件为例。

::: code-tabs
@tab App.vue
```vue
<script setup lang="ts">
  import {StnIconifyIconSelector} from 'st-ui-vue3-navie'
</script>

<template>
  <!-- 
    在 StnIconifyIconSelector 组件中使用了 Naive UI 中的 useMessage API，
    因此需要在外层包裹一个 NMessageProvider 组件 
  -->
  <n-message-provider>
    <StnIconifyIconSelector :set-prefixes="['mdi']"/>
  </n-message-provider>
</template>
```
:::

::::

#### 手动按需引入组件和相应的样式后使用组件

> 这里以 StnIconifyIconSelector 组件为例。

::: code-tabs
@tab App.vue
```vue
<script setup lang="ts">
import {StnIconifyIconSelector} from 'st-ui-vue3-navie'
import 'st-ui-vue3-navie/es/components/StnIconifyIconSelector/StnIconifyIconSelector.css'
</script>

<template>
  <n-message-provider>
    <StnIconifyIconSelector :set-prefixes="['devicon', 'mdi']" />
  </n-message-provider>
</template>
```
:::

### 全局注册

#### 全局注册所有组件

:::: steps

1. 在项目入口文件中全局引入组件库的完整样式文件

::: code-tabs
@tab main.js | main.ts
```js
import { createApp } from 'vue'
import App from './App.vue'
import 'st-ui-vue3-navie/es/st-ui-vue3-navie.css' // [!code ++]
```
:::

2. 在项目入口文件中全局注册组件库中的所有组件

::: code-tabs
@tab main.js | main.ts
```js
import 'st-ui-vue3-navie/es/st-ui-vue3-navie.css'
import { createApp } from 'vue'
import App from './App.vue'
// 全局注册整个 st-ui-vue3-navie 组件库中所有组件的插件 // [!code ++]
import {StUiVue3Navie} from 'st-ui-vue3-navie'  // [!code ++]

createApp(App)
  // 全局注册整个 st-ui-vue3-navie 组件库中所有组件 // [!code ++]
  .use(StUiVue3Navie) // [!code ++]
  .mount('#app')
```
:::

3. 使用组件

> 这里以 StnIconifyIconSelector 组件为例。

::: code-tabs
@tab App.vue
```vue
<template>
  <n-message-provider>
    <StnIconifyIconSelector :set-prefixes="['mdi']" :pageSizeDefault="100"/>
  </n-message-provider>
</template>
```
:::

::::

#### 全局注册指定组件

> 这里以 StnIconifyIconSelector 组件为例。

:::: steps

1. 在项目入口文件中引入要全局注册的指定组件的样式文件

::: code-tabs
@tab main.js | main.ts
```js
import { createApp } from 'vue'
import App from './App.vue'
import 'st-ui-vue3-navie/es/components/StnIconifyIconSelector/StnIconifyIconSelector.css' // [!code ++]
```
:::

2. 在项目入口文件中全局注册指定组件

::: code-tabs
@tab main.js | main.ts
```js
import { createApp } from 'vue'
import App from './App.vue'
import 'st-ui-vue3-navie/es/components/StnIconifyIconSelector/StnIconifyIconSelector.css'
// st-ui-vue3-navie 组件库中 StnIconifyIconSelector 组件的注册插件 // [!code ++]
import {StnIconifyIconSelectorRegister} from "st-ui-vue3-navie" // [!code ++]

createApp(App)
  // 全局注册 st-ui-vue3-navie 组件库中的 StnIconifyIconSelector 组件 // [!code ++]
  .use(StnIconifyIconSelectorRegister) // [!code ++]
  .mount('#app')
```
:::

3. 使用组件

::: code-tabs
@tab App.vue
```vue
<template>
  <n-message-provider>
    <StnIconifyIconSelector :set-prefixes="['mdi']" :pageSizeDefault="100"/>
  </n-message-provider>
</template>
```
:::

::::

