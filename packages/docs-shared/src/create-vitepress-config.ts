import { defineConfig } from 'vitepress'
import { slugify } from './slugify'
import { enUiText, zhUiText } from './i18n/locales'

export type SiteConfigInput = {
  title: string
  description: string
  base: string
  zhNav: Array<{ text: string; link: string }>
  enNav: Array<{ text: string; link: string }>
  zhSidebar: unknown
  enSidebar: unknown
}

export function createSiteConfig(input: SiteConfigInput) {
  return defineConfig({
    title: input.title,
    description: input.description,
    lastUpdated: true,
    base: input.base,
    markdown: {
      anchor: {
        slugify,
      },
    },
    head: [
      ['meta', { property: 'og:title', content: input.title }],
      ['meta', { property: 'og:description', content: input.description }],
      ['meta', { property: 'og:type', content: 'website' }],
    ],
    locales: {
      root: {
        label: '中文',
        lang: 'zh-CN',
        themeConfig: {
          nav: input.zhNav,
          sidebar: input.zhSidebar,
          outline: { label: zhUiText.outlineLabel },
          returnToTopLabel: zhUiText.returnToTopLabel,
          sidebarMenuLabel: zhUiText.sidebarMenuLabel,
          darkModeSwitchLabel: zhUiText.darkModeSwitchLabel,
          lastUpdated: { text: zhUiText.lastUpdatedText },
          docFooter: { prev: zhUiText.docFooterPrev, next: zhUiText.docFooterNext },
        },
      },
      en: {
        label: 'English',
        lang: 'en-US',
        themeConfig: {
          nav: input.enNav,
          sidebar: input.enSidebar,
          outline: { label: enUiText.outlineLabel },
          returnToTopLabel: enUiText.returnToTopLabel,
          sidebarMenuLabel: enUiText.sidebarMenuLabel,
          darkModeSwitchLabel: enUiText.darkModeSwitchLabel,
          lastUpdated: { text: enUiText.lastUpdatedText },
          docFooter: { prev: enUiText.docFooterPrev, next: enUiText.docFooterNext },
        },
      },
    },
    themeConfig: {
      search: {
        provider: 'local',
        options: {
          locales: {
            root: {
              translations: {
                button: {
                  buttonText: zhUiText.searchPlaceholder,
                  buttonAriaLabel: zhUiText.searchPlaceholder,
                },
              },
            },
            en: {
              translations: {
                button: {
                  buttonText: enUiText.searchPlaceholder,
                  buttonAriaLabel: enUiText.searchPlaceholder,
                },
              },
            },
          },
        },
      },
      footer: {
        message: 'Built with VitePress for 小登知识库',
        copyright: 'Copyright 2026 小登知识库',
      },
    },
  })
}
