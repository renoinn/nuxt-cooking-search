<script setup lang="ts">
import { ResultItem } from '@/api/search'

const props = defineProps<{
  item: ResultItem,
}>()
</script>

<template>
  <div>
    <a :href="item.link" target="_blank">
    <h3>{{ item.title }}</h3>
    <p>{{ item.snippet }}</p>
    <p><img :src="item.pagemap.cse_thumbnail[0].src"></p>
    <p>{{ item.displayLink }}</p>
    </a>
  </div>
</template>
