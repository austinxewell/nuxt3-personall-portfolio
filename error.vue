<template>
    <div class="flex flex-col items-center justify-center h-screen bg-white dark:bg-gray-950 text-center px-6 transition-colors duration-300">
        <div class="text-8xl font-extrabold text-yellow-500 dark:text-yellow-400 drop-shadow-lg dark:drop-shadow-md">
            {{ error.statusCode }}
        </div>
  
        <h1 class="text-3xl md:text-4xl font-semibold mt-4 text-gray-800 dark:text-gray-100">
            Well, this isn't golden...
        </h1>
  
        <p class="text-lg md:text-xl mt-2 text-gray-600 dark:text-gray-400 max-w-xl">
            {{ error.statusMessage || "The page you're looking for doesn’t exist or got refined into something else." }}
        </p>
  
        <NuxtLink
            to="/"
            class="mt-6 inline-flex items-center px-5 py-3 bg-yellow-500 hover:bg-yellow-600 text-white font-medium rounded-xl transition-colors"
        >
            <UIcon
                name="material-symbols:family-home-rounded"
                class="mr-2"
                size="24"
            />
            Take Me Home
        </NuxtLink>
  
        <p class="mt-8 text-sm text-gray-500 dark:text-gray-500">
            If you think this is a mistake, feel free to reach out — maybe there's a bug hiding in the gold.
        </p>
    </div>
</template>
  
<script setup lang="ts">
import type { NuxtError } from '#app'
  
defineProps<{ error: NuxtError }>()
</script>
  