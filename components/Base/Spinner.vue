<template>
    <div
        :class="[
            'animate-spin rounded-full border-2 border-gray-300 dark:border-gray-700',
            'border-t-gray-700 dark:border-t-yellow-500',
            sizeClasses
        ]"
    />
</template>

<script setup lang="ts">
import { computed } from 'vue'

interface Props {
    size?: 'sm' | 'md' | 'lg' | number
}

const props = defineProps<Props>()

const sizeClasses = computed(() => {
    if (typeof props.size === 'number') 
        return `h-[${props.size}px] w-[${props.size}px]`

    switch (props.size) {
        case 'sm':
            return 'h-4 w-4'
        case 'lg':
            return 'h-8 w-8'
        default:
            return 'h-5 w-5'
    }
})
</script>
