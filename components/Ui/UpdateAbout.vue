<template>
    Updating About Me Section
    <form 
        class="flex flex-col gap-4 mt-4 pb-6 sm:px-6 mx-auto"
        @submit.prevent="submitAbout"
    >
        
        <div class="flex gap-2">
            <BaseInput
                id="name"
                v-model="newAbout.name"
                class="w-full"
                label="Full Name"
                placeholder="Austin Ewell"
            />

            <BaseInput
                id="email"
                v-model="newAbout.contact_email"
                class="w-full"
                label="Contact Email"
                placeholder="example@gmail.com"
            />
        </div>
        <div class="flex gap-2">
            <BaseInput
                id="title"
                v-model="newAbout.title"
                class="w-full"
                label="Job Title"
                placeholder="Software Engineer"
            />

            <BaseInput
                id="specialty"
                v-model="newAbout.specialty"
                class="w-full"
                label="Job Specialty"
                placeholder="Frontend Specialist"
            />
        </div>

        <BaseInput
            id="linkedinUrl"
            v-model="newAbout.linkedin_url"
            class="w-full"
            label="LinkedIn URL"
            placeholder="https://www.linkedin.com/in/username-id/"
        />

        <BaseInput
            id="githubUrl"
            v-model="newAbout.github_url"
            class="w-full"
            label="Github URL"
            placeholder="https://github.com/username"
        />

        <BaseInput
            id="resumeUrl"
            v-model="newAbout.resume_url"
            class="w-full"
            label="Resume URL"
            placeholder="https://docs.google.com/document/id"
        />

        <BaseInput
            id="blogUrl"
            v-model="newAbout.blog_url"
            class="w-full"
            label="Blog URL"
            placeholder="https://austinxewell.github.io/my-dev-blog/"
        />

        <BaseButton 
            type="submit" 
            :disabled="isSubmitting"
            class="mt-4 flex items-center gap-2"
        >
            <span>Update About</span>
            <BaseSpinner v-if="isSubmitting" />
        </BaseButton>
    </form>
</template>

<script setup lang="ts">
import type { UpdateAboutPayload } from '~/types/about'
import { useToast } from 'vue-toastification'

const emit = defineEmits(['completeForm'])

const aboutStore = useAboutStore()
const toast = useToast()

const isSubmitting = ref(false)

const newAbout = reactive<UpdateAboutPayload>({
    name: '',
    title: '',
    specialty: '',
    contact_email: '',
    linkedin_url: '',
    github_url: '',
    resume_url: '',
    blog_url: ''
})

async function submitAbout() {
    isSubmitting.value = true

    try {
        await aboutStore.updateAbout(newAbout)
        toast.success('About Info has been updated')
        emit('completeForm', 'updateAbout')
    } catch (error) {
        console.error(error)
        toast.error('Unable to update About Info')

    } finally {
        isSubmitting.value = false
    }
}

function autofillForm() {
    newAbout.name = aboutStore.about.name
    newAbout.title = aboutStore.about.title
    newAbout.specialty = aboutStore.about.specialty
    newAbout.contact_email = aboutStore.about.contact_email
    newAbout.linkedin_url = aboutStore.about.linkedin_url
    newAbout.github_url = aboutStore.about.github_url
    newAbout.resume_url = aboutStore.about.resume_url
    newAbout.blog_url = aboutStore.about.blog_url
}

onMounted(async() => {
    await aboutStore.fetchAbout()
    autofillForm()
})
</script>