<template>
    <div v-if="!selectedUser" class="flex flex-col gap-4">
        <p class="text-sm font-semibold">* Select a user to modify</p>

        <BaseInput
            id="userSearch"
            v-model="searchQuery"
            placeholder="Search users..."
        />

        <div class="table-wrapper">
            <table class="styled-table">
                <thead>
                    <tr>
                        <th>User</th>
                        <th class="actions-col" />
                    </tr>
                </thead>
                <tbody>
                    <tr v-if="filteredUsers.length === 0">
                        <td colspan="2" class="text-center py-4 text-gray-500 dark:text-gray-400">
                            {{ userStore.loading ? 'Loading users...' : 'No matching users.' }}
                        </td>
                    </tr>

                    <tr
                        v-for="user in filteredUsers"
                        :key="user.id"
                        class="cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-900"
                        @click="selectUser(user)"
                    >
                        <td>
                            <div class="flex flex-col">
                                <span>{{ user.display_name || user.email }}</span>
                                <span v-if="user.display_name" class="text-xs text-gray-500 dark:text-gray-400">
                                    {{ user.email }}
                                </span>
                            </div>
                        </td>
                        <td class="actions-col">
                            <div class="flex items-center justify-center gap-2">
                                <button
                                    type="button"
                                    aria-label="Delete user"
                                    class="text-gray-400 hover:text-red-600 dark:hover:text-red-500 disabled:opacity-40 disabled:pointer-events-none"
                                    :disabled="deletingId === user.id"
                                    @click.stop="handleDelete(user)"
                                >
                                    <UIcon
                                        v-if="deletingId === user.id"
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

    <UiUserForm
        v-else
        v-model:email="editUser.email"
        v-model:display-name="editUser.display_name"
        v-model:password="editUser.password"
        v-model:confirm-password="confirmPassword"
        :errors="errors"
        :is-submitting="isSubmitting"
        submit-label="Save Changes"
        submitting-label="Saving"
        password-label="New Password"
        password-hint="Leave blank to keep the current password. Changing this updates login credentials immediately."
        @submit="submitUpdate"
    >
        <template #footer>
            <BaseButton
                type="button"
                color="inverse-alt"
                :disabled="isSubmitting"
                @click="selectedUser = null"
            >
                Back To User Selection
            </BaseButton>
        </template>
    </UiUserForm>
</template>

<script setup lang="ts">
import { useToast } from 'vue-toastification'
import type { MinimalUser } from '~/types/user'

const toast = useToast()
const userStore = useUsersStore()

const emit = defineEmits<{(e: 'complete'): void}>()

const searchQuery = ref('')

const filteredUsers = computed(() => {
    const query = searchQuery.value.trim().toLowerCase()
    if (!query) return userStore.users

    return userStore.users.filter((user) =>
        user.email.toLowerCase().includes(query) ||
        user.display_name?.toLowerCase().includes(query)
    )
})

const selectedUser = ref<MinimalUser | null>(null)

const editUser = reactive({
    email: '',
    display_name: '',
    password: ''
})

const confirmPassword = ref('')

const errors = reactive<Record<string, string>>({
    email: '',
    displayName: '',
    password: '',
    confirmPassword: ''
})

const isSubmitting = ref(false)
const deletingId = ref<number | null>(null)

function selectUser(user: MinimalUser) {
    selectedUser.value = user
    editUser.email = user.email
    editUser.display_name = user.display_name
    editUser.password = ''
    confirmPassword.value = ''
    errors.email = ''
    errors.displayName = ''
    errors.password = ''
    errors.confirmPassword = ''
}

function validateUser() {
    errors.email = ''
    errors.displayName = ''
    errors.password = ''
    errors.confirmPassword = ''

    let validated = true

    if (!editUser.email.trim()) {
        validated = false
        errors.email = 'Email is required'
    }

    if (editUser.password !== '' && editUser.password !== confirmPassword.value) {
        validated = false
        errors.confirmPassword = 'Passwords do not match'
    }

    return validated
}

async function submitUpdate() {
    if (!validateUser() || !selectedUser.value) return

    isSubmitting.value = true

    try {
        await userStore.updateUser(selectedUser.value.id, {
            email: editUser.email,
            display_name: editUser.display_name || undefined,
            password: editUser.password || undefined
        })
        toast.success('User updated')
        selectedUser.value = null
        emit('complete')
    } catch (err) {
        console.error(err)
        toast.error('Unable to update user')
    } finally {
        isSubmitting.value = false
    }
}

async function handleDelete(user: MinimalUser) {
    deletingId.value = user.id

    try {
        await userStore.deleteUser(user.id)
        toast.success('User deleted')
        await userStore.fetchUsers()
    } catch (err) {
        console.error(err)
        toast.error('Unable to delete user')
    } finally {
        deletingId.value = null
    }
}

onMounted(() => {
    if (userStore.users.length === 0) userStore.fetchUsers()
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