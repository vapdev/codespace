<template>
  <div class="wrapper">
    <div class="p-6 text-white text-3xl">Feed</div>
    <div class="px-16 mt-3">
      <div class="w-full h-28 border-t-2 border-subtle" v-for="x in 10">
        <highlightjs language='js' code="var x = 5;" />
      </div>
    </div>
  </div>
</template>

<script setup>
</script>