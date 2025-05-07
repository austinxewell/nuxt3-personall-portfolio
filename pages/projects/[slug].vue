<template>
    <div v-if="project" class="flex h-screen overflow-hidden">
        <section class="w-[24rem] fixed overflow-y-auto h-full p-6 bg-gray-300 dark:bg-gray-950">
            <h2 class="text-2xl font-bold mb-6">{{ project.overview }}</h2>
            <p class="text-sm mt-2 dark:text-gray-500 font-bold mb-6">{{ project.project_name }}</p>
    
            <div class="flex flex-wrap gap-2 mb-6">
                <UiProjectTag
                    v-for="tag in project.tech_tags"
                    :key="tag.tag_name"
                    :tag="tag.tag_name"
                />
            </div>

            <p v-html="project.description" />

            <div v-if="project.live_url" class="flex justify-center mt-6">
                <a
                    :href="project.live_url"
                    target="_blank"
                >
                    <BaseButton>View Live Project</BaseButton>
                </a>
            </div>

        </section>

        <section class="ml-[24rem] p-6 flex-1 h-full overflow-y-auto">
            <h2 class="text-2xl font-bold mb-6">Project Views:</h2>

            <div class="flex flex-wrap gap-6 text-center">
                <div v-for="image in project.images" :key="image.img_name">
                    <img
                        :src="image.img_url"
                        :alt="image.img_name"
                    />
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

definePageMeta({ layout: 'project-pages' })

const route = useRoute()
const slug = route.params.slug

const project: Project | undefined = projects.find((project) => project.slug === slug)

if (!project) 
    throw createError({
        statusCode: 404,
        statusMessage: 'Project not found'
    })

</script>
