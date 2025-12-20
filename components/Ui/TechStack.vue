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
                v-for="tool in skills"
                :key="tool.id"
                :tool-name="tool.name"
                :icon="tool.icon"
                :is-favorite="tool.level === 'expert'"
            />
        </div>

        <p v-else class="max-w-6xl text-lg font-semibold flex flex-wrap justify-center">
            <template v-for="(tool, index) in skills" :key="tool.id">
                <span :class="{ 'text-yellow-600': tool.level === 'expert' }">
                    {{ tool.name }}
                </span>
                <span v-if="index < skills.length - 1">,&nbsp;</span>
            </template>
        </p>
    </div>
</template>

<script setup lang='ts'>
import { useSkillsStore } from '#imports'

const skillsStore = useSkillsStore()
const skills = computed(() => skillsStore.list)
const viewAsList = ref(false)
</script>