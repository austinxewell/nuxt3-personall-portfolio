<template>
    <div class="flex flex-col">
        <h3 class="font-medium mb-2">
            Select a Project:
        </h3>
        <ul class="max-h-96 overflow-auto">
            <li 
                v-for="project in projects" 
                :key="project.id"
                class="hover:cursor-pointer hover:text-yellow-500 hover:font-medium"
                :class="{ 'text-yellow-600 font-semibold': selectedProject?.id === project.id }"
                @click="selectProject(project)"
            >
                {{ project.project_name }}
            </li>
        </ul>
    
        <BaseButton 
            type="submit" 
            class="mt-4 flex items-center gap-2"
            :disabled="!selectedProject"
            @click="updateProject"
        >
            Update Selected Project
        </BaseButton>
    </div>
</template>

<script setup lang="ts">
import type { ProjectStep } from '~/constants/projectStep'
import type { Project } from '~/types/projects'

const projectStore = useProjectsStore()
const imageStore = useImageStore()

const emit = defineEmits<{(e: 'goToStep', step: ProjectStep): void}>()

const projects = computed(() => projectStore.projects)
const selectedProject = computed(() => projectStore.project)

function selectProject(project: Project) {
    projectStore.project = project
}

function updateProject() {
    emit('goToStep', 1)

    const projectId = selectedProject.value?.id

    if (projectId)
        imageStore.getImageByProjectId(projectId)
}
</script>