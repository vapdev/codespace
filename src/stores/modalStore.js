import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useModalStore = defineStore('modal', () => {
    const modal = ref(false)
    function toggleModal() {
        console.log(modal.value)
        modal.value = !modal.value
    }
    
    return { modal, toggleModal }
    }
)