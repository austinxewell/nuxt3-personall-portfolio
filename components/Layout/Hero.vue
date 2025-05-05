<template>
    <section id="hero" class="px-32 pt-32 h-[60vh]">
        <button class="cursor-pointer" @click="navigateTo('about')">
            <UiAvatar class="mb-4" />
        </button>

        <div class="flex gap-16">
            <div class="w-28 text-center">
                <p class="text-2xl font-bold">Hey! I'm Austin Ewell</p>
            </div>
            <aside class="flex flex-col">
                <h1 class="text-6xl font-bold text-center">The <span class="text-yellow-600 font-extrabold">Gold</span> Standard in Creative Solutions.</h1>
                <BaseButton class="mt-6 w-fit flex justify-center" @click="navigateTo('services')">
                    <span>My Services</span>
                    <UIcon name="lucide:arrow-right" class="size-5 ml-2" />
                </BaseButton>
            </aside>
        </div>
    </section>
</template>

<script setup lang='ts'>
function navigateTo(elementId: string) {
    const element = document.getElementById(elementId)
    if (element) 
        element.scrollIntoView({ behavior: 'smooth' })
}
</script>