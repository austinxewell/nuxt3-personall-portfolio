<template>
    <div>
        <img
            v-if="isDark"
            class="w-24 h-24 rounded-full"
            src="../../assets/images/avatar-light.png"
            alt=""
        />

        <img
            v-else
            class="w-24 h-24 rounded-full"
            src="../../assets/images/avatar-dark.png"
            alt=""
        />
    </div>
</template>

<script setup lang='ts'>
import { useDarkModeStore } from '@/stores/useDarkModeStore'

const darkModeStore = useDarkModeStore()
const isDark = computed(() => darkModeStore.isDark)
</script>