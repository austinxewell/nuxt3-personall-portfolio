
import type { ServicePayload, UpdateServicePayload } from '~/types/service'

export function useServicesService() {
    const { $axios } = useNuxtApp()

    async function getServices() {
        return $axios.get('/services')
    }

    async function postService(payload: ServicePayload) {
        return $axios.post('/services', payload)
    }

    async function updateService(id: number, payload: UpdateServicePayload) {
        return $axios.put(`/services/${id}`, payload)
    }

    async function deleteService(id: number) {
        return $axios.delete(`/services/${id}`)
    }

    return {
        getServices,
        postService,
        updateService,
        deleteService 
    }
}