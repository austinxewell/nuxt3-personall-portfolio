<template>
    <div class="flex flex-col gap-1">
        <label
            v-if="label"
            :for="id"
            :class="[
                'block text-sm font-medium',
                error
                    ? 'text-red-500'
                    : 'text-gray-700 dark:text-gray-300'
            ]"
        >
            {{ label }}
        </label>

        <input
            :id="id"
            v-model="localValue"
            :type="type"
            :placeholder="placeholder"
            :required="required"
            :disabled="disabled"
            :class="[
                'w-full rounded-lg border px-3 py-2 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors disabled:opacity-50 disabled:cursor-not-allowed bg-gray-50 dark:bg-gray-900',
                error
                    ? 'border-red-500 focus:ring-red-500 focus:border-red-500'
                    : 'border-gray-300 dark:border-gray-700'
            ]"
        />

        <p v-if="error" class="text-xs text-red-500 mt-1">{{ error }}</p>
    </div>
</template>

<script setup lang="ts">
const props = defineProps<{
    id: string
    label?: string
    type?: string
    placeholder?: string
    modelValue?: string
    required?: boolean
    disabled?: boolean
    error?: string
}>()

const emit = defineEmits<{(e: 'update:modelValue', value: string): void}>()

const localValue = computed({
    get: () => props.modelValue ?? '',
    set: (val: string) => emit('update:modelValue', val)
})
</script>
