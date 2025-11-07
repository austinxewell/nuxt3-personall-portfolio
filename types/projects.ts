export interface ProjectPayload {
    project_name: string
    slug: string
    overview: string
    description: string
    live_url?: string
    github_url?: string
    is_favorite: boolean
}

export interface Project extends ProjectPayload {
    id: number
    tech_tags: ProjectTag[]
    images: ProjectImage[];
}

export type ProjectImage = {
    img_name: string
    img_url: string
    is_thumbnail: boolean
}

export type ProjectTag = {
    tag_name: string
    is_primary: boolean
}