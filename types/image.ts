export type ImageStoreState = {
    selectedImage: SelectedImage | null
}

export type SelectedImage = {
    img_url: string
    img_name: string
}