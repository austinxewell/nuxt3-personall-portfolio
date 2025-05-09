<template>
    <div
        class="group relative w-80 min-h-[24rem] rounded-2xl p-8 bg-white border border-gray-900 dark:bg-gradient-to-br dark:from-gray-800 dark:to-gray-600 text-gray-900 dark:text-white shadow-md dark:shadow-lg dark:shadow-gray-900 transition-all duration-500 ease-in-out transform hover:scale-105 dark:hover:shadow-yellow-500/40"
    >
        <div
            class="flex items-center justify-center w-20 h-20 rounded-full bg-yellow-500 sm:bg-gray-100 text-gray-900 mb-6 text-4xl transition-all duration-500 group-hover:rotate-[20deg] group-hover:scale-125 group-hover:bg-yellow-400 group-hover:text-gray-900 dark:bg-yellow-500 dark:sm:bg-white dark:group-hover:bg-yellow-500"
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
            class="absolute inset-0 rounded-2xl ring-0 dark:ring-2 ring-yellow-500/10 group-hover:dark:ring-yellow-400/40 transition-all duration-500 pointer-events-none"
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
