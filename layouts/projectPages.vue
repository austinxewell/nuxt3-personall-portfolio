<template>
    <main class="relative">
        <BaseButton class="fixed bg-white dark:bg-gray-900 top-4 right-4 z-50" @click="goBack">
            <UIcon name="material-symbols:close-rounded" size="24"/>
        </BaseButton>
        <div class="mx-auto max-w-screen-xl">
            <slot />
        </div>
    </main>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router'

const router = useRouter()

function goBack() {
    if (window.history.state?.back) 
        router.go(-1)
    else 
        router.push('/')
    
}
</script>