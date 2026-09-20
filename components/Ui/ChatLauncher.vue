<!-- components/ui/ChatLauncher.vue -->
<template>
    <div
        class="fixed right-4 z-50 flex flex-col items-end gap-3 transition-[bottom] duration-150"
        :style="{ bottom: `${bottomOffset}px` }"
    >
        <UiChatWidget v-if="isOpen" class="w-[90vw] max-w-sm" />

        <BaseButton
            color="inverse-alt"
            class="border-2 border-yellow-600"
            @click="toggleChat"
        >
            <UIcon :name="isOpen ? 'i-lucide-x' : 'i-lucide-message-circle'" class="size-5" />
        </BaseButton>
    </div>
</template>

<script setup lang="ts">
const OFFSET_PIXELS = 16
const MOBILE_NAV_OFFSET_PIXELS = 80
const MOBILE_BREAKPOINT_PIXELS = 640

const isOpen = ref(false)
const bottomOffset = ref(OFFSET_PIXELS)

function toggleChat() {
    isOpen.value = !isOpen.value
}

function getBaseOffset() {
    return window.innerWidth < MOBILE_BREAKPOINT_PIXELS ? MOBILE_NAV_OFFSET_PIXELS : OFFSET_PIXELS
}

function updatePosition() {
    const footer = document.querySelector('footer')
    const base = getBaseOffset()

    if (!footer) {
        bottomOffset.value = base
        return
    }

    const footerRect = footer.getBoundingClientRect()
    const overlap = window.innerHeight - footerRect.top

    bottomOffset.value = overlap > 0 ? overlap + base : base
}

onMounted(() => {
    updatePosition()
    window.addEventListener('scroll', updatePosition)
    window.addEventListener('resize', updatePosition)
})

onUnmounted(() => {
    window.removeEventListener('scroll', updatePosition)
    window.removeEventListener('resize', updatePosition)
})
</script>