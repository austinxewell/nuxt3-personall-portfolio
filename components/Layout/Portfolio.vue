<template>
    <section id="portfolio" class="lg:px-32 px-6 py-4 sm:py-8">
        <h2 class="text-4xl md:ml-20 mb-6 font-semibold">
            Polished Projects. <span class="text-yellow-600 font-bold">Golden</span> Results.
        </h2>

        <UiCarousel />

        <div class="flex flex-col items-center sm:flex-row sm:justify-center md:justify-end gap-6 mt-6">
            <a
                class="w-2/3 sm:w-fit"
                href="https://github.com/austinxewell/nuxt3-personall-portfolio"
                target="_blank"
            >
                <BaseButton color="primary" class="w-full">
                    <span><span class="hidden sm:inline">View</span> Portfolio Code</span>
                    <UIcon name="lucide:code" class="size-5 ml-2" />
                </BaseButton>
            </a>

            <NuxtLink to="/projects" class="w-2/3 sm:w-fit">
                <BaseButton color="primary" class="w-full">
                    <span>View All Projects</span>
                    <UIcon name="lucide:list" class="size-5 ml-2" />
                </BaseButton>
            </NuxtLink>
        </div>
    </section>
</template>

