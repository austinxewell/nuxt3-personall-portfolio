<template>
    <section id="services" class="lg:px-32 px-6 py-4 sm:py-8">
        <h2 class="text-4xl md:ml-20 mb-6 font-semibold">
            Bringing Ideas to Life. <span class="text-yellow-600 font-bold">Pure</span>
            Intent. <span class="text-yellow-600 font-bold">Precise</span> Execution.
        </h2>

        <div class="flex flex-wrap justify-center gap-10 mt-10">
            <UiServiceCard
                title="Web Development"
                description="Fast, accessible websites using modern stacks like Vue, Nuxt, and React — built with precision and performance in mind."
                icon="i-lucide-code"
            />
            <UiServiceCard
                title="Mobile Development"
                description="Responsive, app-like experiences powered by frameworks like Nuxt, React Native, or PWA techniques to reach users on any device."
                icon="i-lucide-smartphone"
            />
            <UiServiceCard
                title="UI/UX Design"
                description="Pixel-perfect interfaces crafted in Figma and brought to life in code — focused on clarity, usability, and impact."
                icon="i-lucide-layout-dashboard"
            />
        </div>

        <UiElevatorPitch />
    </section>
</template>

<script setup lang='ts'>

</script>