<template>
  <a class="section-card" :href="href">
    <div class="section-card__icon">{{ icon }}</div>
    <div class="section-card__body">
      <p class="section-card__eyebrow">{{ eyebrow }}</p>
      <h3>{{ title }}</h3>
      <p>{{ description }}</p>
      <ul>
        <li v-for="item in highlights" :key="item">{{ item }}</li>
      </ul>
    </div>
  </a>
</template>

<script setup lang="ts">
defineProps<{
  href: string
  icon: string
  eyebrow: string
  title: string
  description: string
  highlights: string[]
}>()
</script>
