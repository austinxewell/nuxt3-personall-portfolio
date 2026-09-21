<template>
    <div class="w-full max-w-3xl mx-auto">
        <div class="group [perspective:1500px]">
            <div
                class="relative h-56 md:h-48 rounded-2xl [transform-style:preserve-3d] transition-transform duration-700 ease-in-out"
                :style="{ transform: `rotateY(${rotation}deg)` }"
            >
                <div
                    v-for="(face, faceIndex) in faceContent"
                    :key="faceIndex"
                    class="absolute inset-0 rounded-2xl p-8 bg-white border border-gray-900 dark:bg-gradient-to-br dark:from-gray-800 dark:to-gray-600 text-gray-900 dark:text-white shadow-md dark:shadow-lg dark:shadow-gray-900 ring-0 dark:ring-2 dark:ring-yellow-400/40 [backface-visibility:hidden] flex items-center gap-6"
                    :style="{ transform: `rotateY(${faceIndex * 180}deg)` }"
                >
                    <div
                        class="shrink-0 flex items-center justify-center w-16 h-16 rounded-full bg-yellow-500 sm:bg-gray-100 text-gray-900 dark:bg-yellow-500 dark:sm:bg-white"
                    >
                        <UIcon name="i-lucide-quote" class="size-6" />
                    </div>

                    <div class="min-w-0">
                        <p
                            :ref="(element) => setQuoteRef(element, faceIndex)"
                            class="opacity-80 leading-relaxed line-clamp-3"
                        >
                            {{ face.recommendation }}
                        </p>

                        <UModal
                            v-if="isOverflowing[faceIndex]"
                            :title="activeRecommendation.recommended_by"
                        >
                            <button
                                type="button"
                                class="mt-1 text-sm font-medium text-yellow-600 dark:text-yellow-400 hover:underline"
                            >
                                Read more
                            </button>

                            <template #body>
                                <div class="flex items-start gap-6">
                                    <div
                                        class="shrink-0 flex items-center justify-center w-16 h-16 rounded-full bg-yellow-500 sm:bg-gray-100 text-gray-900 dark:bg-yellow-500 dark:sm:bg-white"
                                    >
                                        <UIcon name="i-lucide-quote" class="size-6" />
                                    </div>

                                    <div class="min-w-0">
                                        <p class="leading-relaxed">
                                            {{ activeRecommendation.recommendation }}
                                        </p>
                                        <p class="mt-3 text-sm font-bold">
                                            {{ activeRecommendation.job_title }}
                                            <span
                                                v-if="activeRecommendation.company_name"
                                                class="font-normal opacity-70"
                                            >, {{ activeRecommendation.company_name }}</span>
                                        </p>
                                        <a
                                            v-if="linkedinRecommendationsUrl"
                                            :href="linkedinRecommendationsUrl"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            class="inline-flex items-center gap-1 mt-2 text-xs text-yellow-600 dark:text-yellow-400 hover:underline"
                                        >
                                            <UIcon name="i-simple-icons-linkedin" class="size-3" />
                                            Verify on LinkedIn
                                        </a>
                                    </div>
                                </div>
                            </template>
                        </UModal>

                        <p class="mt-3 text-sm font-bold">
                            {{ face.recommended_by }}
                            <span class="font-normal opacity-70">
                                — {{ face.job_title }}<template v-if="face.company_name">, {{ face.company_name }}</template>
                            </span>
                        </p>

                        <a
                            v-if="linkedinRecommendationsUrl"
                            :href="linkedinRecommendationsUrl"
                            target="_blank"
                            rel="noopener noreferrer"
                            class="inline-flex items-center gap-1 mt-1 text-xs text-yellow-600 dark:text-yellow-400 hover:underline"
                        >
                            <UIcon name="i-simple-icons-linkedin" class="size-3" />
                            View on LinkedIn
                        </a>
                    </div>
                </div>
            </div>
        </div>

        <div
            v-if="recommendations.length > 1"
            class="flex items-center justify-center gap-4 mt-6"
        >
            <button
                type="button"
                aria-label="Previous recommendation"
                class="size-9 rounded-full border border-gray-900 dark:border-white text-gray-900 dark:text-white flex items-center justify-center transition-colors duration-500 hover:bg-yellow-500 hover:text-gray-900 dark:hover:bg-yellow-500 disabled:opacity-40"
                :disabled="transitioning"
                @click="goPrev"
            >
                <UIcon name="i-lucide-chevron-left" class="size-4" />
            </button>

            <div class="flex gap-1.5">
                <span
                    v-for="(rec, i) in recommendations"
                    :key="rec.id"
                    class="size-1.5 rounded-full transition-colors"
                    :class="i === currentIndex ? 'bg-yellow-500' : 'bg-gray-300 dark:bg-gray-600'"
                />
            </div>

            <button
                type="button"
                aria-label="Next recommendation"
                class="size-9 rounded-full border border-gray-900 dark:border-white text-gray-900 dark:text-white flex items-center justify-center transition-colors duration-500 hover:bg-yellow-500 hover:text-gray-900 dark:hover:bg-yellow-500 disabled:opacity-40"
                :disabled="transitioning"
                @click="goNext"
            >
                <UIcon name="i-lucide-chevron-right" class="size-4" />
            </button>
        </div>
    </div>
