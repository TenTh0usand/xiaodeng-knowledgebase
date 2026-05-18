import { createSiteConfig } from '../../../../packages/docs-shared/src/create-vitepress-config'
import { createAwesomeSidebar } from '../../../../packages/docs-shared/src/sidebar/awesome'

const zhSidebar = createAwesomeSidebar('', {
  start: '开始',
  curated: '精选清单',
  guides: '实操指南',
  resources: '资源汇总',
  topics: '专题',
}, {
  overview: '工作篇总览',
  curated: [
    { text: '协作工具箱', slug: 'toolbox' },
    { text: '高频工作网站', slug: 'websites' },
  ],
  guides: [
    { text: 'AI 工作流', slug: 'ai-workflow' },
  ],
  resources: [
    { text: '模板与清单', slug: 'templates' },
  ],
  topics: [
    { text: '知识管理', slug: 'knowledge' },
  ],
})

const enSidebar = createAwesomeSidebar('/en', {
  start: 'Start',
  curated: 'Curated Lists',
  guides: 'Guides',
  resources: 'Resources',
  topics: 'Topics',
}, {
  overview: 'Work Overview',
  curated: [
    { text: 'Toolbox', slug: 'toolbox' },
    { text: 'Useful Websites', slug: 'websites' },
  ],
  guides: [
    { text: 'AI Workflow', slug: 'ai-workflow' },
  ],
  resources: [
    { text: 'Templates and Checklists', slug: 'templates' },
  ],
  topics: [
    { text: 'Knowledge Management', slug: 'knowledge' },
  ],
})

export default createSiteConfig({
  title: '小登知识库 · 工作篇',
  description: '沉淀 AI 工作流、协作规范、模板库与稳定产出的方法。',
  base: '/work/',
  zhNav: [
    { text: '工作篇', link: '/' },
    { text: 'AI 工作流', link: '/guides/ai-workflow' },
    { text: '协作工具箱', link: '/curated/toolbox' },
  ],
  enNav: [
    { text: 'Work', link: '/en/' },
    { text: 'AI Workflow', link: '/en/guides/ai-workflow' },
    { text: 'Toolbox', link: '/en/curated/toolbox' },
  ],
  zhSidebar,
  enSidebar,
})
