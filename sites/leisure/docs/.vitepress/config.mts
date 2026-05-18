import { createSiteConfig } from '../../../../packages/docs-shared/src/create-vitepress-config'

const zhSidebar = [
  {
    text: '娱乐休闲区',
    items: [{ text: '娱乐休闲总览', link: '/' }],
  },
  {
    text: '内容收藏',
    collapsed: false,
    items: [
      { text: '片单与收藏', link: '/watchlist' },
      { text: '摸鱼网站', link: '/websites' },
    ],
  },
  {
    text: '休闲入口',
    collapsed: false,
    items: [
      { text: '低门槛娱乐路线图', link: '/starter-kit' },
      { text: '播客与音乐', link: '/media' },
    ],
  },
]

const enSidebar = [
  {
    text: 'Leisure Zone',
    items: [{ text: 'Leisure Overview', link: '/en/' }],
  },
  {
    text: 'Collections',
    collapsed: false,
    items: [
      { text: 'Watchlist', link: '/en/watchlist' },
      { text: 'Fun Websites', link: '/en/websites' },
    ],
  },
  {
    text: 'Leisure Starts',
    collapsed: false,
    items: [
      { text: 'Starter Kit', link: '/en/starter-kit' },
      { text: 'Podcasts and Music', link: '/en/media' },
    ],
  },
]

export default createSiteConfig({
  title: '小登知识库 · 娱乐休闲区',
  description: '收藏片单、摸鱼网站、播客音乐和低门槛娱乐路线图，以后也放电影与影评。',
  base: '/leisure/',
  zhNav: [
    { text: '娱乐休闲区', link: '/' },
    { text: '片单与收藏', link: '/watchlist' },
    { text: '摸鱼网站', link: '/websites' },
    { text: '播客与音乐', link: '/media' },
  ],
  enNav: [
    { text: 'Leisure', link: '/en/' },
    { text: 'Watchlist', link: '/en/watchlist' },
    { text: 'Fun Websites', link: '/en/websites' },
    { text: 'Podcasts and Music', link: '/en/media' },
  ],
  zhSidebar,
  enSidebar,
})
