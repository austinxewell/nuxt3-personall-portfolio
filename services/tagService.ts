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

    return { 
        getTags,
        postTagToProject,
        postNewTag,
        deleteTagToProjectLink
    }
}