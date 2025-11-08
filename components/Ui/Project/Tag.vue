<template>
    <div class="text-[.6rem] font-bold px-1 py-0.5 rounded text-white bg-gray-800 dark:text-gray-800 dark:bg-white">
        {{ props.tag }}
    </div>
</template>

<script setup lang='ts'>
interface Props {
    tag: string
}

const props = defineProps<Props>()
</script>