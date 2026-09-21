import type { RecommendationPayload, UpdateRecommendationPayload } from '@/types/recommendation'

export function useRecommendationService() {
    const { $axios } = useNuxtApp()

    async function getRecommendations() {
        return $axios.get('/recommendations')
    }

    async function postRecommendation(payload: RecommendationPayload) {
        return $axios.post('/recommendations', payload)
    }

    async function putRecommendation(id: number, payload: UpdateRecommendationPayload) {
        return $axios.put(`/recommendations/${id}`, payload)
    }

    async function deleteRecommendation(id: number) {
        return $axios.delete(`/recommendation/${id}`)
    }

    return {
        getRecommendations,
        postRecommendation,
        putRecommendation,
        deleteRecommendation
    }
}