<template>
    <UiServiceForm
        v-model:service-name="newService.service_name"
        v-model:description="newService.description"
        v-model:icon="newService.icon"
        :errors="errors"
        :is-submitting="isSubmitting"
        submit-label="Add Service"
        submitting-label="Creating"
        @submit="submitService"
    />
</template>

<script setup lang="ts">
import { useToast } from 'vue-toastification'

const toast = useToast()
const servicesStore = useServicesStore()

const emit = defineEmits<{(e: 'complete'): void}>()

const newService = reactive({
    service_name: '',
    description: '',
    icon: ''
})

const errors = reactive<Record<string, string>>({
    serviceName: '',
    description: '',
    icon: ''
})

const isSubmitting = ref(false)

function validateService() {
    errors.serviceName = ''
    errors.description = ''
    errors.icon = ''

    let validated = true

    if (!newService.service_name.trim()) {
        validated = false
        errors.serviceName = 'Service Name is required'
    }

    if (!newService.description.trim()) {
        validated = false
        errors.description = 'Description is required'
    }

    if (!newService.icon.trim()) {
        validated = false
        errors.icon = 'Icon is required'
    }

    return validated
}

async function submitService() {
    if (!validateService()) return

    isSubmitting.value = true

    try {
        await servicesStore.createService({
            service_name: newService.service_name,
            description: newService.description,
            icon: newService.icon
        })
        toast.success('Service created')
        resetForm()
        emit('complete')
    } catch (err) {
        console.error(err)
        toast.error('Unable to create service')
    } finally {
        isSubmitting.value = false
    }
}

function resetForm() {
    newService.service_name = ''
    newService.description = ''
    newService.icon = ''
    errors.serviceName = ''
    errors.description = ''
    errors.icon = ''
}
</script>