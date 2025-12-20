export type ImageStoreState = {
    selectedImage: SelectedImage | null
}

export interface ImagePayload {
    img_name: string
    img_url: string
}

export interface Image extends ImagePayload {
    id: number
    created_at: string
}

export type SelectedImage = {
    img_url: string
    img_name: string
}