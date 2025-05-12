<template>
    <div v-if="props.isFavorite" class="absolute top-1 right-1 text-yellow-500">
        <UIcon name="heroicons:star-20-solid" :class="[$attrs.class]" />
    </div>
</template>

<script setup lang='ts'>
interface Props {
    isFavorite: boolean
}

const props = defineProps<Props>()
</script>