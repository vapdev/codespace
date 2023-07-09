<template>
    <div class="h-full flex flex-col justify-between">
        <div>
            <div>
                <div @click="toggleVisible('communities')" class="p-6 text-white text-3xl">
                    <UserGroupIcon class="h-10 w-10" />
                </div>
            </div>
            <div>
                <div @click="toggleVisible('feed')" class="p-6 text-white text-3xl">
                    <Bars3CenterLeftIcon class="h-10 w-10" />
                </div>
            </div>
            <div>
                <div @click="toggleVisible('conversation')" class="p-6 text-white text-3xl">
                    <ChatBubbleOvalLeftIcon class="h-10 w-10" />
                </div>
            </div>
            <div>
                <div @click="toggleVisible('users')" class="p-6 text-white text-3xl">
                    <UsersIcon class="h-10 w-10" />
                </div>
            </div>
            <div>
                <div @click="toggleVisible('settings')" class="p-6 text-white text-3xl">
                    <Cog6ToothIcon class="h-10 w-10" />
                </div>
            </div>
            <div>
                <div @click="logout" class="p-6 text-white text-3xl">
                    <ArrowLeftOnRectangleIcon class="h-10 w-10" />
                </div>
            </div>
        </div>
        <div>
            <div @click="useModalStore().toggleModal()" class="p-6 text-white text-3xl">
                <PencilSquareIcon class="h-10 w-10" />
            </div>
        </div>
    </div>
</template>

<script setup>
import { UsersIcon, ChatBubbleOvalLeftIcon, Bars3CenterLeftIcon, Cog6ToothIcon, UserGroupIcon, PencilSquareIcon, ArrowLeftOnRectangleIcon } from '@heroicons/vue/24/solid'
import { useModalStore } from '@/stores/modalStore'
import { useAuth } from '@/stores/auth.js'
import { useRouter } from 'vue-router'

const router = useRouter()

const auth = useAuth()

const logout = () => {
    auth.logout()
    router.push({ name: 'login' })
}

const toggleVisible = (item) => {
    document.querySelector(`.${item}`).classList.toggle('hidden')
}
</script>