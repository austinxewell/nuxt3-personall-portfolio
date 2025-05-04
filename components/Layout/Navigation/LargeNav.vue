<template>
    <div class="fixed top-0 left-0 right-0 z-50 bg-white dark:bg-gray-900">
        <div class="flex items-center justify-between px-4 py-4 relative">
            <div class="flex items-center gap-2">
                <img
                    class="w-14 h-14"
                    src="../../../assets/images/small-logo.png"
                    alt=""
                />
                <img
                    class="h-6"
                    src="../../../assets/images/text-logo.png"
                    alt=""
                />
            </div>

            <nav class="absolute left-1/2 transform -translate-x-1/2 flex gap-6 text-sm font-medium">
                <a
                    v-for="item in items"
                    :key="item.href"
                    :href="item.href"
                    class="flex items-center text-gray-700 hover:text-black transition-colors cursor-pointer"
                    :class="{ 'text-yellow-600': item.isActive }"
                    @click.prevent="scrollToSection(item.href)"
                >
                    <UIcon :name="item.icon" class="mr-2" />
                    {{ item.label }}
                </a>
            </nav>

            <div class="flex justify-center">
                <UiDarkModeButton />
            </div>
        </div>
    </div>

    <!-- Content below the fixed header -->
    <div class="pt-24" />
</template>


<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount } from 'vue'
import { navItems } from '~/data/navigation'

interface NavItem {
label: string;
icon: string;
href: string;
isActive: boolean;
}

const items = ref<NavItem[]>(navItems.map(item => ({
    ...item,
    isActive: false 
})))

function scrollToSection(href: string) {
    const id = href.replace('#', '')
    const element = document.getElementById(id)
    if (element) 
        element.scrollIntoView({ behavior: 'smooth' })
}

let observer: IntersectionObserver

function observeSections() {
    const sections = document.querySelectorAll('[id]')
    const options = { threshold: 0.5 }

    observer = new IntersectionObserver(entries => {
        let activeItemFound = false
        entries.forEach(entry => {
            const sectionId = entry.target.id
            const navItem = items.value.find(item => item.href === `#${sectionId}`)
            if (navItem) 
                if (entry.isIntersecting && !activeItemFound) {
                    navItem.isActive = true
                    activeItemFound = true
                } else {
                    navItem.isActive = false
                }
        })
    }, options)

    sections.forEach(section => observer.observe(section))
}

onMounted(() => {
    observeSections()
})

onBeforeUnmount(() => {
    if (observer) 
        observer.disconnect()
})
</script>
