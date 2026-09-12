<template>
    <header id="hero" class="relative px-6 pb-8 sm:pb-12 pt-6 sm:pt-32 min-h-[60vh] flex flex-col">
        <BaseBookingProjectsBadge @click="navigateTo('services')" />

        <div class="flex flex-col lg:flex-row items-center lg:items-start mt-4 lg:mt-0 gap-2 xl:gap-16">
            <div class="flex flex-col items-center w-full lg:w-1/4">
                <button class="cursor-pointer flex justify-center items-center w-full gap-4" @click="navigateTo('about')">
                    <BaseAvatar class="mb-4 w-24 h-24 md:w-28 md:h-28 lg:w-40 lg:h-56 xl:w-48 xl:h-64" />
                    <div class="text-center lg:hidden">
                        <p class="text-2xl font-bold mb-2">{{ about.name }}</p>
                        <UiSocialLinks />
                    </div>
                </button>

                <UiHeroAbout />
            </div>

            <aside class="flex flex-col lg:w-2/3 text-center mt-2 lg:mt-36 xl:mt-48">
                <div class="text-sm font-semibold justify-center flex flex-col sm:flex-row uppercase tracking-[0.2em] text-yellow-600 dark:text-yellow-500 mb-3">
                    <p>Software Engineer</p>
                    <span class="hidden sm:flex px-1">&middot;</span>
                    <p>Front End Specialist</p>
                </div>
                <h1 class="text-4xl sm:text-5xl lg:text-6xl font-bold font-serif text-center">
                    The <span class="text-yellow-600 font-extrabold">Gold</span> Standard in Creative Solutions.
                </h1>
                <div class="flex flex-col sm:flex-row justify-center mt-4 sm:mt-6 gap-4">
                    <NuxtLink to="/projects" class="flex-1">
                        <BaseButton
                            color="inverse"
                            class="w-full"
                        >
                            <span>View My Projects</span>
                            <UIcon name="lucide:arrow-right" class="size-5 ml-2" />
                        </BaseButton>
                    </NuxtLink>
                    <BaseButton
                        color="inverse"
                        class="flex-1"
                        @click="navigateTo('services')"
                    >
                        <span>My Services</span>
                        <UIcon name="lucide:arrow-down" class="size-5 ml-2" />
                    </BaseButton>
                </div>

                <div class="sm:block mt-8 mx-auto animate-bounce hover:cursor-pointer" @click="navigateTo('about')">
                    <UIcon name="lucide:chevron-down" size="64" />
                </div>
            </aside>
        </div>
    </header>
</template>


<script setup lang='ts'>
import { useAboutStore } from '#imports'

const aboutStore = useAboutStore()
const { about } = storeToRefs(aboutStore)

function navigateTo(elementId: string) {
    const element = document.getElementById(elementId)
    if (element) 
        element.scrollIntoView({ behavior: 'smooth' })
}
</script>