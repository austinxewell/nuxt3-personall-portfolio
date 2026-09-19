<template>
    <div class="flex flex-col gap-4">
        <h2 class="text-xl font-bold">Modify Tags Database</h2>

        <p class="font-bold text-red-600 text-sm">
            * Deleting or editing a tag will affect the tag in all projects
        </p>

        <BaseInput
            id="tagSearch"
            v-model="searchQuery"
            class="w-full"
            placeholder="Search tags..."
        />

        <div class="table-wrapper">
            <table class="styled-table">
                <thead>
                    <tr>
                        <th>Tag Name</th>
                        <th class="actions-col" />
                    </tr>
                </thead>
                <tbody>
                    <tr v-if="filteredTags.length === 0">
                        <td colspan="2" class="text-center py-4 text-gray-500 dark:text-gray-400">
                            {{ tagStore.loading ? 'Loading tags...' : searchQuery ? 'No matching tags.' : 'No tags found.' }}
                        </td>
                    </tr>

                    <tr
                        v-for="tag in filteredTags"
                        :key="tag.id"
                        class="hover:bg-gray-50 dark:hover:bg-gray-900"
                    >
                        <td>
                            <BaseInput
                                v-if="editingId === tag.id"
                                :id="`editTag-${tag.id}`"
                                v-model="editValue"
                                class="w-full"
                                :disabled="savingId === tag.id"
                                :error="editingId === tag.id ? editError : ''"
                                @keyup.enter="saveEdit(tag)"
                                @keyup.esc="cancelEdit"
                            />
                            <span v-else>{{ tag.tag_name }}</span>
                        </td>

                        <td class="actions-col">
                            <div class="flex items-center justify-center gap-2">
                                <template v-if="editingId === tag.id">
                                    <button
                                        type="button"
                                        aria-label="Save tag"
                                        class="text-gray-400 hover:text-green-600 dark:hover:text-green-500 disabled:opacity-40 disabled:pointer-events-none"
                                        :disabled="savingId === tag.id"
                                        @click="saveEdit(tag)"
                                    >
                                        <UIcon
                                            v-if="savingId === tag.id"
                                            name="lucide:loader-2"
                                            class="animate-spin"
                                        />
                                        <UIcon v-else name="lucide:check" />
                                    </button>
                                    <button
                                        type="button"
                                        aria-label="Cancel edit"
                                        class="text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 disabled:opacity-40 disabled:pointer-events-none"
                                        :disabled="savingId === tag.id"
                                        @click="cancelEdit"
                                    >
                                        <UIcon name="lucide:x" />
                                    </button>
                                </template>

                                <template v-else>
                                    <button
                                        type="button"
                                        aria-label="Edit tag"
                                        class="text-gray-400 hover:text-blue-600 dark:hover:text-yellow-500 disabled:opacity-40 disabled:pointer-events-none"
                                        :disabled="deletingId === tag.id"
                                        @click="startEdit(tag)"
                                    >
                                        <UIcon name="lucide:pencil" />
                                    </button>
                                    <button
                                        type="button"
                                        aria-label="Delete tag"
                                        class="text-gray-400 hover:text-red-600 dark:hover:text-red-500 disabled:opacity-40 disabled:pointer-events-none"
                                        :disabled="deletingId === tag.id"
                                        @click="handleDelete(tag)"
                                    >
                                        <UIcon
                                            v-if="deletingId === tag.id"
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
            {{ isCreating ? 'Creating Tag...' : 'Create New Tag' }}
            <BaseSpinner v-if="isCreating" />
        </h3>

        <form
            class="flex gap-2 w-full"
            @submit.prevent="submitNewTag"
        >
            <BaseInput
                id="newTagName"
                v-model="newTagName"
                class="w-full"
                label="* Tag Name"
                placeholder="Tag Name"
                :disabled="isCreating"
                :error="newTagError"
            />

            <BaseButton
                type="submit"
                :disabled="isCreating"
                class="mt-auto flex items-center gap-2 whitespace-nowrap shrink-0"
            >
                {{ isCreating ? 'Creating' : 'Add Tag' }}
                <BaseSpinner v-if="isCreating" />
            </BaseButton>
        </form>

        <BaseButton
            type="button"
            color="inverse-alt"
            @click="emit('completeForm', 'tagDb')"
        >
            Close
        </BaseButton>
    </div>
</template>

<script setup lang="ts">
import { useToast } from 'vue-toastification'
import type { Tag } from '~/types/tags'

const emit = defineEmits(['completeForm'])

const toast = useToast()
const tagStore = useTagStore()

const searchQuery = ref('')

const filteredTags = computed(() => {
    const query = searchQuery.value.trim().toLowerCase()
    if (!query) return tagStore.tags

    return tagStore.tags.filter((tag) => tag.tag_name.toLowerCase().includes(query))
})

const editingId = ref<number | null>(null)
const editValue = ref('')
const editError = ref('')
const savingId = ref<number | null>(null)
const deletingId = ref<number | null>(null)

function startEdit(tag: Tag) {
    editingId.value = tag.id
    editValue.value = tag.tag_name
    editError.value = ''
}

function cancelEdit() {
    editingId.value = null
    editValue.value = ''
    editError.value = ''
}

async function saveEdit(tag: Tag) {
    const trimmed = editValue.value.trim()

    if (!trimmed) {
        editError.value = 'Tag name is required'
        return
    }

    if (trimmed === tag.tag_name) {
        cancelEdit()
        return
    }

    savingId.value = tag.id

    try {
        await tagStore.updateTag(tag.id, { tag_name: trimmed })
        toast.success('Tag updated')
        cancelEdit()
    } catch (err) {
        console.error(err)
        toast.error('Unable to update tag')
    } finally {
        savingId.value = null
    }
}

async function handleDelete(tag: Tag) {
    deletingId.value = tag.id

    try {
        await tagStore.deleteTag(tag.id)
        toast.success('Tag deleted')
        await tagStore.fetchTags()
    } catch (err) {
        console.error(err)
        toast.error('Unable to delete Tag')
    } finally {
        deletingId.value = null
    }
}

const newTagName = ref('')
const newTagError = ref('')
const isCreating = ref(false)

async function submitNewTag() {
    const trimmed = newTagName.value.trim()

    if (!trimmed) {
        newTagError.value = 'Tag name is required'
        return
    }

    newTagError.value = ''
    isCreating.value = true

    try {
        await tagStore.createNewTag({ tag_name: trimmed })
        toast.success('Tag created')
        newTagName.value = ''
    } catch (err) {
        console.error(err)
        toast.error('Unable to create new tag')
    } finally {
        isCreating.value = false
    }
}

onMounted(() => {
    if (tagStore.tags.length === 0) tagStore.fetchTags()
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