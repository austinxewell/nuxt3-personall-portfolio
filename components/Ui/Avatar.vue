<template>
    <div>
        <img
            v-if="isDark"
            :class="['rounded-full', size]"
            src="../../assets/images/avatar-light.png"
            alt=""
        />

        <img
            v-else
            :class="['rounded-full', size]"
            src="../../assets/images/avatar-dark.png"
            alt=""
        />
    </div>
</template>

<script setup lang='ts'>
import { useDarkModeStore } from '@/stores/useDarkModeStore'

defineProps({
    size: {
        type: String,
        default: 'w-24 h-24'
    }
})

const darkModeStore = useDarkModeStore()
const isDark = computed(() => darkModeStore.isDark)
</script>