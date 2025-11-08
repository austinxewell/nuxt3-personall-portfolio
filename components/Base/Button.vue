<template>
    <button
        :type="type"
        :disabled="disabled"
        :class="[
            'inline-flex items-center justify-center px-4 py-2 rounded-xl font-medium transition-colors focus:outline-none',
            disabled ? 'cursor-default scale-100' : 'active:scale-95 transition-transform duration-75 hover:cursor-pointer',
            colorClass,
            disabled ? 'opacity-50' : ''
        ]"
    >
        <slot />
    </button>
</template>

<script lang="ts" setup>
import { computed } from 'vue'

interface Props {
    type?: 'button' | 'submit' | 'reset'
    color?: 'primary' | 'secondary' | 'inverse' | 'inverse-alt'
    disabled?: boolean
}

const props = withDefaults(defineProps<Props>(), {
    type: 'button',
    color: 'primary',
    disabled: false
})

const colorClass = computed(() => {
    switch (props.color) {
        case 'primary':
            return 'border border-gray-900 hover:bg-gray-100 dark:border-gray-100 dark:bg-gray-900 dark:hover:bg-gray-800'
        case 'secondary':
            return 'bg-gray-100 text-gray-800 border border-gray-800 hover:bg-gray-200 dark:bg-gray-900 dark:text-white dark:border-white dark:hover:bg-gray-800'
        case 'inverse':
            return 'border border-gray-900 text-gray-900 hover:bg-gray-100 dark:border-gray-900 dark:bg-white dark:hover:bg-gray-200'
        case 'inverse-alt':
            return 'bg-gray-900 text-white dark:bg-white dark:text-gray-900'
        default:
            return ''
    }
})
</script>
