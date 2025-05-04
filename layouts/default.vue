<template>
    <!-- Show when screens are larger than sm (>=640px) -->
    <div v-if="isDesktop">
        <LayoutNavigationLargeNav />
        <slot />
        <LayoutFooter />
    </div>
    
    <!-- Show when screens are smaller than sm (<640px) -->
    <div v-else>
        <slot />
        <LayoutFooter />
        <LayoutNavigationSmallNav />
    </div>
</template>

<script setup lang='ts'>
const isDesktop = ref(true)

onMounted(() => {
    if (!import.meta.client) return

    const mediaQuery = window.matchMedia('(min-width: 640px)')

    function handleResize() {
        isDesktop.value = mediaQuery.matches
    }

    handleResize()
    mediaQuery.addEventListener('change', handleResize)

    onUnmounted(() => {
        mediaQuery.removeEventListener('change', handleResize)
    })
})
</script>