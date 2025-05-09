<template>
    <div class="relative">
        <Carousel
            id="gallery"
            v-bind="galleryConfig"
            v-model="currentSlide"
        >

            <Slide v-for="project in findFavoriteProjects(projects as Project[])" :key="project.id">
                <NuxtLink :to="`/projects/${project.slug}`">
                    <BaseButton
                        class="absolute right-0 top-0 mt-2 mr-2 z-10 w-fit flex items-center justify-center"
                        :color="'secondary'"
                    >
                        <span class="hidden sm:block">View Project</span>
                        <UIcon name="lucide:external-link" class="size-5 ml-0 sm:ml-2 yell" />
                    </BaseButton>
                </NuxtLink>

                <img
                    :src="findThumbnailImage(project.images)?.img_url"
                    :alt="findThumbnailImage(project.images)?.img_name"
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
        <Slide v-for="project in findFavoriteProjects(projects as Project[])" :key="project.id">
            <template #default="{ currentIndex, isActive }">
                <div
                    :class="['thumbnail', { 'is-active': isActive }]"
                    @click="slideTo(currentIndex)"
                >
                    <img
                        :src="findThumbnailImage(project.images)?.img_url"
                        :alt="findThumbnailImage(project.images)?.img_name"
                        class="thumbnail-image"
                    />

                    <div class="mt-1 text-center w-full ">
                        <p class="text-sm text-bold mb-1">{{ project.project_name }}</p>
                        <div class="flex justify-center gap-2 flex-wrap">
                            <UiProjectTag
                                v-for="tag in findPrimaryTags(project.tech_tags)"
                                :key="tag.tag_name"
                                :tag="tag.tag_name"
                            />
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
import { findThumbnailImage, findPrimaryTags, findFavoriteProjects } from '../../utils/projectHelpers'
import { Carousel, Slide, Navigation } from 'vue3-carousel'
import { projects } from '~/data/projects'
import type { Project } from '~/types/projects'


const currentSlide = ref<number>(0)

function slideTo(nextSlide: number): void {
    currentSlide.value = nextSlide
}


const galleryConfig: Record<string, unknown> = {
    itemsToShow: 1,
    wrapAround: true,
    slideEffect: 'fade',
    mouseDrag: false,
    touchDrag: false
}

const thumbnailsConfig: Record<string, unknown> = {
    height: 150,
    itemsToShow: 2,
    wrapAround: true,
    touchDrag: true,
    gap: 10,
    breakpoints: { 
        640: { itemsToShow: 3 },
        768: { itemsToShow: 4 },
        1280: { itemsToShow: 6 }
    }
}
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
    object-fit: contain;
}

.gallery-image {
    border-radius: 16px;
    height: 100%;
    width: 100%;
    object-fit: contain;
    object-position: top;
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
