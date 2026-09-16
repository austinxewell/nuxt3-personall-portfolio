export interface About {
    id: number
    name: string
    title: string
    specialty: string
    contact_email: string
    linkedin_url: string
    github_url: string
    resume_url: string
    blog_url: string
    updated_at: string
}

export interface UpdateAboutPayload {
    name?: string | undefined
    title?: string | undefined
    specialty?: string | undefined
    contact_email?: string | undefined
    linkedin_url?: string | undefined
    github_url?: string | undefined
    resume_url?: string | undefined
    blog_url?: string | undefined
}