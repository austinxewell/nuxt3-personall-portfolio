<template>
    <div
        class="relative w-full sm:w-[17rem] h-[20rem] border dark:border-yellow-600 rounded-2xl shadow-lg shadow-black cursor-pointer bg-white dark:bg-gray-800 flex flex-col items-center justify-center gap-4 transform transition-transform duration-300 hover:scale-105 hover:z-10"
        @click="handleClick"
    >
        <UIcon :name="icon" class="w-24 h-24 text-yellow-600 dark:text-yellow-400" />
        <h4 class="text-xl font-semibold text-gray-900 dark:text-white text-center">
            {{ actionName }}
        </h4>
    </div>
</template>

<script setup lang="ts">
const props = defineProps<{
    actionName: string
    icon: string
    action?:() => void
}>()

function handleClick() {
    if (props.action) props.action()
}
</script>