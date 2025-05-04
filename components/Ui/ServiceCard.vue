<template>
    <div
        class="group relative w-80 h-80 rounded-2xl p-8 bg-gradient-to-br from-gray-900 to-gray-500 dark:from-gray-800 dark:to-gray-600 text-white shadow-2xl dark:shadow-md dark:shadow-gray-900 transition-all duration-500 ease-in-out transform hover:scale-105 hover:shadow-yellow-500/40"
    >
        <div
            class="flex items-center justify-center w-20 h-20 rounded-full bg-white text-gray-900 mb-6 text-4xl transition-all duration-500 group-hover:rotate-[20deg] group-hover:scale-125 group-hover:bg-yellow-400 group-hover:text-gray-900 dark:group-hover:bg-yellow-500 dark:group-hover:text-gray-900"
        >
            <UIcon :name="icon" />
        </div>

        <h3 class="text-2xl font-bold mb-4">
            {{ title }}
        </h3>
        <p class="opacity-80 leading-relaxed mb-6">
            {{ description }}
        </p>
        <div
            class="absolute inset-0 rounded-2xl ring-2 ring-yellow-500/10 group-hover:ring-yellow-400/40 dark:ring-yellow-400/30 transition-all duration-500 pointer-events-none"
        />
    </div>
</template>

<script setup lang="ts">
defineProps<{
    title: string
    description: string
    icon: string
}>()
</script>
