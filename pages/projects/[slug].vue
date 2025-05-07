<template>
    <div v-if="project">
        <h1>{{ project.project_name }}</h1>
        <p>{{ project.description }}</p>
        <!-- Add more project details as needed -->
    </div>
    <div v-else>
        <p>Project not found.</p>
    </div>
</template>

<script setup lang="ts">
import { useRoute } from 'vue-router'
import { projects } from '~/data/projects'
import type { Project } from '~/types/projects'
import { createError } from 'h3'

definePageMeta({ layout: 'project-pages' })

const route = useRoute()
const slugParam = route.params.slug
const slug = Number(slugParam)

if (isNaN(slug)) 
    throw createError({
        statusCode: 400,
        statusMessage: 'Invalid project identifier'
    })


const project: Project | undefined = projects.find((project) => project.id === slug)

if (!project) 
    throw createError({
        statusCode: 404,
        statusMessage: 'Project not found'
    })

</script>
