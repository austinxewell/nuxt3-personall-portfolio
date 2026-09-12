export function useTagsService() {
    const { $axios } = useNuxtApp()

    async function getTags() {
        return $axios.get('/tags')
    }

    async function postTagToProject() {
        return $axios.post('/tags/link')
    }

    return { 
        getTags,
        postTagToProject
    }
}