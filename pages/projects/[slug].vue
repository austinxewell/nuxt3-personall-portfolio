<template>
    <div>
        <LayoutProjectPage />
        <UiFullImage />
    </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import { storeToRefs, useProjectsStore  } from '#imports'

import { findThumbnailImage } from '~/utils/projectHelpers'

const projectsStore = useProjectsStore()
const { projects } = storeToRefs(projectsStore)

const route = useRoute()
const slug = route.params.slug as string

const project = projects.value.find(project => project.slug === slug)
if (!project) 
    throw createError({
        statusCode: 404,
        statusMessage: 'Project not found'
    })


const title = computed(() => project.project_name || 'Project')
const image = computed(() => {
    const thumbnail = findThumbnailImage(project.images)
    if (typeof thumbnail === 'string') return thumbnail
    return thumbnail?.img_url || 'https://i.postimg.cc/vmc8BBbj/portfolio-projects.png'
})

definePageMeta({ layout: 'project-pages' })

useHead({ title })

useSeoMeta({
    description: `View Project "${title.value}" by Austin Ewell at AuEwellify`,
    ogTitle: `${title.value} | Austin Ewell - AuEwellify`,
    ogDescription: `View Project "${title.value}" by Austin Ewell at AuEwellify`,
    ogImage: image.value,
    ogUrl: `https://auewellify.dev/projects/${slug}`,
    twitterTitle: `${title.value} | Austin Ewell - AuEwellify`,
    twitterDescription: `View Project "${title.value}" by Austin Ewell at AuEwellify`,
    twitterImage: image.value
})
</script>
