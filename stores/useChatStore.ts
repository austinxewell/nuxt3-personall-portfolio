// stores/chat.ts
import { defineStore } from 'pinia'
import { useChatService } from '@/services/chatService'
import { handleApiError } from '@/utils/errorHandler'
import type { ChatMessage } from '~/types/chat'

const WELCOME_MESSAGE: ChatMessage = {
    role: 'assistant',
    content: "Hey, I'm Austin's AI assistant, not the real Austin, just trained on his portfolio data. Feel free to ask me about his projects, skills, or experience!"
}

export const useChatStore = defineStore('chat', {
    state: () => ({
        messages: [WELCOME_MESSAGE] as ChatMessage[],
        loading: false,
        error: null as string | null
    }),

    actions: {
        async sendMessage(content: string) {
            this.error = null
            this.messages.push({
                role: 'user',
                content 
            })

            this.loading = true
            const { postMessage } = useChatService()

            try {
                const res = await postMessage(content)
                this.messages.push({
                    role: 'assistant',
                    content: res.data.reply 
                })
                return res.data
            } catch (err) {
                this.error = handleApiError(err)
                throw err
            } finally {
                this.loading = false
            }
        }
    },

    getters: { list: (state) => state.messages }
})