<template>
    <div class="w-full lg:w-1/4 text-center text-2xl font-bold lg:block hidden h-full">
        <p>Hey! I'm Austin Ewell</p>
        <div class="text-sm mt-2 text-gray-500">
            <p>Full Stack Engineer</p>
            <p>Front-End Specialist</p>
            <div class="flex justify-center gap-6 mt-4">
                <a
                    href="https://www.linkedin.com/in/austin-ewell-01a60313a/"
                    target="_blank"
                    class="transform transition-transform duration-200 hover:scale-120"
                >
                    <UIcon name="logos:linkedin-icon" class="size-6" />
                </a>
                <a
                    href="https://github.com/austinxewell"
                    target="_blank"
                    class="transform transition-transform duration-200 hover:scale-120"
                >
                    <UIcon :name="isDark ? 'skill-icons:github-light' : 'skill-icons:github-dark'" class="size-6" />
                </a>
                <a
                    href="/Austin_Ewell_Resume.pdf"
                    download="AustinEwell_Resume.pdf"
                    class="relative transform transition-transform duration-200 hover:scale-120 group"
                >
                    <UIcon name="mdi:file-document-outline" class="size-6 text-gray-800 dark:text-white" />
                    <div
                        class="absolute left-full top-1/2 -translate-y-1/2 ml-2 bg-gray-800 text-white text-xs px-3 py-1 rounded whitespace-nowrap
                                opacity-0 scale-x-0 group-hover:opacity-100 group-hover:scale-x-100 origin-left
                                transition-transform transition-opacity duration-300 pointer-events-none"
                    >
                        Download Resume
                    </div>
                </a>
            </div>
        </div>
    </div>
</template>

<script setup lang='ts'>
import { useDarkModeStore } from '@/stores/useDarkModeStore'

const darkModeStore = useDarkModeStore()

const isDark = computed(() => darkModeStore.isDark)
</script>