<template>
    <div class="p-10">
        <header class="w-full lg:w-3/5 mb-10">
            <h2 class="text-5xl font-bold">Portfolio</h2>
            <p class="text-2xl font-bold mt-6">These builds are
                <strong class="text-yellow-600">polished</strong> with purpose —
                <strong class="text-yellow-600">refined</strong> to bring both form and function to the forefront.
            </p>
        </header>
        <section class="flex justify-evenly flex-wrap gap-4">
            <UiProjectCard
                v-for="project in projects"
                :key="project.id"
                :project="project"
            />
        </section>
    </div>
</template>

<script setup lang='ts'>
import { projects } from '~/data/projects'
</script>