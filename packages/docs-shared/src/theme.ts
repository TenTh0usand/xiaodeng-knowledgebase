import type { Theme } from 'vitepress'
import DefaultTheme from 'vitepress/theme'
import BiliVideo from './components/BiliVideo.vue'
import './styles/bili-video.css'

export function createSharedTheme(): Theme {
  return {
    extends: DefaultTheme,
    enhanceApp(ctx) {
      DefaultTheme.enhanceApp?.(ctx)
      ctx.app.component('BiliVideo', BiliVideo)
    },
  }
}
