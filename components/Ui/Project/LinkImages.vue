<template>
    <div class="flex flex-col gap-4 sm:px-6">
        <h3 class="font-bold">Project Images:</h3>

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

        <BaseButton 
            type="button"
            color="inverse-alt"
            class="-mt-4 flex items-center gap-2"
            :disabled="isSubmitting"
            @click="emit('completeForm', 'projectCreation')"
        >
            Complete Project
        </BaseButton>
    </div>
</template>

<script setup lang='ts'>
import { useToast } from 'vue-toastification'
import type { ImagePayload } from '~/types/image'

const toast = useToast()
const emit = defineEmits(['completeForm'])

const newImage = reactive<ImagePayload>({
    img_name: '',
    img_url: ''
})

const errors = reactive<Record<string, string>>({
    img_name: '',
    img_url: ''
})

const isSubmitting = ref(false)

const projectImages = ref([
    {
        id: 7,
        img_name: 'Landing Page',
        img_url: 'https://i.postimg.cc/Gp5JydPy/pulse-landing.png',
        created_at: '2025-11-05T15:24:14.000Z' 
    },
    {
        id: 8,
        img_name: 'Landing Page - Light Mode',
        img_url: 'https://i.postimg.cc/g2qSJdMv/pulse-landing-light-mode.png',
        created_at: '2025-11-05T15:24:14.000Z' 
    },
    {
        id: 9,
        img_name: 'Login',
        img_url: 'https://i.postimg.cc/bvTph7cJ/pulse-login.png',
        created_at: '2025-11-05T15:24:14.000Z' 
    },
    {
        id: 10,
        img_name: 'Login - Light Mode',
        img_url: 'https://i.postimg.cc/ThvKBjGX/pulse-login-light-mode.png',
        created_at: '2025-11-05T15:24:14.000Z' 
    },
    {
        id: 11,
        img_name: 'Projects',
        img_url: 'https://i.postimg.cc/vTRr0hN8/pulse-projects.png',
        created_at: '2025-11-05T15:24:14.000Z' 
    },
    {
        id: 12,
        img_name: 'Project',
        img_url: 'https://i.postimg.cc/GhDgWvGg/Project.png',
        created_at: '2025-11-05T15:24:14.000Z' 
    },
    {
        id: 13,
        img_name: 'Tasks',
        img_url: 'https://i.postimg.cc/TPdk5SSB/Tasks.png',
        created_at: '2025-11-05T15:24:14.000Z' 
    },
    {
        id: 14,
        img_name: 'Task',
        img_url: 'https://i.postimg.cc/ry3YZf0t/Task.png',
        created_at: '2025-11-05T15:24:14.000Z' 
    },
    {
        id: 15,
        img_name: 'Create New Task Form',
        img_url: 'https://i.postimg.cc/gjHXhM1B/pulse-task-creating.png',
        created_at: '2025-11-05T15:24:14.000Z' 
    },
    {
        id: 16,
        img_name: 'Create New Task Form - Error State',
        img_url: 'https://i.postimg.cc/zvrHVm2g/pulse-task-creating-error.png',
        created_at: '2025-11-05T15:24:14.000Z' 
    },
    {
        id: 17,
        img_name: 'Create New Project Form',
        img_url: 'https://i.postimg.cc/9MTqmXb2/pulse-project-creation.png',
        created_at: '2025-11-05T15:24:14.000Z' 
    },
    {
        id: 18,
        img_name: 'Toasts',
        img_url: 'https://i.postimg.cc/pVp6BwTH/Toast.png',
        created_at: '2025-11-05T15:24:14.000Z' 
    }
])

async function submitImages() {
    console.log('Submit Images')
    isSubmitting.value = true
    
    // Simulate network delay
    const DELAY = 15000 // 1.5 seconds
    await new Promise((resolve) => setTimeout(resolve, DELAY))
    
    toast.success('Images linked successfully')
    isSubmitting.value = false
}
</script>