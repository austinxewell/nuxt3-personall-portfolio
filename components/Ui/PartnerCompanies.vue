<template>
    <section>
        <h3 class="text-3xl font-semibold tracking-wide text-center max-w-4xl">
            <span class="text-yellow-600 font-bold">Gold</span>
            Standard Collaborations.
        </h3>
    
        <div class="ticker-wrapper overflow-hidden w-full mt-4">
            <div class="ticker-track flex whitespace-nowrap" :style="{ animationDuration: `${speed}s` }">
                <div
                    v-for="(company, index) in repeatedCompanies"
                    :key="`1-${index}`"
                    class="px-8 text-xl font-semibold text-gray-800 dark:text-white"
                >
                    {{ company }}
                </div>
                <div
                    v-for="(company, index) in repeatedCompanies"
                    :key="`2-${index}`"
                    class="px-8 text-xl font-semibold text-gray-800 dark:text-white"
                >
                    {{ company }}
                </div>
            </div>
        </div>
    </section>
</template>

<script setup lang="ts">
import { partnerCompanies } from '~/data/partnerCompanies'

const speed = 40
const repeatedCompanies = [...partnerCompanies]
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