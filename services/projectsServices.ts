import type { ProjectPayload } from '~/types/projects'

export function useProjectsService() {
    const { $axios } = useNuxtApp()

    async function getProjects() {
        return $axios.get('/projects')
    }

    async function getFavoriteProjects() {
        return $axios.get('/projects/favorites')
    }

    async function postNewProject(payload: ProjectPayload) {
        const token = localStorage.getItem('accessToken')
        return $axios.post('/projects', payload, { headers: { Authorization: token ? `Bearer ${token}` : '' } })
    }

    return {
        getProjects,
        getFavoriteProjects,
        postNewProject
    }
}