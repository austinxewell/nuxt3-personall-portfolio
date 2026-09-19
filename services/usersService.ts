import type { UpdateUserPayload } from '~/types/user'

export function useUsersService() {
    const { $axios } = useNuxtApp()
    
    async function getUsers() {
        return $axios.get('/users')
    }

    async function updateUser(id: number, payload: UpdateUserPayload) {
        return $axios.put(`/users/${id}`, payload)
    }

    async function deleteUser(id: number) {
        return $axios.delete(`/users/${id}`)
    }

    async function registerUser(payload: UpdateUserPayload) {
        return $axios.post('/auth/register', payload)
    }

    return {
        getUsers,
        updateUser,
        deleteUser,
        registerUser
    }
}