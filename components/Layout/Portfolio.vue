<template>
    <section id="portfolio" class="px-32 pt-32">
        <h2 class="text-4xl ml-20 mb-6 font-semibold">
            Polished Projects. <span class="text-yellow-600 font-bold">Golden</span> Results.
        </h2>

        <UiCarousel />

        <div class="flex justify-end mt-6">
            <NuxtLink to="/projects">
                <BaseButton color="primary">
                    <span>View All Projects</span>
                    <UIcon name="lucide:list" class="size-5 ml-2" />
                </BaseButton>
            </NuxtLink>
        </div>
    </section>
</template>

