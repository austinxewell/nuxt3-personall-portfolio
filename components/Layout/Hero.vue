<template>
    <header id="hero" class="relative lg:px-32 px-6 pb-8 sm:pb-12 pt-6 sm:pt-32 sm:h-[80vh] flex flex-col">
        <BaseBookingProjectsBadge />
        <button class="cursor-pointer flex justify-center items-center lg:w-1/4 w-full gap-4" @click="navigateTo('about')">
            <BaseAvatar class="mb-4 w-24 h-24 md:w-28 md:h-28 xl:w-48 xl:h-48" />
            <p class="text-2xl font-bold lg:hidden">Hey! I'm Austin Ewell</p>
        </button>

        <div class="flex flex-col lg:flex-row items-center mt-4 lg:mt-0 gap-2 xl:gap-16">
            <UiHeroAbout />

            <aside class="flex flex-col lg:w-2/3 text-center mt-6 lg:mt-0">
                <h1 class="text-4xl sm:text-5xl lg:text-6xl font-bold font-serif text-center">
                    The <span class="text-yellow-600 font-extrabold">Gold</span> Standard in Creative Solutions.
                </h1>
                <div class="flex justify-center mt-4 sm:mt-6">
                    <BaseButton class="w-full sm:w-3/4 lg:w-1/2" @click="navigateTo('services')">
                        <span>My Services</span>
                        <UIcon name="lucide:arrow-right" class="size-5 ml-2" />
                    </BaseButton>
                </div>

                <div class="hidden sm:block mt-8 mx-auto animate-bounce hover:cursor-pointer" @click="navigateTo('about')">
                    <UIcon name="lucide:chevron-down" size="64" />
                </div>
            </aside>
        </div>
    </header>
</template>


<script setup lang='ts'>
function navigateTo(elementId: string) {
    const element = document.getElementById(elementId)
    if (element) 
        element.scrollIntoView({ behavior: 'smooth' })
}
</script>