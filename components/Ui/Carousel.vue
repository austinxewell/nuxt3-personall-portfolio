<template>
    <div class="relative">
        <BaseButton
            class="absolute right-0 top-0 mt-2 mr-2 z-10 w-fit flex items-center justify-center"
            :color="'secondary'"
        >
            <span>View Project</span>
            <UIcon name="lucide:external-link" class="size-5 ml-2" />
        </BaseButton>

        <Carousel
            id="gallery"
            v-bind="galleryConfig"
            v-model="currentSlide"
        >
            <Slide v-for="image in images" :key="image.id">
                <img
                    :src="image.url"
                    alt="Gallery Image"
                    class="gallery-image"
                />
            </Slide>
        </Carousel>
    </div>

    <Carousel
        id="thumbnails"
        v-bind="thumbnailsConfig"
        v-model="currentSlide"
        class="mt-4"
    >
        <Slide v-for="image in images" :key="image.id">
            <template #default="{ currentIndex, isActive }">
                <div
                    :class="['thumbnail', { 'is-active': isActive }]"
                    @click="slideTo(currentIndex)"
                >
                    <img
                        :src="image.url"
                        alt="Thumbnail Image"
                        class="thumbnail-image"
                    />

                    <div class="mt-1 text-xs text-center w-full">
                        <p>{{ image.project }}</p>
                        <div class="flex justify-center gap-2">
                            <div
                                v-for="tag in image.tags"
                                :key="tag"
                            >
                                {{ tag }}
                            </div>
                        </div>
                    </div>
                </div>
            </template>
        </Slide>

        <template #addons>
            <Navigation />
        </template>
    </Carousel>
</template>

<script setup lang="ts">
import 'vue3-carousel/carousel.css'
import { Carousel, Slide, Navigation } from 'vue3-carousel'
import { ref } from 'vue'

interface Image {
    id: number
    project: string
    tags: string[]
    url: string
}

const currentSlide = ref<number>(0)

function slideTo(nextSlide: number): void {
    currentSlide.value = nextSlide
}

const galleryConfig: Record<string, unknown> = {
    itemsToShow: 1,
    wrapAround: true,
    slideEffect: 'fade',
    mouseDrag: false,
    touchDrag: false,
    height: '50vh'
}

const thumbnailsConfig: Record<string, unknown> = {
    height: 150,
    itemsToShow: 6,
    wrapAround: true,
    touchDrag: false,
    gap: 10
}

const images: Image[] = Array.from({ length: 10 }, (_, index) => ({
    id: index + 1,
    project: `Project ${index + 1}`,
    tags: ['TypeScript', 'Nuxt3'],
    url: `https://picsum.photos/seed/${Math.random()}/800/600`
}))
</script>

<style scoped>
:root {
    background-color: #242424;
}

.carousel {
    --vc-nav-background: rgba(255, 255, 255, 0.7);
    --vc-nav-border-radius: 100%;
}

img {
    border-radius: 8px;
    width: 100%;
    height: 100%;
    object-fit: cover;
}

.gallery-image {
    border-radius: 16px;
    height: 100%;
    width: 100%;
    object-fit: cover;
}

#thumbnails {
    margin-top: 10px;
}

.thumbnail {
    height: 100%;
    width: 100%;
    cursor: pointer;
    opacity: 0.6;
    transition: opacity 0.3s ease-in-out;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}

.thumbnail.is-active,
.thumbnail:hover {
    opacity: 1;
}

.thumbnail-image {
    width: 100%;
    height: 100px;
    object-fit: cover;
    border-radius: 8px;
}
</style>
