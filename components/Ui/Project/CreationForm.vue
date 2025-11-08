<template>
    <div>
        <h2 class="text-xl font-bold mb-4">Create New Project</h2>

        <BaseStepTracker 
            v-model="step"
            :steps="steps"
        />

        <UiProjectCreation class="pt-4" />
    </div>
</template>

<script setup lang="ts">
const steps = ['Project Creation', 'Tags', 'Images']
const step = ref(0)
</script>