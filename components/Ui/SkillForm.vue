<template>
    <form
        class="flex flex-col gap-4"
        @submit.prevent="emit('submit')"
    >
        <div class="relative w-full">
            <BaseInput
                id="skillName"
                :model-value="name"
                label="* Skill Name"
                placeholder="Skill Name"
                :disabled="isSubmitting"
                :error="errors.name"
                @update:model-value="emit('update:name', $event)"
            />

            <div class="absolute -top-7 right-1 transform translate-y-1/2">
                <BaseFavoriteStarInput
                    :model-value="isExpert"
                    @update:model-value="emit('update:isExpert', $event)"
                />
            </div>
        </div>

        <BaseInput
            id="skillIcon"
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
    name: string
    icon: string
    isExpert: boolean
    errors: Record<string, string>
    isSubmitting: boolean
    submitLabel: string
    submittingLabel: string
}

defineProps<Props>()

const emit = defineEmits<{(e: 'update:name' | 'update:icon', value: string): void
    (e: 'update:isExpert', value: boolean): void
    (e: 'submit'): void
}>()
</script>