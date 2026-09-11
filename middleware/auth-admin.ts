import { getCookie } from 'h3'

export default defineNuxtRouteMiddleware(async(to, from) => {
    const nuxtApp = useNuxtApp()
    const authStore = useAuthStore()
    const { $axios } = nuxtApp

    let token: string | null = null

    if (import.meta.server) {
        const event = nuxtApp.ssrContext?.event
        if (event) token = getCookie(event, 'token') || null
    } else {
        token = localStorage.getItem('accessToken')
    }

    if (!token) return navigateTo('/login')

    try {
    // send the token in Authorization header
        await $axios.get('/auth/me', { headers: { Authorization: `Bearer ${token}` } })
        authStore.isValidated = true
    } catch {
        authStore.isValidated = false
        return navigateTo('/login')
    }
})
