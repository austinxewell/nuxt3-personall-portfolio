export function useChatService() {
    const { $axios } = useNuxtApp()

    async function postMessage(message: string) {
        return $axios.post('/chat', { message })
    }

    return { postMessage }
}