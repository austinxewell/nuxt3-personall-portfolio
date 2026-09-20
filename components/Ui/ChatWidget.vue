<!-- components/chat/ChatWidget.vue -->
<template>
    <UCard
        class="flex flex-col h-[500px] border-2 border-yellow-600 p-0 overflow-hidden"
        :ui="{ body: 'flex-1 overflow-y-auto p-3' }"
    >
        <template #header>
            <div class="flex items-center gap-3 py-1">
                <img
                    :src="avatarSrc"
                    alt="Avatar"
                    class="size-9 rounded-2xl object-cover shrink-0"
                />
                <div>
                    <p class="font-semibold text-sm leading-tight">Austin Ewell</p>
                    <p class="text-xs text-gray-500 leading-tight">AI Assistant</p>
                </div>
            </div>
        </template>

        <div ref="messagesContainer" class="space-y-2">
            <div
                v-for="(message, index) in chatStore.list"
                :key="index"
                :class="[
                    'flex items-end gap-2',
                    message.role === 'user' ? 'justify-end' : 'justify-start'
                ]"
            >
                <img
                    v-if="message.role === 'assistant'"
                    :src="avatarSrc"
                    alt="Avatar"
                    class="size-6 rounded-2xl object-cover shrink-0"
                />

                <div
                    :class="[
                        'rounded-2xl px-3 py-2 max-w-[75%] text-sm',
                        message.role === 'user'
                            ? 'bg-yellow-600 text-white rounded-br-sm'
                            : 'bg-gray-100 dark:bg-gray-800 rounded-bl-sm'
                    ]"
                >
                    {{ message.content }}
                </div>
            </div>

            <div v-if="chatStore.loading" class="flex items-end gap-2 justify-start">
                <img
                    :src="avatarSrc"
                    alt="Avatar"
                    class="size-6 rounded-2xl object-cover shrink-0"
                />
                <div class="rounded-2xl rounded-bl-sm px-3 py-2 bg-gray-100 dark:bg-gray-800 text-sm text-gray-500">
                    Typing...
                </div>
            </div>

            <p v-if="chatStore.error" class="text-sm text-red-500 text-center">
                {{ chatStore.error }}
            </p>
        </div>

        <template #footer>
            <form class="flex gap-2 items-end" @submit.prevent="handleSubmit">
                <UTextarea
                    v-model="input"
                    :rows="1"
                    autoresize
                    placeholder="Aa"
                    color="warning"
                    class="flex-1"
                    :ui="{ base: 'rounded-xl' }"
                    :disabled="chatStore.loading"
                    @keydown.enter.exact.prevent="handleSubmit"
                />
                <BaseButton
                    type="submit"
                    color="inverse-alt"
                    class="rounded-full"
                    :disabled="!input.trim()"
                >
                    <UIcon name="i-lucide-send" class="size-4" />
                </BaseButton>
            </form>
        </template>
    </UCard>
</template>

<script setup lang="ts">
const chatStore = useChatStore()
const darkModeStore = useDarkModeStore()
const isDark = computed(() => darkModeStore.isDark)

const avatarSrc = computed(() => (isDark.value ? '/images/avatar-light.png' : '/images/avatar-dark.png'))

const input = ref('')
const messagesContainer = ref<HTMLElement | null>(null)

async function handleSubmit() {
    const message = input.value.trim()
    if (!message || chatStore.loading) return

    input.value = ''
    await chatStore.sendMessage(message)
    await nextTick()
    scrollToBottom()
}

function scrollToBottom() {
    if (messagesContainer.value) 
        messagesContainer.value.scrollTop = messagesContainer.value.scrollHeight
    
}
</script>