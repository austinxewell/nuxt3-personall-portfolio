export function useAboutService() {
    const { $axios } = useNuxtApp()

    async function getAbout() {
        return $axios.get('/about')
    }

    return { getAbout }
}