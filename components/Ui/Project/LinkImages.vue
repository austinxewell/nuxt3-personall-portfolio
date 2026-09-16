<template>
    <div class="flex flex-col gap-4 sm:px-6">
        <h3 class="font-bold">Project Images:</h3>

        <p class="text-sm font-medium">Selected thumbnail image will be highlighted gold</p>

        <UiProjectImageTable
            :project-images="projectImages"
        />

        <h3 class="flex gap-2 font-bold">
            {{ isSubmitting ? 'Uploading Image...' : 'Upload Images' }}
            <BaseSpinner v-if="isSubmitting" />
        </h3>

        <form 
            class="flex flex-col w-full gap-4 pb-6 mx-auto"
            @submit.prevent="submitImages"
        > 
            <div class="flex gap-2">
                <BaseInput
                    id="imageName"
                    v-model="newImage.img_name"
                    class="w-full"
                    label="* Image Name"
                    placeholder="Image Name"
                    :disabled="isSubmitting"
                    :error="errors.img_name"
                />
    
                <BaseInput
                    id="imageUrl"
                    v-model="newImage.img_url"
                    class="w-full"
                    label="* Image URL"
                    placeholder="Image URL"
                    :disabled="isSubmitting"
                    :error="errors.img_url"
                />
            </div>

            <BaseButton 
                type="submit" 
                :disabled="isSubmitting"
                class="mt-4 flex items-center gap-2"
            >
                {{ isSubmitting ? 'Creating And Linking Images' : 'Add Image To Project' }}
                <BaseSpinner v-if="isSubmitting" />
            </BaseButton>
        </form>
        
        <!-- @click="emit('completeForm', 'projectCreation')" -->
        <BaseButton 
            type="button"
            color="inverse-alt"
            class="-mt-4 flex items-center gap-2"
            :disabled="isSubmitting || !validatedPayload"
            @click="completeProject"
        >
            Complete Project
        </BaseButton>
    </div>
</template>

<script setup lang='ts'>
import { useToast } from 'vue-toastification'
import type { ImagePayload, LinkImageToProject } from '~/types/image'

const toast = useToast()
const emit = defineEmits(['completeForm'])

const props = withDefaults(defineProps<{
    createdProjectId?: number | null
    isUpdate?: boolean
}>(), {
    createdProjectId: null,
    isUpdate: false
})

const imageStore = useImageStore()
const projectsStore = useProjectsStore()

const newImage = reactive<ImagePayload>({
    img_name: '',
    img_url: ''
})

const errors = reactive<Record<string, string>>({
    img_name: '',
    img_url: ''
})

const isSubmitting = ref(false)

const projectImages = computed(() => imageStore.projectImages)

function validateImage() {
    errors.img_name = ''
    errors.img_url = ''

    let validated = true

    if (newImage.img_name === '') {
        validated = false
        errors.img_name = 'Image Name is Required'
    } 

    if (newImage.img_url === '') {
        validated = false
        errors.img_url = 'Image URL is Required'
    }

    return validated
}

async function submitImages() {
    if (!validateImage()) return

    isSubmitting.value = true

    try {
        await imageStore.postImage(newImage)
        newImage.img_name = ''
        newImage.img_url = ''
        toast.success('Image Uploaded')
    } catch (err) {
        console.error(err)
        toast.error('Unable to upload image')
    } finally {
        isSubmitting.value = false
    }
}

const projectId = computed(() =>
    props.isUpdate ? projectsStore.project?.id ?? null : props.createdProjectId
)

const validatedPayload = computed(() => {
    let validated = true

    if (imageStore.projectImages.length === 0) validated = false
    if (imageStore.selectedImage === null) validated = false
    if (projectId.value === null) validated = false

    return validated
})

function formatImagePayloads(): LinkImageToProject[] {
    const id = projectId.value

    if (id === null) {
        toast.error('Internal Error: Could not find project to link images to.')
        throw new Error('Cannot link images: project id is null')
    }

    return imageStore.projectImages.map((image) => ({
        project_id: id,
        image_id: image.id,
        is_thumbnail: image.img_url === imageStore.selectedImage?.img_url
    }))
}


async function submitProjectImages() {
    isSubmitting.value = true

    try {
        const payloads = formatImagePayloads()
        const results = await Promise.allSettled(
            payloads.map((payload) => imageStore.linkImageToProject(payload))
        )

        const failedCount = results.filter((result) => result.status === 'rejected').length

        if (failedCount > 0) 
            toast.error(`${failedCount} image${failedCount > 1 ? 's' : ''} could not be linked.`)
        else 
            toast.success('Images Successfully Linked to Project')

        emit('completeForm', props.isUpdate ? 'updateProject' : 'projectCreation')
    } catch (error) {
        console.error(error)
        toast.error('Unable to Link Images to Project')
    } finally {
        isSubmitting.value = false
    }
}

async function completeProject() {
    if (!validatedPayload.value) return
    await submitProjectImages()
}

onMounted(() => {
    if (props.isUpdate) {
        const thumbnail = imageStore.projectImages.find((image) => image.is_thumbnail)
        if (thumbnail) imageStore.selectedImage = thumbnail
    }
})
</script>