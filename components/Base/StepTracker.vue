<template>
    <div class="flex items-center space-x-4">
        <div
            v-for="(step, index) in steps"
            :key="index"
            class="flex-1 flex items-center"
        >
            <div
                :class="[
                    'w-8 h-8 font-bold rounded-full flex items-center justify-center border-2',
                    index < currentStep
                        ? 'bg-gray-900 dark:bg-yellow-600 border-gray-900 dark:border-yellow-600 text-white dark:text-gray-900'
                        : index === currentStep
                            ? 'border-gray-600 dark:border-white text-gray-600 dark:text-white'
                            : 'border-gray-300 dark:border-white text-gray-400 dark:text-white'
                ]"
            >
                {{ index + 1 }}
            </div>

            <div
                v-if="index < steps.length - 1"
                :class="[
                    'flex-1 h-0.5 mx-2',
                    index < currentStep ? 'bg-gray-900 dark:bg-yellow-600' : 'bg-gray-300 dark:bg-white'
                ]"
            />
        </div>
    </div>

    <div class="mt-2 text-center text-sm text-gray-600 dark:text-white">
        Step {{ currentStep + 1 }} of {{ steps.length }}: {{ steps[currentStep] }}
    </div>
</template>

<script lang="ts" setup>
interface Props {
    steps: string[]
    modelValue: number
}

const props = defineProps<Props>()

const currentStep = ref(props.modelValue)

watch(
    () => props.modelValue,
    (val) => (currentStep.value = val)
)
</script>
