import { defineStore } from 'pinia'
import { handleApiError } from '@/utils/errorHandler'
import { useUsersService } from '@/services/usersService'
import type { MinimalUser, UpdateUserPayload } from '~/types/user'

export const useUsersStore = defineStore('users', {
    state: () => ({
        loading: false,
        error: null as string | null,
        users: [] as MinimalUser[]
    }),

    actions: {
        async fetchUsers() {
            this.loading = true
            this.error = null
            const { getUsers } = useUsersService()

            try {
                const res = await getUsers()
                this.users = res.data
            } catch (err) {
                this.error = handleApiError(err)
                throw err
            } finally {
                this.loading = false
            }
        },

        async registerNewUser(payload: UpdateUserPayload) {
            this.loading = true
            this.error = null
            const { registerUser } = useUsersService()

            try {
                const res = await registerUser(payload)
                this.users.push(res.data)

                return res.data
            } catch (err) {
                this.error = handleApiError(err)
                throw err
            } finally {
                this.loading = false
            }
        },

        async updateUser(id: number, payload: UpdateUserPayload) {
            this.loading = true
            this.error = null
            const { updateUser } = useUsersService()

            try {
                const res = await updateUser(id, payload)

                const index = this.users.findIndex((user) => user.id === id)
                if (index !== -1) this.users[index] = res.data

                return res.data
            } catch (err) {
                this.error = handleApiError(err)
                throw err
            } finally {
                this.loading = false
            }
        },

        async deleteUser(id: number) {
            this.loading = true
            this.error = null
            const { deleteUser } = useUsersService()

            try {
                const res = await deleteUser(id)
                return res.data
            } catch (err) {
                this.error = handleApiError(err)
                throw err
            } finally {
                this.loading = false
            }
        }
    }
})