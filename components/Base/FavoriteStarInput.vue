<template>
    <button
        type="button"
        class="relative focus:outline-none"
        :aria-pressed="modelValue"
        @click="toggle"
    >
        <div class="absolute top-0 right-0">
            <UIcon
                v-if="modelValue"
                name="heroicons:star-20-solid"
                class="h-5 w-5 text-yellow-500"
            />
            <UIcon
                v-else
                name="heroicons-outline:star"
                class="h-5 w-5 text-gray-400 dark:text-gray-500"
            />
        </div>
    </button>
</template>

<script setup lang="ts">
interface Props {
    modelValue: boolean
}

const props = defineProps<Props>()
const emit = defineEmits<{(e: 'update:modelValue', value: boolean): void }>()

function toggle() {
    emit('update:modelValue', !props.modelValue)
}
</script>
