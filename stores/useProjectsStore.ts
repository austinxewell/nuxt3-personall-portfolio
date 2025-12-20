import { defineStore } from 'pinia'
import { useProjectsService } from '@/services/projectsServices'
import { handleApiError } from '@/utils/errorHandler'
import type { Project, ProjectPayload } from '~/types/projects'

export const useProjectsStore = defineStore('projects', {
    state: () => ({
        projects: [] as Project[],
        favoriteProjects: [] as Project[],
        project: null as Project | null,
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
        },

        async fetchProjectBySlug(slug: string) {
            this.loading = true
            this.error = null
            const { getProjectBySlug } = useProjectsService()

            try {
                const res = await getProjectBySlug(slug)
                this.project = res.data
                return this.project
            } catch (err) {
                this.error = handleApiError(err)
            } finally {
                this.loading = false
            }
        },

        async postNewProject(payload: ProjectPayload) {
            this.loading = true
            this.error = null
            const { postNewProject } = useProjectsService()

            try {
                const res = await postNewProject(payload)
                this.projects.push(res.data)
                return res.data
            } catch (err) {
                this.error = handleApiError(err)
                throw err
            } finally {
                this.loading = false
            }
        }
    }
})