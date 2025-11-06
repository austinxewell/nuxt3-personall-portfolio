<template>
    <component
        :is="as"
        :type="as === 'button' ? type : undefined"
        :href="as === 'a' ? href : undefined"
        :target="as === 'a' ? target : undefined"
        :disabled="as === 'button' ? disabled : undefined"
        :class="[ 
            'inline-flex items-center justify-center px-4 py-2 rounded-xl font-medium transition-colors focus:outline-none hover:cursor-pointer',
            'active:scale-95 transition-transform duration-75',
            colorClass,
            disabled ? 'opacity-50 cursor-not-allowed pointer-events-none' : ''
        ]"
        @click="as === 'button' ? onClick : null"
    >
        <slot />
    </component>
</template>

<script lang="ts" setup>
interface Props {
    as?: 'button' | 'a'
    type?: 'button' | 'submit' | 'reset'
    color?: 'primary' | 'secondary' | 'inverse'
    href?: string
    target?: string
    disabled?: boolean
}

const props = withDefaults(defineProps<Props>(), {
    as: 'button',
    type: 'button',
    color: 'primary',
    href: '',
    target: '',
    disabled: false
})

const emit = defineEmits<{(e: 'click', event: MouseEvent): void }>()

const colorClass = computed(() => {
    switch (props.color) {
        case 'primary':
            return 'border border-gray-900 hover:bg-gray-100 dark:border-gray-100 dark:bg-gray-900 dark:hover:bg-gray-800'
        case 'secondary':
            return 'bg-gray-100 text-gray-800 border border-gray-800 hover:bg-gray-200 dark:bg-gray-900 dark:text-white dark:border-white dark:hover:bg-gray-800'
        case 'inverse':
            return 'border border-gray-900 text-gray-900 hover:bg-gray-100 dark:border-gray-900 dark:bg-white dark:hover:bg-gray-200'
        default:
            return ''
    }
})

function onClick(event: MouseEvent) {
    if (!props.disabled) emit('click', event)
}
</script>
