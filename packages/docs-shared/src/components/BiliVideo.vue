<template>
  <figure class="bili-video">
    <div class="bili-video__frame" :style="{ aspectRatio: ratio }">
      <iframe
        :src="src"
        :title="iframeTitle"
        loading="lazy"
        scrolling="no"
        frameborder="0"
        allow="fullscreen; autoplay; encrypted-media; picture-in-picture"
        allowfullscreen
      />
    </div>
    <figcaption v-if="title || caption" class="bili-video__caption">
      {{ caption || title }}
    </figcaption>
  </figure>
</template>

<script setup lang="ts">
import { computed } from 'vue'

const props = withDefaults(defineProps<{
  bvid?: string
  aid?: string | number
  cid?: string | number
  page?: number
  title?: string
  caption?: string
  ratio?: string
  danmaku?: boolean
  highQuality?: boolean
  autoplay?: boolean
  time?: number
}>(), {
  page: 1,
  ratio: '16 / 9',
  danmaku: false,
  highQuality: true,
  autoplay: false,
})

const src = computed(() => {
  const params = new URLSearchParams()

  if (props.bvid) params.set('bvid', props.bvid)
  if (props.aid) params.set('aid', String(props.aid))
  if (props.cid) params.set('cid', String(props.cid))
  if (props.page) params.set('page', String(props.page))
  if (props.time && props.time > 0) params.set('t', String(props.time))

  params.set('high_quality', props.highQuality ? '1' : '0')
  params.set('danmaku', props.danmaku ? '1' : '0')
  params.set('autoplay', props.autoplay ? '1' : '0')

  return `https://player.bilibili.com/player.html?${params.toString()}`
})

const iframeTitle = computed(() => {
  if (props.title) return props.title
  if (props.bvid) return `Bilibili video ${props.bvid}`
  if (props.aid) return `Bilibili video av${props.aid}`
  return 'Bilibili video'
})
</script>
