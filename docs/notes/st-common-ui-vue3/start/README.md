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

:::: steps

1. 安装自动加载组件的插件

::: npm-to
```bash
npm install unplugin-vue-components -D
```
:::

2. 配置组件自动按需加载引入

::: code-tabs
@tab vite.config.js | vite.config.ts
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

3. 配置 TypeScript 代码提示

如果在你的项目中有使用 TypeScript，为了保证自动按需引入的组件能够被 TypeScript 正确识别，并且有相应的代码提示，那么我们需要==在 TypeScript 配置文件中添加== unplugin-vue-components 自动生成的包含==自动按需引入的组件的类型声明的文件 components.d.ts==。

::: note
components.d.ts 文件是在项目启动时**由 unplugin-vue-components 自动生成**，同时**需要在项目中使用过至少一次组件并且启动运行项目访问页面**后，相应的 st-common-ui-vue3 组件才会有相应的代码提示。
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

4. 使用组件

> 这里以 StGhostTextHover 组件为例。

::: code-tabs
@tab App.vue
```vue
<script setup lang="ts">
</script>

<template>
  <div class="app">
    <div class="ghost-text-demo">
      <st-ghost-text-hover
        content="St Ghost Text Demo"
        horizontal-align="center"
        vertical-align="center"
      ></st-ghost-text-hover>
    </div>
  </div>
</template>

<style scoped>
.ghost-text-demo {
  padding: 2rem 1rem;
  font-size: 3rem;
  font-weight: bold;
}
</style>
```
:::

::::

### 手动按需引入

#### 全局引入组件库完整样式后手动按需引入使用组件

:::: steps

1. 在项目入口文件中全局引入组件库的完整样式文件

::: code-tabs
@tab main.js | main.ts
```js
import 'st-common-ui-vue3/es/st-common-ui-vue3.css' // [!code ++]
import { createApp } from 'vue'
import App from './App.vue'
```
:::

2. 按需手动引入组件后使用组件

> 这里以 StGhostTextHover 组件为例。

::: code-tabs
@tab App.vue
```vue
<script setup lang="ts">
import {StGhostTextHover} from "st-common-ui-vue3"
</script>

<template>
  <div class="app">
    <div class="ghost-text-demo">
      <st-ghost-text-hover
        content="St Ghost Text Demo"
        horizontal-align="center"
        vertical-align="center"
      ></st-ghost-text-hover>
    </div>
  </div>
</template>

<style scoped>
.ghost-text-demo {
  padding: 2rem 1rem;
  font-size: 3rem;
  font-weight: bold;
}
</style>
```
:::

::::

#### 手动按需引入组件和相应的样式后使用组件

> 这里以 StGhostTextHover 组件为例。

::: code-tabs
@tab App.vue
```vue
<script setup lang="ts">
import {StGhostTextHover} from "st-common-ui-vue3"
import 'st-common-ui-vue3/es/components/StGhostTextHover/StGhostTextHover.css'
</script>

<template>
  <div class="app">
    <div class="ghost-text-demo">
      <st-ghost-text-hover
        content="St Ghost Text Demo"
        horizontal-align="center"
        vertical-align="center"
      ></st-ghost-text-hover>
    </div>
  </div>
</template>

<style scoped>
.ghost-text-demo {
  padding: 2rem 1rem;
  font-size: 3rem;
  font-weight: bold;
}
</style>
```
:::

### 全局注册

#### 全局注册所有组件

:::: steps

1. 在项目入口文件中全局引入组件库的完整样式文件

::: code-tabs
@tab main.js | main.ts
```js
import 'st-common-ui-vue3/es/st-common-ui-vue3.css' // [!code ++]
import { createApp } from 'vue'
import App from './App.vue'
```
:::

2. 在项目入口文件中全局注册组件库中的所有组件

::: code-tabs
@tab main.js | main.ts
```js
import 'st-common-ui-vue3/es/st-common-ui-vue3.css'
import { createApp } from 'vue'
import App from './App.vue'
// st-common-ui-vue3 组件库中所有组件的注册插件 // [!code ++]
import {StCommonUiVue3} from "st-common-ui-vue3" // [!code ++]

createApp(App)
  // 全局注册组件库中的所有组件 // [!code ++]
  .use(StCommonUiVue3) // [!code ++]
  .mount('#app')
```
:::

3. 使用组件

> 这里以 StGhostTextHover 组件为例。

::: code-tabs
@tab App.vue
```vue
<script setup lang="ts">
</script>

<template>
  <div class="app">
    <div class="ghost-text-demo">
      <st-ghost-text-hover
        content="St Ghost Text Demo"
        horizontal-align="center"
        vertical-align="center"
      ></st-ghost-text-hover>
    </div>
  </div>
</template>

<style scoped>
.ghost-text-demo {
  padding: 2rem 1rem;
  font-size: 3rem;
  font-weight: bold;
}
</style>
```
:::

::::

#### 全局注册指定组件

> 这里以 StGhostTextHover 组件为例。

:::: steps

1. 在项目入口文件中引入要全局注册的指定组件的样式文件

::: code-tabs
@tab main.js | main.ts
```js
import 'st-common-ui-vue3/es/components/StGhostTextHover/StGhostTextHover.css' // [!code ++]
import { createApp } from 'vue'
import App from './App.vue'
```
:::

2. 在项目入口文件中全局注册指定组件

::: code-tabs
@tab main.js | main.ts
```js
import 'st-common-ui-vue3/es/components/StGhostTextHover/StGhostTextHover.css'
import { createApp } from 'vue'
import App from './App.vue'
// st-common-ui-vue3 组件库中 StGhostTextHover 组件的注册插件 // [!code ++]
import {StGhostTextHoverRegister} from "st-common-ui-vue3" // [!code ++]

createApp(App)
  // 全局注册组件库中的 StGhostTextHover 组件 // [!code ++]
  .use(StGhostTextHoverRegister) // [!code ++]
  .mount('#app')
```
:::

3. 使用组件

::: code-tabs
@tab App.vue
```vue
<script setup lang="ts">
</script>

<template>
  <div class="app">
    <div class="ghost-text-demo">
      <st-ghost-text-hover
        content="St Ghost Text Demo"
        horizontal-align="center"
        vertical-align="center"
      ></st-ghost-text-hover>
    </div>
  </div>
</template>

<style scoped>
.ghost-text-demo {
  padding: 2rem 1rem;
  font-size: 3rem;
  font-weight: bold;
}
</style>
```
:::

::::
