<template>
    <img
        :class="['rounded-full', $attrs.class]"
        :src="isDark ? lightSrc : darkSrc"
        alt="Avatar"
    />
</template>

<script setup lang="ts">
import { useDarkModeStore } from '@/stores/useDarkModeStore'

const darkModeStore = useDarkModeStore()
const isDark = computed(() => darkModeStore.isDark)

const darkSrc = '/images/avatar-dark.png'
const lightSrc = '/images/avatar-light.png'
</script>