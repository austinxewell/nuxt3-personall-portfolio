<template>
    <div
        v-if="selectedImage"
        class="fixed inset-0 z-50 bg-black/50 backdrop-blur-md flex items-center justify-center"
    >
        <BaseButton
            class="absolute top-4 right-4 z-50 bg-white dark:bg-gray-900"
            @click="clearSelectedImage"
        >
            <UIcon name="material-symbols:close-rounded" size="24" />
        </BaseButton>

        <img
            :src="selectedImage.img_url"
            :alt="selectedImage.img_name"
            class="max-w-screen max-h-screen object-contain"
        />
    </div>
</template>

<script setup lang='ts'>
import { useImageStore } from '~/stores/useImageStore'
const imageStore = useImageStore()

const selectedImage = computed(() => imageStore.selectedImage)

function clearSelectedImage() {
    imageStore.selectedImage = null
}
</script>