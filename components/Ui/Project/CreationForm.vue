<template>
    <div>
        <h2 class="text-xl font-bold mb-4">Create New Project</h2>

        <BaseStepTracker 
            v-model="step"
            :steps="steps"
        />

        <UiProjectCreation 
            v-if="step === 0"
            class="pt-4" 
            @set-project-id="setCreatedProjectId"
            @go-to-step="goToStep"
        />

        <UiProjectLinkTags
            v-if="step === 1"
            :created-project-id="createdProjectId"
            @go-to-step="goToStep"
        />

        <UiProjectLinkImages 
            v-if="step === 2"
            @complete-form="completeForm"
        />
    </div>
</template>

<script setup lang="ts">
import { useTagStore } from '#imports'

const tagStore = useTagStore()
const emit = defineEmits(['completeForm'])

const steps = ['Project Creation', 'Link Tags', 'Link Images']
const step = ref(1)
const createdProjectId = ref<number | null>(null)

onMounted(async() => {
    await Promise.all([
        tagStore.fetchTags()
    ])
})

function goToStep(index: number) {
    step.value = index
}

function completeForm(formName: string) {
    emit('completeForm', formName)
}

function setCreatedProjectId(id: number) {
    createdProjectId.value = id
}
</script>