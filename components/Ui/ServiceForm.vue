<template>
    <form
        class="flex flex-col gap-4"
        @submit.prevent="emit('submit')"
    >
        <BaseInput
            id="serviceName"
            :model-value="serviceName"
            label="* Service Name"
            placeholder="Service Name"
            :disabled="isSubmitting"
            :error="errors.serviceName"
            @update:model-value="emit('update:serviceName', $event)"
        />

        <BaseTextArea
            id="serviceDescription"
            :model-value="description"
            label="* Description"
            placeholder="Description"
            :disabled="isSubmitting"
            :error="errors.description"
            @update:model-value="emit('update:description', $event)"
        />

        <BaseInput
            id="serviceIcon"
            :model-value="icon"
            label="* Icon"
            placeholder="e.g. logos:nodejs"
            :disabled="isSubmitting"
            :error="errors.icon"
            @update:model-value="emit('update:icon', $event)"
        />

        <BaseButton
            type="submit"
            :disabled="isSubmitting"
            class="flex items-center gap-2"
        >
            {{ isSubmitting ? submittingLabel : submitLabel }}
            <BaseSpinner v-if="isSubmitting" />
        </BaseButton>

        <slot name="footer" />
    </form>
</template>

<script setup lang="ts">
interface Props {
    serviceName: string
    description: string
    icon: string
    errors: Record<string, string>
    isSubmitting: boolean
    submitLabel: string
    submittingLabel: string
}

defineProps<Props>()

const emit = defineEmits<{(e: 'update:serviceName' | 'update:description' | 'update:icon', value: string): void
    (e: 'submit'): void
}>()
</script>