<template>
    <div class="relative w-20 h-20 rounded-2xl border border-gray-900 shadow-lg shadow-gray-900 dark:border-white dark:shadow-md dark:shadow-white group">
        <div class="absolute bottom-full left-1/2 transform -translate-x-1/2 translate-y-2 opacity-0 group-hover:opacity-100 group-hover:translate-y-[-10px] transition-all duration-500 ease-in-out border border-gray-900 bg-white dark:bg-gray-900 dark:border-white text-sm rounded-md py-1 px-2 font-bold whitespace-nowrap">
            {{ toolName }}
        </div>
        <div class="flex items-center justify-center h-full rounded-2xl">
            <UIcon :name="icon" class="size-14 rounded-2xl" />
        </div>
    </div>
</template>

<script setup lang="ts">
defineProps({
    toolName: {
        type: String,
        required: true
    },
    icon: {
        type: String,
        required: true
    }
})
</script>

<style scoped>
/* You can add additional scoped styles here if needed */
</style>
