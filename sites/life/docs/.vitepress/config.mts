import { createSiteConfig } from '../../../../packages/docs-shared/src/create-vitepress-config'
import { createAwesomeSidebar } from '../../../../packages/docs-shared/src/sidebar/awesome'

const zhSidebar = createAwesomeSidebar('', {
  start: '开始',
  curated: '精选清单',
  guides: '实操指南',
  resources: '资源汇总',
  topics: '专题',
}, {
  overview: '生活篇总览',
  curated: [
    { text: '精选工具', slug: 'tools' },
    { text: '值得收藏的网站', slug: 'websites' },
  ],
  guides: [
    { text: '家居与效率布置', slug: 'home-setup' },
  ],
  resources: [
    { text: '书单与频道', slug: 'books' },
  ],
  topics: [
    { text: '健康与消费', slug: 'health' },
  ],
})

const enSidebar = createAwesomeSidebar('/en', {
  start: 'Start',
  curated: 'Curated Lists',
  guides: 'Guides',
  resources: 'Resources',
  topics: 'Topics',
}, {
  overview: 'Life Overview',
  curated: [
    { text: 'Essential Tools', slug: 'tools' },
    { text: 'Useful Websites', slug: 'websites' },
  ],
  guides: [
    { text: 'Home Setup', slug: 'home-setup' },
  ],
  resources: [
    { text: 'Books and Channels', slug: 'books' },
  ],
  topics: [
    { text: 'Health and Spending', slug: 'health' },
  ],
})

export default createSiteConfig({
  title: '小登知识库 · 生活篇',
  description: '收集让日常更顺手的工具、网站、整理方法和消费经验。',
  base: '/life/',
  zhNav: [
    { text: '生活篇', link: '/' },
    { text: '精选工具', link: '/curated/tools' },
    { text: '值得收藏的网站', link: '/curated/websites' },
  ],
  enNav: [
    { text: 'Life', link: '/en/' },
    { text: 'Essential Tools', link: '/en/curated/tools' },
    { text: 'Useful Websites', link: '/en/curated/websites' },
  ],
  zhSidebar,
  enSidebar,
})
