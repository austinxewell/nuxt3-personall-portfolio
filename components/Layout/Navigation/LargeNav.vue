<template>
    <div>
        <div
            class="fixed top-0 left-0 right-0 z-50 bg-white dark:bg-gray-900 transition-transform duration-300"
            :class="{
                '-translate-y-full': !isNavVisible,
                'translate-y-0': isNavVisible
            }"
        >
            <div class="flex items-center justify-between px-4 py-4 relative">
                <a href="/#hero" @click.prevent="scrollToSection('#hero')">
                    <div class="flex items-center gap-2">
                        <img
                            class="w-14 h-14"
                            src="../../../assets/images/small-logo.png"
                            alt=""
                        />
                        <img
                            class="h-6 sm:hidden lg:block"
                            src="../../../assets/images/text-logo.png"
                            alt=""
                        />
                    </div>
                </a>

                <nav class="hidden absolute left-1/2 transform -translate-x-1/2 sm:flex gap-6 text-sm font-medium">
                    <a
                        v-for="item in items"
                        :key="item.href"
                        :href="item.href"
                        class="flex items-center text-gray-900 dark:text-white hover:text-gray-600 dark:hover:text-gray-400 transition-colors cursor-pointer"
                        :class="[
                            item.isActive
                                ? 'text-yellow-600 dark:text-yellow-600'
                                : 'text-gray-900 dark:text-white hover:text-gray-600 dark:hover:text-gray-400'
                        ]"
                        @click.prevent="scrollToSection(item.href)"
                    >
                        <UIcon :name="item.icon" class="mr-2" />
                        {{ item.label }}
                    </a>
                </nav>

                <div class="flex justify-center gap-4">
                    <UiDarkModeButton />
                    <button
                        v-if="isNavVisible"
                        class="cursor-pointer"
                        @click="hideNav"
                    >
                        <UIcon name="lucide:panel-top-close" />
                    </button>
                </div>
            </div>
        </div>

        <div
            class="fixed pl-2 py-1 pr-4 rounded-l-full top-7 right-0 z-60 cursor-pointer transition-all duration-300 bg-gray-900 flex items-center justify-center"
            :style="{
                opacity: isNavVisible ? '0' : '1',
                transform: isNavVisible ? 'translateX(100%)' : 'translateX(0)'
            }"
            @click="toggleNavVisibility"
        >
            <UIcon class="text-white" name="lucide:panel-top-open" />
        </div>

        <!-- Push page content below fixed header -->
        <div class="pt-24" />
    </div>
</template>

<script setup lang="ts">

import { navItems } from '~/data/navigation'

interface NavItem {
label: string
icon: string
href: string
isActive: boolean
}

const items = ref<NavItem[]>(
    navItems.map(item => ({
        ...item,
        isActive: false
    }))
)

const isNavVisible = ref(true)
const lastScrollY = ref(0)
let observer: IntersectionObserver

function scrollToSection(href: string) {
    const id = href.replace('#', '')
    const element = document.getElementById(id)
    if (element) 
        element.scrollIntoView({ behavior: 'smooth' })
    
}

function observeSections() {
    const sections = document.querySelectorAll('[id]')
    const options = { threshold: 0.25 }

    observer = new IntersectionObserver(entries => {
        let activeItemFound = false
        entries.forEach(entry => {
            const sectionId = entry.target.id
            const navItem = items.value.find(item => item.href === `#${sectionId}`)
    
            if (navItem) 
                if (entry.isIntersecting && !activeItemFound) {
                    navItem.isActive = true
                    activeItemFound = true
                } else if (!entry.isIntersecting) {
                    navItem.isActive = false
                }
        })
    }, options)

    sections.forEach(section => observer.observe(section))
}

function handleScroll() {
    const currentScrollY = window.scrollY
    const diff = currentScrollY - lastScrollY.value
    const DIF_VAL = 5

    if (diff > DIF_VAL) 
        isNavVisible.value = false
    else if (diff < -DIF_VAL) 
        isNavVisible.value = true
    
    lastScrollY.value = currentScrollY
}

function toggleNavVisibility() {
    isNavVisible.value = !isNavVisible.value
}

function hideNav() {
    isNavVisible.value = false
}

onMounted(() => {
    lastScrollY.value = window.scrollY
    observeSections()
    window.addEventListener('scroll', handleScroll)
})

onBeforeUnmount(() => {
    if (observer) observer.disconnect()
    window.removeEventListener('scroll', handleScroll)
})
</script>
