import { defineStore } from 'pinia'
import { useTagsService } from '@/services/tagService'
import { handleApiError } from '@/utils/errorHandler'
import type { DeleteTagToProjectPayload, Tag, TagPayload, TagToProject } from '~/types/tags'

export const useTagStore = defineStore('tags', {
    state: () => ({
        tags: [] as Tag[],
        loading: false,
        error: null as string | null
    }),

    actions: {
        async fetchTags() {
            this.loading = true
            this.error = null
            const { getTags } = useTagsService()

            try {
                const res = await getTags()
                this.tags = res.data
            } catch (err) {
                this.error = handleApiError(err)
            } finally {
                this.loading = false
            }
        },

        async linkTagToProject(payload: TagToProject) {
            this.loading = true
            this.error = null
            const { postTagToProject } = useTagsService()

            try {
                const res = await postTagToProject(payload)
                return res.data
            } catch (err) {
                this.error = handleApiError(err)
                throw err
            } finally {
                this.loading = false
            }
        },

        async createNewTag(payload: TagPayload) {
            this.loading = true
            this.error = null
            const { postNewTag } = useTagsService()

            try {
                const res = await postNewTag(payload)
                this.tags.push(res.data)
                return res.data
            } catch (err) {
                this.error = handleApiError(err)
                throw err
            } finally {
                this.loading = false
            }
        },

        async updateTag(id: number, payload: TagPayload) {
            this.loading = true
            this.error = null
            const { updateTag } = useTagsService()

            try {
                const res = await updateTag(id, payload)

                const index = this.tags.findIndex((tag) => tag.id === id)
                if (index !== -1) this.tags[index] = res.data

                return res.data
            } catch (err) {
                this.error = handleApiError(err)
                throw err
            } finally {
                this.loading = false
            }
        },

        async removeTagFromProject(payload: DeleteTagToProjectPayload) {
            this.loading = true
            this.error = null
            const { deleteTagToProjectLink } = useTagsService()

            try {
                const res = await deleteTagToProjectLink(payload)
                return res.data
            } catch (err) {
                this.error = handleApiError(err)
                throw err
            } finally {
                this.loading = false
            }
        },

        async deleteTag(id: number) {
            this.loading = true
            this.error = null
            const { deleteTag } = useTagsService()

            try {
                const res = await deleteTag(id)
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