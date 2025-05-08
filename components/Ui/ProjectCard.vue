<template>
    <NuxtLink :to="`/projects/${project.slug}`">
        <div 
            class="w-[17rem] h-[20rem] border dark:border-yellow-600 rounded-2xl shadow-lg shadow-black  cursor-pointer bg-white dark:bg-gray-800 transform transition-transform duration-300 hover:scale-120 hover:z-10"
        >
            <img 
                class="rounded-t-2xl"
                :src="findThumbnailImage(project.images)?.img_url" 
                :alt="findThumbnailImage(project.images)?.img_name"
            />

            <aside class="p-4 text-sm">
                <p>{{ project.overview }}</p>
                <p class="text-xs mt-2 dark:text-gray-500 font-bold">{{ project.project_name }}</p>
                <div class="flex flex-wrap gap-2 mt-6">
                    <UiProjectTag
                        v-for="tag in project.tech_tags"
                        :key="tag.tag_name"
                        :tag="tag.tag_name"
                    />
                </div>
            </aside>
        </div>
    </NuxtLink>
</template>

<script setup lang='ts'>
import { findThumbnailImage } from '@/utils/projectHelpers'
import type { Project } from '~/types/projects'

interface Props {
    project: Project
}

const props = defineProps<Props>()
const { project } = props
</script>