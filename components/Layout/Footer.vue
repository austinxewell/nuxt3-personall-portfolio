<template>
    <footer class="py-6 px-8 grid grid-cols-3 items-center text-center">
        <a href="#hero" @click.prevent="navigateTo('hero')">
            <div class="flex items-center gap-2 justify-start">
                <img
                    src="@/assets/images/small-logo.png"
                    alt="Logo"
                    class="w-8 h-8"
                />
                <img
                    src="@/assets/images/text-logo.png"
                    alt="Text Logo"
                    class="h-5"
                />
            </div>
        </a>

        <div class="flex justify-center gap-6 text-sm">
            <a href="#portfolio" class="hover:text-yellow-600 transition-colors">Projects</a>
            <a href="#contact" class="hover:text-yellow-600 transition-colors">Contact</a>
            <a
                href="/Austin_Ewell_Resume.pdf"
                download
                class="hover:text-yellow-600 transition-colors"
            >
                Resume
            </a>
        </div>

        <div class="text-xs text-gray-400 justify-end hidden md:flex">
            &copy; {{ new Date().getFullYear() }} Austin Ewell. All rights reserved.
        </div>
    </footer>
</template>

<script setup lang='ts'>
function navigateTo(elementId: string) {
    const element = document.getElementById(elementId)
    if (element) 
        element.scrollIntoView({ behavior: 'smooth' })
}
</script>