<template>
    <LayoutProjectPage />
</template>

<script setup lang="ts">
import { useRoute } from 'vue-router'
import { projects } from '~/data/projects'
import { findThumbnailImage } from '~/utils/projectHelpers'

const route = useRoute()
const slug = route.params.slug
const project = projects.find((project) => project.slug === slug)!
const title = computed(() => project.project_name || 'Project') 
const image = computed(() => {
    const thumbnail = findThumbnailImage(project.images)
    return typeof thumbnail === 'string' ? thumbnail : thumbnail?.img_url || 'https://i.postimg.cc/vmc8BBbj/portfolio-projects.png'
})

definePageMeta({ layout: 'project-pages' })
useHead({ title })
useSeoMeta({
    description: `View Project "${title.value}" by Austin Ewell at AuEwellify`,
    ogTitle: `${title.value} | Austin Ewell - AuEwellify`,
    ogDescription: `View Project "${title.value}" by Austin Ewell at AuEwellify`,
    ogImage: image.value,
    // TODO: add correct domain when available
    // ogUrl: 'https://yourdomain.com/projects',
    twitterTitle: `${title.value} | Austin Ewell - AuEwellify`,
    twitterDescription: `View Project "${title.value}" by Austin Ewell at AuEwellify`,
    twitterImage: image.value
})

if (!project)
    throw createError({
        statusCode: 404,
        statusMessage: 'Project not found'
    })
</script>
