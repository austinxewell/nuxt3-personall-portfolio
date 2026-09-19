
import { defineStore } from 'pinia'
import { useImagesService } from '~/services/imagesService'
import type { Image, ImagePayload, ImageStoreState, ImageWithoutThumbnail, LinkImageToProject } from '~/types/image'

export const useImageStore = defineStore('imageStore', {
    state: (): ImageStoreState => ({
        selectedImage: null, 
        projectImages: [] as Image[],
        allImages: [] as ImageWithoutThumbnail[],
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
        },

        async getImageByProjectId(id: number) {
            this.loading = true
            this.error = null
            const { getImageByProjectId } = useImagesService()

            try {
                const res = await getImageByProjectId(id)
                this.projectImages = res.data
                return res.data
            } catch (err) {
                this.error = handleApiError(err)
                throw err
            } finally {
                this.loading = false
            }
        },

        async getImages() {
            this.loading = true
            this.error = null
            const { getImages } = useImagesService()

            try {
                const res = await getImages()
                this.allImages = res.data
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