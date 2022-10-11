<script setup lang="ts">

const query = useQuery()
const searchResult = useSearchResult()
  
const handleClick = async () => {
  const result = await searchRequest(query.value);
  searchResult.value = result
};
</script>

<template>
  <div>
    <form>
      <input type="text" placeholder="edit me" v-model="query" />
      <input type="submit" value="検索" @click.prevent="handleClick()" />
    </form>
  </div>
</template>
