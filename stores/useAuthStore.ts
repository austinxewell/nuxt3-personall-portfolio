// stores/useAuthStore.ts
import { defineStore } from 'pinia'
import { useAuthService } from '@/services/authService'
import { handleApiError } from '@/utils/errorHandler'

export const useAuthStore = defineStore('auth', {
    state: () => ({
        user: null as { id: number; email: string } | null,
        token: '' as string,
        loading: false,
        error: null as string | null
    }),
    actions: {
        async login(email: string, password: string) {
            this.loading = true
            this.error = null
            const { login } = useAuthService()

            try {
                const res = await login(email, password)

                // store user and token
                this.user = res.data.user
                this.token = res.data.accessToken
                localStorage.setItem('accessToken', this.token)

                // set default Axios Authorization header
                const { $axios } = useNuxtApp()
                $axios.defaults.headers.common.Authorization = `Bearer ${this.token}`
            } catch (err) {
                this.error = handleApiError(err)
            } finally {
                this.loading = false
            }
        },

        logout() {
            this.user = null
            this.token = ''
            const { $axios } = useNuxtApp()
            delete $axios.defaults.headers.common.Authorization
        }
    }
})
