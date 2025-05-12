<template>
    <NuxtLink :to="`/projects/${project.slug}`">
        <div 
            class="relative w-full sm:w-[17rem] h-[20rem] border dark:border-yellow-600 rounded-2xl shadow-lg shadow-black  cursor-pointer bg-white dark:bg-gray-800 transform transition-transform duration-300 hover:scale-120 hover:z-10"
        >
            <BaseFavoriteStar class="w-10 h-10" :is-favorite="project.isFavorite" />

            <img 
                class="rounded-t-2xl h-1/2 w-full"
                :src="findThumbnailImage(project.images)?.img_url" 
                :alt="findThumbnailImage(project.images)?.img_name"
            />

            <aside class="p-4 text-sm">
                <p>{{ project.overview }}</p>
                <p class="text-xs mt-2 dark:text-gray-500 font-bold">&mdash; {{ project.project_name }}</p>
                <div class="flex flex-wrap gap-2 mt-4">
                    <UiProjectTag
                        v-for="tag in findPrimaryTags(project.tech_tags)"
                        :key="tag.tag_name"
                        :tag="tag.tag_name"
                    />

                    <span v-if="nonPrimaryTagCount > 0">+ {{ nonPrimaryTagCount }} other<span v-if="nonPrimaryTagCount > 1">s</span> </span>
                </div>
            </aside>
        </div>
    </NuxtLink>
</template>

<script setup lang='ts'>
import { findThumbnailImage, findPrimaryTags } from '@/utils/projectHelpers'
import type { Project } from '~/types/projects'

interface Props {
    project: Project
}

const props = defineProps<Props>()
const { project } = props

const nonPrimaryTagCount = computed(() => {
    const tags = project?.tech_tags
    if (!Array.isArray(tags)) return 0

    return tags.filter(tag => !tag.is_primary).length
})
</script>