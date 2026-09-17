<template>
    <h2 class="text-xl font-bold mb-4">Modify Images Database</h2>

    <div class="flex flex-col gap-4 sm:px-6">
        <h3 class="font-bold">Manage Images:</h3>

        <UiLoadingSpinner v-if="isLoading" />

        <UiProjectImageTable
            v-else
            :project-images="imageStore.allImages"
            :selectable="false"
        />

        <BaseButton
            type="button"
            color="inverse-alt"
            @click="emit('completeForm', 'imageDb')"
        >
            Close
        </BaseButton>
    </div>
</template>

<script setup lang="ts">
const emit = defineEmits(['completeForm'])

const imageStore = useImageStore()
const isLoading = computed(() => imageStore.loading)

onMounted(() => {
    imageStore.getImages()
})

</script>