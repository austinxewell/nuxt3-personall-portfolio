import { defineStore } from 'pinia'
import { useProjectsService } from '@/services/projectsServices'
import { handleApiError } from '@/utils/errorHandler'
import type { Project } from '~/types/projects'

export const useProjectsStore = defineStore('projects', {
    state: () => ({
        projects: [] as Project[],
        favoriteProjects: [] as Project[],
        loading: false,
        error: null as string | null
    }),

    actions: {
        async fetchProjects() {
            this.loading = true
            this.error = null
            const { getProjects } = useProjectsService()

            try {
                const res = await getProjects()
                this.projects = res.data
            } catch (err) {
                this.error = handleApiError(err)
            } finally {
                this.loading = false
            }
        },

        async fetchFavoriteProjects() {
            this.loading = true
            this.error = null
            const { getFavoriteProjects } = useProjectsService()

            try {
                const res = await getFavoriteProjects()
                this.favoriteProjects = res.data
            } catch (err) {
                this.error = handleApiError(err)
            } finally {
                this.loading = false
            }
        }
    }
})