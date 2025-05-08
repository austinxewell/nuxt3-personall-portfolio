<template>
    <div v-if="project" class="flex h-screen overflow-hidden relative">
        <BaseButton
            class="w-fit z-20 absolute top-4 left-4 sm:left-auto sm:right-24 lg:hidden"
            @click="drawerOpen = !drawerOpen"
        >
            {{ drawerOpen ? 'Views' : 'Details' }}
        </BaseButton>

        <transition name="slide" mode="out-in">
            <section
                v-if="drawerOpen || screenIsLgUp"
                class="fixed md:absolute z-10 top-0 left-0 h-full w-[24rem] p-6 bg-gray-300 dark:bg-gray-950 overflow-y-auto pt-20 sm:pt-6"
            >
                <h2 class="text-2xl font-bold mb-6">{{ project.overview }}</h2>
                <p class="text-sm mt-2 dark:text-gray-500 font-bold mb-6">
                    {{ project.project_name }}
                </p>

                <div class="flex flex-wrap gap-2 mb-6">
                    <UiProjectTag
                        v-for="tag in project.tech_tags"
                        :key="tag.tag_name"
                        :tag="tag.tag_name"
                    />
                </div>

                <p v-html="project.description" />

                <div v-if="project.live_url" class="flex justify-center mt-6">
                    <a :href="project.live_url" target="_blank">
                        <BaseButton>View Live Project</BaseButton>
                    </a>
                </div>
            </section>
        </transition>

        <section
            class="p-6 h-full overflow-y-auto transition-all duration-300"
            :class="{ 'ml-[24rem]': screenIsLgUp }"
        >
            <h2 class="text-2xl mt-14 sm:mt-0 font-bold mb-6">Project Views:</h2>

            <div class="flex flex-wrap gap-6 text-center">
                <div v-for="image in project.images" :key="image.img_name">
                    <img :src="image.img_url" :alt="image.img_name" />
                    <p class="font-bold mt-1">{{ image.img_name }}</p>
                </div>
            </div>
        </section>
    </div>
</template>

<script setup lang="ts">
import { useRoute } from 'vue-router'
import { projects } from '~/data/projects'
import type { Project } from '~/types/projects'
import { createError } from 'h3'
import { useWindowSize } from '@vueuse/core'

const route = useRoute()
const slug = route.params.slug
const project: Project | undefined = projects.find((project) => project.slug === slug)

if (!project)
    throw createError({
        statusCode: 404,
        statusMessage: 'Project not found'
    })

const drawerOpen = ref(false)

const { width } = useWindowSize()
const LARGE_SCREEN_SIZE = 1024
const screenIsLgUp = computed(() => width.value >= LARGE_SCREEN_SIZE)
</script>

<style scoped>
.slide-enter-active,
.slide-leave-active {
transition: transform 0.3s ease;
}

.slide-enter-from,
.slide-leave-to {
transform: translateX(-100%);
}

.slide-enter-to,
.slide-leave-from {
transform: translateX(0%);
}
</style>
