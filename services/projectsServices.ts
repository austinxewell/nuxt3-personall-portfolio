import type { ProjectPayload } from '~/types/projects'

export function useProjectsService() {
    const { $axios } = useNuxtApp()

    function getProjects() {
        return $axios.get('/projects')
    }

    function getFavoriteProjects() {
        return $axios.get('/projects/favorites')
    }

    function getProjectBySlug(slug: string) {
        return $axios.get(`/projects/slug/${slug}`)
    }

    function postNewProject(payload: ProjectPayload) {
        return $axios.post('/projects', payload)
    }

    function updateProject(id: number, payload: ProjectPayload) {
        return $axios.put(`/projects/${id}`, payload)
    }

    return {
        getProjects,
        getFavoriteProjects,
        getProjectBySlug,
        postNewProject,
        updateProject
    }
}