import type { CollaborationPayload } from '~/types/collaboration'

export function useCollaborationsService() {
    const { $axios } = useNuxtApp()

    async function getCollaborations() {
        return $axios.get('/collaborations')
    }

    async function postNewCollaboration(payload: CollaborationPayload) {
        return $axios.post('/collaborations', payload)
    }

    async function updateCollaboration(id: number, payload: CollaborationPayload) {
        return $axios.put(`/collaborations/${id}`, payload)
    }

    async function deleteCollaboration(id: number) {
        return $axios.delete(`/collaborations/${id}`)
    }

    return {
        getCollaborations,
        postNewCollaboration,
        updateCollaboration,
        deleteCollaboration
    }
}