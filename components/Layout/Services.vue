<template>
    <section id="services" class="lg:px-32 px-6 py-4 sm:py-8">
        <h2 class="text-2xl sm:text-3xl lg:text-4xl md:ml-20 mb-6 font-semibold">
            Bringing Ideas to Life. <span class="text-yellow-600 font-bold">Pure</span>
            Intent. <span class="text-yellow-600 font-bold">Precise</span> Execution.
        </h2>

        <div class="flex flex-wrap justify-center gap-10 mt-10">
            <UiServiceCard
                v-for="service in services"
                :key="service.id"
                :title="service.service_name"
                :description="service.description"
                :icon="service.icon"
            />
        </div>

        <UiElevatorPitch />
    </section>
</template>

<script setup lang='ts'>
import { useServicesStore } from '#imports'

const servicesStore = useServicesStore()
const { services } = storeToRefs(servicesStore)
</script>