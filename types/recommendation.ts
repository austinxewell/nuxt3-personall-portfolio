export interface RecommendationPayload {
    recommendation: string
    recommended_by: string
    job_title: string
    company_name: string
}

export interface Recommendation extends RecommendationPayload {
    id: string | number
    created_at: string
}

export interface UpdateRecommendationPayload {
    recommendation?: string
    recommended_by?: string
    job_title?: string
    company_name?: string
}