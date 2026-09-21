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

        <div v-if="!viewAsList" class="w-full max-w-6xl flex flex-col gap-8">
            <div>
                <h3 class="text-sm font-semibold uppercase tracking-wide text-yellow-600 mb-3 text-center sm:text-left">
                    Expert In
                </h3>
                <div class="flex flex-wrap gap-4 justify-center sm:justify-start">
                    <UiToolCard
                        v-for="tool in expertSkills"
                        :key="tool.id"
                        :tool-name="tool.name"
                        :icon="tool.icon"
                        :is-favorite="true"
                    />
                </div>
            </div>

            <div>
                <h3 class="text-sm font-semibold uppercase tracking-wide opacity-70 mb-3 text-center sm:text-left">
                    Also Familiar With
                </h3>
                <div class="flex flex-wrap gap-4 justify-center sm:justify-start">
                    <UiToolCard
                        v-for="tool in familiarSkills"
                        :key="tool.id"
                        :tool-name="tool.name"
                        :icon="tool.icon"
                        :is-favorite="false"
                    />
                </div>
            </div>
        </div>

        <div v-else class="max-w-4xl w-full grid grid-cols-1 sm:grid-cols-2 gap-8">
            <div>
                <h3 class="text-sm font-semibold uppercase tracking-wide text-yellow-600 mb-3 text-center sm:text-left">
                    Expert In
                </h3>
                <div class="flex flex-wrap gap-2 justify-center sm:justify-start">
                    <span
                        v-for="tool in expertSkills"
                        :key="tool.id"
                        class="px-3 py-1.5 rounded-full text-sm font-semibold bg-yellow-600 text-white"
                    >
                        {{ tool.name }}
                    </span>
                </div>
            </div>

            <div>
                <h3 class="text-sm font-semibold uppercase tracking-wide opacity-70 mb-3 text-center sm:text-left">
                    Also Familiar With
                </h3>
                <div class="flex flex-wrap gap-2 justify-center sm:justify-start">
                    <span
                        v-for="tool in familiarSkills"
                        :key="tool.id"
                        class="px-3 py-1.5 rounded-full text-sm font-medium border border-gray-300 dark:border-gray-700 text-gray-700 dark:text-gray-300"
                    >
                        {{ tool.name }}
                    </span>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang='ts'>
import { useSkillsStore } from '#imports'

const skillsStore = useSkillsStore()
const skills = computed(() => skillsStore.list)
const expertSkills = computed(() => skills.value.filter((skill) => skill.level === 'expert'))
const familiarSkills = computed(() => skills.value.filter((skill) => skill.level !== 'expert'))
const viewAsList = ref(false)
</script>