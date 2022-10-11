<script setup lang="ts">
import ResultItem from '@/components/ResultItem.vue';

const result = useSearchResult()
</script>

<template>
  <ul>
    <li v-for="item in result.items" :key="item.cacheId">
      <result-item :item="item" />
    </li>
  </ul>
</template>
