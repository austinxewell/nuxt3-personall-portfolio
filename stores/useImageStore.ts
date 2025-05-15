import { defineStore } from 'pinia'
import type { ImageStoreState } from '~/types/image'

export const useImageStore = defineStore('imageStore', { state: (): ImageStoreState => ({ selectedImage: null }) })