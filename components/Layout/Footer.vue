<template>
    <footer class="py-6 px-8 grid grid-cols-3 items-center text-center">
        <a href="#hero" @click.prevent="navigateTo('hero')">
            <div class="flex items-center gap-2 justify-start">
                <img
                    :src="smallLogo"
                    alt="Small Logo"
                    class="w-8 h-8"
                />
                <img
                    :src="textLogo"
                    alt="Text Logo"
                    class="h-5 hidden sm:block"
                />
            </div>
        </a>

        <div class="flex justify-center gap-6 text-sm">
            <a
                href="#portfolio"
                class="hover:text-yellow-600 transition-colors"
                @click.prevent="navigateTo('portfolio')"
            >Projects</a>
            <a
                href="#contact"
                class="hover:text-yellow-600 transition-colors"
                @click.prevent="navigateTo('contact')"
            >Contact</a>
            <a
                href="/Austin_Ewell_Resume.pdf"
                download
                class="hover:text-yellow-600 transition-colors"
            >
                Resume
            </a>
        </div>

        <div class="text-xs text-gray-400 justify-end hidden md:flex">
            &copy; {{ new Date().getFullYear() }}
            <a
                href="about"
                class="ml-1"
                @click.prevent="navigateTo('about')"
            >
                Austin Ewell
            </a>
            . All rights reserved.
        </div>
    </footer>
</template>

<script setup lang='ts'>
const smallLogo = '/images/small-logo.png'
const textLogo = '/images/text-logo.png'

function navigateTo(elementId: string) {
    const element = document.getElementById(elementId)
    if (element) 
        element.scrollIntoView({ behavior: 'smooth' })
}
</script>