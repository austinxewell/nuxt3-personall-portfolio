export type Project = {
    id: number
    project_name: string
    description: string
    isFavorite: boolean
    live_url: string
    tech_tags: string[]
    images: ProjectImage[];
}

export type ProjectImage = {
    img_name: string
    img_url: string
    is_thumbnail: boolean
}