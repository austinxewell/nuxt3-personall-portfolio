export function useProjectsService() {
    const { $axios } = useNuxtApp()

    async function getProjects() {
        return $axios.get('/projects')
    }

    async function getFavoriteProjects() {
        return $axios.get('/projects/favorites')
    }

    return {
        getProjects,
        getFavoriteProjects 
    }
}