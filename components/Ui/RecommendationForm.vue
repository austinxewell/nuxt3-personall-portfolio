<template>
    <form
        class="flex flex-col gap-4"
        @submit.prevent="emit('submit')"
    >
        <BaseTextArea
            id="recommendationText"
            :model-value="recommendation"
            label="* Recommendation"
            placeholder="What did they say about you?"
            :disabled="isSubmitting"
            :error="errors.recommendation"
            @update:model-value="emit('update:recommendation', $event)"
        />

        <BaseInput
            id="recommendedBy"
            :model-value="recommendedBy"
            label="* Recommended By"
            placeholder="Full Name"
            :disabled="isSubmitting"
            :error="errors.recommendedBy"
            @update:model-value="emit('update:recommendedBy', $event)"
        />

        <BaseInput
            id="jobTitle"
            :model-value="jobTitle"
            label="* Job Title"
            placeholder="e.g. Full-Stack Developer"
            :disabled="isSubmitting"
            :error="errors.jobTitle"
            @update:model-value="emit('update:jobTitle', $event)"
        />

        <BaseInput
            id="companyName"
            :model-value="companyName"
            label="* Company Name"
            placeholder="Company Name"
            :disabled="isSubmitting"
            :error="errors.companyName"
            @update:model-value="emit('update:companyName', $event)"
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
    recommendation: string
    recommendedBy: string
    jobTitle: string
    companyName: string
    errors: Record<string, string>
    isSubmitting: boolean
    submitLabel: string
    submittingLabel: string
}

defineProps<Props>()

const emit = defineEmits<{(e: 'update:recommendation' | 'update:recommendedBy' | 'update:jobTitle' | 'update:companyName', value: string): void
    (e: 'submit'): void
}>()
</script>