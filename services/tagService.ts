export function useTagsService() {
    const { $axios } = useNuxtApp()

    async function getTags() {
        return $axios.get('/tags')
    }

    return { getTags }
}