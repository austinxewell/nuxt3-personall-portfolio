<template>
    <div class="relative w-20 h-20 mt-4 sm:mt-0 rounded-2xl border border-gray-900 shadow-lg shadow-gray-900 dark:border-white dark:shadow-md dark:shadow-white group">
        <div
            class="absolute bottom-full left-1/2 transform -translate-x-1/2 translate-y-2 text-sm rounded-md py-1 px-2 font-bold whitespace-nowrap border border-gray-900 bg-white dark:bg-gray-900 dark:border-white transition-all duration-500 ease-in-out"
            :class="[
                isFavorite ? 'dark:text-yellow-500 text-yellow-600 ' : ' dark:text-white text-gray-800',
                showToolName 
                    ? 'opacity-100 -translate-y-2' 
                    : 'sm:opacity-0 sm:group-hover:opacity-100 sm:group-hover:-translate-y-2'
            ]"
        >
            {{ toolName }}
        </div>

        <BaseFavoriteStar class="w-4 h-4" :is-favorite="isFavorite" />

        <!-- <div v-if="isFavorite" class="absolute top-1 right-1 text-yellow-400">
            <UIcon name="heroicons:star-20-solid" class="w-4 h-4" />
        </div> -->

        <div class="flex items-center justify-center h-full rounded-2xl" @click="toggleToolName">
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
    },
    isFavorite: {
        type: Boolean,
        required: false
    }
})

const showToolName = ref(false)

function toggleToolName() {
    showToolName.value  = !showToolName.value
}
</script>
