<template>
    <div class="flex flex-col gap-4">
        <h2 class="text-xl font-bold">Modify Collaborations Database</h2>

        <BaseInput
            id="collaborationSearch"
            v-model="searchQuery"
            class="w-full"
            placeholder="Search collaborations..."
        />

        <div class="table-wrapper">
            <table class="styled-table">
                <thead>
                    <tr>
                        <th>Company Name</th>
                        <th class="actions-col" />
                    </tr>
                </thead>
                <tbody>
                    <tr v-if="filteredCollaborations.length === 0">
                        <td colspan="2" class="text-center py-4 text-gray-500 dark:text-gray-400">
                            {{ collaborationsStore.loading ? 'Loading collaborations...' : searchQuery ? 'No matching collaborations.' : 'No collaborations found.' }}
                        </td>
                    </tr>

                    <tr
                        v-for="collaboration in filteredCollaborations"
                        :key="collaboration.id"
                        class="hover:bg-gray-50 dark:hover:bg-gray-900"
                    >
                        <td>
                            <BaseInput
                                v-if="editingId === collaboration.id"
                                :id="`editCollaboration-${collaboration.id}`"
                                v-model="editValue"
                                class="w-full"
                                :disabled="savingId === collaboration.id"
                                :error="editingId === collaboration.id ? editError : ''"
                                @keyup.enter="saveEdit(collaboration)"
                                @keyup.esc="cancelEdit"
                            />
                            <span v-else>{{ collaboration.company_name }}</span>
                        </td>

                        <td class="actions-col">
                            <div class="flex items-center justify-center gap-2">
                                <template v-if="editingId === collaboration.id">
                                    <button
                                        type="button"
                                        aria-label="Save collaboration"
                                        class="text-gray-400 hover:text-green-600 dark:hover:text-green-500 disabled:opacity-40 disabled:pointer-events-none"
                                        :disabled="savingId === collaboration.id"
                                        @click="saveEdit(collaboration)"
                                    >
                                        <UIcon
                                            v-if="savingId === collaboration.id"
                                            name="lucide:loader-2"
                                            class="animate-spin"
                                        />
                                        <UIcon v-else name="lucide:check" />
                                    </button>
                                    <button
                                        type="button"
                                        aria-label="Cancel edit"
                                        class="text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 disabled:opacity-40 disabled:pointer-events-none"
                                        :disabled="savingId === collaboration.id"
                                        @click="cancelEdit"
                                    >
                                        <UIcon name="lucide:x" />
                                    </button>
                                </template>

                                <template v-else>
                                    <button
                                        type="button"
                                        aria-label="Edit collaboration"
                                        class="text-gray-400 hover:text-blue-600 dark:hover:text-yellow-500 disabled:opacity-40 disabled:pointer-events-none"
                                        :disabled="deletingId === collaboration.id"
                                        @click="startEdit(collaboration)"
                                    >
                                        <UIcon name="lucide:pencil" />
                                    </button>
                                    <button
                                        type="button"
                                        aria-label="Delete collaboration"
                                        class="text-gray-400 hover:text-red-600 dark:hover:text-red-500 disabled:opacity-40 disabled:pointer-events-none"
                                        :disabled="deletingId === collaboration.id"
                                        @click="handleDelete(collaboration)"
                                    >
                                        <UIcon
                                            v-if="deletingId === collaboration.id"
                                            name="lucide:loader-2"
                                            class="animate-spin"
                                        />
                                        <UIcon v-else name="lucide:trash-2" />
                                    </button>
                                </template>
                            </div>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>

        <h3 class="flex gap-2 font-bold">
            {{ isCreating ? 'Creating Collaboration...' : 'Create New Collaboration' }}
            <BaseSpinner v-if="isCreating" />
        </h3>

        <form
            class="flex gap-2 w-full"
            @submit.prevent="submitNewCollaboration"
        >
            <BaseInput
                id="newCollaborationName"
                v-model="newCompanyName"
                class="w-full"
                label="* Company Name"
                placeholder="Company Name"
                :disabled="isCreating"
                :error="newCollaborationError"
            />

            <BaseButton
                type="submit"
                :disabled="isCreating"
                class="mt-auto flex items-center gap-2 whitespace-nowrap shrink-0"
            >
                {{ isCreating ? 'Creating' : 'Add Collaboration' }}
                <BaseSpinner v-if="isCreating" />
            </BaseButton>
        </form>

        <BaseButton
            type="button"
            color="inverse-alt"
            @click="emit('completeForm', 'collaborations')"
        >
            Close
        </BaseButton>
    </div>
</template>

<script setup lang="ts">
import { useToast } from 'vue-toastification'
import type { Collaboration } from '~/types/collaboration'

const emit = defineEmits(['completeForm'])

const toast = useToast()
const collaborationsStore = useCollaborationsStore()

const searchQuery = ref('')

const filteredCollaborations = computed(() => {
    const query = searchQuery.value.trim().toLowerCase()
    if (!query) return collaborationsStore.collaborations

    return collaborationsStore.collaborations.filter((collaboration) =>
        collaboration.company_name.toLowerCase().includes(query)
    )
})

const editingId = ref<number | null>(null)
const editValue = ref('')
const editError = ref('')
const savingId = ref<number | null>(null)
const deletingId = ref<number | null>(null)

function startEdit(collaboration: Collaboration) {
    editingId.value = collaboration.id
    editValue.value = collaboration.company_name
    editError.value = ''
}

function cancelEdit() {
    editingId.value = null
    editValue.value = ''
    editError.value = ''
}

async function saveEdit(collaboration: Collaboration) {
    const trimmed = editValue.value.trim()

    if (!trimmed) {
        editError.value = 'Company name is required'
        return
    }

    if (trimmed === collaboration.company_name) {
        cancelEdit()
        return
    }

    savingId.value = collaboration.id

    try {
        await collaborationsStore.updateCollaboration(collaboration.id, { company_name: trimmed })
        toast.success('Collaboration updated')
        cancelEdit()
    } catch (err) {
        console.error(err)
        toast.error('Unable to update collaboration')
    } finally {
        savingId.value = null
    }
}

async function handleDelete(collaboration: Collaboration) {
    deletingId.value = collaboration.id

    try {
        await collaborationsStore.deleteCollaboration(collaboration.id)
        toast.success('Collaboration deleted')
        await collaborationsStore.fetchCollaborations()
    } catch (err) {
        console.error(err)
        toast.error('Unable to delete collaboration')
    } finally {
        deletingId.value = null
    }
}

const newCompanyName = ref('')
const newCollaborationError = ref('')
const isCreating = ref(false)

async function submitNewCollaboration() {
    const trimmed = newCompanyName.value.trim()

    if (!trimmed) {
        newCollaborationError.value = 'Company name is required'
        return
    }

    newCollaborationError.value = ''
    isCreating.value = true

    try {
        await collaborationsStore.createNewCollaboration({ company_name: trimmed })
        toast.success('Collaboration created')
        newCompanyName.value = ''
    } catch (err) {
        console.error(err)
        toast.error('Unable to create new collaboration')
    } finally {
        isCreating.value = false
    }
}

onMounted(() => {
    if (collaborationsStore.collaborations.length === 0) collaborationsStore.fetchCollaborations()
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