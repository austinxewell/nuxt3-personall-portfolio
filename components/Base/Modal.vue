<template>
    <Teleport to="body">
        <transition name="fade" appear>
            <div
                v-if="isOpen"
                class="fixed inset-0 z-50 flex items-center justify-center bg-black/50"
                @click.self="close"
            >
                <div
                    class="bg-white dark:bg-gray-800 border-2 dark:border-yellow-600 rounded-xl shadow-lg max-w-2xl w-full p-6 relative"
                >

                    <button
                        class="absolute top-3 right-3 text-gray-500 hover:text-gray-700 dark:hover:text-gray-300"
                        @click="close"
                    >
                        <UIcon name="lucide:x" />
                    </button>

                    <div>
                        <slot />
                    </div>
                </div>
            </div>
        </transition>
    </Teleport>
</template>

<script setup lang="ts">
import { ref, defineExpose } from 'vue'

// Expose methods to parent
const isOpen = ref(false)

function open() {
    isOpen.value = true
}

function close() {
    isOpen.value = false
}

defineExpose({
    open,
    close 
})
</script>

<style>
.fade-enter-active,
.fade-leave-active {
    transition: opacity 0.2s;
}
.fade-enter-from,
.fade-leave-to {
    opacity: 0;
}
</style>
