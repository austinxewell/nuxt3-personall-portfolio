import { defineStore } from 'pinia'
import { useTagsService } from '@/services/tagService'
import { handleApiError } from '@/utils/errorHandler'
import type { Tag } from '~/types/tags'

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
            }
        }
    }
})