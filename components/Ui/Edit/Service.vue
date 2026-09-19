<template>
    <div v-if="!selectedService" class="flex flex-col gap-4">
        <p class="text-sm font-semibold">* Select a service to modify</p>

        <BaseInput
            id="serviceSearch"
            v-model="searchQuery"
            placeholder="Search services..."
        />

        <div class="table-wrapper">
            <table class="styled-table">
                <thead>
                    <tr>
                        <th>Service</th>
                        <th class="actions-col" />
                    </tr>
                </thead>
                <tbody>
                    <tr v-if="filteredServices.length === 0">
                        <td colspan="2" class="text-center py-4 text-gray-500 dark:text-gray-400">
                            {{ servicesStore.loading ? 'Loading services...' : 'No matching services.' }}
                        </td>
                    </tr>

                    <tr
                        v-for="service in filteredServices"
                        :key="service.id"
                        class="cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-900"
                        @click="selectService(service)"
                    >
                        <td>
                            <div class="flex items-center gap-2">
                                <UIcon :name="service.icon" class="h-5 w-5" />
                                {{ service.service_name }}
                            </div>
                        </td>
                        <td class="actions-col">
                            <div class="flex items-center justify-center gap-2">
                                <button
                                    type="button"
                                    aria-label="Delete service"
                                    class="text-gray-400 hover:text-red-600 dark:hover:text-red-500 disabled:opacity-40 disabled:pointer-events-none"
                                    :disabled="deletingId === service.id"
                                    @click.stop="handleDelete(service)"
                                >
                                    <UIcon
                                        v-if="deletingId === service.id"
                                        name="lucide:loader-2"
                                        class="animate-spin"
                                    />
                                    <UIcon v-else name="lucide:trash-2" />
                                </button>
                                <UIcon name="lucide:chevron-right" />
                            </div>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>

    <UiServiceForm
        v-else
        v-model:service-name="editService.service_name"
        v-model:description="editService.description"
        v-model:icon="editService.icon"
        :errors="errors"
        :is-submitting="isSubmitting"
        submit-label="Save Changes"
        submitting-label="Saving"
        @submit="submitUpdate"
    >
        <template #footer>
            <BaseButton
                type="button"
                color="inverse-alt"
                :disabled="isSubmitting"
                @click="selectedService = null"
            >
                Back To Service Selection
            </BaseButton>
        </template>
    </UiServiceForm>
</template>

<script setup lang="ts">
import { useToast } from 'vue-toastification'
import type { Service } from '~/types/service'

const toast = useToast()
const servicesStore = useServicesStore()

const emit = defineEmits<{(e: 'complete'): void}>()

const searchQuery = ref('')

const filteredServices = computed(() => {
    const query = searchQuery.value.trim().toLowerCase()
    if (!query) return servicesStore.services

    return servicesStore.services.filter((service) => service.service_name.toLowerCase().includes(query))
})

const selectedService = ref<Service | null>(null)

const editService = reactive({
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
const deletingId = ref<number | null>(null)

function selectService(service: Service) {
    selectedService.value = service
    editService.service_name = service.service_name
    editService.description = service.description
    editService.icon = service.icon
    errors.serviceName = ''
    errors.description = ''
    errors.icon = ''
}

function validateService() {
    errors.serviceName = ''
    errors.description = ''
    errors.icon = ''

    let validated = true

    if (!editService.service_name.trim()) {
        validated = false
        errors.serviceName = 'Service Name is required'
    }

    if (!editService.description.trim()) {
        validated = false
        errors.description = 'Description is required'
    }

    if (!editService.icon.trim()) {
        validated = false
        errors.icon = 'Icon is required'
    }

    return validated
}

async function submitUpdate() {
    if (!validateService() || !selectedService.value) return

    isSubmitting.value = true

    try {
        await servicesStore.updateService(selectedService.value.id, {
            service_name: editService.service_name,
            description: editService.description,
            icon: editService.icon
        })
        toast.success('Service updated')
        selectedService.value = null
        emit('complete')
    } catch (err) {
        console.error(err)
        toast.error('Unable to update service')
    } finally {
        isSubmitting.value = false
    }
}

async function handleDelete(service: Service) {
    deletingId.value = service.id

    try {
        await servicesStore.deleteService(service.id)
        toast.success('Service deleted')
        await servicesStore.fetchServices()
    } catch (err) {
        console.error(err)
        toast.error('Unable to delete service')
    } finally {
        deletingId.value = null
    }
}

onMounted(() => {
    if (servicesStore.services.length === 0) servicesStore.fetchServices()
})
</script>

<style scoped>
.table-wrapper {
    max-height: 20rem;
    overflow-y: auto;
    border: 1px solid var(--tw-border-color, #d1d5db);
    border-radius: 0.5rem;
}

.styled-table {
    width: 100%;
    border-collapse: collapse;
    table-layout: fixed;
}

.styled-table thead {
    position: sticky;
    top: 0;
    background-color: rgb(243 244 246 / 1);
    color: rgb(55 65 81 / 1);
    z-index: 10;
}

.dark .styled-table thead {
    background-color: rgb(31 41 55 / 1);
    color: rgb(229 231 235 / 1);
}

.styled-table th,
.styled-table td {
    padding: 0.5rem 1rem;
    border-bottom: 1px solid rgb(229 231 235 / 1);
}

td.actions-col,
th.actions-col {
    width: 15%;
    white-space: nowrap;
    text-align: center;
}
</style>