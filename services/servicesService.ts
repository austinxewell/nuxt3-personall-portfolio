export function useServicesService() {
    const { $axios } = useNuxtApp()

    async function getServices() {
        return $axios.get('/services')
    }

    return { getServices }
}