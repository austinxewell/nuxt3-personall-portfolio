import { defineStore } from 'pinia'
import { useServicesService } from '@/services/servicesService'
import { handleApiError } from '@/utils/errorHandler'

export const useServicesStore = defineStore('services', {
    state: () => ({
        services: [],
        loading: false,
        error: null as string | null
    }),

    actions: {
        async fetchServices() {
            this.loading = true
            this.error = null
            const { getServices } = useServicesService()

            try {
                const res = await getServices()
                this.services = res.data
            } catch (err) {
                this.error = handleApiError(err)
            } finally {
                this.loading = false
            }
        }
    }
})