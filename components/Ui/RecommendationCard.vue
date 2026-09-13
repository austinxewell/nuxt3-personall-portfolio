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
                    class="absolute inset-0 rounded-2xl p-8 bg-white border border-gray-900 dark:bg-gradient-to-br dark:from-gray-800 dark:to-gray-600 text-gray-900 dark:text-white shadow-md dark:shadow-lg dark:shadow-gray-900 ring-0 dark:ring-2 ring-yellow-500/10 group-hover:dark:ring-yellow-400/40 transition-all duration-500 [backface-visibility:hidden] flex items-center gap-6"
                    :style="{ transform: `rotateY(${faceIndex * 180}deg)` }"
                >
                    <div
                        class="shrink-0 flex items-center justify-center w-16 h-16 rounded-full bg-yellow-500 sm:bg-gray-100 text-gray-900 dark:bg-yellow-500 dark:sm:bg-white dark:group-hover:bg-yellow-500 font-medium text-lg overflow-hidden transition-all duration-500 group-hover:rotate-[20deg] group-hover:scale-125"
                    >
                        <img
                            v-if="face.avatar"
                            :src="face.avatar"
                            :alt="face.name"
                            class="size-full object-cover"
                        />
                        <span v-else>{{ initials(face.name) }}</span>
                    </div>

                    <div class="min-w-0">
                        <p
                            :ref="(el) => setQuoteRef(el, faceIndex)"
                            class="opacity-80 leading-relaxed line-clamp-3"
                        >
                            {{ face.quote }}
                        </p>

                        <UModal
                            v-if="isOverflowing[faceIndex]"
                            :title="activeRecommendation.name"
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
                                        class="shrink-0 flex items-center justify-center w-16 h-16 rounded-full bg-yellow-500 sm:bg-gray-100 text-gray-900 dark:bg-yellow-500 dark:sm:bg-white font-medium text-lg overflow-hidden"
                                    >
                                        <img
                                            v-if="activeRecommendation.avatar"
                                            :src="activeRecommendation.avatar"
                                            :alt="activeRecommendation.name"
                                            class="size-full object-cover"
                                        />
                                        <span v-else>{{ initials(activeRecommendation.name) }}</span>
                                    </div>

                                    <div class="min-w-0">
                                        <p class="leading-relaxed">
                                            {{ activeRecommendation.quote }}
                                        </p>
                                        <p class="mt-3 text-sm font-bold">
                                            {{ activeRecommendation.title }}
                                            <span
                                                v-if="activeRecommendation.company"
                                                class="font-normal opacity-70"
                                            >, {{ activeRecommendation.company }}</span>
                                        </p>
                                    </div>
                                </div>
                            </template>
                        </UModal>

                        <p class="mt-3 text-sm font-bold">
                            {{ face.name }}
                            <span class="font-normal opacity-70">
                                — {{ face.title }}<template v-if="face.company">, {{ face.company }}</template>
                            </span>
                        </p>
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
                    :class="i === currentIndex ? 'bg-yellow-500' : 'bg-gray-100 dark:bg-gray-600'"
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
interface Recommendation {
  id: string | number
  quote: string
  name: string
  title: string
  company?: string
  avatar?: string
}

const props = defineProps<{
  recommendations: Recommendation[]
}>()

const currentIndex = ref(0)
const flipCount = ref(0)
const transitioning = ref(false)

const activeRecommendation = computed(
    () => props.recommendations[currentIndex.value]
)

const quoteRefs = ref<(HTMLElement | null)[]>([null, null])
const isOverflowing = ref<[boolean, boolean]>([false, false])

function setQuoteRef(el: Element | null, index: number) {
    quoteRefs.value[index] = el as HTMLElement | null
}

function checkOverflow(index: number) {
    const el = quoteRefs.value[index]
    if (!el) return
    // +1 guards against sub-pixel rounding falsely flagging overflow
    isOverflowing.value[index] = el.scrollHeight > el.clientHeight + 1
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

// two physical faces glued back-to-back; each holds its own content
// so the "back" of the card isn't empty mid-flip
const faceContent = ref<[Recommendation, Recommendation]>([
    props.recommendations[0],
    props.recommendations[0]
])

const rotation = computed(() => flipCount.value * 180)

const nextIndex = computed(
    () => (currentIndex.value + 1) % props.recommendations.length
)
const prevIndex = computed(
    () =>
        (currentIndex.value - 1 + props.recommendations.length) %
    props.recommendations.length
)

// normalize JS's negative-friendly modulo (-1 % 2 === -1, not 1)
function parity(n: number) {
    return ((n % 2) + 2) % 2
}

function flipTo(targetIndex: number, direction: 1 | -1) {
    if (transitioning.value || props.recommendations.length < 2) return
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
    }, 700)
}

function goNext() {
    flipTo(nextIndex.value, 1)
}

function goPrev() {
    flipTo(prevIndex.value, -1)
}

function initials(name: string) {
    return name
        .split(' ')
        .map((part) => part[0])
        .join('')
        .slice(0, 2)
        .toUpperCase()
}
</script>