<template>
    <div v-if="isLoading">
        <LayoutLoadingScreen />
    </div>

    <div v-if="!isLoading && project" class="flex h-screen overflow-hidden relative">
        <BaseButton
            class="w-fit z-20 absolute top-4 left-4 sm:left-auto sm:right-24 lg:hidden bg-white"
            @click="drawerOpen = !drawerOpen"
        >
            {{ drawerOpen ? 'Views' : 'Details' }}
        </BaseButton>

        <transition name="slide" mode="out-in">
            <section
                v-if="drawerOpen || screenIsLgUp"
                class="fixed md:absolute z-10 top-0 left-0 h-full w-full sm:w-[24rem] p-6 bg-gray-300 dark:bg-gray-950 overflow-y-auto pt-20 sm:pt-6"
            >
                <h2 class="text-2xl font-bold mb-6">{{ project.overview }}</h2>
                <p class="text-sm mt-2 dark:text-gray-500 font-bold mb-6">
                    &mdash; {{ project.project_name }}
                </p>

                <div class="flex flex-wrap gap-2 mb-6">
                    <UiProjectTag
                        v-for="tag in project.tech_tags"
                        :key="tag.tag_name"
                        :tag="tag.tag_name"
                    />
                </div>

                <div v-html="project.description" />

                <div class="mt-6 w-full mx-auto flex flex-col items-center gap-4">
                    <a
                        v-if="project.live_url"
                        :href="project.live_url"
                        target="_blank"
                    >
                        <BaseButton>View Live Project</BaseButton>
                    </a>
                    <a
                        v-if="project.github_url"
                        :href="project.github_url"
                        target="_blank"
                    >
                        <BaseButton>View Gitlab Repository</BaseButton>
                    </a>
                </div>
            </section>
        </transition>

        <section
            class="p-6 h-full overflow-y-auto transition-all duration-300 lg:ml-[24rem]"
            
            @click="drawerOpen = false"
        >
            <h2 class="text-2xl mt-14 sm:mt-0 font-bold mb-6 pb-1 border-b-1 w-fit">Project Views:</h2>

            <div class="flex justify-center flex-wrap gap-6 text-center">
                <div v-for="image in projectImages" :key="image.img_name">
                    <div class="relative flex items-center justify-center min-w-32 min-h-32">
                        <UiLoadingSpinner v-if="!loadedImages.has(image.img_name)" class="w-10 h-10 absolute" />
                        <img
                            class="max-h-[80svh] max-w-full rounded-md object-contain transition-opacity duration-300"
                            :class="loadedImages.has(image.img_name) ? 'opacity-100' : 'opacity-0 absolute'"
                            :src="image.img_url"
                            :alt="image.img_name"
                            @click="setSelectedImage(image)"
                            @load="markLoaded(image.img_name)"
                            @error="markLoaded(image.img_name)"
                        />
                    </div>
                    <p class="font-bold mt-1">{{ image.img_name }}</p>
                </div>
            </div>
        </section>
    </div>
</template>

<script setup lang="ts">
import { useRoute } from 'vue-router'
import { useProjectsStore } from '#imports'
import { createError } from 'h3'
import { useWindowSize } from '@vueuse/core'
import { useImageStore } from '~/stores/useImageStore'
import type { SelectedImage } from '~/types/image'

const projectStore = useProjectsStore()
const imageStore = useImageStore()
const route = useRoute()

const project = computed(() => projectStore.project)
const projectImages = computed(() => {
    if (!project.value) return []
    return [...project.value.images].reverse()
})
const isLoading = computed(() => projectStore.loading)

watch(
    () => route.params.slug,
    async(newSlug) => {
        if (!newSlug) return

        const result = await projectStore.fetchProjectBySlug(newSlug as string)

        if (!result)
            throw createError({
                statusCode: 404,
                statusMessage: 'Project not found'
            })
    },
    { immediate: true }
)

const drawerOpen = ref(false)
const loadedImages = ref(new Set<string>())

const { width } = useWindowSize()
const LARGE_SCREEN_SIZE = 1024
const screenIsLgUp = computed(() => width.value >= LARGE_SCREEN_SIZE)

function setSelectedImage(image: SelectedImage) {
    imageStore.selectedImage = image
}

function markLoaded(name: string) {
    loadedImages.value.add(name)
}
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