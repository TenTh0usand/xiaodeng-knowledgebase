import { createSiteConfig } from '../../../../packages/docs-shared/src/create-vitepress-config'

const sidebar = [
  {
    text: 'Insurance Glossary',
    items: [
      { text: 'Core Concepts', link: '/glossary/fundamentals' },
      { text: 'Products & Coverage', link: '/glossary/products' },
      { text: 'Health, Retirement & Care', link: '/glossary/health-retirement' },
      { text: 'Underwriting & Claims', link: '/glossary/underwriting-claims' },
      { text: 'Policy Servicing', link: '/glossary/policy-servicing' },
      { text: 'Actuarial, Finance & Risk', link: '/glossary/actuarial-finance' },
      { text: 'Sales, Channel & Compliance', link: '/glossary/sales-compliance' },
      { text: 'Common Abbreviations', link: '/glossary/abbreviations' },
    ],
  },
  {
    text: 'Claims Internship Notes',
    items: [
      { text: 'Page-by-Page Understanding', link: '/claims-notes/' },
      { text: 'Products & Clauses', link: '/claims-notes/product-clauses' },
      { text: 'Policy Lifecycle', link: '/claims-notes/policy-lifecycle' },
      { text: 'Claims Platforms & 健保通', link: '/claims-notes/claims-platforms' },
      { text: 'Case Filing To Audit', link: '/claims-notes/case-filing-audit' },
      { text: 'Medical Claim Audit Checklist', link: '/claims-notes/audit-checklist' },
    ],
  },
]

const nav = [
  { text: 'Home', link: '/' },
  { text: 'Glossary', link: '/glossary/fundamentals' },
  { text: 'Claims Notes', link: '/claims-notes/' },
  { text: 'Quick Review', link: '/quick-review' },
]

export default createSiteConfig({
  title: '小登知识库 · 保险实习库',
  description: 'A practical English glossary and claims-note library for insurance internship work.',
  base: '/insurance/',
  zhNav: nav,
  enNav: nav,
  zhSidebar: sidebar,
  enSidebar: sidebar,
})
