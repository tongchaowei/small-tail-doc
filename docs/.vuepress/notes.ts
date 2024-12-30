import {defineNoteConfig, defineNotesConfig, SidebarItem} from 'vuepress-theme-plume'

const sidebar: SidebarItem[] = [
  {
    text: 'st-common-ui-vue3',
    link: '/st-common-ui-vue3/',
    prefix: '/st-common-ui-vue3/',
    collapsed: true,
    items: [
      {text: '开始使用', link: 'start/'},
      {text: 'IconIconify', link: 'icon-iconify/'},
    ]
  },
  {
    text: 'st-ui-vue3-navie',
    link: '/st-ui-vue3-navie/',
    prefix: '/st-ui-vue3-navie/',
    collapsed: true,
    items: []
  },
  {
    text: 'st-common-ui-styles',
    link: '/st-common-ui-styles/',
    prefix: '/st-common-ui-styles/',
    collapsed: true,
    items: []
  },
  {
    text: 'st-common-core',
    link: '/st-common-core/',
    prefix: '/st-common-core/',
    collapsed: true,
    items: [
      {text: '开始使用', link: 'start/'},
      {text: '数组', link: 'arr/'}
    ]
  },
  {
    text: 'st-common-encrypt',
    link: '/st-common-encrypt/',
    prefix: '/st-common-encrypt/',
    collapsed: true,
    items: []
  },
  {
    text: 'st-common-req',
    link: '/st-common-req/',
    prefix: '/st-common-req/',
    collapsed: true,
    items: []
  },
]

const docListNote = defineNoteConfig({
  dir: 'doc-list',
  link: '/doc-list',
})

const stCommonUiVue3Note = defineNoteConfig({
  dir: 'st-common-ui-vue3',
  link: '/st-common-ui-vue3',
  sidebar,
})

const stUiVue3NavieNote = defineNoteConfig({
  dir: 'st-ui-vue3-navie',
  link: '/st-ui-vue3-navie',
  sidebar,
})

const stCommonUiStylesNote = defineNoteConfig({
  dir: 'st-common-ui-styles',
  link: '/st-common-ui-styles',
  sidebar,
})

const stCommonCoreNote = defineNoteConfig({
  dir: 'st-common-core',
  link: '/st-common-core',
  sidebar,
})

const stCommonEncryptNote = defineNoteConfig({
  dir: 'st-common-encrypt',
  link: '/st-common-encrypt',
  sidebar,
})

const stCommonReqNote = defineNoteConfig({
  dir: 'st-common-req',
  link: '/st-common-req',
  sidebar,
})

export const notes = defineNotesConfig({
  dir: 'notes',
  link: '/',
  notes: [
    docListNote,
    stCommonUiVue3Note,
    stUiVue3NavieNote,
    stCommonUiStylesNote,
    stCommonCoreNote,
    stCommonEncryptNote,
    stCommonReqNote,
  ],
})
