import { defineStore } from 'pinia'
import { useServicesService } from '@/services/servicesService'
import { handleApiError } from '@/utils/errorHandler'
import type { Service, ServicePayload, UpdateServicePayload } from '~/types/service'

export const useServicesStore = defineStore('services', {
    state: () => ({
        services: [] as Service[],
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
        },

        async createService(payload: ServicePayload) {
            this.loading = true
            this.error = null
            const { postService } = useServicesService()
        
            try {
                const res = await postService(payload)
                this.services.push(res.data)
                return res.data
            } catch (err) {
                this.error = handleApiError(err)
                throw err
            } finally {
                this.loading = false
            }
        },

        async updateService(id: number, payload: UpdateServicePayload) {
            this.loading = true
            this.error = null
            const { updateService } = useServicesService()
        
            try {
                const res = await updateService(id, payload)
        
                const index = this.services.findIndex((skill) => skill.id === id)
                if (index !== -1) this.services[index] = res.data
        
                return res.data
            } catch (err) {
                this.error = handleApiError(err)
                throw err
            } finally {
                this.loading = false
            }
        },

        async deleteService(id: number) {
            this.loading = true
            this.error = null
            const { deleteService } = useServicesService()
        
            try {
                const res = await deleteService(id)
                return res.data
            } catch (err) {
                this.error = handleApiError(err)
                throw err
            } finally {
                this.loading = false
            }
        }
    }
})