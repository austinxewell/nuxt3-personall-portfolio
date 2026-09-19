export interface Service {
    id: number
    service_name: string
    description: string
    icon: string
    created_at: string // ISO date string
}

export interface ServicePayload {
    service_name: string
    description: string
    icon: string
}

export interface UpdateServicePayload {
    service_name?: string
    description?: string
    icon?: string
}