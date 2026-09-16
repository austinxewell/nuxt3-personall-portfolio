import type { UpdateAboutPayload } from '~/types/about'

export function useAboutService() {
    const { $axios } = useNuxtApp()

    async function getAbout() {
        return $axios.get('/about')
    }

    async function updateAbout(payload: UpdateAboutPayload) {
        return $axios.put('/about', payload)
    }

    return {
        getAbout,
        updateAbout 
    }
}