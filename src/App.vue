<script setup>
import { ref, watchEffect } from 'vue'
import { RouterView } from 'vue-router'
import ModalGlobal from '@/components/ModalGlobal.vue';
import { useModalStore } from '@/stores/modalStore';

const { modal } = useModalStore()

watchEffect(() => {
  console.log(modal)
})

</script>

<template>
  <ModalGlobal v-if="useModalStore().modal"/>
  <header>
  </header>
  <RouterView class="bg-background w-[100%] h-[100vh]" />
</template>
