<template>
    <form 
        class="flex flex-col gap-4 pb-6 px-6 mx-auto"
        @submit.prevent="submitProject"
    >
        <div class="flex gap-2">
            <BaseInput
                id="project_name"
                v-model="newProject.project_name"
                class="w-full"
                label="* Project Name"
                placeholder="Project Name"
                required
            />
    
            <BaseInput
                id="slug"
                v-model="newProject.slug"
                class="w-full"
                label="* Slug (No Spaces)"
                placeholder="my-new-project"
                required
                @input="onSlugInput"
            />
        </div>

        <div class="flex gap-2">
            <BaseInput
                id="live_url"
                v-model="newProject.live_url"
                class="w-full"
                label="Live URL"
                placeholder="https://mynewproject.com"
            />
    
            <BaseInput
                id="github_url"
                v-model="newProject.github_url"
                class="w-full"
                label="GitHub URL"
                placeholder="https://github.com/myusername/my-new-project"
            />
        </div>

        <BaseInput
            id="overview"
            v-model="newProject.overview"
            label="* Overview"
            placeholder="A short overview of the project"
            required
        />

        <BaseTextArea
            id="description"
            v-model="newProject.description"
            label="* Description (Use HTML Format)"
            placeholder="Detailed description, features, and tech used"
            :rows="5"
            required
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

        <BaseButton 
            type="submit" 
            :disabled="isSubmitting"
            class="mt-4 flex items-center gap-2"
        >
            {{ isSubmitting ? 'Creating Project' : 'Submit Project' }}
            <BaseSpinner v-if="isSubmitting" />
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

let slugManuallyEdited = false
const isSubmitting = ref(false)

watch(
    () => newProject.project_name,
    (newName) => {
        if (!slugManuallyEdited) 
            newProject.slug = newName
                .trim()
                .toLowerCase()
                .replace(/\s+/g, '-')
                .replace(/[^a-z0-9-]/g, '')
    
    }
)

function onSlugInput() {
    slugManuallyEdited = true
}

function submitProject() {
    isSubmitting.value = true
    try {
        projectsStore.postNewProject(newProject)
    } catch (error) {
        console.error(error)
    } finally {
        isSubmitting.value = false
    }
}
</script>
