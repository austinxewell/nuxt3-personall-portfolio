<template>
    <div class="w-full lg:w-1/4 text-center mb-auto text-2xl font-bold lg:block hidden h-full">
        <p>Hey! I'm {{ about.name }}</p>
        <div class="text-sm mt-2 text-gray-500">
            <p>{{ about.title }}</p>
            <p>{{ about.specialty }}</p>
            <div class="flex justify-center gap-6 mt-4">
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
                    <UIcon name="mdi:file-document-outline" class="size-6 text-gray-800 dark:text-white" />

                    <div
                        class="absolute left-full top-1/2 -translate-y-1/2 ml-2
                        bg-gray-800 text-white text-sm px-3 py-1 rounded whitespace-nowrap
                        opacity-0 translate-x-2 group-hover:opacity-100 group-hover:translate-x-0
                        transition-all duration-300 pointer-events-none z-20"
                    >
                        View Resume
                    </div>
                </a>
                <a
                    :href="about.blog_url"
                    target="_blank"
                    class="relative group"
                >
                    <UIcon name="mdi:book-outline" class="size-6 text-gray-800 dark:text-white" />

                    <div
                        class="absolute left-full top-1/2 -translate-y-1/2 ml-2
                        bg-gray-800 text-white text-sm px-3 py-1 rounded whitespace-nowrap
                        opacity-0 translate-x-2 group-hover:opacity-100 group-hover:translate-x-0
                        transition-all duration-300 pointer-events-none z-20"
                    >
                        View Dev Blog
                    </div>
                </a>
            </div>
        </div>
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