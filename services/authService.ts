export function useAuthService() {
    const { $axios } = useNuxtApp()

    async function login(email: string, password: string) {
        return $axios.post('/auth/login', {
            email,
            password 
        })
    }

    async function logout() {
        // Optional: call API to invalidate refresh token
        return $axios.post('/auth/logout')
    }

    async function validateToken() {
        return $axios.get('/auth/me')
    }

    return {
        login,
        logout,
        validateToken
    }
}