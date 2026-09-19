import { defineStore } from 'pinia'
import { useCollaborationsService } from '@/services/collaborationsService'
import { handleApiError } from '@/utils/errorHandler'
import type { Collaboration, CollaborationPayload } from '~/types/collaboration'

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
        },

        async createNewCollaboration(payload: CollaborationPayload) {
            this.loading = true
            this.error = null
            const { postNewCollaboration } = useCollaborationsService()
        
            try {
                const res = await postNewCollaboration(payload)
                this.collaborations.push(res.data)
                return res.data
            } catch (err) {
                this.error = handleApiError(err)
                throw err
            } finally {
                this.loading = false
            }
        },

        async updateCollaboration(id: number, payload: CollaborationPayload) {
            this.loading = true
            this.error = null
            const { updateCollaboration } = useCollaborationsService()
        
            try {
                const res = await updateCollaboration(id, payload)
        
                const index = this.collaborations.findIndex((collaboration) => collaboration.id === id)
                if (index !== -1) this.collaborations[index] = res.data
        
                return res.data
            } catch (err) {
                this.error = handleApiError(err)
                throw err
            } finally {
                this.loading = false
            }
        },

        async deleteCollaboration(id: number) {
            this.loading = true
            this.error = null
            const { deleteCollaboration } = useCollaborationsService()
        
            try {
                const res = await deleteCollaboration(id)
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