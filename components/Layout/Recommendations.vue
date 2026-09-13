<template>
    <section id="recommendations" class="px-6 py-4 sm:py-8">
        <h2 class="text-2xl sm:text-3xl lg:text-4xl md:ml-20 mb-2 font-semibold">
            Worth Their Weight in <span class="text-yellow-600 font-bold">Gold.</span>
        </h2>
        
        <p class="md:ml-20 mb-6 text-sm opacity-70">
            What colleagues and collaborators have said about working with me.
        </p>

        <div class="flex flex-wrap justify-center gap-10 mt-10">
            <UiRecommendationCard
                :recommendations="recommendations"
                :linkedin-recommendations-url="RECOMMENDATION_URL"
            />
        </div>
    </section>
</template>

<script setup lang='ts'>
import { recommendations } from '~/data/recommendations'

const RECOMMENDATION_URL = 'https://www.linkedin.com/in/austin-ewell-01a60313a/details/recommendations/'
</script>