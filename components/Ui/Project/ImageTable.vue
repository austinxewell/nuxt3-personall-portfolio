<template>
    <div class="table-wrapper">
        <table class="styled-table">
            <thead>
                <tr>
                    <th>Image Name</th>
                    <th>Image URL</th>
                </tr>
            </thead>
            <tbody>
                <tr v-if="projectImages.length === 0">
                    <td colspan="2" class="text-center py-4 text-gray-500 dark:text-gray-400">
                        Project has no images.
                    </td>
                </tr>
                
                <tr
                    v-for="image in projectImages"
                    :key="image.id"
                    class="hover:bg-gray-50 dark:hover:bg-gray-900 transition-colors"
                >
                    <td class="truncate">{{ image.img_name }}</td>
                    <td class="truncate">
                        <a
                            :href="image.img_url"
                            target="_blank"
                            class="text-blue-600 dark:text-yellow-500 underline hover-preview-link"
                            @mouseenter="startPreview(image.img_url, $event)"
                            @mousemove="movePreview($event)"
                            @mouseleave="stopPreview"
                        >
                            {{ image.img_url }}
                        </a>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>

    <img
        v-if="previewVisible && previewSrc"
        :src="previewSrc"
        alt="preview"
        class="preview-image"
        :style="previewStyle"
    />
</template>

<script setup lang="ts">
import type { Image } from '~/types/image'

interface Props {
    projectImages: Image[]
}

defineProps<Props>()

const previewSrc = ref<string | null>(null)
const previewVisible = ref(false)
const previewX = ref(0)
const previewY = ref(0)
const PREVIEW_WIDTH_PX = 200
const previewWidth = ref(PREVIEW_WIDTH_PX)
const previewLoaded = ref(false)

const previewStyle = computed(() => ({
    left: `${previewX.value}px`,
    top: `${previewY.value}px`
}))

function startPreview(src: string, mouseEvent: MouseEvent) {
    previewSrc.value = src
    previewVisible.value = true
    previewLoaded.value = false
    movePreview(mouseEvent)
}

function movePreview(mouseEvent: MouseEvent) {
    const offset = 16
    const viewportWidth = window.innerWidth
    const viewportHeight = window.innerHeight
    const previewWidthValue = previewWidth.value
    const HEIGHT_MULTIPLIER = 0.6
    const estimatedPreviewHeight = previewWidthValue * HEIGHT_MULTIPLIER

    let previewPosX = mouseEvent.clientX + offset
    let previewPosY = mouseEvent.clientY + offset

    if (previewPosX + previewWidthValue > viewportWidth - offset) 
        previewPosX = mouseEvent.clientX - previewWidthValue - offset

    if (previewPosY + estimatedPreviewHeight > viewportHeight - offset) 
        previewPosY = mouseEvent.clientY - estimatedPreviewHeight - offset

    if (previewPosX < offset) previewPosX = offset
    if (previewPosY < offset) previewPosY = offset

    previewX.value = previewPosX
    previewY.value = previewPosY
}

function stopPreview() {
    previewVisible.value = false
    previewSrc.value = null
    previewLoaded.value = false
}

onBeforeUnmount(() => {
    stopPreview()
})
</script>

<style scoped>
.table-wrapper {
    max-height: 16rem;
    overflow-y: auto;
    border: 1px solid var(--tw-border-color, #d1d5db);
    border-radius: 0.5rem;
}

.styled-table {
    width: 100%;
    border-collapse: collapse;
    table-layout: fixed;
}

.styled-table thead {
    position: sticky;
    top: 0;
    background-color: rgb(243 244 246 / 1);
    color: rgb(55 65 81 / 1);
    z-index: 10;
}

.dark .styled-table thead {
    background-color: rgb(31 41 55 / 1);
    color: rgb(229 231 235 / 1);
}

.styled-table th,
.styled-table td {
    padding: 0.5rem 1rem;
    border-bottom: 1px solid rgb(229 231 235 / 1);
    word-wrap: break-word;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
}

.styled-table th:nth-child(1),
.styled-table td:nth-child(1) {
    width: 33.3333%;
}

.styled-table th:nth-child(2),
.styled-table td:nth-child(2) {
    width: 66.6666%;
}

.preview-image {
    position: fixed;
    width: 200px;
    height: auto;
    border-radius: 0.5rem;
    border: 1px solid rgba(0, 0, 0, 0.12);
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.25);
    pointer-events: none;
    z-index: 9999;
    opacity: 0.98;
    transition: transform 0.08s ease-out, opacity 0.08s ease-out, left 0.05s linear, top 0.05s linear;
}

@media (max-width: 640px) {
    .preview-image {
        width: 140px;
    }
}

.dark .preview-image {
    border-color: rgba(255, 255, 255, 0.12);
    box-shadow: 0 8px 20px rgba(255, 255, 255, 0.05);
}
</style>
