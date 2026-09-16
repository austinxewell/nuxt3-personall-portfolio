<template>
    <h2 class="text-xl font-bold mb-4">Update Project</h2>

    <BaseStepTracker 
        v-model="step"
        :steps="steps"
    />

    <UiProjectSelection 
        v-if="step === 0"
        @go-to-step="goToStep"
    />

    <UiProjectCreation
        v-if="step === 1"
        class="mt-4"
        is-update
        @go-to-step="goToStep"
    />

    <UiProjectLinkTags 
        v-if="step === 2"
        is-update 
        @go-to-step="goToStep" 
    />

    <UiProjectLinkImages
        v-if="step === 3"
        is-update
        @complete-form="completeForm"
    />
</template>

<script setup lang="ts">
const projectStore = useProjectsStore()
const tagStore = useTagStore()
const imageStore = useImageStore()

const emit = defineEmits(['completeForm'])

const steps = ['Select Project', 'Project Details', 'Modify Tags', 'Modify Images']
const step = ref(0)

function goToStep(index: number) {
    step.value = index
}

function completeForm(formName: string) {
    emit('completeForm', formName)
}

onMounted(async() => {
    await Promise.all([
        projectStore.fetchProjects(),
        tagStore.fetchTags()
    ])
    projectStore.project = null
    imageStore.projectImages = []
})
</script>