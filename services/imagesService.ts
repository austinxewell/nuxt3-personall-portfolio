import type { ImagePayload, LinkImageToProject } from '~/types/image'

export function useImagesService() {
    const { $axios } = useNuxtApp()

    function postNewImage(payload: ImagePayload) {
        return $axios.post('/images', payload)
    }

    function deleteImage(id: number) {
        return $axios.delete(`/images/${id}`)
    }

    function postImageToProject(payload: LinkImageToProject) {
        return $axios.post('/images/link', payload)
    }

    function getImageByProjectId(id: number) {
        return $axios.get(`/images/project/${id}`)
    }

    return {
        postNewImage,
        deleteImage,
        postImageToProject,
        getImageByProjectId
    }
}