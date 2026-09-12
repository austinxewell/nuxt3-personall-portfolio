<template>
    <div class="w-full text-center text-2xl font-bold lg:flex hidden flex-col h-full">
        <p>{{ about.name }}</p>

        <div class="w-40 h-px bg-yellow-600/40 dark:bg-yellow-500/40 mx-auto mt-4" />

        <div class="flex-1 flex flex-col justify-center mt-6">
            <span class="text-xs font-semibold uppercase tracking-[0.2em] text-gray-400 dark:text-gray-500 mb-4">
                Find Me Online
            </span>

            <UiSocialLinks />
        </div>
    </div>
</template>

<script setup lang='ts'>
import { useAboutStore } from '#imports'

const aboutStore = useAboutStore()
const { about } = storeToRefs(aboutStore)
</script>