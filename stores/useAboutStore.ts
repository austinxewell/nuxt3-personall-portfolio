import { defineStore } from 'pinia'
import { useAboutService } from '@/services/aboutService'
import { handleApiError } from '@/utils/errorHandler'
import type { About } from '~/types/about'

export const useAboutStore = defineStore('about', {
    state: () => ({
        about: {} as About,
        loading: false,
        error: null as string | null
    }),

    actions: {
        async fetchAbout() {
            this.loading = true
            this.error = null
            const { getAbout } = useAboutService()

            try {
                const res = await getAbout()
                this.about = res.data
            } catch (err) {
                this.error = handleApiError(err)
            } finally {
                this.loading = false
            }
        }
    }
})