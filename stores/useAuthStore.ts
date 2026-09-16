// stores/useAuthStore.ts
import { defineStore } from 'pinia'
import { useAuthService } from '@/services/authService'
import { handleApiError } from '@/utils/errorHandler'
import type { MinimalUser } from '~/types/user'

export const useAuthStore = defineStore('auth', {
    state: () => ({
        user: null as MinimalUser | null,
        isValidated: false as boolean,
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

                // store token in a cookie for middleware reference
                // note: frontend-set cookies cannot be httpOnly
                // secure should be true in production
                document.cookie = `token=${this.token}; path=/; secure=${process.env.NODE_ENV === 'production'}; sameSite=strict;`
            } catch (err) {
                this.error = handleApiError(err)
            } finally {
                this.loading = false
            }
        },

        async logout() {
            this.user = null
            this.token = ''
            this.isValidated = false

            localStorage.removeItem('accessToken')

            // must match the path used when the cookie was set, or the browser
            // won't recognize it as the same cookie to delete
            document.cookie = 'token=; path=/; expires=Thu, 01 Jan 1970 00:00:00 UTC;'

            const { $axios } = useNuxtApp()
            delete $axios.defaults.headers.common.Authorization

            await navigateTo('/login')
        },

        async validateToken(): Promise<boolean> {
            const { validateToken } = useAuthService()

            try {
                await validateToken()
                return true
            } catch {
                return false
            }
        }
    }
})