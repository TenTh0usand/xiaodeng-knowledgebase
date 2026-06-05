<template>
  <div class="site-shell">
    <header class="navbar">
      <a class="brand" href="/" aria-label="小登知识库首页">
        <span class="brand-mark">小</span>
        <span>小登知识库</span>
      </a>
      <nav class="nav-links" aria-label="主导航">
        <a href="/life/">生活篇</a>
        <a href="/work/">工作篇</a>
        <a href="/fun/">游戏区</a>
        <a href="/leisure/">娱乐休闲区</a>
        <a href="/insurance/">保险实习库</a>
      </nav>
    </header>

    <main>
      <section class="hero">
        <div class="hero-copy">
          <h1>把个人理解拆成几座能长期维护的知识库</h1>
          <p>
            生活、工作、游戏、娱乐休闲和保险实习各自独立成站，首页只负责清晰入口和精选跳转。
            以后新增领域时，也能像搭积木一样接到同一个总站。
          </p>
          <div class="hero-actions">
            <a class="button button-primary" href="#libraries">进入知识分区</a>
            <a class="button button-outline" href="/fun/aim/aimlabs/settings">查看 AimLabs 设置</a>
          </div>
        </div>

        <div class="hero-visual" aria-label="知识库结构示意">
          <div class="map-card map-card-main">
            <span class="map-label">Portal</span>
            <strong>example.com</strong>
            <p>总站 landing page</p>
          </div>
          <div class="map-row">
            <a class="map-card" href="/life/">
              <span class="map-label">Life</span>
              <strong>/life</strong>
            </a>
            <a class="map-card" href="/work/">
              <span class="map-label">Work</span>
              <strong>/work</strong>
            </a>
          </div>
          <div class="map-row">
            <a class="map-card" href="/fun/">
              <span class="map-label">Games</span>
              <strong>/fun</strong>
            </a>
            <a class="map-card" href="/leisure/">
              <span class="map-label">Leisure</span>
              <strong>/leisure</strong>
            </a>
          </div>
          <a class="map-card map-card-wide" href="/insurance/">
            <span class="map-label">Insurance</span>
            <strong>/insurance</strong>
          </a>
        </div>
      </section>

      <section class="section-head" id="libraries">
        <h2>五个入口，五种用途</h2>
        <p>每个分类都是独立的 VitePress 文档站，保留搜索、侧边栏、双语入口和可持续扩写的目录。</p>
      </section>

      <section class="library-grid">
        <SectionCard
          v-for="section in sections"
          :key="section.title"
          v-bind="section"
        />
      </section>

      <section class="feature-strip">
        <article v-for="item in features" :key="item.title" class="feature-item">
          <div class="feature-icon">{{ item.icon }}</div>
          <div>
            <h3>{{ item.title }}</h3>
            <p>{{ item.description }}</p>
          </div>
        </article>
      </section>

      <section class="cta">
        <div>
          <h2>现在也可以从保险实习库开始</h2>
          <p>保险英文术语、理赔笔记和速记清单已经独立成站，适合实习时快速查词和复盘。</p>
        </div>
        <a class="button button-primary" href="/insurance/">进入保险实习库</a>
      </section>
    </main>
  </div>
</template>

<script setup lang="ts">
import SectionCard from '../components/SectionCard.vue'

const sections = [
  {
    href: '/life/',
    icon: '01',
    eyebrow: 'Life',
    title: '生活篇',
    description: '收集让日常更顺手的工具、网站、整理方法和消费经验。',
    highlights: ['效率工具', '居家整理', '健康消费'],
  },
  {
    href: '/work/',
    icon: '02',
    eyebrow: 'Work',
    title: '工作篇',
    description: '沉淀 AI 工作流、协作规范、信息管理和产出模板。',
    highlights: ['AI 工作流', '协作规范', '生产力模板'],
  },
  {
    href: '/fun/',
    icon: '03',
    eyebrow: 'Games',
    title: '游戏区',
    description: '整理 Aim、CS2、Valorant、Apex、L4D2 等游戏理解和训练笔记。',
    highlights: ['Aim 训练', '游戏设置', '复盘笔记'],
  },
  {
    href: '/leisure/',
    icon: '04',
    eyebrow: 'Leisure',
    title: '娱乐休闲区',
    description: '收藏片单、摸鱼网站、播客音乐和未来的电影、影评内容。',
    highlights: ['片单收藏', '摸鱼网站', '播客音乐'],
  },
  {
    href: '/insurance/',
    icon: '05',
    eyebrow: 'Insurance',
    title: '保险实习库',
    description: '整理保险英文术语、理赔岗位笔记、产品条款和速记复习材料。',
    highlights: ['Insurance Glossary', 'Claims Notes', 'Quick Review'],
  },
]

const features = [
  {
    icon: 'S',
    title: '静态总站',
    description: '根路径保持轻量 landing page，只做说明、精选入口和跨站跳转。',
  },
  {
    icon: 'V',
    title: '独立文档站',
    description: '每个领域都有自己的 VitePress 配置、侧边栏和 base 路径。',
  },
  {
    icon: 'N',
    title: '清晰路径',
    description: '访问规则固定为 /life、/work、/fun、/leisure、/insurance，后续扩展更好记。',
  },
]
</script>
