<script setup>
import LinhaVertical from '@/components/LinhaVertical.vue'
import Communities from '@/components/Communities.vue'
import Feed from '@/components/Feed.vue'
import Chat from '@/components/Chat.vue'
import Settings from '@/components/Settings.vue'
</script>

<template>
  <main>
    <div class="wrapper flex h-[100vh]">
      <div class="communities w-1/6">
        <Communities />
      </div>
      <LinhaVertical />
      <div class="feed w-1/3">
        <Feed />
      </div>
      <LinhaVertical />
      <div class="chat w-1/3">
        <Chat />
      </div>
      <LinhaVertical />
      <div class="communities w-1/6">
        <Settings />
      </div>
    </div>
  </main>
</template>
