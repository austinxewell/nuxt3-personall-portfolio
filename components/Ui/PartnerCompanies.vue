<template>
    <section>
        <h3 class="text-xl sm:text-2xl lg:text-3xl mx-auto font-semibold tracking-wide text-center max-w-4xl">
            <span class="text-yellow-600 font-bold">Gold</span>
            Standard Collaborations.
        </h3>
    
        <div class="ticker-wrapper overflow-hidden w-full mt-4">
            <div class="ticker-track flex whitespace-nowrap" :style="{ animationDuration: `${speed}s` }">
                <div
                    v-for="company in repeatedCompanies"
                    :key="company.id"
                    class="px-8 text-base sm:text-lg lg:text-xl font-semibold text-gray-800 dark:text-white"
                >
                    {{ company.company_name }}
                </div>
                <div
                    v-for="company in repeatedCompanies"
                    :key="company.id"
                    class="px-8 text-xl font-semibold text-gray-800 dark:text-white"
                >
                    {{ company.company_name }}
                </div>
            </div>
        </div>
    </section>
</template>

<script setup lang="ts">
import { useCollaborationsStore } from '#imports'

const collaborationsStore = useCollaborationsStore()
const { collaborations } = storeToRefs(collaborationsStore)

const speed = 40
const repeatedCompanies = [...collaborations.value]
</script>

<style scoped>
@keyframes scroll-left {
    0% {
        transform: translateX(0%);
    }
    100% {
        transform: translateX(-50%);
    }
}

.ticker-track {
    animation-name: scroll-left;
    animation-timing-function: linear;
    animation-iteration-count: infinite;
    display: flex;
    width: max-content;
}
</style>