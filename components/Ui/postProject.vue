<template>
    <form 
        class="flex flex-col gap-4 p-6 bg-white dark:bg-gray-800 rounded-xl shadow-md max-w-lg mx-auto"
        @submit.prevent="submitProject"
    >
        <BaseInput
            id="project_name"
            v-model="newProject.project_name"
            label="Project Name"
            placeholder="My New Project"
            required
        />

        <BaseInput
            id="slug"
            v-model="newProject.slug"
            label="Slug"
            placeholder="my-new-project"
            required
        />

        <BaseInput
            id="overview"
            v-model="newProject.overview"
            label="Overview"
            placeholder="A short overview of the project"
            required
        />

        <BaseInput
            id="description"
            v-model="newProject.description"
            label="Description"
            placeholder="Detailed description, features, and tech used"
            required
            textarea
        />

        <BaseInput
            id="live_url"
            v-model="newProject.live_url"
            label="Live URL"
            placeholder="https://mynewproject.com"
        />

        <BaseInput
            id="github_url"
            v-model="newProject.github_url"
            label="GitHub URL"
            placeholder="https://github.com/myusername/my-new-project"
        />

        <div class="flex items-center gap-2 mt-2">
            <input
                id="is_favorite"
                v-model="newProject.is_favorite"
                type="checkbox"
                class="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
            />
            <label for="is_favorite" class="text-gray-700 dark:text-gray-300">Mark as Favorite</label>
        </div>

        <BaseButton type="submit" class="mt-4 w-full">
            Submit Project
        </BaseButton>
    </form>
</template>

<script setup lang="ts">
import type { ProjectPayload } from '~/types/projects'
import { useProjectsStore } from '#imports'

const projectsStore = useProjectsStore()

const newProject = reactive<ProjectPayload>({
    project_name: '',
    slug: '',
    overview: '',
    description: '',
    live_url: '',
    github_url: '',
    is_favorite: false
})

// Here you could add a submit handler if desired
function submitProject() {
    try {
        projectsStore.postNewProject(newProject)
    } catch (error) {
        console.error(error)
    }
}
</script>
