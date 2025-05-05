<template>
    <section id="about" class="px-32 pt-24">
        <h2 class="text-4xl ml-20 mb-6 font-semibold">
            Rooted in Passion. Refined in <span class="text-yellow-600 font-bold">Gold</span>.
        </h2>
        <div class="flex items-center justify-center gap-14">
            <img class="h-[50vh] rounded-2xl object-cover" src="../../assets/images/cartoon-avatar.png" />
            <div class="w-1/3">
                <UiAboutText />
            </div>
        </div>
        <div>
            <div class="flex justify-center mt-20">
                <h3 class="text-3xl font-semibold tracking-wide text-center max-w-4xl">
                    Technologies That Power My
                    <span class="text-yellow-600 font-bold">Golden</span>
                    Standard.
                </h3>
            </div>

            <UiTechStack />

            <div class="flex justify-center items-center gap-10 mt-10">
                <BaseButton class="w-fit flex items-center justify-center" @click="navigateToContact">
                    <span>Contact</span>
                    <UIcon name="i-lucide-mail" class="size-5 ml-2" />
                </BaseButton>
                <a
                    href="https://www.linkedin.com/in/austin-ewell-01a60313a/"
                    target="_blank"
                    class="hover:cursor-pointer flex items-center"
                >
                    <img
                        class="h-10"
                        src="../../assets/images/linkedIn.png"
                        alt="LinkedIn Logo"
                    />
                </a>
            </div>
        </div>
    </section>
</template>

<script setup lang='ts'>
function navigateToContact() {
    const element = document.getElementById('contact')
    if (element) 
        element.scrollIntoView({ behavior: 'smooth' })
}
</script>