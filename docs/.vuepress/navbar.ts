import { defineNavbarConfig } from 'vuepress-theme-plume'

export const navbar = defineNavbarConfig([
  { text: '首页', link: '/' },
  { text: '文档列表', link: '/doc-list/' },
  {
    text: '文档',
    items: [
      { text: 'st-common-ui-vue3', link: '/st-common-ui-vue3/' },
      { text: 'st-ui-vue3-navie', link: '/st-ui-vue3-navie/' },
      { text: 'st-common-ui-styles', link: '/st-common-ui-styles/' },
      { text: 'st-common-core', link: '/st-common-core/' },
      { text: 'st-common-encrypt', link: '/st-common-encrypt/' },
      { text: 'st-common-req', link: '/st-common-req/' },
    ]
  },
])
