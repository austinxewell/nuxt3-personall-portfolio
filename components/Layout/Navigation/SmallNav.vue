<template>
    <nav class="w-full flex justify-evenly items-center h-18 bg-gray-600 text-white">
        <NuxtLink
            v-for="item in navItems"
            :key="item.label"
            :to="item.href"
            :class="[
                'transition-colors duration-300',
                activeSection === item.href ? 'text-yellow-600' : 'text-white'
            ]"
            @click.prevent="scrollToSection(item.href)"
        >
            <UIcon :name="item.icon" size="48" />
        </NuxtLink>
    </nav>
</template>

<script setup lang='ts'>
import { navItems } from '~/data/navigation'

const activeSection = ref<string>('')

function scrollToSection(id: string) {
    const target = document.querySelector(id)
    if (target) {
        target.scrollIntoView({ behavior: 'smooth' })
        activeSection.value = id
    }
}

onMounted(() => {
    window.addEventListener('scroll', () => {
        const sections = navItems.map(item => ({
            id: item.href,
            el: document.querySelector(item.href)
        }))

        const SCROLL_THRESHOLD = 100

        for (const section of sections) {
            if (!section.el) continue

            const top = section.el.getBoundingClientRect().top

            if (Math.abs(top) <= SCROLL_THRESHOLD) {
                activeSection.value = section.id
                break
            }
        }
    })
})
</script>