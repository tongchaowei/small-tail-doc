import {viteBundler} from '@vuepress/bundler-vite'
import {defineUserConfig} from 'vuepress'
import {plumeTheme} from 'vuepress-theme-plume'

export default defineUserConfig({
  base: '/',
  lang: 'zh-CN',
  title: 'Small Tail Doc',
  description: '小尾巴文档',

  bundler: viteBundler(),

  theme: plumeTheme({
    // 添加您的部署域名
    hostname: 'https://tongchaowei.github.io/small-tail-doc/',
    // your git repo url
    docsRepo: 'https://gitee.com/tongchaowei/small-tail-doc',
    docsDir: 'docs',

    // 文章变更历史
    changelog: true,
    // 文章贡献者
    contributors: {
      mode: 'block',
      info: [
        {
          username: 'tongchaowei',
          alias: ['small tail'],
          url: 'https://gitee.com/tongchaowei',
          avatar: '/avatar.jpg'
        }
      ]
    },
    // 页面页脚
    footer: false,
    // 文档页面中的大纲
    outline: [2, 4],

    plugins: {
      /**
       * 文章变更配置
       */
      // 开发环境和生产环境都启用
      git: true,

      /**
       * Shiki 代码高亮
       * @see https://theme-plume.vuejs.press/config/plugins/code-highlight/
       */
      // shiki: {
      // 强烈建议预设代码块高亮语言，插件默认加载所有语言会产生不必要的时间开销
      //   languages: ['shell', 'bash', 'typescript', 'javascript'],
      // },

      /**
       * markdown enhance
       * @see https://theme-plume.vuejs.press/config/plugins/markdown-enhance/
       */
      markdownEnhance: {
        demo: true,
        //   include: true,
        //   chart: true,
        //   echarts: true,
        //   mermaid: true,
        //   flowchart: true,
      },

      /**
       *  markdown power
       * @see https://theme-plume.vuejs.press/config/plugin/markdown-power/
       */
      markdownPower: {
        //   pdf: true,
        //   caniuse: true,
        //   plot: true,
        //   bilibili: true,
        //   youtube: true,
        //   icons: true,
        //   codepen: true,
        //   replit: true,
        //   codeSandbox: true,
        //   jsfiddle: true,
        //   repl: {
        //     go: true,
        //     rust: true,
        //     kotlin: true,
        //   },
        npmTo: {
          tabs: ['npm', 'pnpm', 'yarn']
        }
      },

      /**
       * 评论 comments
       * @see https://theme-plume.vuejs.press/guide/features/comments/
       */
      // comment: {
      //   provider: '', // "Artalk" | "Giscus" | "Twikoo" | "Waline"
      //   comment: true,
      //   repo: '',
      //   repoId: '',
      //   categoryId: '',
      //   mapping: 'pathname',
      //   reactionsEnabled: true,
      //   inputPosition: 'top',
      // },
    },
  }),
})
