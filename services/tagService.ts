import type { DeleteTagToProjectPayload, TagPayload, TagToProject } from '~/types/tags'

export function useTagsService() {
    const { $axios } = useNuxtApp()

    async function getTags() {
        return $axios.get('/tags')
    }

    async function postTagToProject(payload: TagToProject) {
        return $axios.post('/tags/link', payload)
    }

    async function postNewTag(payload: TagPayload ) {
        return $axios.post('/tags', payload)
    }

    async function deleteTagToProjectLink(payload: DeleteTagToProjectPayload) {
        return $axios.delete('/tags/link', { data: payload })
    }

    async function deleteTag(id: number) {
        return $axios.delete(`/tags/${id}`)
    }

    async function updateTag(id: number, payload: TagPayload) {
        return $axios.put(`/tags/${id}`, payload)
    }

    return { 
        getTags,
        postTagToProject,
        postNewTag,
        deleteTagToProjectLink,
        deleteTag,
        updateTag
    }
}