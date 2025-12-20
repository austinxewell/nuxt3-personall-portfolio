<template>
    <footer class="py-6 px-8 flex flex-col md:flex-row md:justify-between md:items-center text-center gap-6">
        <a
            href="#hero"
            class="flex justify-center md:justify-start"
            @click.prevent="navigateTo('hero')"
        >
            <div class="flex items-center gap-2">
                <img
                    :src="smallLogo"
                    alt="Small Logo"
                    class="w-8 h-8"
                />
                <img
                    :src="textLogo"
                    alt="Text Logo"
                    class="h-5"
                />
            </div>
        </a>

        <div class="flex flex-wrap justify-center gap-4 text-sm">
            <a
                href="#portfolio"
                class="hover:text-yellow-600 transition-colors"
                @click.prevent="navigateTo('portfolio')"
            >Projects</a>

            <UModal>
                <label class="hover:text-yellow-600 cursor-pointer transition-colors" label="Open">Contact</label>

                <template #header>
                    <h2 class="text-2xl text-center w-full">Contact Information</h2>
                </template>

                <template #body>
                    <UiContactModal />
                </template>
            </UModal>

            <a
                :href="about.resume_url"
                target="_blank"
                class="hover:text-yellow-600 transition-colors"
            >
                Resume
            </a>

            <a
                :href="about.blog_url"
                target="_blank"
                class="hover:text-yellow-600 transition-colors"
            >
                Dev Blog
            </a>
        </div>

        <div class="text-xs text-gray-400 flex flex-col items-center md:items-end">
            <div class="hidden md:flex">
                &copy; {{ new Date().getFullYear() }}
                <a
                    href="about"
                    class="ml-1 hover:text-yellow-600 transition-colors"
                    @click.prevent="navigateTo('about')"
                >
                    Austin Ewell
                </a>
                . All rights reserved.
            </div>
            
            <div class="md:hidden text-center">
                &copy; {{ new Date().getFullYear() }} Austin Ewell
            </div>

            <NuxtLink to="/login" class="hover:text-yellow-600 transition-colors mt-1">Admin Portal</NuxtLink>
        </div>
    </footer>
</template>


<script setup lang='ts'>
import { useAboutStore } from '#imports'

const aboutStore = useAboutStore()
const { about } = storeToRefs(aboutStore)

const smallLogo = '/images/small-logo.png'
const textLogo = '/images/text-logo.png'

function navigateTo(elementId: string) {
    const element = document.getElementById(elementId)
    if (element) 
        element.scrollIntoView({ behavior: 'smooth' })
}
</script>