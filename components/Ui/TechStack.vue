<template>
    <div class="flex flex-col items-center mt-4">
        <div class="w-full max-w-6xl flex items-center justify-end mb-4">
            <p class="mr-2 font-semibold">{{ viewAsList ? 'View As: List' : 'View As: Icons' }}</p>
            <USwitch
                v-model="viewAsList"
                unchecked-icon="lucide:layout-grid"
                checked-icon="lucide:list"
                color="neutral"
            />
        </div>

        <div v-if="!viewAsList" class="flex flex-wrap gap-4 max-w-6xl justify-center">
            <UiToolCard
                v-for="tool in proficiencies"
                :key="tool.id"
                :tool-name="tool.name"
                :icon="tool.icon"
                :is-favorite="tool.isFavorite"
            />
        </div>

        <p v-else class="max-w-6xl text-lg font-semibold flex flex-wrap justify-center">
            <template v-for="(tool, index) in proficiencies" :key="tool.id">
                <span :class="{ 'text-yellow-600': tool.isFavorite }">
                    {{ tool.name }}
                </span>
                <span v-if="index < proficiencies.length - 1">,&nbsp;</span>
            </template>
        </p>

    </div>
</template>

<script setup lang='ts'>
import { proficiencies } from '~/data/proficiencies'

const viewAsList = ref(false)
</script>