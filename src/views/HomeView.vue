<template>
  <main>
    <div class="wrapper flex h-[100vh]">
      <div class="communities w-full">
        <Communities />
      </div>
      <LinhaVertical />
      <div class="feed w-full">
        <Feed />
      </div>
      <LinhaVertical />
      <div class="conversation w-full">
        <Chat />
      </div>
      <LinhaVertical />
      <div class="min-w-[6rem] w-[6rem]">
        <Settings 
        />
      </div>
    </div>
  </main>
</template>

<script setup>
import LinhaVertical from '@/components/LinhaVertical.vue'
import Communities from '@/components/Communities.vue'
import Feed from '@/components/Feed.vue'
import Chat from '@/components/Chat.vue'
import Settings from '@/components/Settings.vue'

</script>