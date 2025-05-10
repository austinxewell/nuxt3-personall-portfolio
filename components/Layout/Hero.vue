<template>
    <header id="hero" class="lg:px-32 px-6 py-4 sm:pb-8 lg:pt-16 lg:h-[60vh]">
        <button class="cursor-pointer flex gap-4 items-center lg:block" @click="navigateTo('about')">
            <UiAvatar class="mb-4" />
            <p class="text-2xl font-bold lg:hidden">Hey! I'm Austin Ewell</p>
        </button>

        <div class="flex lg:gap-16">
            <p class="w-28 text-center text-2xl font-bold hidden lg:block">Hey! I'm Austin Ewell</p>
            <aside class="flex flex-col">
                <h1 class="text-6xl font-bold text-center">The <span class="text-yellow-600 font-extrabold">Gold</span> Standard in Creative Solutions.</h1>
                <BaseButton class="mt-6 w-fit flex justify-center" @click="navigateTo('services')">
                    <span>My Services</span>
                    <UIcon name="lucide:arrow-right" class="size-5 ml-2" />
                </BaseButton>
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