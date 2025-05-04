<template>
    <button
        :type="type"
        :disabled="disabled"
        :class="[
            'inline-flex items-center justify-center px-4 py-2 rounded-xl font-medium transition-colors focus:outline-none hover:cursor-pointer',
            'active:scale-95 transition-transform duration-75',
            colorClass,
            disabled ? 'opacity-50 cursor-not-allowed' : '',
        ]"
        @click="onClick"
    >
        <slot />
    </button>
</template>

<script lang="ts" setup>
interface Props {
type?: 'button' | 'submit' | 'reset'
color?: 'primary' | 'secondary' | 'danger'
disabled?: boolean
}

const props = withDefaults(defineProps<Props>(), {
    type: 'button',
    color: 'primary',
    disabled: false
})

const emit = defineEmits<{(e: 'click', event: MouseEvent): void }>()

const colorClass = computed(() => {
    switch (props.color) {
        case 'primary':
            return 'border border-gray-900 hover:bg-gray-100 hover:cursor-pointer dark:border-gray-100 dark:bg-gray-900 dark:hover:bg-gray-800'
        case 'secondary':
            return 'bg-gray-100 text-gray-800 border border-gray-800 hover:bg-gray-200 dark:bg-gray-900 dark:text-white dark:border-white  dark:hover:bg-gray-800'
        case 'danger':
            return 'bg-red-600 text-white hover:bg-red-700 dark:bg-red-500 dark:hover:bg-red-600'
        default:
            return ''
    }
})

function onClick(event: MouseEvent) {
    if (!props.disabled) emit('click', event)
}
</script>
  