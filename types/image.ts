export type ImageStoreState = {
    selectedImage: SelectedImage | null
    projectImages: Image[]
    allImages: ImageWithoutThumbnail[]
    loading: boolean
    error: string | null
}

export interface ImagePayload {
    img_name: string
    img_url: string
}

export type SelectedImage = {
    img_url: string
    img_name: string
}

export interface LinkImageToProject {
    project_id: number
    image_id: number
    is_thumbnail: boolean
}

export interface ImageWithoutThumbnail extends ImagePayload {
    id: number
    created_at: string
}

export interface Image extends ImageWithoutThumbnail {
    is_thumbnail?: boolean
}