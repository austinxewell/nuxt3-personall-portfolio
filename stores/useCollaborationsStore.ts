import { defineStore } from 'pinia'
import { useCollaborationsService } from '@/services/collaborationsService'
import { handleApiError } from '@/utils/errorHandler'
import type { Collaboration } from '~/types/collaboration'

export const useCollaborationsStore = defineStore('collaborations', {
    state: () => ({
        collaborations: [] as Collaboration[],
        loading: false,
        error: null as string | null
    }),

    actions: {
        async fetchCollaborations() {
            this.loading = true
            this.error = null
            const { getCollaborations } = useCollaborationsService()
            try {
                const res = await getCollaborations()
                this.collaborations = res.data
            } catch (err) {
                this.error = handleApiError(err)
            } finally {
                this.loading = false
            }
        }
    }
})