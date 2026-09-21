import { defineStore } from 'pinia'
import { handleApiError } from '@/utils/errorHandler'
import { useRecommendationService } from '@/services/recommendationService'
import type { Recommendation, RecommendationPayload, UpdateRecommendationPayload } from '~/types/recommendation'

export const useRecommendationStore = defineStore('recommendations', {
    state: () => ({
        recommendations: [] as Recommendation[],
        loading: false,
        error: null as string | null
    }),

    actions: {
        async fetchRecommendations() {
            this.loading = true
            this.error = null
            const { getRecommendations } = useRecommendationService()

            try {
                const res = await getRecommendations()
                this.recommendations = res.data
                return res.data
            } catch (err) {
                this.error = handleApiError(err)
                throw err
            } finally {
                this.loading = false
            }
        },

        async createRecommendation(payload: RecommendationPayload) {
            this.loading = true
            this.error = null
            const { postRecommendation } = useRecommendationService()

            try {
                const res = await postRecommendation(payload)
                this.recommendations.push(res.data)
                return res.data
            } catch (err) {
                this.error = handleApiError(err)
                throw err
            } finally {
                this.loading = false
            }
        },

        async updateRecommendation(id: number, payload: UpdateRecommendationPayload) {
            this.loading = true
            this.error = null
            const { putRecommendation } = useRecommendationService()

            try {
                const res = await putRecommendation(id, payload)

                const index = this.recommendations.findIndex((recommendation) => recommendation.id === id)
                if (index !== -1) this.recommendations[index] = res.data
                
                return res.data
            } catch (err) {
                this.error = handleApiError(err)
                throw err
            } finally {
                this.loading = false
            }
        },

        async deleteRecommendation(id: number) {
            this.loading = true
            this.error = null
            const { deleteRecommendation } = useRecommendationService()

            try {
                const res = await deleteRecommendation(id)
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