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

        <textarea
            :id="id"
            v-model="localValue"
            :placeholder="placeholder"
            :required="required"
            :disabled="disabled"
            :rows="rows ?? 3"
            :class="[
                'w-full rounded-lg border px-3 py-2 text-gray-900 dark:text-gray-100 bg-gray-50 dark:bg-gray-900 focus:outline-none focus:ring-2 transition-colors resize-none',
                error
                    ? 'border-red-500 focus:border-red-500 focus:ring-red-500'
                    : 'border-gray-300 dark:border-gray-700 focus:border-blue-500 focus:ring-blue-500',
                disabled ? 'opacity-50 cursor-not-allowed' : ''
            ]"
        />

        <p v-if="error" class="text-xs text-red-500 mt-1">{{ error }}</p>
    </div>
</template>

<script setup lang="ts">
interface Props {
    id?: string
    label?: string
    modelValue: string
    placeholder?: string
    required?: boolean
    disabled?: boolean
    error?: string
    rows?: number
}

const props = defineProps<Props>()
const emit = defineEmits<{(e: 'update:modelValue', value: string): void }>()

const localValue = ref(props.modelValue)

watch(
    () => props.modelValue,
    (val) => (localValue.value = val)
)

watch(localValue, (val) => emit('update:modelValue', val))
</script>