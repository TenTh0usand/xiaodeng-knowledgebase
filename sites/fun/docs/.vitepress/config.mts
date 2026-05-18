import { createSiteConfig } from '../../../../packages/docs-shared/src/create-vitepress-config'

const createZhSectionSidebar = (title: string, link: string) => [
  {
    text: title,
    items: [{ text: `${title} 总览`, link }],
  },
]

const createEnSectionSidebar = (title: string, link: string) => [
  {
    text: title,
    items: [{ text: `${title} Overview`, link }],
  },
]

const zhGameSidebar = [
  {
    text: '游戏区',
    items: [
      { text: '游戏区总览', link: '/' },
      { text: '游戏与放松', link: '/topics/games' },
    ],
  },
]

const zhAimSidebar = [
  {
    text: 'Aim',
    items: [{ text: 'Aim 总览', link: '/aim/' }],
  },
  {
    text: 'AimLabs',
    collapsed: false,
    items: [
      { text: 'AimLabs 设置', link: '/aim/aimlabs/settings' },
      { text: 'Example', link: '/aim/aimlabs/example' },
    ],
  },
  {
    text: 'Kovaaks',
    collapsed: false,
    items: [{ text: 'Example', link: '/aim/kovaaks/example' }],
  },
  {
    text: 'Aimbeast',
    collapsed: false,
    items: [{ text: 'Example', link: '/aim/aimbeast/example' }],
  },
]

const zhSidebar = {
  '/aim/': zhAimSidebar,
  '/cs2/': createZhSectionSidebar('CS2', '/cs2/'),
  '/valorant/': createZhSectionSidebar('Valorant', '/valorant/'),
  '/apex/': createZhSectionSidebar('Apex', '/apex/'),
  '/l4d2/': createZhSectionSidebar('L4D2', '/l4d2/'),
  '/': zhGameSidebar,
}

const enGameSidebar = [
  {
    text: 'Game Zone',
    items: [
      { text: 'Game Zone Overview', link: '/en/' },
      { text: 'Games and Relaxation', link: '/en/topics/games' },
    ],
  },
]

const enAimSidebar = [
  {
    text: 'Aim',
    items: [{ text: 'Aim Overview', link: '/en/aim/' }],
  },
  {
    text: 'AimLabs',
    collapsed: false,
    items: [
      { text: 'AimLabs Settings', link: '/en/aim/aimlabs/settings' },
      { text: 'Example', link: '/en/aim/aimlabs/example' },
    ],
  },
  {
    text: 'Kovaaks',
    collapsed: false,
    items: [{ text: 'Example', link: '/en/aim/kovaaks/example' }],
  },
  {
    text: 'Aimbeast',
    collapsed: false,
    items: [{ text: 'Example', link: '/en/aim/aimbeast/example' }],
  },
]

const enSidebar = {
  '/en/aim/': enAimSidebar,
  '/en/cs2/': createEnSectionSidebar('CS2', '/en/cs2/'),
  '/en/valorant/': createEnSectionSidebar('Valorant', '/en/valorant/'),
  '/en/apex/': createEnSectionSidebar('Apex', '/en/apex/'),
  '/en/l4d2/': createEnSectionSidebar('L4D2', '/en/l4d2/'),
  '/en/': enGameSidebar,
}

export default createSiteConfig({
  title: '小登知识库 · 游戏区',
  description: '整理 Aim、CS2、Valorant、Apex、L4D2 等游戏理解和训练笔记。',
  base: '/fun/',
  zhNav: [
    { text: '游戏区', link: '/' },
    { text: 'Aim', link: '/aim/' },
    { text: 'CS2', link: '/cs2/' },
    { text: 'Valorant', link: '/valorant/' },
    { text: 'Apex', link: '/apex/' },
    { text: 'L4D2', link: '/l4d2/' },
  ],
  enNav: [
    { text: 'Games', link: '/en/' },
    { text: 'Aim', link: '/en/aim/' },
    { text: 'CS2', link: '/en/cs2/' },
    { text: 'Valorant', link: '/en/valorant/' },
    { text: 'Apex', link: '/en/apex/' },
    { text: 'L4D2', link: '/en/l4d2/' },
  ],
  zhSidebar,
  enSidebar,
})
