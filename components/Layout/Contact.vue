<template>
    <section
        id="contact"
        class="h-[90vh] bg-gray-900 dark:bg-white text-white dark:text-gray-800 flex flex-col justify-center items-center px-6 text-center"
    >
        <div class="flex items-center gap-2 mb-6">
            <img
                class="w-20 h-20"
                src="@/assets/images/small-logo.png"
                alt=""
            />
            <img
                class="h-10"
                src="@/assets/images/text-logo.png"
                alt=""
            />
        </div>

        <h2 class="text-4xl font-semibold mb-6">
            <strong class="font-bold">Open to New Opportunities.</strong> Let's <span class="text-yellow-600 font-bold">Strike Gold</span> Together.
        </h2>

        <p class="text-xl max-w-xl mb-6">
            Every project is an opportunity to create something 
            <span class="text-yellow-600 font-semibold">exceptional</span>. Whether you're looking to 
            <span class="text-yellow-600 font-semibold">collaborate</span>, 
            <span class="text-yellow-600 font-semibold">hire</span>, or just chat about 
            <span class="text-yellow-600 font-semibold">ideas</span>, let's 
            <span class="text-yellow-600 font-semibold">connect</span> and make something 
            <span class="text-yellow-600 font-semibold">amazing</span> happen.
        </p>

        <a
            href="mailto:austin.ewell86@gmail.com"
            class="flex items-center gap-2 text-yellow-600 font-bold hover:text-yellow-500 mb-6 transition-colors duration-200"
        >
            <UIcon name="mdi:email-outline" class="size-6" />
            <span>austin.ewell86@gmail.com</span>
        </a>

        <div class="flex gap-6">
            <a
                href="https://www.linkedin.com/in/austin-ewell-01a60313a/"
                target="_blank"
                class="transform transition-transform duration-200 hover:scale-120"
            >
                <UIcon name="logos:linkedin-icon" class="size-8" />
            </a>
            <a
                href="https://github.com/austinxewell"
                target="_blank"
                class="transform transition-transform duration-200 hover:scale-120"
            >
                <UIcon :name="isDark ? 'skill-icons:github-dark' : 'skill-icons:github-light'" class="size-8" />
            </a>
            <a
                href="/Austin_Ewell_Resume.pdf"
                download="AustinEwell_Resume.pdf"
                class="transform transition-transform duration-200 hover:scale-120"
            >
                <UIcon name="mdi:file-document-outline" class="size-8" />
            </a>
        </div>
    </section>
</template>

<script setup lang='ts'>
import { useDarkModeStore } from '@/stores/useDarkModeStore'

const darkModeStore = useDarkModeStore()

const isDark = computed(() => darkModeStore.isDark)
</script>