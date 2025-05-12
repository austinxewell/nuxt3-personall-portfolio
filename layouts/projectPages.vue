<template>
    <main class="relative">
        <BaseButton class="fixed bg-white dark:bg-gray-900 top-4 right-4 z-50" @click="goBack">
            <UIcon name="material-symbols:close-rounded" size="24"/>
        </BaseButton>
        <slot />
    </main>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router'

const router = useRouter()

function goBack() {
    router.go(-1)
}
</script>