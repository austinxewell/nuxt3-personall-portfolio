
import { defineStore } from 'pinia'
import { useImagesService } from '~/services/imagesService'
import type { Image, ImagePayload, ImageStoreState, LinkImageToProject } from '~/types/image'

export const useImageStore = defineStore('imageStore', {
    state: (): ImageStoreState => ({
        selectedImage: null, 
        projectImages: [] as Image[],
        loading: false,
        error: null as string | null
    }), 

    actions: {
        async postImage(payload: ImagePayload) {
            this.loading = true
            this.error = null
            const { postNewImage } = useImagesService()

            try {
                const res = await postNewImage(payload)
                this.projectImages.push(res.data)
                return res.data
            } catch (err) {
                this.error = handleApiError(err)
                throw err
            } finally {
                this.loading = false
            }
        },

        async deleteImage(id: number) {
            this.loading = true
            this.error = null
            const { deleteImage } = useImagesService()

            try {
                const res = await deleteImage(id)

                const deletedImage = this.projectImages.find((image) => image.id === id)
                this.projectImages = this.projectImages.filter((image) => image.id !== id)

                if (deletedImage && this.selectedImage?.img_url === deletedImage.img_url) 
                    this.selectedImage = null
                

                return res.data
            } catch (err) {
                this.error = handleApiError(err)
                throw err
            } finally {
                this.loading = false
            }
        },

        async linkImageToProject(payload: LinkImageToProject) {
            this.loading = true
            this.error = null
            const { postImageToProject } = useImagesService()

            try {
                const res = await postImageToProject(payload)
                return res.data
            } catch (err) {
                this.error = handleApiError(err)
                throw err
            } finally {
                this.loading = false
            }
        }
    }
})