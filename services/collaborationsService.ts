export function useCollaborationsService() {
    const { $axios } = useNuxtApp()

    async function getCollaborations() {
        return $axios.get('/collaborations')
    }

    return { getCollaborations }
}