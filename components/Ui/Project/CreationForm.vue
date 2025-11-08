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
            @go-to-step="goToStep"
        />

        <UiProjectLinkTags
            v-if="step === 1"
        />
    </div>
</template>

<script setup lang="ts">
import { useTagStore } from '#imports'

const tagStore = useTagStore()

const steps = ['Project Creation', 'Tags', 'Images']
const step = ref(1)

onMounted(async() => {
    await Promise.all([
        tagStore.fetchTags()
    ])
})

function goToStep(index: number) {
    step.value = index
}
</script>