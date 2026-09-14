import type { TagPayload, TagToProject } from '~/types/tags'

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

    return { 
        getTags,
        postTagToProject,
        postNewTag
    }
}