</template>

<script setup lang="ts">
import type { ComponentPublicInstance } from 'vue'
import type { Recommendation } from '~/types/recommendation'

const props = defineProps<{
    recommendations: Recommendation[]
    linkedinRecommendationsUrl?: string
}>()

const currentIndex = ref(0)
const flipCount = ref(0)
const transitioning = ref(false)

const activeRecommendation = computed(
    () => props.recommendations[currentIndex.value]
)

const quoteRefs = ref<(HTMLElement | null)[]>([null, null])
const isOverflowing = ref<[boolean, boolean]>([false, false])

function setQuoteRef(element: Element | ComponentPublicInstance | null, index: number) {
    quoteRefs.value[index] = element instanceof HTMLElement ? element : null
}

function checkOverflow(index: number) {
    const element = quoteRefs.value[index]
    if (!element) return
    isOverflowing.value[index] = element.scrollHeight > element.clientHeight + 1
}

function handleResize() {
    checkOverflow(0)
    checkOverflow(1)
}

onMounted(() => {
    nextTick(handleResize)
    window.addEventListener('resize', handleResize)
})

onUnmounted(() => {
    window.removeEventListener('resize', handleResize)
})

const faceContent = ref<[Recommendation, Recommendation]>([
    props.recommendations[0],
    props.recommendations[0]
])

const FLIP_DEGREES = 180

const rotation = computed(() => flipCount.value * FLIP_DEGREES)

const nextIndex = computed(
    () => (currentIndex.value + 1) % props.recommendations.length
)
const prevIndex = computed(
    () =>
        (currentIndex.value - 1 + props.recommendations.length) %
    props.recommendations.length
)

const TWO = 2
function parity(number: number) {
    return ((number % TWO) + TWO) % TWO
}

const CSS_TRANSITION_TIME = 700

function flipTo(targetIndex: number, direction: 1 | -1) {
    if (transitioning.value || props.recommendations.length < TWO) return
    transitioning.value = true

    // the face NOT currently forward is the one about to rotate into view —
    // load it with the target content now, while it's still hidden
    const incomingFace = parity(flipCount.value) === 0 ? 1 : 0
    faceContent.value[incomingFace] = props.recommendations[targetIndex]
    nextTick(() => checkOverflow(incomingFace))

    flipCount.value += direction
    currentIndex.value = targetIndex

    // matches the 700ms CSS transition
    setTimeout(() => {
        transitioning.value = false
    }, CSS_TRANSITION_TIME)
}

function goNext() {
    flipTo(nextIndex.value, 1)
}

function goPrev() {
    flipTo(prevIndex.value, -1)
}
</script>