<template>
    <div class="flex justify-center gap-6">
        <a
            :href="about.linkedin_url"
            target="_blank"
            class="transform transition-transform duration-200 hover:scale-120"
        >
            <UIcon name="logos:linkedin-icon" class="size-6" />
        </a>
        <a
            :href="about.github_url"
            target="_blank"
            class="transform transition-transform duration-200 hover:scale-120"
        >
            <UIcon :name="isDark ? 'skill-icons:github-light' : 'skill-icons:github-dark'" class="size-6" />
        </a>
        <a
            :href="about.resume_url"
            target="_blank"
            class="relative group"
        >
            <UIcon name="mdi:file-document-outline" class="size-6 text-gray-800 dark:text-white transform transition-transform duration-200 hover:scale-120" />

            <div
                class="absolute left-full top-1/2 -translate-y-1/2 ml-2
                        bg-gray-800 text-white text-sm px-3 py-1 rounded whitespace-nowrap
                        opacity-0 translate-x-2 group-hover:opacity-100 group-hover:translate-x-0
                        transition-all duration-300 pointer-events-none z-20"
            >
                Resume
            </div>
        </a>
        <a
            :href="about.blog_url"
            target="_blank"
            class="relative group"
        >
            <UIcon name="mdi:book-outline" class="size-6 text-gray-800 dark:text-white transform transition-transform duration-200 hover:scale-120" />

            <div
                class="absolute left-full top-1/2 -translate-y-1/2 ml-2
                        bg-gray-800 text-white text-sm px-3 py-1 rounded whitespace-nowrap
                        opacity-0 translate-x-2 group-hover:opacity-100 group-hover:translate-x-0
                        transition-all duration-300 pointer-events-none z-20"
            >
                Dev Blog
            </div>
        </a>
    </div>
</template>

<script setup lang='ts'>
import { useAboutStore } from '#imports'
import { useDarkModeStore } from '@/stores/useDarkModeStore'

const aboutStore = useAboutStore()
const { about } = storeToRefs(aboutStore)

const darkModeStore = useDarkModeStore()

const isDark = computed(() => darkModeStore.isDark)
</script>