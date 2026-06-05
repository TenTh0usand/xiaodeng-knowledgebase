import { createSiteConfig } from '../../../../packages/docs-shared/src/create-vitepress-config'

const sidebar = [
  {
    text: '保险基础复盘',
    items: [
      { text: '基础概念', link: '/glossary/fundamentals' },
      { text: '险种与责任', link: '/glossary/products' },
      { text: '健康养老服务', link: '/glossary/health-retirement' },
      { text: '核保与核赔', link: '/glossary/underwriting-claims' },
      { text: '保全与合同状态', link: '/glossary/policy-servicing' },
      { text: '经营与风险', link: '/glossary/actuarial-finance' },
      { text: '销售合规', link: '/glossary/sales-compliance' },
      { text: '系统常见缩写', link: '/glossary/abbreviations' },
    ],
  },
  {
    text: '双核实习笔记',
    items: [
      { text: '手写笔记逐页复盘', link: '/claims-notes/' },
      { text: '泰康官方条款对照', link: '/claims-notes/taikang-clauses' },
      { text: '险种与条款阅读', link: '/claims-notes/product-clauses' },
      { text: '保单生命周期', link: '/claims-notes/policy-lifecycle' },
      { text: '理赔平台与健保通', link: '/claims-notes/claims-platforms' },
      { text: '立案到审核', link: '/claims-notes/case-filing-audit' },
      { text: '医疗险审核清单', link: '/claims-notes/audit-checklist' },
    ],
  },
]

const nav = [
  { text: '首页', link: '/' },
  { text: '基础', link: '/glossary/fundamentals' },
  { text: '双核', link: '/glossary/underwriting-claims' },
  { text: '条款对照', link: '/claims-notes/taikang-clauses' },
  { text: '速查', link: '/quick-review' },
]

export default createSiteConfig({
  title: '小登知识库 · 保险实习库',
  description: '个人用的泰康保险双核实习复盘库，围绕核保、核赔、条款阅读和理赔审核整理。',
  base: '/insurance/',
  zhNav: nav,
  enNav: nav,
  zhSidebar: sidebar,
  enSidebar: sidebar,
})
