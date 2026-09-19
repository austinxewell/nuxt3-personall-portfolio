<template>
    <form
        class="flex flex-col gap-4"
        @submit.prevent="emit('submit')"
    >
        <BaseInput
            id="userEmail"
            type="email"
            :model-value="email"
            label="* Email"
            placeholder="Email"
            :disabled="isSubmitting"
            :error="errors.email"
            @update:model-value="emit('update:email', $event)"
        />

        <BaseInput
            id="userDisplayName"
            :model-value="displayName"
            label="Display Name"
            placeholder="Display Name"
            :disabled="isSubmitting"
            :error="errors.displayName"
            @update:model-value="emit('update:displayName', $event)"
        />

        <div class="flex flex-col gap-1">
            <BaseInput
                id="userPassword"
                type="password"
                :model-value="password"
                :label="passwordLabel"
                placeholder="Password"
                :disabled="isSubmitting"
                :error="errors.password"
                @update:model-value="emit('update:password', $event)"
            />
            <p v-if="passwordHint" class="text-xs text-gray-500 dark:text-gray-400">
                {{ passwordHint }}
            </p>
        </div>

        <BaseInput
            v-if="password !== ''"
            id="userConfirmPassword"
            type="password"
            :model-value="confirmPassword"
            label="* Confirm Password"
            placeholder="Confirm Password"
            :disabled="isSubmitting"
            :error="errors.confirmPassword"
            @update:model-value="emit('update:confirmPassword', $event)"
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
    email: string
    displayName: string
    password: string
    confirmPassword: string
    errors: Record<string, string>
    isSubmitting: boolean
    submitLabel: string
    submittingLabel: string
    passwordLabel: string
    passwordHint?: string
}

defineProps<Props>()

const emit = defineEmits<{(e: 'update:email' | 'update:displayName' | 'update:password' | 'update:confirmPassword', value: string): void
    (e: 'submit'): void
}>()
</script>