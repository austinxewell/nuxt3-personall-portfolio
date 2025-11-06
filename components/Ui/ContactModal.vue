<template>
    <div class="flex flex-col items-center space-y-2 text-xl">
        <div class="flex items-center space-x-3">
            <UIcon name="i-simple-icons:github" class="text-gray-600 dark:text-gray-300" />
            <a
                :href="about.github_url"
                target="_blank"
                class="hover:underline"
            >GitHub Profile</a>
        </div>
        <div class="flex items-center space-x-3">
            <UIcon name="logos:linkedin-icon" class="text-gray-600 dark:text-gray-300" />
            <a
                :href="about.linkedin_url"
                target="_blank"
                class="hover:underline"
            >LinkedIn Profile</a>
        </div>
        <div class="flex items-center space-x-3">
            <UIcon name="lucide:phone" class="text-gray-600 dark:text-gray-300" />
            <a href="tel:3854439375" class="hover:underline">(385) 443-9375</a>
        </div>
        <div class="flex items-center space-x-3">
            <UIcon name="lucide:mail" class="text-gray-600 dark:text-gray-300" />
            <a :href="`mailto:${about.contact_email}`" class="hover:underline">{{ about.contact_email }}</a>
        </div>
    </div>
</template>

<script setup lang="ts">
import { useAboutStore } from '#imports'

const aboutStore = useAboutStore()
const { about } = storeToRefs(aboutStore)
</script>