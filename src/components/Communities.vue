<template>
  <div class="wrapper">
    <div class="p-6 text-white text-3xl">Communities</div>
    <div class="mt-3">
      <div class="w-full h-28 border-t-2 border-subtle" v-for="item in communities" :key="item.id">
        {{ item.name }}
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import http from '@/services/http.js';

const communities = ref([]);

onMounted(() => {
  http.get('/api/communities')
    .then(response => {
      communities.value = response.data.communities;
    })
    .catch(error => {
      console.log(error);
    });
})

</script>