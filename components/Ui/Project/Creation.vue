<template>
    <form 
        class="flex flex-col gap-4 pb-6 px-6 mx-auto"
        @submit.prevent="submitProject"
    >
        <div class="flex gap-2">
            <div class="relative w-full">
                <BaseInput
                    id="project_name"
                    v-model="newProject.project_name"
                    class="w-full"
                    label="* Project Name"
                    placeholder="Project Name"
                    :error="errors.project_name"
                />

                <div class="absolute -top-7 right-1 transform translate-y-1/2">
                    <BaseFavoriteStarInput v-model="newProject.is_favorite" />
                </div>
            </div>
    
            <BaseInput
                id="slug"
                v-model="newProject.slug"
                class="w-full"
                label="* Slug (No Spaces)"
                placeholder="my-new-project"
                :error="errors.slug"
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
                label="* GitHub URL"
                placeholder="https://github.com/myusername/my-new-project"
                :error="errors.github_url"
            />
        </div>

        <BaseInput
            id="overview"
            v-model="newProject.overview"
            label="* Overview"
            placeholder="A short overview of the project"
            :error="errors.overview"
        />

        <BaseTextArea
            id="description"
            v-model="newProject.description"
            label="* Description (Use HTML Format)"
            placeholder="Detailed description, features, and tech used"
            :rows="5"
            :error="errors.description"
        />

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
import { useToast } from 'vue-toastification'

const projectsStore = useProjectsStore()
const toast = useToast()

const emit = defineEmits(['goToStep'])

const newProject = reactive<ProjectPayload>({
    project_name: '',
    slug: '',
    overview: '',
    description: '',
    live_url: '',
    github_url: '',
    is_favorite: false
})

const errors = reactive<Record<string, string>>({
    project_name: '',
    slug: '',
    overview: '',
    description: '',
    github_url: ''
})

const isSubmitting = ref(false)
let slugManuallyEdited = false

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

function getValidationErrors(): Record<string, string> {
    const validationErrors: Record<string, string> = {}

    interface ValidationRule {
        required?: boolean
        pattern?: RegExp
        message?: string
    }

    const rules: Record<string, ValidationRule> = {
        project_name: { required: true },
        slug: {
            required: true,
            pattern: /^[a-z0-9-]+$/,
            message: 'slug must be kebab-case.'
        },
        overview: { required: true },
        description: { required: true },
        github_url: { required: true }
    }

    for (const [field, rule] of Object.entries(rules)) {
        const value = ((newProject as unknown) as Record<string, string>)[field]?.trim?.() || ''

        if (rule.required && !value)
            validationErrors[field] = `${field.replace('_', ' ')} is required.`
        else if (rule.pattern && !rule.pattern.test(value))
            validationErrors[field] = rule.message || `${field.replace('_', ' ')} is invalid.`
    }

    return validationErrors
}

function validateForm(): boolean {
    const validationErrors = getValidationErrors()

    for (const key in errors) errors[key] = ''
    Object.assign(errors, validationErrors)

    return Object.keys(validationErrors).length === 0
}

async function submitProject() {
    if (!validateForm()) {
        console.warn('Validation failed. Check required fields.')
        toast.error('Form is not valid')
        return
    }

    isSubmitting.value = true
    try {
        // await projectsStore.postNewProject(newProject)

        toast.success('Project created successfully')
        emit('goToStep', 1)
    } catch (error) {
        console.error(error)
        toast.error('Unable to create new project')
    } finally {
        isSubmitting.value = false
    }
}
</script>
