export interface MinimalUser {
    id: number,
    display_name: string
    email: string
    created_at?: string
    updated_at?: string
}

export interface UpdateUserPayload {
    email?: string,
    password?: string,
    display_name?: string
}