<script setup>
defineProps({
  msg: {
    type: String,
    required: true
  }
})
</script>

<template>
  <h1 className="text-3xl font-bold underline">
    {{ msg }}
  </h1>
</template>

<style scoped>
</style>
